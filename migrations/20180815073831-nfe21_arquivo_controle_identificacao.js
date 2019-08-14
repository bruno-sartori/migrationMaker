export function up(queryInterface, Sequelize) {
	return queryInterface.createTable('nfe21_arquivo_controle_identificacao', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		cnpj: {
			type: Sequelize.STRING(18),
			allowNull: false
		},
		ie: {
			type: Sequelize.STRING(15),
			allowNull: false
		},
		razaoSocial: {
			type: Sequelize.STRING(50),
			allowNull: false
		},
		endereco: {
			type: Sequelize.STRING(50),
			allowNull: false
		},
		cep: {
			type: Sequelize.STRING(9),
			allowNull: false
		},
		bairro: {
			type: Sequelize.STRING(30),
			allowNull: false
		},
		municipio: {
			type: Sequelize.STRING(30),
			allowNull: false
		},
		uf: {
			type: Sequelize.STRING(2),
			allowNull: false
		},
		responsavelApresentacao: {
			type: Sequelize.STRING(30),
			allowNull: false
		},
		cargo: {
			type: Sequelize.STRING(20),
			allowNull: false
		},
		telefone: {
			type: Sequelize.STRING(12),
			allowNull: false
		},
		email: {
			type: Sequelize.STRING(40),
			allowNull: false
		},
		quantidadeRegistrosArquivoMestreDocumentoFiscal: {
			type: Sequelize.INTEGER(7),
			allowNull: false
		},
		quantidadeNotasFiscaisCanceladas: {
			type: Sequelize.INTEGER(7),
			allowNull: false
		},
		dataEmissaoPrimeiroDocumentoFiscal: {
			type: Sequelize.INTEGER(8),
			allowNull: false
		},
		dataEmissaoUltimoDocumentoFiscal: {
			type: Sequelize.INTEGER(8),
			allowNull: false
		},
		numeroPrimeiroDocumentoFiscal: {
			type: Sequelize.INTEGER(9),
			allowNull: false
		},
		numeroUltimoDocumentoFiscal: {
			type: Sequelize.INTEGER(9),
			allowNull: false
		},
		valorTotal: {
			type: Sequelize.FLOAT(12, 2),
			allowNull: false
		},
		bcIcms: {
			type: Sequelize.FLOAT(12, 2),
			allowNull: false
		},
		icms: {
			type: Sequelize.FLOAT(12, 2),
			allowNull: false
		},
		operacoesIsentasNaoTributadas: {
			type: Sequelize.FLOAT(12, 2),
			allowNull: false
		},
		outrosValoresSemBcIcms: {
			type: Sequelize.FLOAT(12, 2),
			allowNull: false
		},
		nomeArquivoMestreDocumentoFiscal: {
			type: Sequelize.STRING(40),
			allowNull: false
		},
		statusRetificacaoSubstituicaoArquivo: {
			type: Sequelize.STRING(1),
			allowNull: false
		},
		codigoAutenticacaoDigitalArquivoMestre: {
			type: Sequelize.STRING(32),
			allowNull: false
		},
		quantidadeRegistrosArquivoItem: {
			type: Sequelize.INTEGER(9),
			allowNull: false
		},
		quantidadeItensCancelados: {
			type: Sequelize.INTEGER(7),
			allowNull: false
		},
		dataEmissaoPrimeiroDocumentoFiscal2: {
			type: Sequelize.INTEGER(8),
			allowNull: false
		},
		dataEmissaoUltimoDocumentoFiscal2: {
			type: Sequelize.INTEGER(8),
			allowNull: false
		},
		numeroPrimeiroDocumentoFiscal2: {
			type: Sequelize.INTEGER(9),
			allowNull: false
		},
		numeroUltimoDocumentoFiscal2: {
			type: Sequelize.INTEGER(9),
			allowNull: false
		},
		total: {
			type: Sequelize.FLOAT(12, 2),
			allowNull: false
		},
		descontos: {
			type: Sequelize.FLOAT(12, 2),
			allowNull: false
		},
		acrescimosDespesasAcessorias: {
			type: Sequelize.FLOAT(12, 2),
			allowNull: false
		},
		bcIcms2: {
			type: Sequelize.FLOAT(12, 2),
			allowNull: false
		},
		icms2: {
			type: Sequelize.FLOAT(12, 2),
			allowNull: false
		},
		operacoesIsentasNaoTributadas2: {
			type: Sequelize.FLOAT(12, 2),
			allowNull: false
		},
		outrosValoresSemBcIcms2: {
			type: Sequelize.FLOAT(12, 2),
			allowNull: false
		},
		nomeArquivoItemDocmentoFiscal: {
			type: Sequelize.STRING(40),
			allowNull: false
		},
		statusRetificacaoSubstituicaoArquivo2: {
			type: Sequelize.STRING(1),
			allowNull: false
		},
		codigoAutenticacaoDigitalArquivoItem: {
			type: Sequelize.STRING(32),
			allowNull: false
		},
		quantidadeRegistrosArquivoDadosCadastrais: {
			type: Sequelize.INTEGER(7),
			allowNull: false
		},
		nomeArquivoDadosCadastrais: {
			type: Sequelize.STRING(40),
			allowNull: false
		},
		statusRetificacaoSubstituicaoArquivo3: {
			type: Sequelize.STRING(1),
			allowNull: false
		},
		codigoAutenticacaoDigitalArquivoDadosCadastrais: {
			type: Sequelize.STRING(32),
			allowNull: false
		},
		versaoProgramaValidador: {
			type: Sequelize.INTEGER(3),
			allowNull: false
		},
		chaveControleReciboEntrega: {
			type: Sequelize.STRING(6),
			allowNull: false
		},
		quantidadeAdvertencias: {
			type: Sequelize.INTEGER(9),
			allowNull: false
		},
		referencia: {
			type: Sequelize.INTEGER(4),
			allowNull: false
		},
		modelo: {
			type: Sequelize.INTEGER(2),
			allowNull: false
		},
		serie: {
			type: Sequelize.STRING(3),
			allowNull: false
		},
		volume: {
			type: Sequelize.STRING(3),
			allowNull: false
		},
		situacaoVersao: {
			type: Sequelize.STRING(3),
			allowNull: false
		},
		nomeArquivoCompactado: {
			type: Sequelize.STRING(60),
			allowNull: false
		},
		branco1: {
			type: Sequelize.INTEGER(9),
			allowNull: false
		},
		branco2: {
			type: Sequelize.INTEGER(14),
			allowNull: false
		},
		branco3: {
			type: Sequelize.INTEGER(14),
			allowNull: false
		},
		branco4: {
			type: Sequelize.INTEGER(14),
			allowNull: false
		},
		branco5: {
			type: Sequelize.INTEGER(14),
			allowNull: false
		},
		branco6: {
			type: Sequelize.INTEGER(14),
			allowNull: false
		},
		branco7: {
			type: Sequelize.INTEGER(9),
			allowNull: false
		},
		branco8: {
			type: Sequelize.INTEGER(14),
			allowNull: false
		},
		branco9: {
			type: Sequelize.INTEGER(14),
			allowNull: false
		},
		branco10: {
			type: Sequelize.INTEGER(14),
			allowNull: false
		},
		branco11: {
			type: Sequelize.INTEGER(14),
			allowNull: false
		},
		branco12: {
			type: Sequelize.INTEGER(14),
			allowNull: false
		},
		branco13: {
			type: Sequelize.INTEGER(9),
			allowNull: false
		},
		branco14: {
			type: Sequelize.INTEGER(14),
			allowNull: false
		},
		branco15: {
			type: Sequelize.INTEGER(14),
			allowNull: false
		},
		branco16: {
			type: Sequelize.INTEGER(14),
			allowNull: false
		},
		branco17: {
			type: Sequelize.INTEGER(14),
			allowNull: false
		},
		branco18: {
			type: Sequelize.INTEGER(14),
			allowNull: false
		},
		branco19: {
			type: Sequelize.INTEGER(9),
			allowNull: false
		},
		branco20: {
			type: Sequelize.INTEGER(14),
			allowNull: false
		},
		branco21: {
			type: Sequelize.INTEGER(14),
			allowNull: false
		},
		branco22: {
			type: Sequelize.INTEGER(14),
			allowNull: false
		},
		branco23: {
			type: Sequelize.INTEGER(14),
			allowNull: false
		},
		branco24: {
			type: Sequelize.INTEGER(14),
			allowNull: false
		},
		branco25: {
			type: Sequelize.STRING(32),
			allowNull: false
		},
		branco26: {
			type: Sequelize.INTEGER(64),
			allowNull: false
		},
		codigoAutenticacaoDigitalRegistro: {
			type: Sequelize.STRING(32),
			allowNull: false
		},
		arquivoMestreFk: {
			type: Sequelize.INTEGER,
			allowNull: false,
			references: {
				model: 'nfe21_arquivo_mestre',
				key: 'id'
			}
		},
		createdAt: {
			type: Sequelize.DATE,
			allowNull: false,
			defaultValue: Sequelize.fn('now')
		},
		updatedAt: {
			type: Sequelize.DATE,
			allowNull: true
		}
	}, { charset: 'utf8', collate: 'utf8_unicode_ci' });
}

export function down(queryInterface) {
	return queryInterface.dropTable('nfe21_arquivo_controle_identificacao');
}
