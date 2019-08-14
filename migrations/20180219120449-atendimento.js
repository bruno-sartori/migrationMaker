export function up(queryInterface, Sequelize) {
	return queryInterface.createTable('atendimentos', {
		id: {
			type: Sequelize.STRING,
			primaryKey: true,
			autoIncrement: false
		},
		servicoSolicitado: {
			type: Sequelize.STRING,
			allowNull: true
		},
		meta: {
			type: Sequelize.STRING(1000),
			allowNull: false
		},
		status: {
			type: Sequelize.STRING(30),
			allowNull: false,
			defaultValue: 'open'
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
		scheduledAt: {
			type: Sequelize.DATE,
			allowNull: true
		},
		canceledAt: {
			type: Sequelize.DATE,
			allowNull: true
		},
		closedAt: {
			type: Sequelize.DATE,
			allowNull: true
		},
		obs: {
			type: Sequelize.STRING,
			allowNull: true,
		},
		clientesFk: {
			type: Sequelize.INTEGER,
			allowNull: false,
			references: {
				model: 'clientes',
				key: 'id'
			}
		},
		tiposAtendimentoFk: {
			type: Sequelize.INTEGER,
			allowNull: false,
			references: {
				model: 'tipos_atendimentos',
				key: 'id'
			}
		},
		clientesPlanosFk: {
			type: Sequelize.INTEGER,
			allowNull: true,
			references: {
				model: 'clientes_planos',
				key: 'id'
			}
		},
		operadoresFk: {
			type: Sequelize.INTEGER,
			allowNull: false,
			references: {
				model: 'operadores',
				key: 'id'
			}
		}
	}, { charset: 'utf8', collate: 'utf8_unicode_ci' });
}

export function down(queryInterface) {
	return queryInterface.dropTable('atendimentos');
}
