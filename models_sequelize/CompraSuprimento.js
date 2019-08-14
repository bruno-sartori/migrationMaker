export default (sequelize, DataType) => {
	const CompraSuprimento = sequelize.define('CompraSuprimento',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			quantidade: {
				type: DataType.FLOAT(15, 3),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			valorUnitario: {
				type: DataType.FLOAT(15, 3),
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
			createdAt: {
				type: DataType.DATE,
				allowNull: false
			},
			updatedAt: {
				type: DataType.DATE,
				allowNull: true
			},
			suprimentosFk: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
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
			tableName: 'compra_suprimento',
			hooks: {
				beforeCreate: (compraSuprimento) => {
					compraSuprimento.set('valorTotal', compraSuprimento.valorUnitario * compraSuprimento.quantidade);
				}
			}
		}
	);


	CompraSuprimento.associate = (models) => {
		models.CompraSuprimento.belongsTo(models.Suprimento, {
			foreignKey: 'suprimentosFk'
		});

		models.CompraSuprimento.belongsTo(models.CustoVariavel, {
			onDelete: 'CASCADE',
			foreignKey: 'custoVariavelFk'
		});
	};


	return CompraSuprimento;
};
