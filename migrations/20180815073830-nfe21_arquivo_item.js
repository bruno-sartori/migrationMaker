export function up(queryInterface, Sequelize) {
	return queryInterface.createTable('nfe21_arquivo_item', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		cpfCnpj: {
			type: Sequelize.INTEGER(14),
			allowNull: false
		},
		uf: {
			type: Sequelize.STRING(2),
			allowNull: false
		},
		classeConsumo: {
			type: Sequelize.INTEGER(1),
			allowNull: false
		},
		faseTipoUtilizacao: {
			type: Sequelize.INTEGER(1),
			allowNull: false
		},
		grupoTensao: {
			type: Sequelize.INTEGER(2),
			allowNull: false
		},
		dataEmissao: {
			type: Sequelize.INTEGER(8),
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
		numero: {
			type: Sequelize.INTEGER(9),
			allowNull: false
		},
		cfop: {
			type: Sequelize.INTEGER(4),
			allowNull: false
		},
		numeroOrdemItem: {
			type: Sequelize.INTEGER(3),
			allowNull: false
		},
		codigoItem: {
			type: Sequelize.STRING(10),
			allowNull: false
		},
		descricaoItem: {
			type: Sequelize.STRING(40),
			allowNull: false
		},
		codigoClassificacaoItem: {
			type: Sequelize.INTEGER(4),
			allowNull: false
		},
		unidade: {
			type: Sequelize.STRING(6),
			allowNull: false
		},
		quantidadeContratada: {
			type: Sequelize.FLOAT(9, 3),
			allowNull: false
		},
		quantidadeMedida: {
			type: Sequelize.FLOAT(9, 3),
			allowNull: false
		},
		total: {
			type: Sequelize.FLOAT(9, 2),
			allowNull: false
		},
		descontoRedutores: {
			type: Sequelize.FLOAT(9, 2),
			allowNull: false
		},
		acrescimosDespesasAcessorias: {
			type: Sequelize.FLOAT(9, 2),
			allowNull: false
		},
		bcIcms: {
			type: Sequelize.FLOAT(9, 2),
			allowNull: false
		},
		icms: {
			type: Sequelize.FLOAT(9, 2),
			allowNull: false
		},
		operacoesIsentasNaoTributadas: {
			type: Sequelize.FLOAT(9, 2),
			allowNull: false
		},
		outrosValores: {
			type: Sequelize.FLOAT(9, 2),
			allowNull: false
		},
		aliquotaIcms: {
			type: Sequelize.FLOAT(2, 2),
			allowNull: false
		},
		situacao: {
			type: Sequelize.STRING(1),
			allowNull: false
		},
		anoMesReferenciaApuracao: {
			type: Sequelize.STRING(4),
			allowNull: false
		},
		numeroContrato: {
			type: Sequelize.STRING(15),
			allowNull: false
		},
		quantidadeFaturada: {
			type: Sequelize.FLOAT(9, 3),
			allowNull: false
		},
		tarifaAplicadaPrecoMedioEfetivo: {
			type: Sequelize.FLOAT(7, 6), // 4,6
			allowNull: false
		},
		aliquotaPisPasep: {
			type: Sequelize.FLOAT(5, 4), // 2,4
			allowNull: false
		},
		pisPasep: {
			type: Sequelize.FLOAT(9, 2),
			allowNull: false
		},
		aliquotaCofins: {
			type: Sequelize.FLOAT(5, 4), // 2,4
			allowNull: false
		},
		cofins: {
			type: Sequelize.FLOAT(9, 2),
			allowNull: false
		},
		indicadorDescontoJudicial: {
			type: Sequelize.STRING(1),
			allowNull: false
		},
		tipoIsencaoReducaoBaseCalculo: {
			type: Sequelize.INTEGER(2),
			allowNull: false
		},
		branco1: {
			type: Sequelize.STRING(5),
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
	return queryInterface.dropTable('nfe21_arquivo_item');
}
