export default (sequelize, DataType) => {
	const EstoqueItem = sequelize.define('EstoqueItem',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			estoqueMinimo: {
				type: DataType.INTEGER,
				allowNull: true
			},
			estoqueMaximo: {
				type: DataType.INTEGER,
				allowNull: true
			},
			quantidade: {
				type: DataType.INTEGER,
				allowNull: true
			},
			status: {
				type: DataType.BOOLEAN,
				allowNull: true
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
			estoqueLocalFk: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			}
		},
		{
			tableName: 'estoque_itens'
		}
	);

	EstoqueItem.associate = (models) => {
		models.EstoqueItem.belongsTo(models.Suprimento, {
			onDelete: 'CASCADE',
			foreignKey: 'suprimentosFk',
		});

		models.EstoqueItem.belongsTo(models.EstoqueLocal, {
			onDelete: 'CASCADE',
			foreignKey: 'estoqueLocalFk',
		});

	};

	return EstoqueItem;
};

