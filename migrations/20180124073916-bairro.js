export async function up(queryInterface, Sequelize) {
	await queryInterface.createTable('bairros', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		bairro: {
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
		cidadesFk: {
			type: Sequelize.INTEGER,
			allowNull: false,
			onDelete: 'CASCADE',
			references: {
				model: 'cidades',
				key: 'id',
			}
		}
	}, { charset: 'utf8', collate: 'utf8_unicode_ci' });

	await queryInterface.addIndex('bairros', ['bairro', 'cidadesFk']);
}

export function down(queryInterface) {
	return queryInterface.dropTable('bairros');
}
