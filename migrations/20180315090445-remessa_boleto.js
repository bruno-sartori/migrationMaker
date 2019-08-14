export function up(queryInterface, Sequelize) {
	return queryInterface.createTable('remessa_boleto', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		quantidadeTitulos: {
			type: Sequelize.INTEGER,
			allowNull: false
		},
		valorTitulos: {
			type: Sequelize.FLOAT,
			allowNull: false
		},
		startDate: {
			type: Sequelize.DATE,
			allowNull: false
		},
		endDate: {
			type: Sequelize.DATE,
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
		fileUploadFk: {
			type: Sequelize.INTEGER,
			allowNull: false,
			references: {
				model: 'file_upload',
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
		},
		operadorasBoletoFk: {
			type: Sequelize.INTEGER,
			allowNull: false,
			references: {
				model: 'operadoras_boleto',
				key: 'id'
			}
		},
		retornoFk: {
			type: Sequelize.INTEGER,
			allowNull: true,
			references: {
				model: 'retorno_boleto',
				key: 'id'
			}
		},
		enviado: {
			type: Sequelize.BOOLEAN,
			allowNull: false,
			defaultValue: false
		}
	}, { charset: 'utf8', collate: 'utf8_unicode_ci' });
}

export function down(queryInterface) {
	return queryInterface.dropTable('remessa_boleto');
}
