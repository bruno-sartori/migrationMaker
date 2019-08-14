export function up(queryInterface, Sequelize) {
	return queryInterface.createTable('dio', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		nome: {
			type: Sequelize.STRING,
			allowNull: false
		},
		numeroBandejas: {
			type: Sequelize.INTEGER,
			allowNull: true
		},
		numeroPosicoes: {
			type: Sequelize.INTEGER,
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
	return queryInterface.dropTable('dio');
}
