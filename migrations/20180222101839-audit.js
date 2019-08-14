export function up(queryInterface, Sequelize) {
	return queryInterface.createTable('audit', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		path: {
			type: Sequelize.STRING,
			allowNull: false
		},
		method: {
			type: Sequelize.STRING,
			allowNull: false
		},
		body: {
			type: Sequelize.TEXT,
			allowNull: true
		},
		remoteAddress: {
			type: Sequelize.STRING,
			allowNull: true
		},
		response: {
			type: Sequelize.INTEGER,
			allowNull: true
		},
		message: {
			type: Sequelize.STRING,
			allowNull: true
		},
		acao: {
			type: Sequelize.STRING,
			allowNull: true
		},
		level: {
			type: Sequelize.STRING,
			allowNull: true
		},
		ref: {
			type: Sequelize.STRING,
			allowNull: true
		},
		createdAt: {
			type: Sequelize.DATE,
			allowNull: false,
			defaultValue: Sequelize.fn('now')
		},
		updatedAt: {
			type: Sequelize.DATE
		},
		operadoresFk: {
			type: Sequelize.INTEGER,
			allowNull: false,
			references: {
				model: 'operadores',
				key: 'id'
			}
		}
	}, { charset: 'utf8', collate: 'utf8_unicode_ci' });
}

export function down(queryInterface) {
	return queryInterface.dropTable('audit');
}
