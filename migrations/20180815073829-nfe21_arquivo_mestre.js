export function up(queryInterface, Sequelize) {
	return queryInterface.createTable('nfe21_arquivo_mestre', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		cpfCnpj: {
			type: Sequelize.INTEGER(14),
			allowNull: false
		},
		ie: {
			type: Sequelize.STRING(14),
			allowNull: false
		},
		razaoSocial: {
			type: Sequelize.STRING(35),
			allowNull: false
		},
		uf: {
			type: Sequelize.STRING(2),
			allowNull: false
		},
		classeConsumo: {
			type: Sequelize.BOOLEAN,
			allowNull: false
		},
		faseTipoUtilizacao: {
			type: Sequelize.BOOLEAN,
			allowNull: false
		},
		grupoTensao: {
			type: Sequelize.INTEGER(2),
			allowNull: false
		},
		codigoIdentificacaoConsumidorAssinante: {
			type: Sequelize.STRING(12),
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
		codigoAutenticacaoDigitalDocumentoFiscal: {
			type: Sequelize.STRING(32),
			allowNull: false
		},
		valorTotal: {
			type: Sequelize.FLOAT(10, 2),
			allowNull: false
		},
		bcIcms: {
			type: Sequelize.FLOAT(10, 2),
			allowNull: false
		},
		icmsDestacado: {
			type: Sequelize.FLOAT(10, 2),
			allowNull: false
		},
		operacoesIsentasNaoTributadas: {
			type: Sequelize.FLOAT(10, 2),
			allowNull: false
		},
		outrosValores: {
			type: Sequelize.FLOAT(10, 2),
			allowNull: false
		},
		situacaoDocumento: {
			type: Sequelize.STRING(1),
			allowNull: false
		},
		anoMesReferenciaApuracao: {
			type: Sequelize.INTEGER(4),
			allowNull: false
		},
		referenciaItem: {
			type: Sequelize.INTEGER(9),
			allowNull: false
		},
		numeroTerminalTelefonicoUnidadeConsumidora: {
			type: Sequelize.STRING(12),
			allowNull: false
		},
		indicacaoTipoInformacaoCampo1: {
			type: Sequelize.INTEGER(1),
			allowNull: false
		},
		tipoCliente: {
			type: Sequelize.INTEGER(2),
			allowNull: false
		},
		subclasseConsumo: {
			type: Sequelize.INTEGER(2),
			allowNull: false
		},
		numeroTerminalTelefonicoPrincipal: {
			type: Sequelize.STRING(12),
			allowNull: false
		},
		cnpjEmitente: {
			type: Sequelize.INTEGER(14),
			allowNull: false
		},
		numeroCodigoFaturaComercial: {
			type: Sequelize.STRING(20),
			allowNull: false
		},
		valorTotalFaturaComercial: {
			type: Sequelize.FLOAT(10, 2),
			allowNull: false
		},
		dataLeituraAnterior: {
			type: Sequelize.INTEGER(8),
			allowNull: false
		},
		dataLeituraAtual: {
			type: Sequelize.INTEGER(8),
			allowNull: false
		},
		branco1: {
			type: Sequelize.STRING(50),
			allowNull: false
		},
		branco2: {
			type: Sequelize.INTEGER(8),
			allowNull: false
		},
		informacoesAdicionais: {
			type: Sequelize.STRING(30),
			allowNull: false
		},
		branco3: {
			type: Sequelize.STRING(5),
			allowNull: false
		},
		codigoAutenticacaoDigitalRegistro: {
			type: Sequelize.STRING(32),
			allowNull: false
		},
		notaFiscalFk: {
			type: Sequelize.INTEGER,
			allowNull: false,
			references: {
				model: 'nota_fiscal',
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
	return queryInterface.dropTable('nfe21_arquivo_mestre');
}
