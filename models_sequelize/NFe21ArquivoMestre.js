export default (sequelize, DataType) => {
	const NFe21ArquivoMestre = sequelize.define('NFe21ArquivoMestre',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			cpfCnpj: {
				type: DataType.INTEGER(14),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			ie: {
				type: DataType.STRING(14),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			razaoSocial: {
				type: DataType.STRING(35),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			uf: {
				type: DataType.STRING(2),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			classeConsumo: {
				type: DataType.BOOLEAN,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			faseTipoUtilizacao: {
				type: DataType.BOOLEAN,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			grupoTensao: {
				type: DataType.INTEGER(2),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			codigoIdentificacaoConsumidorAssinante: {
				type: DataType.STRING(12),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			dataEmissao: {
				type: DataType.INTEGER(8),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			modelo: {
				type: DataType.INTEGER(2),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			serie: {
				type: DataType.STRING(3),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			numero: {
				type: DataType.INTEGER(9),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			codigoAutenticacaoDigitalDocumentoFiscal: {
				type: DataType.STRING(32),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			valorTotal: {
				type: DataType.FLOAT(10, 2),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			bcIcms: {
				type: DataType.FLOAT(10, 2),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			icmsDestacado: {
				type: DataType.FLOAT(10, 2),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			operacoesIsentasNaoTributadas: {
				type: DataType.FLOAT(10, 2),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			outrosValores: {
				type: DataType.FLOAT(10, 2),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			situacaoDocumento: {
				type: DataType.STRING(1),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			anoMesReferenciaApuracao: {
				type: DataType.INTEGER(4),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			referenciaItem: {
				type: DataType.INTEGER(9),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			numeroTerminalTelefonicoUnidadeConsumidora: {
				type: DataType.STRING(12),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			indicacaoTipoInformacaoCampo1: {
				type: DataType.INTEGER(1),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			tipoCliente: {
				type: DataType.INTEGER(2),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			subclasseConsumo: {
				type: DataType.INTEGER(2),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			numeroTerminalTelefonicoPrincipal: {
				type: DataType.STRING(12),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			cnpjEmitente: {
				type: DataType.INTEGER(14),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			numeroCodigoFaturaComercial: {
				type: DataType.STRING(20),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			valorTotalFaturaComercial: {
				type: DataType.FLOAT(10, 2),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			dataLeituraAnterior: {
				type: DataType.INTEGER(8),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			dataLeituraAtual: {
				type: DataType.INTEGER(8),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			branco1: {
				type: DataType.STRING(50),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			branco2: {
				type: DataType.INTEGER(8),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			informacoesAdicionais: {
				type: DataType.STRING(30),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			branco3: {
				type: DataType.STRING(5),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			codigoAutenticacaoDigitalRegistro: {
				type: DataType.STRING(32),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			notaFiscalFk: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			operadoresFk: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			createdAt: {
				type: DataType.DATE,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			updatedAt: {
				type: DataType.DATE,
				allowNull: true
			}
		},
		{
			tableName: 'nfe21_arquivo_mestre'
		}
	);

	return NFe21ArquivoMestre;
};
