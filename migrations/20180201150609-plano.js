export function up(queryInterface, Sequelize) {
	return queryInterface.createTable('planos', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		nome: {
			type: Sequelize.STRING(255),
			allowNull: false
		},
		valor: {
			type: Sequelize.FLOAT(15, 2),
			allowNull: false
		},
		download: {
			type: Sequelize.FLOAT,
			allowNull: false
		},
		upload: {
			type: Sequelize.FLOAT,
			allowNull: false
		},
		periodo: {
			type: Sequelize.INTEGER,
			allowNull: false
		},
		obs: {
			type: Sequelize.STRING,
			allowNull: true
		},
		status: {
			type: Sequelize.BOOLEAN,
			allowNull: false,
			defaultValue: true
		},
		createdAt: {
			type: Sequelize.DATE,
			allowNull: false,
			defaultValue: Sequelize.fn('now')
		},
		updatedAt: {
			type: Sequelize.DATE
		},
		grupoPlanosFk: {
			type: Sequelize.INTEGER,
			allowNull: false,
			references: {
				model: 'grupo_planos',
				key: 'id'
			}
		}
	}, { charset: 'utf8', collate: 'utf8_unicode_ci' });
}

export function down(queryInterface) {
	return queryInterface.dropTable('planos');
}
