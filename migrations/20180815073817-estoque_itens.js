export function up(queryInterface, Sequelize) {
	return queryInterface.createTable('estoque_itens', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		estoqueMinimo: {
			type: Sequelize.INTEGER,
			allowNull: true
		},
		estoqueMaximo: {
			type: Sequelize.INTEGER,
			allowNull: true
		},
		quantidade: {
			type: Sequelize.INTEGER,
			allowNull: true
		},
		status: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			defaultValue: true
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
		suprimentosFk: {
			type: Sequelize.INTEGER,
			allowNull: true,
			onDelete: 'CASCADE',
			references: {
				model: 'suprimentos',
				key: 'id'
			}
		},
		estoqueLocalFk: {
			type: Sequelize.INTEGER,
			allowNull: true,
			onDelete: 'CASCADE',
			references: {
				model: 'estoque_locais',
				key: 'id'
			}
		}
	}, { charset: 'utf8', collate: 'utf8_unicode_ci' });
}

export function down(queryInterface) {
	return queryInterface.dropTable('estoque_itens');
}
