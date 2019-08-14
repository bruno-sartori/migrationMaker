export default (sequelize, DataType) => {
	const FederatedNotification = sequelize.define('FederatedNotification',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			title: {
				type: DataType.STRING(255),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			message: {
				type: DataType.STRING(255),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			path: {
				type: DataType.STRING(255),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			method: {
				type: DataType.STRING(10),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			link: {
				type: DataType.STRING(255),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			icon: {
				type: DataType.STRING(255),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			level: {
				type: DataType.INTEGER(255),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			requires: {
				type: DataType.STRING(200),
				allowNull: true
			},
			createdAt: {
				type: DataType.DATE,
				allowNull: false
			}
		},
		{
			tableName: 'federated_notifications',
			timestamps: false,
			hooks: {
				beforeCreate: (federatedNotification) => {
					federatedNotification.set('createdAt', new Date());
				}
			}
		}
	);

	return FederatedNotification;
};
