export async function up(queryInterface, Sequelize) {
	await queryInterface.createTable('access_control2', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		entity: {
			type: Sequelize.STRING,
			allowNull: false
		},
		menu: {
			type: Sequelize.STRING,
			allowNull: false
		},
		submenu: {
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
	}, { charset: 'utf8', collate: 'utf8_unicode_ci' });

	await queryInterface.addConstraint('access_control2', ['entity', 'submenu'], {
		type: 'unique',
		name: 'accessControl2Unique'
	});
}

export function down(queryInterface) {
	return queryInterface.dropTable('access_control2');
}
