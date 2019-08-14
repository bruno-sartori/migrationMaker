export async function up(queryInterface, Sequelize) {
	await queryInterface.createTable('olt_slot', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		slot: {
			type: Sequelize.STRING(100),
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
		oltFk: {
			type: Sequelize.INTEGER,
			allowNull: false,
			references: {
				model: 'olt',
				key: 'id'
			}
		}
	}, { charset: 'utf8', collate: 'utf8_unicode_ci' });

	await queryInterface.addConstraint('olt_slot', ['slot', 'oltFk', 'vlanFk'], {
		type: 'unique',
		name: 'oltSlotUnique'
	});
}

export function down(queryInterface) {
	return queryInterface.dropTable('olt_slot');
}
