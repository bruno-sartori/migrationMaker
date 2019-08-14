export function up(queryInterface, Sequelize) {
	return queryInterface.createTable('estoque_transacoes_itens', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		quantidade: {
			type: Sequelize.INTEGER,
			allowNull: false
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
		estoqueTransacaoFk: {
			type: Sequelize.INTEGER,
			allowNull: true,
			onDelete: 'CASCADE',
			references: {
				model: 'estoque_transacoes',
				key: 'id',
			}
		},
		suprimentosFk: {
			type: Sequelize.INTEGER,
			allowNull: false,
			references: {
				model: 'suprimentos',
				key: 'id'
			}
		}
	}, { charset: 'utf8', collate: 'utf8_unicode_ci' });
}

export function down(queryInterface) {
	return queryInterface.dropTable('estoque_transacoes_itens');
}
