export default (sequelize, DataType) => {
	const ConfigCheque = sequelize.define('ConfigCheque',
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
			dataEmissao: {
				type: DataType.DATE,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			dataPredatado: {
				type: DataType.DATE,
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
			},
			chequesFk: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			}
		},
		{
			tableName: 'config_cheque'
		}
	);


	ConfigCheque.associate = (models) => {
		models.ConfigCheque.belongsTo(models.CustoVariavelParcela, {
			onDelete: 'CASCADE',
			foreignKey: 'custoVariavelParcelaFk'
		});
	};

	return ConfigCheque;
};
