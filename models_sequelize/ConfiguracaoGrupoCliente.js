export default (sequelize, DataType) => {
	const ConfiguracaoGrupoCliente = sequelize.define('ConfiguracaoGrupoCliente',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			grupoClientesFk: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			}
		},
		{
			tableName: 'configuracoes_grupo_cliente'
		}
	);

	return ConfiguracaoGrupoCliente;
};
