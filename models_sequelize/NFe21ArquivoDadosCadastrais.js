export default (sequelize, DataType) => {
	const NFe21ArquivoDadosCadastrais = sequelize.define('NFe21ArquivoDadosCadastrais',
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
			logradouro: {
				type: DataType.STRING(45),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			numeroEndereco: {
				type: DataType.INTEGER(5),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			complemento: {
				type: DataType.STRING(15),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			cep: {
				type: DataType.INTEGER(8),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			bairro: {
				type: DataType.STRING(15),
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
			telefoneContato: {
				type: DataType.STRING(12),
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
			numeroTerminalTelefonicoUnidadeConsumidora: {
				type: DataType.STRING(12),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			ufHabilitacaoTerminalTelefonico: {
				type: DataType.STRING(2),
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
			codigoMunicipio: {
				type: DataType.INTEGER(7),
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
			tableName: 'nfe21_arquivo_dados_cadastrais_destinatario'
		}
	);

	return NFe21ArquivoDadosCadastrais;
};
