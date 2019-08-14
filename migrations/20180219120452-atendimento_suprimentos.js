export function up(queryInterface, Sequelize) {
	return queryInterface.createTable('atendimentos_suprimentos', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
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
		atendimentosFk: {
			type: Sequelize.STRING,
			allowNull: false,
			onDelete: 'CASCADE',
			references: {
				model: 'atendimentos',
				key: 'id'
			}
		},
		suprimentosFk: {
			type: Sequelize.INTEGER,
			allowNull: false,
			references: {
				model: 'suprimentos',
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
	return queryInterface.dropTable('atendimentos_suprimentos');
}
