export function up(queryInterface, Sequelize) {
	return queryInterface.createTable('custo_variavel_parcela', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		configured: {
			type: Sequelize.BOOLEAN,
			allowNull: false
		},
		tipoPagamento: {
			type: Sequelize.STRING,
			allowNull: false
		},
		numParcela: {
			type: Sequelize.STRING,
			allowNull: false
		},
		dataVencimento: {
			type: Sequelize.DATE,
			allowNull: false
		},
		dataPagamento: {
			type: Sequelize.DATE,
			allowNull: true
		},
		valorParcela: {
			type: Sequelize.FLOAT(15, 2),
			allowNull: false
		},
		valorPago: {
			type: Sequelize.FLOAT(15, 2),
			allowNull: true
		},
		historico: {
			type: Sequelize.STRING,
			allowNull: true
		},
		juros: {
			type: Sequelize.FLOAT(15, 2),
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
		status: {
			type: Sequelize.STRING,
			allowNull: false,
			defaultValue: 'open'
		},
		custoVariavelFk: {
			type: Sequelize.INTEGER,
			allowNull: false,
			onDelete: 'CASCADE',
			references: {
				model: 'custo_variavel',
				key: 'id',
			}
		}
	}, { charset: 'utf8', collate: 'utf8_unicode_ci' });
}

export function down(queryInterface) {
	return queryInterface.dropTable('custo_variavel_parcela');
}
