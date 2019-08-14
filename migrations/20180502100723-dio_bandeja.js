export function up(queryInterface, Sequelize) {
	return queryInterface.createTable('dio_bandeja', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		numero: {
			type: Sequelize.STRING,
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
		dioFk: {
			type: Sequelize.INTEGER,
			allowNull: false,
			onDelete: 'CASCADE',
			references: {
				model: 'dio',
				key: 'id',
			}
		}
	}, { charset: 'utf8', collate: 'utf8_unicode_ci' });
}

export function down(queryInterface) {
	return queryInterface.dropTable('dio_bandeja');
}
