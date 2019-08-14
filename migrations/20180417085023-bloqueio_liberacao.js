export function up(queryInterface, Sequelize) {
	return queryInterface.createTable('bloqueio_liberacao', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		tipo: {
			type: Sequelize.STRING,
			allowNull: false
		},
		totalExecutados: {
			type: Sequelize.INTEGER,
			allowNull: true
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
	return queryInterface.dropTable('bloqueio_liberacao');
}
