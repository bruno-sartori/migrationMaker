export default (sequelize, DataType) => {
	const CustoVariavel = sequelize.define('CustoVariavel',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			tipo: {
				type: DataType.STRING,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			notaFiscal: {
				type: DataType.STRING,
				allowNull: true
			},
			dataCusto: {
				type: DataType.DATE,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			totalParcelas: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			valorTotal: {
				type: DataType.FLOAT(15, 2),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			totalServico: {
				type: DataType.FLOAT(15, 2),
				allowNull: true
			},
			totalSuprimento: {
				type: DataType.FLOAT(15, 2),
				allowNull: true
			},
			frete: {
				type: DataType.STRING,
				allowNull: true
			},
			valorFrete: {
				type: DataType.FLOAT(15, 2),
				allowNull: true
			},
			incluirFrete: {
				type: DataType.BOOLEAN,
				allowNull: true
			},
			primeiroVencimento: {
				type: DataType.DATE,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			totalParcelamento: {
				type: DataType.FLOAT(15, 2),
				allowNull: false
			},
			historico: {
				type: DataType.STRING,
				allowNull: true
			},
			tipoCredor: {
				type: DataType.STRING,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			obs: {
				type: DataType.STRING,
				allowNull: true
			},
			createdAt: {
				type: DataType.DATE,
				allowNull: false
			},
			updatedAt: {
				type: DataType.DATE
			},
			credorFornecedor: {
				type: DataType.INTEGER,
				allowNull: true,
				validate: {
					notEmpty: true
				}
			},
			credorFuncionario: {
				type: DataType.INTEGER,
				allowNull: true,
				validate: {
					notEmpty: true
				}
			},
			planoContasFk: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			grupoContasFk: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			subgrupoContasFk: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			subgrupoFrete: {
				type: DataType.INTEGER,
				allowNull: true,
				validate: {
					notEmpty: true
				}
			},
			nomeMotorista: {
				type: DataType.STRING,
				allowNull: true,
			},
			rgMotorista: {
				type: DataType.STRING,
				allowNull: true,
			},
			placaVeiculo: {
				type: DataType.STRING,
				allowNull: true,
			},
			estadoFrete: {
				type: DataType.INTEGER,
				allowNull: true,
			},
			cidadeFrete: {
				type: DataType.INTEGER,
				allowNull: true,
			},
			transportadorasFk: {
				type: DataType.INTEGER,
				allowNull: true,
			},
			dataFrete: {
				type: DataType.DATE,
				allowNull: true,
			},
			estoqueLocalFkTarget: {
				type: DataType.INTEGER,
				allowNull: true,
			}
		},
		{
			tableName: 'custo_variavel'
		}
	);

	CustoVariavel.associate = (models) => {
		models.CustoVariavel.hasMany(models.CustoVariavelParcela, {
			onDelete: 'CASCADE',
			foreignKey: 'custoVariavelFk',
			as: 'parcelas'
		});

		models.CustoVariavel.hasMany(models.CompraServico, {
			onDelete: 'CASCADE',
			foreignKey: 'custoVariavelFk',
			as: 'servicos'
		});

		models.CustoVariavel.hasMany(models.CompraSuprimento, {
			onDelete: 'CASCADE',
			foreignKey: 'custoVariavelFk',
			as: 'suprimentos'
		});

		models.CustoVariavel.hasOne(models.EstoqueTransacao, {
			onDelete: 'CASCADE',
			foreignKey: 'comprasFk',
			as: 'transacao'
		});

		models.CustoVariavel.belongsTo(models.Fornecedor, {
			foreignKey: 'credorFornecedor'
		});

		models.CustoVariavel.belongsTo(models.Transportadora, {
			foreignKey: 'transportadorasFk'
		});

		models.CustoVariavel.belongsTo(models.Funcionario, {
			foreignKey: 'credorFuncionario'
		});

		models.CustoVariavel.belongsTo(models.SubgrupoConta, {
			foreignKey: 'subgrupoContasFk',
			as: 'SubgrupoConta'
		});

		models.CustoVariavel.belongsTo(models.SubgrupoConta, {
			foreignKey: 'subgrupoFrete',
			as: 'Frete'
		});

		models.CustoVariavel.belongsTo(models.Estado, {
			foreignKey: 'estadoFrete'
		});

		models.CustoVariavel.belongsTo(models.Cidade, {
			foreignKey: 'cidadeFrete'
		});
	};

	return CustoVariavel;
};
