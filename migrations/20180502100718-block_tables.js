export function up(queryInterface, Sequelize) {
	return queryInterface.createTable('block_tables', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		tiposAtendimentosFk: {
			type: Sequelize.INTEGER,
			allowNull: false,
			references: {
				model: 'tipos_atendimentos',
				key: 'id'
			}
		}
	}, { charset: 'utf8', collate: 'utf8_unicode_ci' });
}

export function down(queryInterface) {
	return queryInterface.dropTable('block_tables');
}
