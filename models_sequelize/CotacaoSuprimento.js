export default (sequelize, DataType) => {
	const CotacaoSuprimento = sequelize.define('CotacaoSuprimento',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			quantidade: {
				type: DataType.FLOAT,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			custo: {
				type: DataType.FLOAT,
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
			cotacaoFk: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			suprimentosFk: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			}
		},
		{
			tableName: 'cotacoes_suprimentos'
		}
	);

	return CotacaoSuprimento;
};
