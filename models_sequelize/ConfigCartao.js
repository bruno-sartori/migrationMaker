export default (sequelize, DataType) => {
	const ConfigCartao = sequelize.define('ConfigCartao',
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
			numeroAutenticacao: {
				type: DataType.STRING,
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
			custoVariavelParcelaFk: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			cartoesFk: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			}
		},
		{
			tableName: 'config_cartao'
		}
	);

	ConfigCartao.associate = (models) => {
		models.ConfigCartao.belongsTo(models.CustoVariavelParcela, {
			onDelete: 'CASCADE',
			foreignKey: 'custoVariavelParcelaFk'
		});
	};

	return ConfigCartao;
};
