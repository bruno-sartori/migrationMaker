export async function up(queryInterface, Sequelize) {
	await queryInterface.createTable('pessoas', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		nome: {
			type: Sequelize.STRING,
			allowNull: true
		},
		cpfCnpj: {
			type: Sequelize.STRING(18),
			allowNull: true,
			unique: true
		},
		rgIe: {
			type: Sequelize.STRING(20),
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
		enderecosFk: {
			type: Sequelize.INTEGER,
			allowNull: false,
			references: {
				model: 'enderecos',
				key: 'id'
			}
		}
	}, {
		charset: 'utf8',
		collate: 'utf8_unicode_ci', 
	});
}

export function down(queryInterface) {
	return queryInterface.dropTable('pessoas');
}
