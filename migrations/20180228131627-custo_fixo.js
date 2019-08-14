export function up(queryInterface, Sequelize) {
	return queryInterface.createTable('custo_fixo', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		tipoCredor: {
			type: Sequelize.STRING,
			allowNull: false
		},
		inicioLancamento: {
			type: Sequelize.STRING,
			allowNull: false
		},
		diaVencimento: {
			type: Sequelize.STRING(2),
			allowNull: false
		},
		valorParcela: {
			type: Sequelize.FLOAT(15, 2),
			allowNull: false
		},
		historico: {
			type: Sequelize.STRING,
			allowNull: true
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
		credorFornecedor: {
			type: Sequelize.INTEGER,
			allowNull: true,
			references: {
				model: 'fornecedores',
				key: 'id'
			}
		},
		credorFuncionario: {
			type: Sequelize.INTEGER,
			allowNull: true,
			references: {
				model: 'funcionarios',
				key: 'id'
			}
		},
		planoContasFk: {
			type: Sequelize.INTEGER,
			allowNull: false,
			references: {
				model: 'plano_contas',
				key: 'id'
			}
		},
		grupoContasFk: {
			type: Sequelize.INTEGER,
			allowNull: false,
			references: {
				model: 'grupo_contas',
				key: 'id'
			}
		},
		subgrupoContasFk: {
			type: Sequelize.INTEGER,
			allowNull: false,
			references: {
				model: 'subgrupo_contas',
				key: 'id'
			}
		}
	}, { charset: 'utf8', collate: 'utf8_unicode_ci' });
}

export function down(queryInterface) {
	return queryInterface.dropTable('custo_fixo');
}
