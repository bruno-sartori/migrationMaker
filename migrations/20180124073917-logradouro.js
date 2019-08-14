export async function up(queryInterface, Sequelize) {
	await queryInterface.createTable('logradouros', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		logradouro: {
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
		bairrosFk: {
			type: Sequelize.INTEGER,
			allowNull: false,
			onDelete: 'CASCADE',
			references: {
				model: 'bairros',
				key: 'id',
			}
		}
	}, { charset: 'utf8', collate: 'utf8_unicode_ci' });

	await queryInterface.addIndex('logradouros', ['logradouro', 'bairrosFk']);
}

export function down(queryInterface) {
	return queryInterface.dropTable('logradouros');
}
