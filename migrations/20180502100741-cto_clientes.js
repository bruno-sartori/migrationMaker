export function up(queryInterface, Sequelize) {
	return queryInterface.createTable('cto_clientes', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
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
		ctoFk: {
			type: Sequelize.INTEGER,
			allowNull: false,
			references: {
				model: 'cto',
				key: 'id'
			}
		},
		clientesFk: {
			type: Sequelize.INTEGER,
			allowNull: false,
			references: {
				model: 'clientes',
				key: 'id'
			}
		}
	}, { charset: 'utf8', collate: 'utf8_unicode_ci' });
}

export function down(queryInterface) {
	return queryInterface.dropTable('cto_clientes');
}
