export function up(queryInterface, Sequelize) {
	return queryInterface.createTable('onu', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		login: {
			type: Sequelize.STRING(100),
			allowNull: true
		},
		senha: {
			type: Sequelize.STRING(100),
			allowNull: true
		},
		porta: {
			type: Sequelize.STRING(10),
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
		},
		federatedIspModeloOnuFk: {
			type: Sequelize.INTEGER,
			allowNull: false
		}
	}, { charset: 'utf8', collate: 'utf8_unicode_ci' });
}

export function down(queryInterface) {
	return queryInterface.dropTable('onu');
}
