export function up(queryInterface, Sequelize) {
	return queryInterface.createTable('cto', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		numero: {
			type: Sequelize.STRING,
			allowNull: false
		},
		latitude: {
			type: Sequelize.STRING(50),
			allowNull: true
		},
		longitude: {
			type: Sequelize.STRING(50),
			allowNull: true
		},
		sinal: {
			type: Sequelize.FLOAT,
			allowNull: false
		},
		sinalMinimo: {
			type: Sequelize.FLOAT,
			allowNull: false
		},
		sinalMaximo: {
			type: Sequelize.FLOAT,
			allowNull: false
		},
		splitagem: {
			type: Sequelize.INTEGER,
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
		},
		posicaoFk: {
			type: Sequelize.INTEGER,
			allowNull: false,
			references: {
				model: 'bandeja_posicao',
				key: 'id'
			}
		}
	}, { charset: 'utf8', collate: 'utf8_unicode_ci' });
}

export function down(queryInterface) {
	return queryInterface.dropTable('cto');
}
