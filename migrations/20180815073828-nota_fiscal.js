export function up(queryInterface, Sequelize) {
	return queryInterface.createTable('nota_fiscal', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		descricao: {
			type: Sequelize.STRING,
			allowNull: false
		},
		referencia: {
			type: Sequelize.STRING,
			allowNull: false
		},
		modelo: {
			type: Sequelize.INTEGER,
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
	return queryInterface.dropTable('nota_fiscal');
}
