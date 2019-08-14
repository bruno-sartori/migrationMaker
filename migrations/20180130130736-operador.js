export async function up(queryInterface, Sequelize) {
	await queryInterface.createTable('operadores', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		login: {
			type: Sequelize.STRING,
			allowNull: true,
			unique: true
		},
		changedPassword: {
			type: Sequelize.BOOLEAN,
			allowNull: false,
			defaultValue: false
		},
		senha: {
			type: Sequelize.STRING,
			allowNull: false
		},
		obs: {
			type: Sequelize.STRING,
			allowNull: true
		},
		status: {
			type: Sequelize.BOOLEAN,
			allowNull: false,
			defaultValue: true
		},
		root: {
			type: Sequelize.BOOLEAN,
			allowNull: true
		},
		avatar: {
			type: Sequelize.STRING,
			allowNull: true
		},
		createdAt: {
			type: Sequelize.DATE,
			allowNull: false,
			defaultValue: Sequelize.fn('now')
		},
		updatedAt: {
			type: Sequelize.DATE
		},
		portalClientesFk: {
			type: Sequelize.INTEGER,
			allowNull: false
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
		criadoPor: {
			type: Sequelize.STRING,
			allowNull: false
		},
		senhaEmail: {
			type: Sequelize.STRING,
			allowNull: true
		},
		hostImap: {
			type: Sequelize.STRING,
			allowNull: true
		},
		portImap: {
			type: Sequelize.INTEGER,
			allowNull: true
		},
		hostSmtp: {
			type: Sequelize.STRING,
			allowNull: true
		},
		portSmtp: {
			type: Sequelize.INTEGER,
			allowNull: true
		},
		assinaturaEmail: {
			type: Sequelize.STRING,
			allowNull: true
		}
	}, { charset: 'utf8', collate: 'utf8_unicode_ci' });
}

export function down(queryInterface) {
	return queryInterface.dropTable('operadores');
}
