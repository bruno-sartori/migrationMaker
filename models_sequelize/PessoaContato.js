/* eslint-disable no-await-in-loop */
import { isValidNumber, isValidString } from '../util/isValidVariable';

export default (sequelize, DataType) => {
	const PessoaContato = sequelize.define('PessoaContato',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			tipoContato: {
				type: DataType.STRING,
				allowNull: false
			},
			contato: {
				type: DataType.STRING,
				allowNull: true,
				validate: {
					notEmpty: true
				}
			},
			descricao: {
				type: DataType.STRING(50),
				allowNull: true
			},
			pessoasFk: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			status: {
				type: DataType.BOOLEAN,
				allowNull: false,
				defaultValue: true
			},
			createdAt: {
				type: DataType.DATE,
				allowNull: false
			},
			updatedAt: {
				type: DataType.DATE
			}
		},
		{ tableName: 'pessoas_contato' }
	);

	PessoaContato.upsert = async function(pessoasFk, data, transaction) {
		const savedContatos = await this.findAll({ where: { pessoasFk }, raw: true });
		const { Op } = sequelize;

		const updatedContatos = data.filter(o => isValidNumber(o.key)).map((o) => {
			o.id = o.key;
			delete o.editable;
			delete o.key;
			return o;
		});

		const newContatos = data.filter(o => isValidString(o.key) && o.key.includes('NEW_TEMP_ID')).map((o) => {
			delete o.key;
			delete o.editable;
			return { ...o, pessoasFk };
		});

		const deletedContatos = savedContatos.filter(o => !updatedContatos.map(u => u.id).includes(o.id)).map(o => o.id);

		if (updatedContatos.length > 0) {
			for (let i = 0; i < updatedContatos.length; i++) {
				const { tipoContato, contato, descricao, id } = updatedContatos[i];
				await this.update({ tipoContato, contato, descricao }, { where: { id }, transaction });
			}
		}

		if (newContatos.length > 0) {
			await this.bulkCreate(newContatos, { transaction });
		}

		if (deletedContatos.length > 0) {
			await this.destroy({ where: { id: { [Op.in]: deletedContatos } }, transaction });
		}
	};

	PessoaContato.associate = (models) => {
		models.PessoaContato.belongsTo(models.Pessoa, {
			onDelete: 'CASCADE',
			foreignKey: 'pessoasFk'
		});
	};

	return PessoaContato;
};
