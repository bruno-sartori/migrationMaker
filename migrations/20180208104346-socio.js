export function up(queryInterface, Sequelize) {
	return queryInterface.createTable('socios', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		dataNascimento: {
			type: Sequelize.DATE,
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
		},
	}, { charset: 'utf8', collate: 'utf8_unicode_ci' });
}

export function down(queryInterface) {
	return queryInterface.dropTable('socios');
}
