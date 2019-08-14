export default (sequelize, DataType) => {
	const TipoAtendimento = sequelize.define('TipoAtendimento',
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
			tableName: 'tipos_atendimentos',
			hooks: {
				beforeCreate: (tipoAtenidmento) => {
					tipoAtenidmento.set('nome', tipoAtenidmento.nome.toUpperCase());
				}
			}
		}
	);

	return TipoAtendimento;
};
