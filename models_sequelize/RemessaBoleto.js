export default (sequelize, DataType) => {
	const RemessaBoleto = sequelize.define('RemessaBoleto',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			quantidadeTitulos: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			valorTitulos: {
				type: DataType.FLOAT,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			startDate: {
				type: DataType.DATE,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			endDate: {
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
			fileUploadFk: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			operadoresFk: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			operadorasBoletoFk: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			retornoFk: {
				type: DataType.INTEGER,
				allowNull: true,
				validate: {
					notEmpty: true
				}
			},
			enviado: {
				type: DataType.BOOLEAN,
				allowNull: false,
				defaultValue: false
			}
		},
		{
			tableName: 'remessa_boleto'
		}
	);

	RemessaBoleto.associate = (models) => {
		models.RemessaBoleto.hasMany(models.ContasReceber, {
			foreignKey: 'boletoRemessaFk',
			as: 'boletos'
		});
	};

	return RemessaBoleto;
};
