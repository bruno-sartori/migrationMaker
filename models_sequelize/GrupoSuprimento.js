export default (sequelize, DataType) => {
	const GrupoSuprimento = sequelize.define('GrupoSuprimento',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			nome: {
				type: DataType.STRING(255),
				allowNull: false
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
			tableName: 'grupo_suprimentos',
			hooks: {
				beforeCreate: (grupoSuprimento) => {
					grupoSuprimento.set('nome', grupoSuprimento.nome.toUpperCase());
				}
			}
		}
	);

	return GrupoSuprimento;
};
