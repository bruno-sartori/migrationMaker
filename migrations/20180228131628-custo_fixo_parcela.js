export function up(queryInterface, Sequelize) {
	return queryInterface.createTable('custo_fixo_parcela', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		numParcela: {
			type: Sequelize.STRING,
			allowNull: false,
			defaultValue: 'C. Fixo'
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
		notaFiscal: {
			type: Sequelize.STRING,
			allowNull: true
		},
		juros: {
			type: Sequelize.FLOAT(15, 3),
			allowNull: true
		},
		historico: {
			type: Sequelize.STRING,
			allowNull: true
		},
		status: {
			type: Sequelize.STRING,
			allowNull: false,
			defaultValue: 'open'
		},
		createdAt: {
			type: Sequelize.DATE,
			allowNull: false,
			defaultValue: Sequelize.fn('now')
		},
		updatedAt: {
			type: Sequelize.DATE
		},
		custoFixoFk: {
			type: Sequelize.INTEGER,
			allowNull: false,
			onDelete: 'CASCADE',
			references: {
				model: 'custo_fixo',
				key: 'id'
			}
		}
	}, { charset: 'utf8', collate: 'utf8_unicode_ci' });
}

export function down(queryInterface) {
	return queryInterface.dropTable('custo_fixo_parcela');
}
