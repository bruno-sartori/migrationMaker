export default (sequelize, DataType) => {
	const EstoqueTransacao = sequelize.define('EstoqueTransacao',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			tipoTransacao: {
				type: DataType.STRING,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			descricao: {
				type: DataType.STRING,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			createdAt: {
				type: DataType.DATE,
				allowNull: false
			},
			updatedAt: {
				type: DataType.DATE,
				allowNull: true
			},
			comprasFk: {
				type: DataType.INTEGER,
				allowNull: true
			},
			estoqueLocalFkTransferencia: {
				type: DataType.INTEGER,
				allowNull: true
			},
			estoqueLocalFkTarget: {
				type: DataType.INTEGER,
				allowNull: true
			},
			atendimentosFk: {
				type: DataType.STRING,
				allowNull: true
			},
			operadoresFk: {
				type: DataType.INTEGER,
				allowNull: true
			}
		},
		{
			tableName: 'estoque_transacoes'
		}
	);


	EstoqueTransacao.associate = (models) => {
		models.EstoqueTransacao.belongsTo(models.CustoVariavel, {
			onDelete: 'CASCADE',
			foreignKey: 'comprasFk',
		});

		models.EstoqueTransacao.belongsTo(models.EstoqueLocal, {
			onDelete: 'CASCADE',
			foreignKey: 'estoqueLocalFkTransferencia',
			as: 'EstoqueLocalTransferencia'
		});

		models.EstoqueTransacao.belongsTo(models.EstoqueLocal, {
			onDelete: 'CASCADE',
			foreignKey: 'estoqueLocalFkTarget',
			as: 'EstoqueLocalTarget'
		});

		models.EstoqueTransacao.belongsTo(models.Atendimento, {
			onDelete: 'CASCADE',
			foreignKey: 'atendimentosFk',
		});

		models.EstoqueTransacao.belongsTo(models.Operador, {
			onDelete: 'CASCADE',
			foreignKey: 'operadoresFk',
		});
	};


	return EstoqueTransacao;
};
