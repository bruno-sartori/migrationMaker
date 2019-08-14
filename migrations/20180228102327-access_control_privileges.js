export async function up(queryInterface, Sequelize) {
	await queryInterface.createTable('access_control_privileges', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		privilege: {
			type: Sequelize.STRING,
			allowNull: false
		},
		value: {
			type: Sequelize.BOOLEAN,
			allowNull: false,
		},
		valuesRestriction: {
			type: Sequelize.STRING,
			allowNull: true
		},
		createdAt: {
			type: Sequelize.DATE,
			allowNull: false,
			defaultValue: Sequelize.fn('now')
		},
		updatedAt: {
			type: Sequelize.DATE
		},
		accessControlFk: {
			type: Sequelize.INTEGER,
			allowNull: false,
			onDelete: 'CASCADE',
			references: {
				model: 'access_control2',
				key: 'id'
			}
		},
		operadoresFk: {
			type: Sequelize.INTEGER,
			allowNull: false,
			onDelete: 'CASCADE',
			references: {
				model: 'operadores',
				key: 'id',
			}
		}
	}, { charset: 'utf8', collate: 'utf8_unicode_ci' });

	await queryInterface.addConstraint('access_control_privileges', ['operadoresFk', 'accessControlFk', 'privilege'], {
		type: 'unique',
		name: 'accessControlPrivilegesUnique'
	});
}

export function down(queryInterface) {
	return queryInterface.dropTable('access_control_privileges');
}
