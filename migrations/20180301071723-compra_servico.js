export function up(queryInterface, Sequelize) {
	return queryInterface.createTable('compra_servico', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		quantidade: {
			type: Sequelize.FLOAT(15, 2),
			allowNull: true
		},
		valorUnitario: {
			type: Sequelize.FLOAT(15, 2),
			allowNull: false
		},
		valorTotal: {
			type: Sequelize.FLOAT(15, 2),
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
		subgrupoContasFk: {
			type: Sequelize.INTEGER,
			allowNull: false,
			references: {
				model: 'subgrupo_contas',
				key: 'id'
			}
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
	return queryInterface.dropTable('compra_servico');
}
