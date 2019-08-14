export function up(queryInterface, Sequelize) {
	return queryInterface.createTable('subgrupo_contas', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		nome: {
			type: Sequelize.STRING(255),
			allowNull: false
		},
		status: {
			type: Sequelize.BOOLEAN,
			allowNull: false,
			defaultValue: true
		},
		viewCustoVariavel: {
			type: Sequelize.BOOLEAN,
			allowNull: false,
			defaultValue: true
		},
		viewCustoFixo: {
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
		grupoContasFk: {
			type: Sequelize.INTEGER,
			allowNull: false,
			onDelete: 'CASCADE',
			references: {
				model: 'grupo_contas',
				key: 'id'
			}
		}
	}, { charset: 'utf8', collate: 'utf8_unicode_ci' });
}

export function down(queryInterface) {
	return queryInterface.dropTable('subgrupo_contas');
}
