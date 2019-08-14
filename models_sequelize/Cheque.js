export default (sequelize, DataType) => {
	const Cheque = sequelize.define('Cheque',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			numero: {
				type: DataType.STRING,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			valor: {
				type: DataType.FLOAT(15, 2),
				allowNull: true
			},
			dataEmissao: {
				type: DataType.DATE,
				allowNull: true
			},
			dataPredatado: {
				type: DataType.DATE,
				allowNull: true
			},
			status: {
				type: DataType.BOOLEAN,
				allowNull: false,
				defaultValue: true
			},
			createdAt: {
				type: DataType.DATE,
				allowNull: false
			},
			updatedAt: {
				type: DataType.DATE
			},
			contasBancariasFk: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			empresasFk: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			}
		},
		{
			tableName: 'cheques'
		}
	);

	Cheque.associate = (models) => {
		models.Cheque.belongsTo(models.ContaBancaria, {
			foreignKey: 'contasBancariasFk',
			as: 'ContaBancaria'
		});

		models.Cheque.belongsTo(models.Empresa, {
			foreignKey: 'empresasFk'
		});
	};

	return Cheque;
};
