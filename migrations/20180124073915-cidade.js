export async function up(queryInterface, Sequelize) {
	await queryInterface.createTable('cidades', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		cidade: {
			type: Sequelize.STRING(255),
			allowNull: false
		},
		status: {
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
		},
		estadosFk: {
			type: Sequelize.INTEGER,
			allowNull: false,
			onDelete: 'CASCADE',
			references: {
				model: 'estados',
				key: 'id',
			}
		}
	}, { charset: 'utf8', collate: 'utf8_unicode_ci' });

	await queryInterface.addIndex('cidades', ['cidade', 'estadosFk']);
}

export function down(queryInterface) {
	return queryInterface.dropTable('cidades');
}
