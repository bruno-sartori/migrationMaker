export default (sequelize, DataType) => {
	const GrupoAnexo = sequelize.define('GrupoAnexo',
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
			tableName: 'grupo_anexo',
			hooks: {
				beforeCreate: (grupoAnexo) => {
					grupoAnexo.set('nome', grupoAnexo.nome.toUpperCase());
				}
			}
		}
	);

	return GrupoAnexo;
};
