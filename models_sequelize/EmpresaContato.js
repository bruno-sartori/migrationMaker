export default (sequelize, DataType) => {
	const EmpresaContato = sequelize.define('EmpresaContato',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			tipoContato: {
				type: DataType.STRING,
				allowNull: false
			},
			contato: {
				type: DataType.STRING,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			descricao: {
				type: DataType.STRING,
				allowNull: true
			},
			empresasFk: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			status: {
				type: DataType.BOOLEAN,
				allowNull: false,
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
			tableName: 'empresas_contato'
		}
	);

	return EmpresaContato;
};
