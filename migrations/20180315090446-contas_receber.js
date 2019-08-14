export function up(queryInterface, Sequelize) {
	return queryInterface.createTable('contas_receber', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		obs: {
			type: Sequelize.STRING,
			allowNull: true
		},
		referencia: {
			type: Sequelize.STRING,
			allowNull: false
		},
		valorReceber: {
			type: Sequelize.FLOAT(15, 2),
			allowNull: false
		},
		valorRecebido: {
			type: Sequelize.FLOAT(15, 2),
			allowNull: true
		},
		valorTarifa: {
			type: Sequelize.FLOAT(15, 2),
			allowNull: true
		},
		dataVencimento: {
			type: Sequelize.DATE,
			allowNull: false
		},
		dataRecebimento: {
			type: Sequelize.DATE,
			allowNull: true
		},
		tipoRecebimento: {
			type: Sequelize.STRING,
			allowNull: false
		},
		atraso: {
			type: Sequelize.INTEGER,
			allowNull: true
		},
		chequeNumero: {
			type: Sequelize.STRING,
			allowNull: true
		},
		chequeDataEmissao: {
			type: Sequelize.DATE,
			allowNull: true
		},
		chequeDataPredatado: {
			type: Sequelize.DATE,
			allowNull: true
		},
		chequeAgencia: {
			type: Sequelize.STRING,
			allowNull: true
		},
		chequeConta: {
			type: Sequelize.STRING,
			allowNull: true
		},
		chequeTipoPessoa: {
			type: Sequelize.STRING,
			allowNull: true
		},
		chequeEmitente: {
			type: Sequelize.STRING,
			allowNull: true
		},
		chequeEmitenteCpfCnpj: {
			type: Sequelize.STRING,
			allowNull: true
		},
		chequeFederatedBaseBancoFk: {
			type: Sequelize.INTEGER,
			allowNull: true
		},
		cartaoNumeroAutenticacao: {
			type: Sequelize.STRING,
			allowNull: true
		},
		cartaoTipo: {
			type: Sequelize.STRING,
			allowNull: true
		},
		indefinidoMora: {
			type: Sequelize.FLOAT,
			allowNull: true
		},
		indefinidoMulta: {
			type: Sequelize.FLOAT,
			allowNull: true
		},
		boletoOcorrencia: {
			type: Sequelize.STRING,
			allowNull: true
		},
		boletoTipoOcorrencia: {
			type: Sequelize.INTEGER,
			allowNull: true
		},
		boletoDescricaoOcorrencia: {
			type: Sequelize.STRING,
			allowNull: true
		},
		boletoDataCredito: {
			type: Sequelize.DATE,
			allowNull: true
		},
		boletoNossoNumero: {
			type: Sequelize.STRING,
			allowNull: true
		},
		boletoNumeroDocumento: {
			type: Sequelize.STRING,
			allowNull: true
		},
		boletoLinhaDigitavel: {
			type: Sequelize.STRING,
			allowNull: true
		},
		boletoInstrucoes: {
			type: Sequelize.STRING(1000),
			allowNull: true
		},
		boletoMora: {
			type: Sequelize.FLOAT(15, 2),
			allowNull: true
		},
		boletoMulta: {
			type: Sequelize.FLOAT(15, 2),
			allowNull: true
		},
		status: {
			type: Sequelize.BOOLEAN,
			allowNull: false,
			defaultValue: true
		},
		createdAt: {
			type: Sequelize.DATE,
			allowNull: false,
			defaultValue: Sequelize.fn('now')
		},
		updatedAt: {
			type: Sequelize.DATE,
			allowNull: true
		},
		clientesFk: {
			type: Sequelize.INTEGER,
			allowNull: true,
			references: {
				model: 'clientes',
				key: 'id'
			}
		},
		operadorAbriu: {
			type: Sequelize.INTEGER,
			allowNull: true,
			references: {
				model: 'operadores',
				key: 'id'
			}
		},
		operadorFechou: {
			type: Sequelize.INTEGER,
			allowNull: true,
			references: {
				model: 'operadores',
				key: 'id'
			}
		},
		cartaoMaquinasCartaoFk: {
			type: Sequelize.INTEGER,
			allowNull: true,
			references: {
				model: 'maquinas_cartao',
				key: 'id'
			}
		},
		boletoOperadorasBoletoFk: {
			type: Sequelize.INTEGER,
			allowNull: true,
			references: {
				model: 'operadoras_boleto',
				key: 'id'
			}
		},
		boletoRemessaFk: {
			type: Sequelize.INTEGER,
			allowNull: true,
			references: {
				model: 'remessa_boleto',
				key: 'id'
			}
		}
	}, { charset: 'utf8', collate: 'utf8_unicode_ci' });
}

export function down(queryInterface) {
	return queryInterface.dropTable('contas_receber');
}
