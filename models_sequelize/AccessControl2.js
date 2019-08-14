export default (sequelize, DataType) => {
	const AccessControl2 = sequelize.define('AccessControl2',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			entity: {
				type: DataType.STRING,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			menu: {
				type: DataType.STRING,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			submenu: {
				type: DataType.STRING,
				allowNull: true
			},
			createdAt: {
				type: DataType.DATE,
				allowNull: true
			},
			updatedAt: {
				type: DataType.DATE
			},
		},
		{
			tableName: 'access_control2'
		}
	);

	AccessControl2.associate = (models) => {
		models.AccessControl2.hasMany(models.AccessControlPrivileges, {
			onDelete: 'CASCADE',
			as: 'privileges',
			foreignKey: 'accessControlFk'
		});
	};


	return AccessControl2;
};
