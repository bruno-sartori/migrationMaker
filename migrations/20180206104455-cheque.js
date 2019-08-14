export function up(queryInterface, Sequelize) {
	return queryInterface.createTable('cheques', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		numero: {
			type: Sequelize.STRING,
			allowNull: false,
			unique: true
		},
		valor: {
			type: Sequelize.FLOAT(15, 2),
			allowNull: true
		},
		dataEmissao: {
			type: Sequelize.DATE,
			allowNull: true
		},
		dataPredatado: {
			type: Sequelize.DATE,
			allowNull: true
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
		contasBancariasFk: {
			type: Sequelize.INTEGER,
			allowNull: false,
			references: {
				model: 'contas_bancarias',
				key: 'id'
			}
		},
		empresasFk: {
			type: Sequelize.INTEGER,
			allowNull: false,
			references: {
				model: 'empresas',
				key: 'id'
			}
		}
	}, { charset: 'utf8', collate: 'utf8_unicode_ci' });
}

export function down(queryInterface) {
	return queryInterface.dropTable('cheques');
}
