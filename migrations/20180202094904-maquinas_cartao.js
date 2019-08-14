export async function up(queryInterface, Sequelize) {
	await queryInterface.createTable('maquinas_cartao', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		login: {
			type: Sequelize.STRING,
			allowNull: true
		},
		senha: {
			type: Sequelize.STRING,
			allowNull: true
		},
		obs: {
			type: Sequelize.STRING,
			allowNull: true
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
		},
		operadora: {
			type: Sequelize.STRING,
			allowNull: false
		},
		contasBancariasFk: {
			type: Sequelize.INTEGER,
			allowNull: false,
			references: {
				model: 'contas_bancarias',
				key: 'id'
			}
		},
	}, { charset: 'utf8', collate: 'utf8_unicode_ci' });
}

export function down(queryInterface) {
	return queryInterface.dropTable('maquinas_cartao');
}
