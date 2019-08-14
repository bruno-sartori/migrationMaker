import { isValidString, isValidNumber, isValidArray } from '../util/isValidVariable';

export default (sequelize, DataType) => {
	const OperadorDepartamento = sequelize.define('OperadorDepartamento',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
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
			},
			operadoresFk: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			departamentosFk: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			}
		},
		{ tableName: 'operadores_departamentos' }
	);

	OperadorDepartamento.upsert = async function(operadoresFk, data, transaction) {
		const savedDepartamentos = await this.findAll({ where: { operadoresFk }, raw: true });
		const { Op } = sequelize;

		const updatedDepartamentos = data.filter(o => isValidNumber(o.key)).map((o) => {
			o.id = o.key;
			delete o.editable;
			delete o.key;
			return o;
		});

		const newDepartamentos = data.filter(o => isValidString(o.key) && o.key.includes('NEW_TEMP_ID')).map((o) => {
			delete o.key;
			delete o.editable;
			return { ...o, operadoresFk };
		});

		const deletedDepartamentos = savedDepartamentos.filter(o => !updatedDepartamentos.map(u => u.id).includes(o.id)).map(o => o.id);

		if (newDepartamentos.length > 0) {
			await this.bulkCreate(newDepartamentos, { transaction });
		}

		if (deletedDepartamentos.length > 0) {
			await this.destroy({ where: { id: { [Op.in]: deletedDepartamentos } }, transaction });
		}
	};

	OperadorDepartamento.associate = (models) => {
		models.OperadorDepartamento.belongsTo(models.Operador, {
			onDelete: 'CASCADE',
			foreignKey: 'operadoresFk',
			as: 'departamentos'
		});
	};


	return OperadorDepartamento;
};
