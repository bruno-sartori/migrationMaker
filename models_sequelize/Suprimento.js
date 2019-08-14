export default (sequelize, DataType) => {
	const Suprimento = sequelize.define('Suprimento',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			nome: {
				type: DataType.STRING,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			usoVenda: {
				type: DataType.BOOLEAN,
			},
			obs: {
				type: DataType.STRING,
				allowNull: true,
			},
			estoqueMinimo: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			precoCusto: {
				type: DataType.FLOAT(15, 3),
				allowNull: true,
			},
			porcentagemLucro: {
				type: DataType.FLOAT(15, 2),
				allowNull: true,
			},
			precoPraticado: {
				type: DataType.FLOAT(15, 2),
				allowNull: true,
			},
			status: {
				type: DataType.BOOLEAN,
				allowNull: false,
				defaultValue: true
			},
			grupoSuprimentosFk: {
				type: DataType.INTEGER,
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
				type: DataType.DATE
			}
		},
		{
			tableName: 'suprimentos'
		}
	);

	Suprimento.hook('beforeCreate', (suprimento) => {
		suprimento.nome = suprimento.nome.toUpperCase();
	});

	Suprimento.associate = (models) => {
		models.Suprimento.belongsTo(models.GrupoSuprimento, {
			onDelete: 'CASCADE',
			foreignKey: 'grupoSuprimentosFk'
		});
	};

	return Suprimento;
};
