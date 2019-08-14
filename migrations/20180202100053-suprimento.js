export async function up(queryInterface, Sequelize) {
	await queryInterface.createTable('suprimentos', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		nome: {
			type: Sequelize.STRING,
			allowNull: false
		},
		usoVenda: {
			type: Sequelize.BOOLEAN,
			allowNull: false,
			defaultValue: false
		},
		obs: {
			type: Sequelize.STRING,
			allowNull: true
		},
		estoqueMinimo: {
			type: Sequelize.INTEGER,
			allowNull: false
		},
		precoCusto: {
			type: Sequelize.FLOAT(15, 3),
			allowNull: true
		},
		porcentagemLucro: {
			type: Sequelize.FLOAT(15, 2),
			allowNull: true
		},
		precoPraticado: {
			type: Sequelize.FLOAT(15, 2),
			allowNull: true
		},
		status: {
			type: Sequelize.BOOLEAN,
			allowNull: false,
			defaultValue: true
		},
		grupoSuprimentosFk: {
			type: Sequelize.INTEGER,
			allowNull: false,
			references: {
				model: 'grupo_suprimentos',
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

	await queryInterface.addIndex('suprimentos', ['nome']);
}

export function down(queryInterface) {
	return queryInterface.dropTable('suprimentos');
}
