export function up(queryInterface, Sequelize) {
	return queryInterface.createTable('cotacoes', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		descricao: {
			type: Sequelize.STRING,
			allowNull: false
		},
		valorCusto: {
			type: Sequelize.FLOAT,
			allowNull: false
		},
		valorCotado: {
			type: Sequelize.FLOAT,
			allowNull: false
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
		fornecedorCotado: {
			type: Sequelize.INTEGER,
			allowNull: true,
			references: {
				model: 'fornecedores',
				key: 'id'
			}
		},
		operadoresFk: {
			type: Sequelize.INTEGER,
			allowNull: false,
			references: {
				model: 'operadores',
				key: 'id'
			}
		}
	}, { charset: 'utf8', collate: 'utf8_unicode_ci' });
}

export function down(queryInterface) {
	return queryInterface.dropTable('cotacoes');
}
