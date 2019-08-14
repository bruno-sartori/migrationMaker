export function up(queryInterface, Sequelize) {
	return queryInterface.createTable('custo_variavel', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		tipo: {
			type: Sequelize.STRING,
			allowNull: false
		},
		notaFiscal: {
			type: Sequelize.STRING,
			allowNull: true
		},
		dataCusto: {
			type: Sequelize.DATE,
			allowNull: false
		},
		totalParcelas: {
			type: Sequelize.INTEGER,
			allowNull: false
		},
		valorTotal: {
			type: Sequelize.FLOAT(15, 2),
			allowNull: false
		},
		totalServico: {
			type: Sequelize.FLOAT(15, 2),
			allowNull: true
		},
		totalSuprimento: {
			type: Sequelize.FLOAT(15, 2),
			allowNull: true
		},
		frete: {
			type: Sequelize.STRING,
			allowNull: true
		},
		valorFrete: {
			type: Sequelize.FLOAT(15, 2),
			allowNull: true
		},
		incluirFrete: {
			type: Sequelize.BOOLEAN,
			allowNull: true
		},
		primeiroVencimento: {
			type: Sequelize.DATE,
			allowNull: false
		},
		totalParcelamento: {
			type: Sequelize.FLOAT(15, 2),
			allowNull: false
		},
		historico: {
			type: Sequelize.STRING,
			allowNull: true
		},
		tipoCredor: {
			type: Sequelize.STRING,
			allowNull: false
		},
		obs: {
			type: Sequelize.STRING,
			allowNull: true
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
		},
		subgrupoFrete: {
			type: Sequelize.INTEGER,
			allowNull: true,
			references: {
				model: 'subgrupo_contas',
				key: 'id'
			}
		},
		nomeMotorista: {
			type: Sequelize.STRING,
			allowNull: true,
		},
		rgMotorista: {
			type: Sequelize.STRING,
			allowNull: true,
		},
		placaVeiculo: {
			type: Sequelize.STRING,
			allowNull: true,
		},
		estadoFrete: {
			type: Sequelize.INTEGER,
			allowNull: true,
			references: {
				model: 'estados',
				key: 'id'
			}
		},
		cidadeFrete: {
			type: Sequelize.INTEGER,
			allowNull: true,
			references: {
				model: 'cidades',
				key: 'id'
			}
		},
		transportadorasFk: {
			type: Sequelize.INTEGER,
			allowNull: true,
			references: {
				model: 'transportadoras',
				key: 'id'
			}
		},
		dataFrete: {
			type: Sequelize.DATE,
			allowNull: true
		},
		estoqueLocalFkTarget: {
			type: Sequelize.INTEGER,
			allowNull: true
		}
	}, { charset: 'utf8', collate: 'utf8_unicode_ci' });
}

export function down(queryInterface) {
	return queryInterface.dropTable('custo_variavel');
}
