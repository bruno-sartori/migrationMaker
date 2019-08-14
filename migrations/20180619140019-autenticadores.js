export function up(queryInterface, Sequelize) {
	return queryInterface.createTable('autenticadores', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		nome: {
			type: Sequelize.STRING(200),
			allowNull: false
		},
		ip: {
			type: Sequelize.STRING(40),
			allowNull: false
		},
		porta: {
			type: Sequelize.INTEGER,
			allowNull: false
		},
		login: {
			type: Sequelize.STRING(300),
			allowNull: false
		},
		senha: {
			type: Sequelize.STRING(300),
			allowNull: false
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
		},
		federatedIspAutenticadorHomologadoFk: {
			type: Sequelize.INTEGER,
			allowNull: false
		}
	}, { charset: 'utf8', collate: 'utf8_unicode_ci' });
}

export function down(queryInterface) {
	return queryInterface.dropTable('autenticadores');
}
