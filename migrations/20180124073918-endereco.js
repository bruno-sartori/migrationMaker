export async function up(queryInterface, Sequelize) {
	await queryInterface.createTable('enderecos', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		numero: {
			type: Sequelize.STRING(15),
			allowNull: true
		},
		complemento: {
			type: Sequelize.STRING,
			allowNull: true
		},
		pontoReferencia: {
			type: Sequelize.STRING,
			allowNull: true
		},
		cep: {
			type: Sequelize.STRING(10),
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
		logradourosFk: {
			type: Sequelize.INTEGER,
			allowNull: false,
			onDelete: 'CASCADE',
			references: {
				model: 'logradouros',
				key: 'id',
			}
		}
	}, { charset: 'utf8', collate: 'utf8_unicode_ci' });

	await queryInterface.addIndex('enderecos', ['numero', 'logradourosFk']);
}

export function down(queryInterface) {
	return queryInterface.dropTable('enderecos');
}
