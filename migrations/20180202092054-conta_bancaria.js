export function up(queryInterface, Sequelize) {
	return queryInterface.createTable('contas_bancarias', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		agencia: {
			type: Sequelize.STRING,
			allowNull: false
		},
		conta: {
			type: Sequelize.STRING,
			allowNull: false
		},
		obs: {
			type: Sequelize.STRING,
			allowNull: true
		},
		nomeGerente: {
			type: Sequelize.STRING,
			allowNull: false
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
			type: Sequelize.DATE
		},
		federatedBaseBancoFk: {
			type: Sequelize.INTEGER,
			allowNull: false
		},
		enderecosFk: {
			type: Sequelize.INTEGER,
			allowNull: false,
			references: {
				model: 'enderecos',
				key: 'id'
			}
		},
	}, { charset: 'utf8', collate: 'utf8_unicode_ci' });
}

export function down(queryInterface) {
	return queryInterface.dropTable('contas_bancarias');
}
