export function up(queryInterface, Sequelize) {
	return queryInterface.createTable('clientes_anexo', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: Sequelize.STRING,
			allowNull: false
		},
		extension: {
			type: Sequelize.STRING,
			allowNull: false
		},
		size: {
			type: Sequelize.FLOAT,
			allowNull: false
		},
		path: {
			type: Sequelize.STRING,
			allowNull: false
		},
		description: {
			type: Sequelize.STRING,
			allowNull: false
		},
		createdAt: {
			type: Sequelize.DATE,
			allowNull: false,
			defaultValue: Sequelize.fn('now')
		},
		updatedAt: {
			type: Sequelize.DATE
		},
		operadoresFk: {
			type: Sequelize.INTEGER,
			allowNull: false,
			references: {
				model: 'operadores',
				key: 'id'
			}
		},
		clientesFk: {
			type: Sequelize.INTEGER,
			allowNull: false,
			onDelete: 'CASCADE',
			references: {
				model: 'clientes',
				key: 'id'
			}
		}
	}, { charset: 'utf8', collate: 'utf8_unicode_ci' });
}

export function down(queryInterface) {
	return queryInterface.dropTable('clientes_anexo');
}
