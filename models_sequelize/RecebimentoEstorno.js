export default (sequelize, DataType) => {
	const RecebimentoEstorno = sequelize.define('RecebimentoEstorno',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			motivo: {
				type: DataType.STRING,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			linha: {
				type: DataType.INTEGER,
				allowNull: true
			},
			dataEstorno: {
				type: DataType.DATE,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			createdAt: {
				type: DataType.DATE,
				allowNull: false
			},
			updatedAt: {
				type: DataType.DATE,
				allowNull: true
			},
			contasReceberFk: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			operadoresFk: {
				type: DataType.INTEGER,
				allowNull: true,
				validate: {
					notEmpty: true
				}
			}
		},
		{
			tableName: 'recebimento_estorno'
		}
	);

	return RecebimentoEstorno;
};
