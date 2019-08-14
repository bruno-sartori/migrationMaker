export default (sequelize, DataType) => {
	const ConfigIndefinido = sequelize.define('ConfigIndefinido',
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
			tableName: 'config_indefinido'
		}
	);

	ConfigIndefinido.associate = (models) => {
		models.ConfigIndefinido.belongsTo(models.CustoVariavelParcela, {
			onDelete: 'CASCADE',
			foreignKey: 'custoVariavelParcelaFk'
		});
	};

	return ConfigIndefinido;
};
