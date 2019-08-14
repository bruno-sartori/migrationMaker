export default (sequelize, DataType) => {
	const AutoGeracaoBoleto = sequelize.define('AutoGeracaoBoleto',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			createdAt: {
				type: DataType.DATE,
				allowNull: false
			},
			updatedAt: {
				type: DataType.DATE
			},
			operadoresFk: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			}
		},
		{
			tableName: 'auto_geracao_boleto'
		}
	);

	return AutoGeracaoBoleto;
};
