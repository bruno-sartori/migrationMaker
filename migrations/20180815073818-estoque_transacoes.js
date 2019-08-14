export function up(queryInterface, Sequelize) {
	return queryInterface.createTable('estoque_transacoes', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		tipoTransacao: {
			type: Sequelize.STRING,
			allowNull: false
		},
		descricao: {
			type: Sequelize.STRING,
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
		comprasFk: {
			type: Sequelize.INTEGER,
			allowNull: true,
			references: {
				model: 'custo_variavel',
				key: 'id'
			}
		},
		estoqueLocalFkTransferencia: {
			type: Sequelize.INTEGER,
			allowNull: true,
			references: {
				model: 'estoque_locais',
				key: 'id'
			}
		},
		estoqueLocalFkTarget: {
			type: Sequelize.INTEGER,
			allowNull: true,
			references: {
				model: 'estoque_locais',
				key: 'id'
			}
		},
		atendimentosFk: {
			type: Sequelize.STRING,
			allowNull: true,
			references: {
				model: 'atendimentos',
				key: 'id'
			}
		},
		operadoresFk: {
			type: Sequelize.INTEGER,
			allowNull: true,
			references: {
				model: 'operadores',
				key: 'id'
			}
		}
	}, { charset: 'utf8', collate: 'utf8_unicode_ci' });
}

export function down(queryInterface) {
	return queryInterface.dropTable('estoque_transacoes');
}
