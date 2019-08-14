export default (sequelize, DataType) => {
	const BloqueioLiberacaoCliente = sequelize.define('BloqueioLiberacaoCliente',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			createdAt: {
				type: DataType.DATE,
				allowNull: false
			},
			updatedAt: {
				type: DataType.DATE,
				allowNull: true
			},
			bloqueioLiberacaoFk: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			clientesFk: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			}
		},
		{
			tableName: 'bloqueio_liberacao_clientes'
		}
	);


	BloqueioLiberacaoCliente.associate = (models) => {
		models.BloqueioLiberacaoCliente.belongsTo(models.BloqueioLiberacao, {
			foreignKey: 'bloqueioLiberacaoFk'
		});

		models.BloqueioLiberacaoCliente.belongsTo(models.Cliente, {
			foreignKey: 'clientesFk'
		});
	};

	return BloqueioLiberacaoCliente;
};
