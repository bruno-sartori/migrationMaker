export default (sequelize, DataType) => {
	const Vlan = sequelize.define('Vlan',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			nome: {
				type: DataType.STRING(255),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			numero: {
				type: DataType.STRING,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			status: {
				type: DataType.BOOLEAN,
				allowNull: true,
				defaultValue: true
			},
			createdAt: {
				type: DataType.DATE,
				allowNull: false
			},
			updatedAt: {
				type: DataType.DATE
			}
		},
		{
			tableName: 'vlan',
			hooks: {
				beforeCreate: (vlan) => {
					vlan.set('nome', vlan.nome.toUpperCase());
				}
			}
		}
	);

	return Vlan;
};
