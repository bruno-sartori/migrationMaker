export async function up(queryInterface, Sequelize) {
	await queryInterface.createTable('access_control_values', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		property: {
			type: Sequelize.STRING,
			allowNull: false
		},
		path: {
			type: Sequelize.STRING,
			allowNull: false
		},
		method: {
			type: Sequelize.STRING,
			allowNull: false
		},
		createdAt: {
			type: Sequelize.DATE,
			allowNull: false,
			defaultValue: Sequelize.fn('now')
		},
		updatedAt: {
			type: Sequelize.DATE
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

	await queryInterface.addConstraint('access_control_values', ['operadoresFk', 'path', 'method', 'property'], {
		type: 'unique',
		name: 'accessControlValuesUnique'
	});
}

export function down(queryInterface) {
	return queryInterface.dropTable('access_control_values');
}
