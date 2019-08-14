export function up(queryInterface, Sequelize) {
	return queryInterface.createTable('estoque_locais', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		nome: {
			type: Sequelize.STRING,
			allowNull: false
		},
		principal: {
			type: Sequelize.BOOLEAN,
			allowNull: false
		},
		tipoLocal: {
			type: Sequelize.STRING,
			allowNull: false
		},
		veiculoMarca: {
			type: Sequelize.STRING,
			allowNull: true
		},
		veiculoModelo: {
			type: Sequelize.STRING,
			allowNull: true
		},
		veiculoPlaca: {
			type: Sequelize.STRING,
			allowNull: true
		},
		veiculoRenavam: {
			type: Sequelize.STRING,
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
		enderecosFk: {
			type: Sequelize.INTEGER,
			allowNull: true,
			references: {
				model: 'enderecos',
				key: 'id'
			}
		}
	}, { charset: 'utf8', collate: 'utf8_unicode_ci' });
}

export function down(queryInterface) {
	return queryInterface.dropTable('estoque_locais');
}
