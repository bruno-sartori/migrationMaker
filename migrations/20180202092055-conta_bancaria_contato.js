export async function up(queryInterface, Sequelize) {
	await queryInterface.createTable('conta_bancaria_contato', {
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
			allowNull: true,
			unique: true
		},
		descricao: {
			type: Sequelize.STRING(50),
			allowNull: true
		},
		contaBancariaFk: {
			type: Sequelize.INTEGER,
			allowNull: false,
			onDelete: 'CASCADE',
			references: {
				model: 'contas_bancarias',
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

	await queryInterface.addIndex('conta_bancaria_contato', {
		fields: ['contato', 'tipoContato'],
		unique: true,
		type: 'UNIQUE',
		name: 'contaBancariaContatoUnique'
	});
}

export function down(queryInterface) {
	return queryInterface.dropTable('conta_bancaria_contato');
}
