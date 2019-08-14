export function up(queryInterface, Sequelize) {
	return queryInterface.createTable('bloqueio_liberacao_clientes', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
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
		bloqueioLiberacaoFk: {
			type: Sequelize.INTEGER,
			allowNull: false,
			onDelete: 'CASCADE',
			references: {
				model: 'bloqueio_liberacao',
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
	return queryInterface.dropTable('bloqueio_liberacao_clientes');
}
