export default (sequelize, DataType) => {
	const Funcionario = sequelize.define('Funcionario',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			dataAdmissao: {
				type: DataType.DATE,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			dataNascimento: {
				type: DataType.DATE,
				allowNull: true
			},
			carteiraNumero: {
				type: DataType.STRING,
				allowNull: true
			},
			carteiraSerie: {
				type: DataType.STRING,
				allowNull: true
			},
			cargo: {
				type: DataType.STRING,
				allowNull: true
			},
			pis: {
				type: DataType.STRING,
				allowNull: true
			},
			agencia: {
				type: DataType.STRING,
				allowNull: true
			},
			conta: {
				type: DataType.STRING,
				allowNull: true
			},
			obs: {
				type: DataType.STRING,
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
			pessoasFk: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			federatedBaseBancoFk: {
				type: DataType.INTEGER,
				allowNull: true
			}
		},
		{
			tableName: 'funcionarios',
		}
	);

	Funcionario.associate = (models) => {
		models.Funcionario.belongsTo(models.Pessoa, {
			onDelete: 'CASCADE',
			foreignKey: 'pessoasFk',
		});
	};

	return Funcionario;
};
