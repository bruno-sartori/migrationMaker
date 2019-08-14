export function up(queryInterface, Sequelize) {
	return queryInterface.createTable('funcionarios', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		dataAdmissao: {
			type: Sequelize.DATE,
			allowNull: false
		},
		dataNascimento: {
			type: Sequelize.DATE,
			allowNull: true
		},
		carteiraNumero: {
			type: Sequelize.STRING,
			allowNull: true
		},
		carteiraSerie: {
			type: Sequelize.STRING,
			allowNull: true
		},
		cargo: {
			type: Sequelize.STRING,
			allowNull: true
		},
		pis: {
			type: Sequelize.STRING,
			allowNull: true
		},
		agencia: {
			type: Sequelize.STRING,
			allowNull: true
		},
		conta: {
			type: Sequelize.STRING,
			allowNull: true
		},
		obs: {
			type: Sequelize.STRING,
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
		federatedBaseBancoFk: {
			type: Sequelize.INTEGER,
			allowNull: true
		}
	}, { charset: 'utf8', collate: 'utf8_unicode_ci' });
}

export function down(queryInterface) {
	return queryInterface.dropTable('funcionarios');
}
