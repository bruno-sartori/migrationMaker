export function up(queryInterface, Sequelize) {
	return queryInterface.createTable('clientes_planos', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		status: {
			type: Sequelize.BOOLEAN,
			allowNull: false,
			defaultValue: false
		},
		createdAt: {
			type: Sequelize.DATE,
			allowNull: false,
			defaultValue: Sequelize.fn('now')
		},
		updatedAt: {
			type: Sequelize.DATE
		},
		clientesFk: {
			type: Sequelize.INTEGER,
			allowNull: false,
			onDelete: 'CASCADE',
			references: {
				model: 'clientes',
				key: 'id'
			}
		},
		atendimentosFk: {
			type: Sequelize.STRING,
			allowNull: true
		},
		conectividadeFk: {
			type: Sequelize.INTEGER,
			allowNull: true,
			references: {
				model: 'conectividade',
				key: 'id'
			}
		},
		enderecosFk: {
			type: Sequelize.INTEGER,
			allowNull: false,
			references: {
				model: 'enderecos',
				key: 'id'
			}
		},
		planosFk: {
			type: Sequelize.INTEGER,
			allowNull: false,
			references: {
				model: 'planos',
				key: 'id'
			}
		}
	}, { charset: 'utf8', collate: 'utf8_unicode_ci' });
}

export function down(queryInterface) {
	return queryInterface.dropTable('clientes_planos');
}
