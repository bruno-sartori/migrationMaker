/* eslint-disable no-await-in-loop */
import { isValidNumber, isValidString } from '../util/isValidVariable';

export default (sequelize, DataType) => {
	const ContaBancariaContato = sequelize.define('ContaBancariaContato',
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
			contaBancariaFk: {
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
		{ tableName: 'conta_bancaria_contato' }
	);

	ContaBancariaContato.upsert = async function(contaBancariaFk, data, transaction) {
		const savedContatos = await this.findAll({ where: { contaBancariaFk }, raw: true });
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
			return { ...o, contaBancariaFk };
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

	ContaBancariaContato.associate = (models) => {
		models.ContaBancariaContato.belongsTo(models.ContaBancaria, {
			onDelete: 'CASCADE',
			foreignKey: 'contaBancariaFk'
		});
	};

	return ContaBancariaContato;
};
