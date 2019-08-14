export function up(queryInterface, Sequelize) {
	return queryInterface.createTable('autenticadores_ip_fixo', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		ip: {
			type: Sequelize.STRING(40),
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
		federatedIspTipoIpFk: {
			type: Sequelize.INTEGER,
			allowNull: false
		},
		autenticadoresFk: {
			type: Sequelize.INTEGER,
			allowNull: false,
			onDelete: 'CASCADE',
			references: {
				model: 'autenticadores',
				key: 'id',
			}
		}
	}, { charset: 'utf8', collate: 'utf8_unicode_ci' });
}

export function down(queryInterface) {
	return queryInterface.dropTable('autenticadores_ip_fixo');
}
