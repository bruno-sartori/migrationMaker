export function up(queryInterface, Sequelize) {
	return queryInterface.createTable('cotacoes_suprimentos', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		quantidade: {
			type: Sequelize.FLOAT,
			allowNull: false
		},
		custo: {
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
		cotacaoFk: {
			type: Sequelize.INTEGER,
			allowNull: true,
			onDelete: 'CASCADE',
			references: {
				model: 'cotacoes',
				key: 'id',
			}
		},
		suprimentosFk: {
			type: Sequelize.INTEGER,
			allowNull: false,
			references: {
				model: 'suprimentos',
				key: 'id'
			}
		}
	}, { charset: 'utf8', collate: 'utf8_unicode_ci' });
}

export function down(queryInterface) {
	return queryInterface.dropTable('cotacoes_suprimentos');
}
