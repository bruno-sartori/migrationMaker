export function up(queryInterface, Sequelize) {
	return queryInterface.createTable('clientes', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		tipoPessoa: {
			type: Sequelize.STRING,
			allowNull: false
		},
		nomeFantasia: {
			type: Sequelize.STRING,
			allowNull: true
		},
		dataNascimento: {
			type: Sequelize.DATE,
			allowNull: true
		},
		tipoPagamento: {
			type: Sequelize.STRING,
			allowNull: true
		},
		tipoGeracaoBoleto: {
			type: Sequelize.STRING,
			allowNull: true
		},
		loginCentral: {
			type: Sequelize.STRING,
			allowNull: false
		},
		obs: {
			type: Sequelize.STRING,
			allowNull: true
		},
		status: {
			type: Sequelize.STRING,
			allowNull: false,
			defaultValue: 'LIBERADO'
		},
		blackList: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			defaultValue: false
		},
		createdAt: {
			type: Sequelize.DATE,
			allowNull: false,
			defaultValue: Sequelize.fn('now')
		},
		updatedAt: {
			type: Sequelize.DATE
		},
		pessoasFk: {
			type: Sequelize.INTEGER,
			allowNull: false,
			references: {
				model: 'pessoas',
				key: 'id'
			}
		},
		enderecosFkCobranca: {
			type: Sequelize.INTEGER,
			allowNull: false,
			references: {
				model: 'enderecos',
				key: 'id'
			}
		},
		grupoClientesFk: {
			type: Sequelize.INTEGER,
			allowNull: false,
			references: {
				model: 'grupo_clientes',
				key: 'id'
			}
		},
		diasPagamentoPlanoFk: {
			type: Sequelize.INTEGER,
			allowNull: true,
			defaultValue: null,
			references: {
				model: 'dias_pagamento_plano',
				key: 'id'
			}
		}
	}, { charset: 'utf8', collate: 'utf8_unicode_ci' });
}

export function down(queryInterface) {
	return queryInterface.dropTable('clientes');
}
