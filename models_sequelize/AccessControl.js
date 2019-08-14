export default (sequelize, DataType) => {
	const AccessControl = sequelize.define('AccessControl',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
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
				allowNull: true
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
			tableName: 'access_control'
		}
	);

	AccessControl.getPermission = async function(data) {
		const { operadoresFk, path, method } = data;
		const result = await this.findOne({ where: { operadoresFk, path, method } });

		if (result !== null) {
			return true;
		}
		return false;
	};

	AccessControl.associate = (models) => {
		models.AccessControl.belongsTo(models.Operador, {
			onDelete: 'CASCADE',
			foreignKey: 'operadoresFk'
		});
	};

	return AccessControl;
};
