export function up(queryInterface, Sequelize) {
	return queryInterface.createTable('retorno_boleto', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		filePath: {
			type: Sequelize.STRING,
			allowNull: false
		},
		dataRetorno: {
			type: Sequelize.DATE,
			allowNull: false
		},
		operacaoCodigo: {
			type: Sequelize.STRING,
			allowNull: true
		},
		operacao: {
			type: Sequelize.STRING,
			allowNull: true
		},
		servicoCodigo: {
			type: Sequelize.STRING,
			allowNull: true
		},
		servico: {
			type: Sequelize.STRING,
			allowNull: true
		},
		agencia: {
			type: Sequelize.STRING,
			allowNull: true
		},
		agenciaDv: {
			type: Sequelize.STRING,
			allowNull: true
		},
		conta: {
			type: Sequelize.STRING,
			allowNull: true
		},
		contaDv: {
			type: Sequelize.STRING,
			allowNull: true
		},
		codigoCliente: {
			type: Sequelize.STRING,
			allowNull: true
		},
		valorTitulos: {
			type: Sequelize.STRING,
			allowNull: true
		},
		avisos: {
			type: Sequelize.STRING,
			allowNull: true
		},
		quantidadeTitulos: {
			type: Sequelize.STRING,
			allowNull: true
		},
		qtdLiquidados: {
			type: Sequelize.STRING,
			allowNull: true
		},
		qtdBaixados: {
			type: Sequelize.STRING,
			allowNull: true
		},
		qtdEntradas: {
			type: Sequelize.STRING,
			allowNull: true
		},
		qtdAlterados: {
			type: Sequelize.STRING,
			allowNull: true
		},
		qtdErros: {
			type: Sequelize.STRING,
			allowNull: true
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
	return queryInterface.dropTable('retorno_boleto');
}
