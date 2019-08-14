export async function up(queryInterface, Sequelize) {
	await queryInterface.createTable('bandeja_posicao', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		posicao: {
			type: Sequelize.INTEGER,
			allowNull: false
		},
		ramal: {
			type: Sequelize.STRING,
			allowNull: true
		},
		descricao: {
			type: Sequelize.STRING(50),
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
		ponFk: {
			type: Sequelize.INTEGER,
			allowNull: true,
			onDelete: 'CASCADE',
			references: {
				model: 'slot_pon',
				key: 'id',
			}
		},
		bandejaFk: {
			type: Sequelize.INTEGER,
			allowNull: false,
			onDelete: 'CASCADE',
			references: {
				model: 'dio_bandeja',
				key: 'id',
			}
		},
		tiposCoresFk: {
			type: Sequelize.INTEGER,
		}
	}, { charset: 'utf8', collate: 'utf8_unicode_ci' });

	await queryInterface.addConstraint('bandeja_posicao', ['posicao', 'bandejaFk'], {
		type: 'unique',
		name: 'bandejaPosicaoUnique'
	});
}

export function down(queryInterface) {
	return queryInterface.dropTable('bandeja_posicao');
}
