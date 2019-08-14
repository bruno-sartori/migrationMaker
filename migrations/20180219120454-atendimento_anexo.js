export function up(queryInterface, Sequelize) {
	return queryInterface.createTable('atendimentos_anexos', {
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
			type: Sequelize.DATE,
			allowNull: true
		},
		atendimentosFk: {
			type: Sequelize.STRING,
			allowNull: false,
			onDelete: 'CASCADE',
			references: {
				model: 'atendimentos',
				key: 'id',
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
	return queryInterface.dropTable('atendimentos_anexos');
}
