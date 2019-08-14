export function up(queryInterface, Sequelize) {
	return queryInterface.createTable('transportadoras', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		nomeFantasia: {
			type: Sequelize.STRING,
			allowNull: false
		},
		tipoPessoa: {
			type: Sequelize.STRING,
			allowNull: false
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
		}
	}, { charset: 'utf8', collate: 'utf8_unicode_ci' });
}

export function down(queryInterface) {
	return queryInterface.dropTable('transportadoras');
}
