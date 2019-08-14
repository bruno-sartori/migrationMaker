export async function up(queryInterface, Sequelize) {
	await queryInterface.createTable('slot_pon', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		pon: {
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
		slotFk: {
			type: Sequelize.INTEGER,
			allowNull: false,
			references: {
				model: 'olt_slot',
				key: 'id'
			}
		}
	}, { charset: 'utf8', collate: 'utf8_unicode_ci' });

	await queryInterface.addConstraint('slot_pon', ['pon', 'slotFk', 'vlanFk'], {
		type: 'unique',
		name: 'oltSlotUnique'
	});
}

export function down(queryInterface) {
	return queryInterface.dropTable('slot_pon');
}
