export function up(queryInterface, Sequelize) {
	return queryInterface.createTable('file_upload', {
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
		folderPath: {
			type: Sequelize.STRING,
			allowNull: false
		},
		description: {
			type: Sequelize.STRING,
			allowNull: true
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
		operadoresFk: {
			type: Sequelize.INTEGER,
			allowNull: false,
			references: {
				model: 'operadores',
				key: 'id'
			}
		},
		grupoAnexosFk: {
			type: Sequelize.INTEGER,
			allowNull: false,
			references: {
				model: 'grupo_anexo',
				key: 'id'
			}
		}
	}, { charset: 'utf8', collate: 'utf8_unicode_ci' });
}

export function down(queryInterface) {
	return queryInterface.dropTable('file_upload');
}
