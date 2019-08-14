export default (sequelize, DataType) => {
	const OperadoraBoleto = sequelize.define('OperadoraBoleto',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			convenio: {
				type: DataType.STRING,
				allowNull: true
			},
			carteira: {
				type: DataType.STRING,
				allowNull: true
			},
			obs: {
				type: DataType.STRING,
				allowNull: true
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
			},
			federatedBaseOperadoraBoletoFk: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			contasBancariasFk: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			}
		},
		{
			tableName: 'operadoras_boleto'
		}
	);

	OperadoraBoleto.associate = (models) => {
		models.OperadoraBoleto.belongsTo(models.FederatedBaseOperadoraBoleto, {
			onDelete: 'CASCADE',
			foreignKey: 'federatedBaseOperadoraBoletoFk'
		});

		models.OperadoraBoleto.belongsTo(models.ContaBancaria, {
			onDelete: 'CASCADE',
			foreignKey: 'contasBancariasFk',
			as: 'ContaBancaria',
		});
	};

	return OperadoraBoleto;
};
