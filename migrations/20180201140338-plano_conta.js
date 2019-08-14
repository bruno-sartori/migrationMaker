export function up(queryInterface, Sequelize) {
	return queryInterface.createTable('plano_contas', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		nome: {
			type: Sequelize.STRING(255),
			allowNull: false
		},
		atributo: {
			type: Sequelize.STRING(1),
			allowNull: false,
			defaultValue: '-',
		},
		viewCustoVariavel: {
			type: Sequelize.BOOLEAN,
			allowNull: false,
			defaultValue: true
		},
		viewCustoFixo: {
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
		}
	}, { charset: 'utf8', collate: 'utf8_unicode_ci' });
}

export function down(queryInterface) {
	return queryInterface.dropTable('plano_contas');
}
