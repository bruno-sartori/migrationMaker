import { isValidNumber, isValidString } from '../util/isValidVariable';

export default (sequelize, DataType) => {
	const AtendimentoSuprimento = sequelize.define('AtendimentoSuprimento',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
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
			suprimentosFk: {
				type: DataType.INTEGER,
				allowNull: false,
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
			tableName: 'atendimentos_suprimentos'
		}
	);

	AtendimentoSuprimento.upsert = async function(atendimentosFk, data, operadoresFk, transaction) {
		const savedSuprimentos = await this.findAll({ where: { atendimentosFk }, raw: true });
		const { Op } = sequelize;

		const updatedSuprimentos = data.filter(o => isValidNumber(o.key)).map((o) => {
			o.id = o.key;
			delete o.editable;
			delete o.key;
			return o;
		});

		const newSuprimentos = data.filter(o => isValidString(o.key) && o.key.includes('NEW_TEMP_ID')).map((o) => {
			delete o.key;
			delete o.editable;
			return { ...o, atendimentosFk, operadoresFk };
		});

		const deletedSuprimentos = savedSuprimentos.filter(o => !updatedSuprimentos.map(u => u.id).includes(o.id)).map(o => o.id);

		if (newSuprimentos.length > 0) {
			await this.bulkCreate(newSuprimentos, { transaction });
		}

		if (deletedSuprimentos.length > 0) {
			await this.destroy({ where: { id: { [Op.in]: deletedSuprimentos } }, transaction });
		}
	};

	AtendimentoSuprimento.associate = (models) => {
		models.AtendimentoSuprimento.belongsTo(models.Atendimento, {
			onDelete: 'CASCADE',
			foreignKey: 'atendimentosFk'
		});

		models.AtendimentoSuprimento.belongsTo(models.Suprimento, {
			foreignKey: 'suprimentosFk'
		});

		models.AtendimentoSuprimento.belongsTo(models.Operador, {
			foreignKey: 'operadoresFk'
		});
	};

	return AtendimentoSuprimento;
};
