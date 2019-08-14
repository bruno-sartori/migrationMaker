import { isValidNumber, isValidString } from '../util/isValidVariable';

export default (sequelize, DataType) => {
	const PlanoServico = sequelize.define('PlanoServico',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			quantidade: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			planosFk: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			servicosFk: {
				type: DataType.INTEGER,
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
				type: DataType.DATE
			}
		},
		{
			tableName: 'planos_servicos'
		}
	);

	PlanoServico.associate = (models) => {
		models.PlanoServico.belongsTo(models.Servico, {
			onDelete: 'CASCADE',
			foreignKey: 'servicosFk'
		});

		models.PlanoServico.belongsTo(models.Plano, {
			onDelete: 'CASCADE',
			foreignKey: 'planosFk'
		});
	};


	PlanoServico.upsert = async function(planosFk, data, transaction) {
		const savedServicos = await this.findAll({ where: { planosFk }, raw: true });
		const { Op } = sequelize;

		const intactServicos = data.filter(o => isValidNumber(o.key)).map((o) => {
			o.id = o.key;
			delete o.editable;
			delete o.key;
			return o;
		});

		const newServicos = data.filter(o => isValidString(o.key) && o.key.includes('NEW_TEMP_ID')).map((o) => {
			delete o.key;
			delete o.editable;
			return { ...o, planosFk };
		});

		const deletedServicos = savedServicos.filter(o => !intactServicos.map(u => u.id).includes(o.id)).map(o => o.id);

		if (newServicos.length > 0) {
			await this.bulkCreate(newServicos, { transaction });
		}

		if (deletedServicos.length > 0) {
			await this.destroy({ where: { id: { [Op.in]: deletedServicos } }, transaction });
		}
	};


	return PlanoServico;
};