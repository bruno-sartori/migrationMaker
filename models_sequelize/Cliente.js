export default (sequelize, DataType) => {
	const Cliente = sequelize.define('Cliente',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			tipoPessoa: {
				type: DataType.STRING,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			nomeFantasia: {
				type: DataType.STRING,
				allowNull: true
			},
			dataNascimento: {
				type: DataType.DATE,
				allowNull: true
			},
			tipoPagamento: {
				type: DataType.STRING,
				allowNull: true
			},
			tipoGeracaoBoleto: {
				type: DataType.STRING,
				allowNull: true
			},
			loginCentral: {
				type: DataType.STRING,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			obs: {
				type: DataType.STRING,
				allowNull: true
			},
			status: {
				type: DataType.STRING,
				allowNull: false,
				validate: {
					notEmpty: true,
					isIn: [['LIBERADO', 'BLOQUEADO', 'DESATIVADO']]
				}
			},
			blackList: {
				type: DataType.BOOLEAN,
				allowNull: true,
				defaultValue: false
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
			enderecosFkCobranca: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			grupoClientesFk: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			diasPagamentoPlanoFk: {
				type: DataType.INTEGER,
				allowNull: true
			}
		},
		{
			tableName: 'clientes'
		}
	);

	Cliente.associate = (models) => {
		models.Cliente.hasMany(models.ClientePlano, {
			onDelete: 'CASCADE',
			foreignKey: 'clientesFk',
			as: 'planos'
		});

		models.Cliente.belongsTo(models.Pessoa, {
			foreignKey: 'pessoasFk'
		});

		models.Cliente.belongsTo(models.GrupoCliente, {
			foreignKey: 'grupoClientesFk'
		});

		models.Cliente.belongsTo(models.ConfiguracaoDiaPagamentoPlano, {
			foreignKey: 'diasPagamentoPlanoFk'
		});

		models.Cliente.belongsTo(models.Endereco, {
			foreignKey: 'enderecosFkCobranca'
		});
	};


	return Cliente;
};
