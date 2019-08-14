export default (sequelize, DataType) => {
	const CustoVariavelParcela = sequelize.define('CustoVariavelParcela',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			configured: {
				type: DataType.BOOLEAN,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			tipoPagamento: {
				type: DataType.STRING,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			numParcela: {
				type: DataType.STRING,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			dataVencimento: {
				type: DataType.DATE,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			dataPagamento: {
				type: DataType.DATE,
				allowNull: true
			},
			valorParcela: {
				type: DataType.FLOAT(15, 2),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			valorPago: {
				type: DataType.FLOAT(15, 2),
				allowNull: true
			},
			historico: {
				type: DataType.STRING,
				allowNull: true
			},
			juros: {
				type: DataType.FLOAT(15, 2),
				allowNull: true
			},
			createdAt: {
				type: DataType.DATE,
				allowNull: false
			},
			updatedAt: {
				type: DataType.DATE
			},
			status: {
				type: DataType.STRING(30),
				alloNull: false,
				validate: {
					isIn: [['open', 'paid', 'reversed']]
				}
			},
			custoVariavelFk: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			}
		},
		{
			tableName: 'custo_variavel_parcela',
		}
	);

	CustoVariavelParcela.associate = (models) => {
		models.CustoVariavelParcela.belongsTo(models.CustoVariavel, {
			onDelete: 'CASCADE',
			foreignKey: 'custoVariavelFk'
		});

		models.CustoVariavelParcela.hasOne(models.ConfigDinheiro, {
			foreignKey: 'custoVariavelParcelaFk',
			as: 'dinheiro'
		});
		models.CustoVariavelParcela.hasOne(models.ConfigCheque, {
			foreignKey: 'custoVariavelParcelaFk',
			as: 'cheque'
		});
		models.CustoVariavelParcela.hasOne(models.ConfigCartao, {
			foreignKey: 'custoVariavelParcelaFk',
			as: 'cartao'
		});
		models.CustoVariavelParcela.hasOne(models.ConfigBoleto, {
			foreignKey: 'custoVariavelParcelaFk',
			as: 'boleto'
		});
		models.CustoVariavelParcela.hasOne(models.ConfigIndefinido, {
			foreignKey: 'custoVariavelParcelaFk',
			as: 'indefinido'
		});
	};

	return CustoVariavelParcela;
};
