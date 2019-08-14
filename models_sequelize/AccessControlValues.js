export default (sequelize, DataType) => {
	const AccessControlValues = sequelize.define('AccessControlValues',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			property: {
				type: DataType.STRING,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			path: {
				type: DataType.STRING,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			method: {
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
				type: DataType.DATE
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
			tableName: 'access_control_values'
		}
	);

	AccessControlValues.associate = (models) => {
		models.AccessControlValues.belongsTo(models.Operador, {
			onDelete: 'CASCADE',
			foreignKey: 'operadoresFk'
		});
	};

	return AccessControlValues;
};
