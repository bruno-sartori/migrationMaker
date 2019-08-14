export default (sequelize, DataType) => {
	const ConfigDinheiro = sequelize.define('ConfigDinheiro',
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
				type: DataType.DATE
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
			tableName: 'config_dinheiro'
		}
	);

	ConfigDinheiro.associate = (models) => {
		models.ConfigDinheiro.belongsTo(models.CustoVariavelParcela, {
			onDelete: 'CASCADE',
			foreignKey: 'custoVariavelParcelaFk'
		});
	};

	return ConfigDinheiro;
};
