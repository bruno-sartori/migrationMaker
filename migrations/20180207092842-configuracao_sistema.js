export function up(queryInterface, Sequelize) {
	return queryInterface.createTable('configuracoes_sistema', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		emailContador: {
			type: Sequelize.STRING,
			allowNull: true
		},
		limiteCreditoBoleto: {
			type: Sequelize.FLOAT(15, 2),
			allowNull: true
		},
		tipoLimiteCreditoBoleto: {
			type: Sequelize.STRING('20'),
			allowNull: true,
		},
		multaBoleto: {
			type: Sequelize.FLOAT(15, 2),
			allowNull: true
		},
		moraBoleto: {
			type: Sequelize.FLOAT(15, 2),
			allowNull: true
		},
		instrucaoBoleto: {
			type: Sequelize.STRING(500),
			allowNull: true
		},
		multaIndefinido: {
			type: Sequelize.FLOAT(15, 2),
			allowNull: true
		},
		moraIndefinido: {
			type: Sequelize.FLOAT(15, 2),
			allowNull: true
		},
		operadoraPadrao: {
			type: Sequelize.INTEGER,
			allowNull: true,
			references: {
				model: 'operadoras_boleto',
				key: 'id'
			}
		},
		periodoGeracao: {
			type: Sequelize.STRING,
			allowNull: true
		},
		prazoProrata: {
			type: Sequelize.INTEGER,
			allowNull: true
		},
		valorMinimoProrata: {
			type: Sequelize.FLOAT(15, 2),
			allowNull: true
		},
		vencimentoBloqueio: {
			type: Sequelize.INTEGER(2),
			allowNull: true
		},
		intervaloLiberacaoConfianca: {
			type: Sequelize.INTEGER(2),
			allowNull: true
		},
		unidadeLiberacaoConfianca: {
			type: Sequelize.STRING,
			allowNull: true
		},
		liberacaoAutomatica: {
			type: Sequelize.BOOLEAN,
			allowNull: false,
			defaultValue: false
		},
		intervaloAlteracaoDiaPagamento: {
			type: Sequelize.INTEGER,
			allowNull: true
		},
		unidadeAlteracaoDiaPagamento: {
			type: Sequelize.STRING,
			allowNull: true
		},
		notificationEnabled: {
			type: Sequelize.BOOLEAN,
			allowNull: false,
			defaultValue: true
		},
		notificationSound: {
			type: Sequelize.STRING,
			allowNull: false,
			defaultTo: 'notification'
		},
		createdAt: {
			type: Sequelize.DATE,
			allowNull: false,
			defaultValue: Sequelize.fn('now')
		},
		updatedAt: {
			type: Sequelize.DATE
		}
	}, { charset: 'utf8', collate: 'utf8_unicode_ci' });
}

export function down(queryInterface) {
	return queryInterface.dropTable('configuracoes_sistema');
}
