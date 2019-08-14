export default (sequelize, DataType) => {
	const GrupoCliente = sequelize.define('GrupoCliente',
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
			tableName: 'grupo_clientes',
			hooks: {
				beforeCreate: (grupoCliente) => {
					grupoCliente.set('nome', grupoCliente.nome.toUpperCase());
				}
			}
		}
	);

	GrupoCliente.associate = (models) => {
		models.GrupoCliente.hasMany(models.Cliente, {
			foreignKey: 'grupoClientesFk',
			as: 'clientes'
		});
	};

	return GrupoCliente;
};
