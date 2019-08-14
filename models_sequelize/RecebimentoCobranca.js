export default (sequelize, DataType) => {
	const RecebimentoCobranca = sequelize.define('RecebimentoCobranca',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			descricao: {
				type: DataType.STRING,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			dataCobranca: {
				type: DataType.DATE,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			contasReceberFk: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			operadoresFk: {
				type: DataType.INTEGER,
				allowNull: true,
				validate: {
					notEmpty: true
				}
			},
			createdAt: {
				type: DataType.DATE,
				allowNull: false
			},
			updatedAt: {
				type: DataType.DATE
			}
		},
		{
			tableName: 'recebimento_cobranca'
		}
	);

	return RecebimentoCobranca;
};
