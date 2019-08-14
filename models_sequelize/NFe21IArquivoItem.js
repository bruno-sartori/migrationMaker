export default (sequelize, DataType) => {
	const NFe21ArquivoItem = sequelize.define('NFe21ArquivoItem',
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
			uf: {
				type: DataType.STRING(2),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			classeConsumo: {
				type: DataType.INTEGER(1),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			faseTipoUtilizacao: {
				type: DataType.INTEGER(1),
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
			cfop: {
				type: DataType.INTEGER(4),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			numeroOrdemItem: {
				type: DataType.INTEGER(3),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			codigoItem: {
				type: DataType.STRING(10),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			descricaoItem: {
				type: DataType.STRING(40),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			codigoClassificacaoItem: {
				type: DataType.INTEGER(4),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			unidade: {
				type: DataType.STRING(6),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			quantidadeContratada: {
				type: DataType.FLOAT(9, 3),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			quantidadeMedida: {
				type: DataType.FLOAT(9, 3),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			total: {
				type: DataType.FLOAT(9, 2),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			descontoRedutores: {
				type: DataType.FLOAT(9, 2),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			acrescimosDespesasAcessorias: {
				type: DataType.FLOAT(9, 2),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			bcIcms: {
				type: DataType.FLOAT(9, 2),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			icms: {
				type: DataType.FLOAT(9, 2),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			operacoesIsentasNaoTributadas: {
				type: DataType.FLOAT(9, 2),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			outrosValores: {
				type: DataType.FLOAT(9, 2),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			aliquotaIcms: {
				type: DataType.FLOAT(2, 2),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			situacao: {
				type: DataType.STRING(1),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			anoMesReferenciaApuracao: {
				type: DataType.STRING(4),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			numeroContrato: {
				type: DataType.STRING(15),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			quantidadeFaturada: {
				type: DataType.FLOAT(9, 3),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			tarifaAplicadaPrecoMedioEfetivo: {
				type: DataType.FLOAT(4, 6),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			aliquotaPisPasep: {
				type: DataType.FLOAT(2, 4),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			pisPasep: {
				type: DataType.FLOAT(9, 2),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			aliquotaCofins: {
				type: DataType.FLOAT(2, 4),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			cofins: {
				type: DataType.FLOAT(9, 2),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			indicadorDescontoJudicial: {
				type: DataType.STRING(1),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			tipoIsencaoReducaoBaseCalculo: {
				type: DataType.INTEGER(2),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			branco1: {
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
			arquivoMestreFk: {
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
			tableName: 'nfe21_arquivo_item'
		}
	);

	return NFe21ArquivoItem;
};
