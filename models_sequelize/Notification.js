export default (sequelize, DataType) => {
	const Notification = sequelize.define('Notification',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			title: {
				type: DataType.STRING,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			description: {
				type: DataType.STRING,
				allowNull: true
			},
			avatar: {
				type: DataType.STRING,
				allowNull: true
			},
			avatarColor: {
				type: DataType.STRING,
				allowNull: true
			},
			datetime: {
				type: DataType.DATE,
				allowNull: true
			},
			type: {
				type: DataType.STRING,
				allowNull: false,
				validate: {
					isIn: [['notification', 'message', 'event']],
					notEmpty: true
				}
			},
			clickClose: {
				type: DataType.BOOLEAN,
				allowNull: true
			},
			extra: {
				type: DataType.STRING,
				allowNull: true
			},
			status: {
				type: DataType.STRING,
				allowNull: true,
				validate: {
					isIn: [['todo', 'urgent', 'doing', 'processing']]
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
			tableName: 'notifications',
			timestamps: false
		}
	);

	Notification.registerNotifications = async function(db, data, privileges = {}, transaction = null, operadoresFk = null) {
		let operadores = await db.query(
			`select operadoresFk from access_control_privileges where privilege = ? and ` +
			`accessControlFk = (select id from access_control2 where entity = ?) ${privileges.subquery ? `and ${privileges.subquery}` : '' }`, 
			{ replacements: [privileges.privilege, privileges.entity], type: db.QueryTypes.SELECT }
		);

		if (operadoresFk !== null) {
			operadores = operadores.filter(o => o.operadoresFk !== operadoresFk);
		}

		const promises = operadores.map(async (o) => {
			await this.create({ ...data, operadoresFk: o.operadoresFk }, (transaction !== null) ? { transaction } : {});
		});

		const response = await Promise.all(promises);
		return response;
	};

	return Notification;
};
