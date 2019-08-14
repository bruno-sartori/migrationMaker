export default (sequelize, DataType) => {
	const CompraServico = sequelize.define('CompraServico',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			quantidade: {
				type: DataType.FLOAT(15, 2),
				allowNull: true
			},
			valorUnitario: {
				type: DataType.FLOAT(15, 2),
				allowNull: false
			},
			valorTotal: {
				type: DataType.FLOAT(15, 2),
				allowNull: false
			},
			createdAt: {
				type: DataType.DATE,
				allowNull: false
			},
			updatedAt: {
				type: DataType.DATE,
				allowNull: true
			},
			subgrupoContasFk: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			custoVariavelFk: {
				type: DataType.INTEGER,
				allowNull: false,
				references: {
					model: 'custo_variavel',
					key: 'id',
					onDelete: 'CASCADE'
				}
			}
		},
		{
			tableName: 'compra_servico',
			hooks: {
				beforeCreate: (compraServico) => {
					compraServico.set('valorTotal', compraServico.valorUnitario * compraServico.quantidade);
				}
			}
		}
	);

	CompraServico.associate = (models) => {
		models.CompraServico.belongsTo(models.CustoVariavel, {
			foreignKey: 'custoVariavelFk',
			onDelete: 'CASCADE'
		});

		models.CompraServico.belongsTo(models.SubgrupoConta, {
			foreignKey: 'subgrupoContasFk'
		});
	};

	return CompraServico;
};
