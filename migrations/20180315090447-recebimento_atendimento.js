export function up(queryInterface, Sequelize) {
	return queryInterface.createTable('recebimento_atendimento', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		contasReceberFk: {
			type: Sequelize.INTEGER,
			allowNull: false,
			onDelete: 'CASCADE',
			references: {
				model: 'contas_receber',
				key: 'id'
			}
		},
		atendimentosFk: {
			type: Sequelize.STRING,
			allowNull: true,
			references: {
				model: 'atendimentos',
				key: 'id'
			}
		},
		createdAt: {
			type: Sequelize.DATE,
			allowNull: false,
			defaultValue: Sequelize.fn('now')
		},
		updatedAt: {
			type: Sequelize.DATE
		},
	}, { charset: 'utf8', collate: 'utf8_unicode_ci' });
}

export function down(queryInterface) {
	return queryInterface.dropTable('recebimento_atendimento');
}
