export function up(queryInterface, Sequelize) {
	return queryInterface.createTable('cpe', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		nome: {
			type: Sequelize.STRING(200),
			allowNull: true
		},
		tipo: {
			type: Sequelize.STRING(200),
			allowNull: true
		},
		outro: {
			type: Sequelize.STRING(200),
			allowNull: true
		},
		status: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			defaultValue: true
		},
		createdAt: {
			type: Sequelize.DATE,
			allowNull: false,
			defaultValue: Sequelize.fn('now')
		},
		updatedAt: {
			type: Sequelize.DATE,
			allowNull: true
		}
	}, { charset: 'utf8', collate: 'utf8_unicode_ci' });
}

export function down(queryInterface) {
	return queryInterface.dropTable('cpe');
}
