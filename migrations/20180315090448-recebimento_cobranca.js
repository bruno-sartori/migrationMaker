export function up(queryInterface, Sequelize) {
	return queryInterface.createTable('recebimento_cobranca', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		descricao: {
			type: Sequelize.STRING,
			allowNull: false
		},
		dataCobranca: {
			type: Sequelize.DATE,
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
		contasReceberFk: {
			type: Sequelize.INTEGER,
			allowNull: false,
			onDelete: 'CASCADE',
			references: {
				model: 'contas_receber',
				key: 'id',
			}
		},
		operadoresFk: {
			type: Sequelize.INTEGER,
			allowNull: true,
			references: {
				model: 'operadores',
				key: 'id'
			}
		}
	}, { charset: 'utf8', collate: 'utf8_unicode_ci' });
}

export function down(queryInterface) {
	return queryInterface.dropTable('recebimento_cobranca');
}
