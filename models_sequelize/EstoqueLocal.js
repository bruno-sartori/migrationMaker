export default (sequelize, DataType) => {
	const EstoqueLocal = sequelize.define('EstoqueLocal',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			nome: {
				type: DataType.STRING,
				allowNull: false
			},
			principal: {
				type: DataType.BOOLEAN,
				allowNull: false
			},
			tipoLocal: {
				type: DataType.STRING,
				allowNull: false
			},
			veiculoMarca: {
				type: DataType.STRING,
				allowNull: true
			},
			veiculoModelo: {
				type: DataType.STRING,
				allowNull: true
			},
			veiculoPlaca: {
				type: DataType.STRING,
				allowNull: true
			},
			veiculoRenavam: {
				type: DataType.STRING,
				allowNull: true
			},
			status: {
				type: DataType.BOOLEAN,
				allowNull: true,
				defaultValue: true
			},
			createdAt: {
				type: DataType.DATE,
				allowNull: false
			},
			updatedAt: {
				type: DataType.DATE,
				allowNull: true
			},
			enderecosFk: {
				type: DataType.INTEGER,
				allowNull: true,
				references: {
					model: 'enderecos',
					key: 'id'
				}
			}
		},
		{
			tableName: 'estoque_locais',
			hooks: {
				beforeCreate: (estoqueLocal) => {
					estoqueLocal.set('nome', estoqueLocal.nome.toUpperCase());
				}
			}
		}
	);

	EstoqueLocal.associate = (models) => {
		models.EstoqueLocal.belongsTo(models.Endereco, {
			onDelete: 'CASCADE',
			foreignKey: 'enderecosFk',
		});
	};

	return EstoqueLocal;
};
