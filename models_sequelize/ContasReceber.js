export default (sequelize, DataType) => {
	const ContasReceber = sequelize.define('ContasReceber',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			obs: {
				type: DataType.STRING,
				allowNull: true
			},
			referencia: {
				type: DataType.STRING,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			valorReceber: {
				type: DataType.FLOAT(15, 2),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			valorRecebido: {
				type: DataType.FLOAT(15, 2),
				allowNull: true
			},
			valorTarifa: {
				type: DataType.FLOAT(15, 2),
				allowNull: true
			},
			dataVencimento: {
				type: DataType.DATE,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			dataRecebimento: {
				type: DataType.DATE,
				allowNull: true
			},
			tipoRecebimento: {
				type: DataType.STRING,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			atraso: {
				type: DataType.INTEGER,
				allowNull: true
			},
			chequeNumero: {
				type: DataType.STRING,
				allowNull: true
			},
			chequeDataEmissao: {
				type: DataType.DATE,
				allowNull: true
			},
			chequeDataPredatado: {
				type: DataType.DATE,
				allowNull: true
			},
			chequeAgencia: {
				type: DataType.STRING,
				allowNull: true
			},
			chequeConta: {
				type: DataType.STRING,
				allowNull: true
			},
			chequeTipoPessoa: {
				type: DataType.STRING,
				allowNull: true
			},
			chequeEmitente: {
				type: DataType.STRING,
				allowNull: true
			},
			chequeEmitenteCpfCnpj: {
				type: DataType.STRING,
				allowNull: true
			},
			chequeFederatedBaseBancoFk: {
				type: DataType.INTEGER,
				allowNull: true
			},
			cartaoNumeroAutenticacao: {
				type: DataType.STRING,
				allowNull: true
			},
			cartaoTipo: {
				type: DataType.STRING,
				allowNull: true
			},
			indefinidoMora: {
				type: DataType.FLOAT,
				allowNull: true
			},
			indefinidoMulta: {
				type: DataType.FLOAT,
				allowNull: true
			},
			boletoOcorrencia: {
				type: DataType.STRING,
				allowNull: true
			},
			boletoTipoOcorrencia: {
				type: DataType.INTEGER,
				allowNull: true
			},
			boletoDescricaoOcorrencia: {
				type: DataType.STRING,
				allowNull: true
			},
			boletoDataCredito: {
				type: DataType.DATE,
				allowNull: true
			},
			boletoNossoNumero: {
				type: DataType.STRING,
				allowNull: true
			},
			boletoNumeroDocumento: {
				type: DataType.STRING,
				allowNull: true
			},
			boletoLinhaDigitavel: {
				type: DataType.STRING,
				allowNull: true
			},
			boletoInstrucoes: {
				type: DataType.STRING(1000),
				allowNull: true
			},
			boletoMora: {
				type: DataType.FLOAT(15, 2),
				allowNull: true
			},
			boletoMulta: {
				type: DataType.FLOAT(15, 2),
				allowNull: true
			},
			status: {
				type: DataType.BOOLEAN,
				allowNull: false,
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
			clientesFk: {
				type: DataType.INTEGER,
				allowNull: true
			},
			operadorAbriu: {
				type: DataType.INTEGER,
				allowNull: true
			},
			operadorFechou: {
				type: DataType.INTEGER,
				allowNull: true
			},
			cartaoMaquinasCartaoFk: {
				type: DataType.INTEGER,
				allowNull: true
			},
			boletoOperadorasBoletoFk: {
				type: DataType.INTEGER,
				allowNull: true
			},
			boletoRemessaFk: {
				type: DataType.INTEGER,
				allowNull: true
			}
		},
		{
			tableName: 'contas_receber'
		}
	);

	ContasReceber.associate = (models) => {
		models.ContasReceber.hasMany(models.RecebimentoAtendimento, {
			onDelete: 'CASCADE',
			foreignKey: 'contasReceberFk',
			as: 'RecebimentoAtendimento'
		});

		models.ContasReceber.hasMany(models.RecebimentoCobranca, {
			onDelete: 'CASCADE',
			foreignKey: 'contasReceberFk'
		});

		models.ContasReceber.belongsTo(models.Cliente, {
			foreignKey: 'clientesFk'
		});
	};

	return ContasReceber;
};
