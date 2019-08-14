export default (sequelize, DataType) => {
	const ContaBancaria = sequelize.define('ContaBancaria',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			agencia: {
				type: DataType.STRING,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			conta: {
				type: DataType.STRING,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			obs: {
				type: DataType.STRING,
				allowNull: true,
			},
			nomeGerente: {
				type: DataType.STRING,
				allowNull: false,
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
			federatedBaseBancoFk: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			enderecosFk: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			}
		},
		{
			tableName: 'contas_bancarias'
		}
	);

	ContaBancaria.associate = (models) => {
		models.ContaBancaria.belongsTo(models.FederatedBaseBanco, {
			onDelete: 'CASCADE',
			foreignKey: 'federatedBaseBancoFk'
		});

		models.ContaBancaria.hasMany(models.ContaBancariaContato, {
			onDelete: 'CASCADE',
			foreignKey: 'contaBancariaFk',
			as: 'contatos'
		});

		models.ContaBancaria.belongsTo(models.Endereco, {
			onDelete: 'CASCADE',
			foreignKey: 'enderecosFk'
		});
	};

	return ContaBancaria;
};
