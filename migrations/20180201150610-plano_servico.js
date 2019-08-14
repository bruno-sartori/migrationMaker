export async function up(queryInterface, Sequelize) {
	await queryInterface.createTable('planos_servicos', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		quantidade: {
			type: Sequelize.INTEGER,
			allowNull: false
		},
		planosFk: {
			type: Sequelize.INTEGER,
			allowNull: false,
			onDelete: 'CASCADE',
			references: {
				model: 'planos',
				key: 'id'
			}
		},
		servicosFk: {
			type: Sequelize.INTEGER,
			allowNull: false,
			references: {
				model: 'servicos',
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
		}
	}, { charset: 'utf8', collate: 'utf8_unicode_ci' });

	await queryInterface.addIndex('planos_servicos', ['planosFk', 'servicosFk']);
}

export function down(queryInterface) {
	return queryInterface.dropTable('planos_servicos');
}
