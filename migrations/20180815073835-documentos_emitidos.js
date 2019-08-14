export async function up(queryInterface, Sequelize) {
	await queryInterface.createTable('documentos_emitidos', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		documentosTemplateFk: {
			type: Sequelize.INTEGER,
			allowNull: false,
			references: {
				model: 'documentos_template',
				key: 'id'
			}
		},
		fileUploadFk: {
			type: Sequelize.INTEGER,
			allowNull: false,
			references: {
				model: 'file_upload',
				key: 'id'
			}
		},
		clientesFk: {
			type: Sequelize.INTEGER,
			allowNull: true,
			references: {
				model: 'clientes',
				key: 'id'
			}
		},
		atendimentosFk: {
			type: Sequelize.STRING,
			allowNull: true,
			references: {
				model: 'atendimentos',
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
}

export function down(queryInterface) {
	return queryInterface.dropTable('documentos_emitidos');
}
