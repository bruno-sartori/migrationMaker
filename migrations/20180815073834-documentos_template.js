export async function up(queryInterface, Sequelize) {
	await queryInterface.createTable('documentos_template', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		nome: {
			type: Sequelize.STRING(70),
			allowNull: false
		},
		fileUploadFk: {
			type: Sequelize.INTEGER,
			allowNull: false,
			references: {
				model: 'file_upload',
				key: 'id'
			}
		},
		federatedBaseGrupoDocumentosFk: {
			type: Sequelize.INTEGER,
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
		}
	}, { charset: 'utf8', collate: 'utf8_unicode_ci' });
}

export function down(queryInterface) {
	return queryInterface.dropTable('documentos_template');
}
