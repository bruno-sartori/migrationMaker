export function up(queryInterface, Sequelize) {
	return queryInterface.createTable('estoque_locais_funcionarios', {
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
		funcionariosFk: {
			type: Sequelize.INTEGER,
			allowNull: true,
			references: {
				model: 'funcionarios',
				key: 'id'
			}
		},
		estoqueLocalFk: {
			type: Sequelize.INTEGER,
			allowNull: true,
			references: {
				model: 'estoque_locais',
				key: 'id'
			}
		}
	}, { charset: 'utf8', collate: 'utf8_unicode_ci' });
}

export function down(queryInterface) {
	return queryInterface.dropTable('estoque_locais_funcionarios');
}
