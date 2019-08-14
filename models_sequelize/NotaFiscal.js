export default (sequelize, DataType) => {
	const NotaFiscal = sequelize.define('NotaFiscal',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			descricao: {
				type: DataType.STRING,
				allowNull: false
			},
			referencia: {
				type: DataType.STRING,
				allowNull: false
			},
			modelo: {
				type: DataType.INTEGER(2),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			createdAt: {
				type: DataType.DATE,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			updatedAt: {
				type: DataType.DATE,
				allowNull: true
			}
		},
		{
			tableName: 'nota_fiscal'
		}
	);

	return NotaFiscal;
};
