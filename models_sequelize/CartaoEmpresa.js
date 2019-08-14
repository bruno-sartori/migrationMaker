export default (sequelize, DataType) => {
	const CartaoEmpresa = sequelize.define('CartaoEmpresa',
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
			status: {
				type: DataType.BOOLEAN,
				allowNull: true,
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
			}
		},
		{
			tableName: 'cartoes_empresa'
		}
	);

	CartaoEmpresa.associate = (models) => {
		models.CartaoEmpresa.belongsTo(models.ContaBancaria, {
			onDelete: 'CASCADE',
			foreignKey: 'contasBancariasFk',
			as: 'ContaBancaria'
		});
	};

	return CartaoEmpresa;
};
