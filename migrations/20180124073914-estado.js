export async function up(queryInterface, Sequelize) {
	try {
		await queryInterface.createTable('estados', {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			estado: {
				type: Sequelize.STRING(255),
				allowNull: false
			},
			status: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: true
			},
			createdAt: {
				type: Sequelize.DATE,
				allowNull: false,
				defaultValue: Sequelize.fn('now')
			},
			updatedAt: {
				type: Sequelize.DATE
			}
		}, { charset: 'utf8', collate: 'utf8_unicode_ci' });
	} catch (error) {
		console.error(error);
	}
}

export function down(queryInterface) {
	return queryInterface.dropTable('estados');
}
