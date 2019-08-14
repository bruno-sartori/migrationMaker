export async function up(queryInterface, Sequelize) {
	await queryInterface.createTable('empresas_contato', {
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
			allowNull: false,
			unique: true
		},
		descricao: {
			type: Sequelize.STRING(50),
			allowNull: true
		},
		empresasFk: {
			type: Sequelize.INTEGER,
			allowNull: false,
			references: {
				model: 'empresas',
				key: 'id'
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

	await queryInterface.addIndex('empresas_contato', {
		fields: ['contato', 'tipoContato'],
		unique: true,
		type: 'UNIQUE',
		name: 'empresaContatoUnique'
	});
}

export function down(queryInterface) {
	return queryInterface.dropTable('empresas_contato');
}
