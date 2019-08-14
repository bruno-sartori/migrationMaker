export function up(queryInterface, Sequelize) {
	return queryInterface.createTable('olt', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		nome: {
			type: Sequelize.STRING(100),
			allowNull: false
		},
		ip: {
			type: Sequelize.STRING(20),
			allowNull: false
		},
		porta: {
			type: Sequelize.STRING(10),
			allowNull: false
		},
		login: {
			type: Sequelize.STRING(100),
			allowNull: false
		},
		senha: {
			type: Sequelize.STRING(100),
			allowNull: false
		},
		latitude: {
			type: Sequelize.STRING(50),
			allowNull: false
		},
		longitude: {
			type: Sequelize.STRING(50),
			allowNull: false
		},
		gerenciaVlan: {
			type: Sequelize.STRING,
			allowNull: false
		},
		modeloCircuitId: {
			type: Sequelize.STRING(200),
			allowNull: false
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
		federatedIspFabricantesFk: {
			type: Sequelize.INTEGER,
			allowNull: false
		},
		federatedIspModeloOltFk: {
			type: Sequelize.INTEGER,
			allowNull: false
		},
		vlanFk: {
			type: Sequelize.INTEGER,
			allowNull: true,
			references: {
				model: 'vlan',
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
		}
	}, { charset: 'utf8', collate: 'utf8_unicode_ci' });
}

export function down(queryInterface) {
	return queryInterface.dropTable('olt');
}
