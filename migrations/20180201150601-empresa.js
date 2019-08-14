export async function up(queryInterface, Sequelize) {
	await queryInterface.createTable('empresas', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		cnpj: {
			type: Sequelize.STRING(20),
			allowNull: false
		},
		razaoSocial: {
			type: Sequelize.STRING,
			allowNull: false
		},
		nomeFantasia: {
			type: Sequelize.STRING,
			allowNull: false
		},
		ie: {
			type: Sequelize.STRING(20),
			allowNull: false
		},
		dominio: {
			type: Sequelize.STRING,
			allowNull: false
		},
		logoPath: {
			type: Sequelize.STRING(500),
			allowNull: true
		},
		enderecosFk: {
			type: Sequelize.INTEGER,
			allowNull: false,
			references: {
				model: 'enderecos',
				key: 'id'
			}
		},
		sede: {
			type: Sequelize.INTEGER,
			allowNull: true,
			references: {
				model: 'enderecos',
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

	await queryInterface.addIndex('empresas', ['cnpj']);
}

export function down(queryInterface) {
	return queryInterface.dropTable('empresas');
}
