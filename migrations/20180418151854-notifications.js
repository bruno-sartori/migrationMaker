export function up(queryInterface, Sequelize) {
	return queryInterface.createTable('notifications', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		title: {
			type: Sequelize.STRING,
			allowNull: false
		},
		description: {
			type: Sequelize.STRING,
			allowNull: true
		},
		avatar: {
			type: Sequelize.STRING,
			allowNull: true
		},
		avatarColor: {
			type: Sequelize.STRING,
			allowNull: true
		},
		datetime: {
			type: Sequelize.DATE,
			allowNull: true,
			defaultValue: Sequelize.fn('now')
		},
		type: {
			type: Sequelize.STRING,
			allowNull: true
		},
		clickClose: {
			type: Sequelize.BOOLEAN,
			allowNull: true
		},
		extra: {
			type: Sequelize.STRING,
			allowNull: true
		},
		status: {
			type: Sequelize.STRING,
			allowNull: true,
		},
		operadoresFk: {
			type: Sequelize.INTEGER,
			allowNull: false,
			onDelete: 'CASCADE',
			references: {
				model: 'operadores',
				key: 'id'
			}
		}
	}, { charset: 'utf8', collate: 'utf8_unicode_ci' });
}

export function down(queryInterface) {
	return queryInterface.dropTable('notifications');
}
