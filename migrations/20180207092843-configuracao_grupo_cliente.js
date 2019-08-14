export function up(queryInterface, Sequelize) {
	return queryInterface.createTable('configuracoes_grupo_cliente', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		grupoClientesFk: {
			type: Sequelize.INTEGER,
			allowNull: false,
			references: {
				model: 'grupo_clientes',
				key: 'id'
			}
		}
	}, { charset: 'utf8', collate: 'utf8_unicode_ci' });
}

export function down(queryInterface) {
	return queryInterface.dropTable('configuracoes_grupo_cliente');
}
