export default (sequelize, DataType) => {
	const RetornoBoleto = sequelize.define('RetornoBoleto',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			filePath: {
				type: DataType.STRING,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			dataRetorno: {
				type: DataType.DATE,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			operacaoCodigo: {
				type: DataType.STRING,
				allowNull: true
			},
			operacao: {
				type: DataType.STRING,
				allowNull: true
			},
			servicoCodigo: {
				type: DataType.STRING,
				allowNull: true
			},
			servico: {
				type: DataType.STRING,
				allowNull: true
			},
			agencia: {
				type: DataType.STRING,
				allowNull: true
			},
			agenciaDv: {
				type: DataType.STRING,
				allowNull: true
			},
			conta: {
				type: DataType.STRING,
				allowNull: true
			},
			contaDv: {
				type: DataType.STRING,
				allowNull: true
			},
			codigoCliente: {
				type: DataType.STRING,
				allowNull: true
			},
			valorTitulos: {
				type: DataType.STRING,
				allowNull: true
			},
			avisos: {
				type: DataType.STRING,
				allowNull: true
			},
			quantidadeTitulos: {
				type: DataType.STRING,
				allowNull: true
			},
			qtdLiquidados: {
				type: DataType.STRING,
				allowNull: true
			},
			qtdBaixados: {
				type: DataType.STRING,
				allowNull: true
			},
			qtdEntradas: {
				type: DataType.STRING,
				allowNull: true
			},
			qtdAlterados: {
				type: DataType.STRING,
				allowNull: true
			},
			qtdErros: {
				type: DataType.STRING,
				allowNull: true
			},
			createdAt: {
				type: DataType.DATE,
				allowNull: false
			},
			updatedAt: {
				type: DataType.DATE,
				allowNull: true
			}
		},
		{
			tableName: 'retorno_boleto'
		}
	);

	return RetornoBoleto;
};
