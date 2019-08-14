export default (sequelize, DataType) => {
	const AccessControlPrivileges = sequelize.define('AccessControlPrivileges',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			privilege: {
				type: DataType.STRING,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			value: {
				type: DataType.BOOLEAN,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			valuesRestriction: {
				type: DataType.STRING,
				allowNull: true
			},
			createdAt: {
				type: DataType.DATE,
				allowNull: false
			},
			updatedAt: {
				type: DataType.DATE
			},
			accessControlFk: {
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
			tableName: 'access_control_privileges'
		}
	);

	AccessControlPrivileges.associate = (models) => {
		models.AccessControlPrivileges.belongsTo(models.Operador, {
			onDelete: 'CASCADE',
			foreignKey: 'operadoresFk'
		});

		models.AccessControlPrivileges.belongsTo(models.AccessControl2, {
			as: 'privileges',
			onDelete: 'CASCADE',
			foreignKey: 'accessControlFk'
		});
	};

	return AccessControlPrivileges;
};
