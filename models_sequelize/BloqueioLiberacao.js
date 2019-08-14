export default (sequelize, DataType) => {
	const BloqueioLiberacao = sequelize.define('BloqueioLiberacao',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			tipo: {
				type: DataType.STRING,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			totalExecutados: {
				type: DataType.INTEGER,
				allowNull: true
			},
			createdAt: {
				type: DataType.DATE,
				allowNull: false
			},
			updatedAt: {
				type: DataType.DATE,
				allowNull: true
			},
			operadoresFk: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			}
		},
		{
			tableName: 'bloqueio_liberacao'
		}
	);

	BloqueioLiberacao.associate = (models) => {
		models.BloqueioLiberacao.hasMany(models.BloqueioLiberacaoCliente, {
			onDelete: 'CASCADE',
			foreignKey: 'bloqueioLiberacaoFk',
			as: 'clientes'
		});

		models.BloqueioLiberacao.belongsTo(models.Operador, {
			foreignKey: 'operadoresFk'
		});
	};


	return BloqueioLiberacao;
};
