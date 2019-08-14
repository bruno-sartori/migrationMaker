export default (sequelize, DataType) => {
	const CtoCliente = sequelize.define('CtoCliente',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
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
			ctoFk: {
				type: DataType.INTEGER,
				allowNull: false,
				references: {
					model: 'cto',
					key: 'id'
				}
			},
			clientesFk: {
				type: DataType.INTEGER,
				allowNull: false,
				references: {
					model: 'clientes',
					key: 'id'
				}
			}
		},
		{
			tableName: 'cto_clientes'
		}
	);

	return CtoCliente;
};
