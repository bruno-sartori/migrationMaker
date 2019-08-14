export default (sequelize, DataType) => {
	const Departamento = sequelize.define('Departamento',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			nome: {
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
				allowNull: true
			},
			updatedAt: {
				type: DataType.DATE
			}
		},
		{
			tableName: 'departamentos',
			hooks: {
				beforeCreate: (dep) => {
					dep.set('nome', dep.nome.toUpperCase());
				}
			}
		}
	);

	return Departamento;
};
