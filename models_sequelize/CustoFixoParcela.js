export default (sequelize, DataType) => {
	const CustoFixoParcela = sequelize.define('CustoFixoParcela',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			numParcela: {
				type: DataType.STRING,
				allowNull: true
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
			notaFiscal: {
				type: DataType.STRING,
				allowNull: true
			},
			juros: {
				type: DataType.FLOAT(15, 3),
				allowNull: true
			},
			historico: {
				type: DataType.STRING,
				allowNull: true
			},
			status: {
				type: DataType.STRING(30),
				alloNull: false,
				validate: {
					isIn: [['open', 'paid', 'reversed', 'deleted']]
				}
			},
			createdAt: {
				type: DataType.DATE,
				allowNull: true
			},
			updatedAt: {
				type: DataType.DATE
			},
			custoFixoFk: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			}
		},
		{
			tableName: 'custo_fixo_parcela'
		}
	);

	CustoFixoParcela.associate = (models) => {
		models.CustoFixoParcela.belongsTo(models.CustoFixo, {
			onDelete: 'CASCADE',
			foreignKey: 'custoFixoFk'
		});
	};

	return CustoFixoParcela;
};
