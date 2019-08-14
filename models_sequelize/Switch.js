export default (sequelize, DataType) => {
	const Switch = sequelize.define('Switch',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			nome: {
				type: DataType.STRING(200),
				allowNull: true
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
				type: DataType.DATE,
				allowNull: true
			},
			ispModeloSwitchFk: {
				type: DataType.INTEGER,
				allowNull: true
			}
		},
		{
			tableName: 'switch',
			hooks: {
				beforeCreate: (_switch) => {
					_switch.set('nome', _switch.nome.toUpperCase());
				}
			}
		}
	);

	return Switch;
};
