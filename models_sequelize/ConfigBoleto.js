export default (sequelize, DataType) => {
	const ConfigBoleto = sequelize.define('ConfigBoleto',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			obs: {
				type: DataType.STRING,
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
			custoVariavelParcelaFk: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			}
		},
		{
			tableName: 'config_boleto'
		}
	);

	ConfigBoleto.associate = (models) => {
		models.ConfigBoleto.belongsTo(models.CustoVariavelParcela, {
			onDelete: 'CASCADE',
			foreignKey: 'custoVariavelParcelaFk'
		});
	};

	return ConfigBoleto;
};
