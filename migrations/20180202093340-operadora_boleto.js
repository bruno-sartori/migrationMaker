export async function up(queryInterface, Sequelize) {
	await queryInterface.createTable('operadoras_boleto', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		convenio: {
			type: Sequelize.STRING,
			allowNull: true
		},
		carteira: {
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
		federatedBaseOperadoraBoletoFk: {
			type: Sequelize.INTEGER,
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

	await queryInterface.addIndex('operadoras_boleto', ['federatedBaseOperadoraBoletoFk']);
}

export function down(queryInterface) {
	return queryInterface.dropTable('operadoras_boleto');
}
