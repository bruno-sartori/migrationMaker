export default (sequelize, DataType) => {
	const MaquinaCartao = sequelize.define('MaquinaCartao',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			login: {
				type: DataType.STRING,
				allowNull: true
			},
			senha: {
				type: DataType.STRING,
				allowNull: true
			},
			obs: {
				type: DataType.STRING,
				allowNull: true
			},
			status: {
				type: DataType.BOOLEAN,
				allowNull: true
			},
			createdAt: {
				type: DataType.DATE,
				allowNull: true
			},
			updatedAt: {
				type: DataType.DATE
			},
			operadora: {
				type: DataType.STRING,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			contasBancariasFk: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
		},
		{
			tableName: 'maquinas_cartao'
		}
	);

	MaquinaCartao.associate = (models) => {
		models.MaquinaCartao.belongsTo(models.ContaBancaria, {
			onDelete: 'CASCADE',
			as: 'ContaBancaria',
			foreignKey: 'contasBancariasFk',
		});
	};

	return MaquinaCartao;
};
