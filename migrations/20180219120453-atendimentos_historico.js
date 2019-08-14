export function up(queryInterface, Sequelize) {
	return queryInterface.createTable('atendimentos_historico', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		descricaoOperador: {
			type: Sequelize.STRING,
			allowNull: true
		},
		descricaoSistema: {
			type: Sequelize.STRING,
			allowNull: false
		},
		tipo: {
			type: Sequelize.STRING,
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
		closedAt: {
			type: Sequelize.DATE,
			allowNull: true
		},
		atendimentosFk: {
			type: Sequelize.STRING,
			allowNull: false,
			onDelete: 'CASCADE',
			references: {
				model: 'atendimentos',
				key: 'id'
			}
		},
		departamentosFk: {
			type: Sequelize.INTEGER,
			allowNull: false,
			references: {
				model: 'departamentos',
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
	return queryInterface.dropTable('atendimentos_historico');
}
