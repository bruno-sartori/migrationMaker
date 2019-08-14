export async function up(queryInterface, Sequelize) {
	await queryInterface.createTable('pessoas_contato', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		tipoContato: {
			type: Sequelize.STRING,
			allowNull: false
		},
		contato: {
			type: Sequelize.STRING,
			allowNull: true
		},
		descricao: {
			type: Sequelize.STRING(50),
			allowNull: true
		},
		pessoasFk: {
			type: Sequelize.INTEGER,
			allowNull: false,
			onDelete: 'CASCADE',
			references: {
				model: 'pessoas',
				key: 'id',
			}
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
		}
	}, { charset: 'utf8', collate: 'utf8_unicode_ci' });
}

export function down(queryInterface) {
	return queryInterface.dropTable('pessoas_contato');
}
