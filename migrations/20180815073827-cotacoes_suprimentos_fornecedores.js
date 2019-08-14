export function up(queryInterface, Sequelize) {
	return queryInterface.createTable('cotacoes_suprimentos_fornecedores', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		valorCotacao: {
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
		fornecedorFk: {
			type: Sequelize.INTEGER,
			allowNull: true,
			references: {
				model: 'fornecedores',
				key: 'id',
			}
		},
		cotacaoSuprimentoFk: {
			type: Sequelize.INTEGER,
			allowNull: false,
			references: {
				model: 'cotacoes_suprimentos',
				key: 'id'
			}
		}
	}, { charset: 'utf8', collate: 'utf8_unicode_ci' });
}

export function down(queryInterface) {
	return queryInterface.dropTable('cotacoes_suprimentos_fornecedores');
}
