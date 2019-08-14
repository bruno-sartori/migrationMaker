export function up(queryInterface, Sequelize) {
	return queryInterface.createTable('nfe21_arquivo_dados_cadastrais', {
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
		logradouro: {
			type: Sequelize.STRING(45),
			allowNull: false
		},
		numeroEndereco: {
			type: Sequelize.INTEGER(5),
			allowNull: false
		},
		complemento: {
			type: Sequelize.STRING(15),
			allowNull: false
		},
		cep: {
			type: Sequelize.INTEGER(8),
			allowNull: false
		},
		bairro: {
			type: Sequelize.STRING(15),
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
		telefoneContato: {
			type: Sequelize.STRING(12),
			allowNull: false
		},
		codigoIdentificacaoConsumidorAssinante: {
			type: Sequelize.STRING(12),
			allowNull: false
		},
		numeroTerminalTelefonicoUnidadeConsumidora: {
			type: Sequelize.STRING(12),
			allowNull: false
		},
		ufHabilitacaoTerminalTelefonico: {
			type: Sequelize.STRING(2),
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
		codigoMunicipio: {
			type: Sequelize.INTEGER(7),
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
	return queryInterface.dropTable('nfe21_arquivo_dados_cadastrais');
}
