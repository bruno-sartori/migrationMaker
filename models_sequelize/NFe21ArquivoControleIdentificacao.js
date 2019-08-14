export default (sequelize, DataType) => {
	const NFe21ArquivoControleIdentificacao = sequelize.define('NFe21ArquivoControleIdentificacao',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			cnpj: {
				type: DataType.STRING(18),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			ie: {
				type: DataType.STRING(15),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			razaoSocial: {
				type: DataType.STRING(50),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			endereco: {
				type: DataType.STRING(50),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			cep: {
				type: DataType.STRING(9),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			bairro: {
				type: DataType.STRING(30),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			municipio: {
				type: DataType.STRING(30),
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
			responsavelApresentacao: {
				type: DataType.STRING(30),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			cargo: {
				type: DataType.STRING(20),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			telefone: {
				type: DataType.STRING(12),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			email: {
				type: DataType.STRING(40),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			quantidadeRegistrosArquivoMestreDocumentoFiscal: {
				type: DataType.INTEGER(7),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			quantidadeNotasFiscaisCanceladas: {
				type: DataType.INTEGER(7),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			dataEmissaoPrimeiroDocumentoFiscal: {
				type: DataType.INTEGER(8),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			dataEmissaoUltimoDocumentoFiscal: {
				type: DataType.INTEGER(8),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			numeroPrimeiroDocumentoFiscal: {
				type: DataType.INTEGER(9),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			numeroUltimoDocumentoFiscal: {
				type: DataType.INTEGER(9),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			valorTotal: {
				type: DataType.FLOAT(12, 2),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			bcIcms: {
				type: DataType.FLOAT(12, 2),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			icms: {
				type: DataType.FLOAT(12, 2),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			operacoesIsentasNaoTributadas: {
				type: DataType.FLOAT(12, 2),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			outrosValoresSemBcIcms: {
				type: DataType.FLOAT(12, 2),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			nomeArquivoMestreDocumentoFiscal: {
				type: DataType.STRING(40),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			statusRetificacaoSubstituicaoArquivo: {
				type: DataType.STRING(1),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			codigoAutenticacaoDigitalArquivoMestre: {
				type: DataType.STRING(32),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			quantidadeRegistrosArquivoItem: {
				type: DataType.INTEGER(9),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			quantidadeItensCancelados: {
				type: DataType.INTEGER(7),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			dataEmissaoPrimeiroDocumentoFiscal2: {
				type: DataType.INTEGER(8),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			dataEmissaoUltimoDocumentoFiscal2: {
				type: DataType.INTEGER(8),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			numeroPrimeiroDocumentoFiscal2: {
				type: DataType.INTEGER(9),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			numeroUltimoDocumentoFiscal2: {
				type: DataType.INTEGER(9),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			total: {
				type: DataType.FLOAT(12, 2),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			descontos: {
				type: DataType.FLOAT(12, 2),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			acrescimosDespesasAcessorias: {
				type: DataType.FLOAT(12, 2),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			bcIcms2: {
				type: DataType.FLOAT(12, 2),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			icms2: {
				type: DataType.FLOAT(12, 2),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			operacoesIsentasNaoTributadas2: {
				type: DataType.FLOAT(12, 2),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			outrosValoresSemBcIcms2: {
				type: DataType.FLOAT(12, 2),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			nomeArquivoItemDocmentoFiscal: {
				type: DataType.STRING(40),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			statusRetificacaoSubstituicaoArquivo2: {
				type: DataType.STRING(1),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			codigoAutenticacaoDigitalArquivoItem: {
				type: DataType.STRING(32),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			quantidadeRegistrosArquivoDadosCadastrais: {
				type: DataType.INTEGER(7),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			nomeArquivoDadosCadastrais: {
				type: DataType.STRING(40),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			statusRetificacaoSubstituicaoArquivo3: {
				type: DataType.STRING(1),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			codigoAutenticacaoDigitalArquivoDadosCadastrais: {
				type: DataType.STRING(32),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			versaoProgramaValidador: {
				type: DataType.INTEGER(3),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			chaveControleReciboEntrega: {
				type: DataType.STRING(6),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			quantidadeAdvertencias: {
				type: DataType.INTEGER(9),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			referencia: {
				type: DataType.INTEGER(4),
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
			volume: {
				type: DataType.STRING(3),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			situacaoVersao: {
				type: DataType.STRING(3),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			nomeArquivoCompactado: {
				type: DataType.STRING(60),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			branco1: {
				type: DataType.INTEGER(9),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			branco2: {
				type: DataType.INTEGER(14),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			branco3: {
				type: DataType.INTEGER(14),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			branco4: {
				type: DataType.INTEGER(14),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			branco5: {
				type: DataType.INTEGER(14),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			branco6: {
				type: DataType.INTEGER(14),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			branco7: {
				type: DataType.INTEGER(9),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			branco8: {
				type: DataType.INTEGER(14),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			branco9: {
				type: DataType.INTEGER(14),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			branco10: {
				type: DataType.INTEGER(14),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			branco11: {
				type: DataType.INTEGER(14),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			branco12: {
				type: DataType.INTEGER(14),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			branco13: {
				type: DataType.INTEGER(9),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			branco14: {
				type: DataType.INTEGER(14),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			branco15: {
				type: DataType.INTEGER(14),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			branco16: {
				type: DataType.INTEGER(14),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			branco17: {
				type: DataType.INTEGER(14),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			branco18: {
				type: DataType.INTEGER(14),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			branco19: {
				type: DataType.INTEGER(9),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			branco20: {
				type: DataType.INTEGER(14),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			branco21: {
				type: DataType.INTEGER(14),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			branco22: {
				type: DataType.INTEGER(14),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			branco23: {
				type: DataType.INTEGER(14),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			branco24: {
				type: DataType.INTEGER(14),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			branco25: {
				type: DataType.STRING(32),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			branco26: {
				type: DataType.INTEGER(64),
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
			arquivoMestreFk: {
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
			tableName: 'nfe21_arquivo_controle_identificacao'
		}
	);

	return NFe21ArquivoControleIdentificacao;
};
