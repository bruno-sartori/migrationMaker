import { isValidNumber, isValidString } from '../util/isValidVariable';

export default (sequelize, DataType) => {
	const AtendimentoTentativaContato = sequelize.define('AtendimentoTentativaContato',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			dataContato: {
				type: DataType.DATE,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			descricao: {
				type: DataType.STRING,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			createdAt: {
				type: DataType.DATE,
				allowNull: false
			},
			updatedAt: {
				type: DataType.DATE,
				allowNull: true
			},
			atendimentosFk: {
				type: DataType.STRING,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			pessoasContatoFk: {
				type: DataType.INTEGER,
				allowNull: true,
				validate: {
					notEmpty: true
				}
			},
			operadoresFk: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			}
		},
		{
			tableName: 'atendimentos_tentativas_contato'
		}
	);

	AtendimentoTentativaContato.upsert = async function(atendimentosFk, data, transaction) {
		const savedContatos = await this.findAll({ where: { atendimentosFk }, raw: true });
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
			return { ...o, atendimentosFk };
		});

		const deletedContatos = savedContatos.filter(o => !updatedContatos.map(u => u.id).includes(o.id)).map(o => o.id);

		if (newContatos.length > 0) {
			await this.bulkCreate(newContatos, { transaction });
		}

		if (deletedContatos.length > 0) {
			await this.destroy({ where: { id: { [Op.in]: deletedContatos } }, transaction });
		}
	};


	AtendimentoTentativaContato.associate = (models) => {
		models.AtendimentoTentativaContato.belongsTo(models.Atendimento, {
			onDelete: 'CASCADE',
			foreignKey: 'atendimentosFk'
		});

		models.AtendimentoTentativaContato.belongsTo(models.Operador, {
			foreignKey: 'operadoresFk'
		});

		models.AtendimentoTentativaContato.belongsTo(models.PessoaContato, {
			onDelete: 'SET NULL',
			foreignKey: 'pessoasContatoFk'
		});
	};

	return AtendimentoTentativaContato;
};
