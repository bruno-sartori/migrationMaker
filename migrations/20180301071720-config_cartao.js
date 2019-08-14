export function up(queryInterface, Sequelize) {
	return queryInterface.createTable('config_cartao', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		obs: {
			type: Sequelize.STRING,
			allowNull: true
		},
		numeroAutenticacao: {
			type: Sequelize.STRING,
			allowNull: false
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
		custoVariavelParcelaFk: {
			type: Sequelize.INTEGER,
			allowNull: false,
			onDelete: 'CASCADE',
			references: {
				model: 'custo_variavel_parcela',
				key: 'id',
			}
		},
		cartoesFk: {
			type: Sequelize.INTEGER,
			allowNull: false,
			references: {
				model: 'cartoes_empresa',
				key: 'id'
			}
		}
	}, { charset: 'utf8', collate: 'utf8_unicode_ci' });
}

export function down(queryInterface) {
	return queryInterface.dropTable('config_cartao');
}
