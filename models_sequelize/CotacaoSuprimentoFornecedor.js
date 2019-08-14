export default (sequelize, DataType) => {
	const CotacaoSuprimentoFornecedor = sequelize.define('CotacaoSuprimentoFornecedor',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			valorCotacao: {
				type: DataType.FLOAT,
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
			fornecedorFk: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			cotacaoSuprimentoFk: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			}
		},
		{
			tableName: 'cotacoes_suprimentos_fornecedores',
			hooks: {
				beforeCreate: (grupoCliente) => {
					grupoCliente.set('nome', grupoCliente.nome.toUpperCase());
				}
			}
		}
	);

	return CotacaoSuprimentoFornecedor;
};
