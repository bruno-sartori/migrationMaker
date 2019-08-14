export async function up(queryInterface, Sequelize) {
	await queryInterface.createTable('access_control', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
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
			onDelete: 'CASCADE',
			references: {
				model: 'operadores',
				key: 'id',
			}
		}
	}, { charset: 'utf8', collate: 'utf8_unicode_ci' });

	await queryInterface.addConstraint('access_control', ['operadoresFk', 'path', 'method'], {
		type: 'unique',
		name: 'accessControlUnique'
	});
}

export function down(queryInterface) {
	return queryInterface.dropTable('access_control');
}
