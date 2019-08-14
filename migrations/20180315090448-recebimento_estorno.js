export function up(queryInterface, Sequelize) {
	return queryInterface.createTable('recebimento_estorno', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		motivo: {
			type: Sequelize.STRING,
			allowNull: false
		},
		linha: {
			type: Sequelize.INTEGER,
			allowNull: true
		},
		dataEstorno: {
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
	return queryInterface.dropTable('recebimento_estorno');
}
