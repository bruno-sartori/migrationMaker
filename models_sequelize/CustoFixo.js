export default (sequelize, DataType) => {
	const CustoFixo = sequelize.define('CustoFixo',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			tipoCredor: {
				type: DataType.STRING,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			inicioLancamento: {
				type: DataType.STRING,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			diaVencimento: {
				type: DataType.STRING(2),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			valorParcela: {
				type: DataType.FLOAT(15, 2),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			historico: {
				type: DataType.STRING,
				allowNull: true
			},
			obs: {
				type: DataType.STRING,
				allowNull: true
			},
			status: {
				type: DataType.BOOLEAN,
				allowNull: true
			},
			createdAt: {
				type: DataType.DATE,
				allowNull: true
			},
			updatedAt: {
				type: DataType.DATE
			},
			credorFornecedor: {
				type: DataType.INTEGER,
				allowNull: true
			},
			credorFuncionario: {
				type: DataType.INTEGER,
				allowNull: true
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
			}
		},
		{
			tableName: 'custo_fixo'
		}
	);

	CustoFixo.associate = (models) => {
		models.CustoFixo.hasMany(models.CustoFixoParcela, {
			onDelete: 'CASCADE',
			foreignKey: 'custoFixoFk',
			as: 'parcelas'
		});

		models.CustoFixo.belongsTo(models.Fornecedor, {
			foreignKey: 'credorFornecedor'
		});

		models.CustoFixo.belongsTo(models.Funcionario, {
			foreignKey: 'credorFuncionario'
		});

		models.CustoFixo.belongsTo(models.SubgrupoConta, {
			foreignKey: 'subgrupoContasFk',
			as: 'SubgrupoConta'
		});
	};

	return CustoFixo;
};
