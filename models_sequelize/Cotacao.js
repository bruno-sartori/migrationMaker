export default (sequelize, DataType) => {
	const Cotacao = sequelize.define('Cotacao',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			descricao: {
				type: DataType.STRING,
				allowNull: false
			},
			valorCusto: {
				type: DataType.FLOAT,
				allowNull: false
			},
			valorCotado: {
				type: DataType.FLOAT,
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
			fornecedorCotado: {
				type: DataType.INTEGER,
				allowNull: true,
				references: {
					model: 'fornecedores',
					key: 'id'
				}
			},
			operadoresFk: {
				type: DataType.INTEGER,
				allowNull: false,
				references: {
					model: 'operadores',
					key: 'id'
				}
			}
		},
		{
			tableName: 'cotacoes',
			hooks: {
				beforeCreate: (cotacao) => {
					cotacao.set('nome', cotacao.descricao.toUpperCase());
				}
			}
		}
	);

	return Cotacao;
};
