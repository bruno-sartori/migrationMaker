export default (sequelize, DataType) => {
	const ClientePlano = sequelize.define('ClientePlano',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
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
			clientesFk: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			atendimentosFk: {
				type: DataType.STRING,
				allowNull: true
			},
			conectividadeFk: {
				type: DataType.INTEGER,
				allowNull: true,
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
			},
			planosFk: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			}
		},
		{
			tableName: 'clientes_planos'
		}
	);

	ClientePlano.associate = (models) => {
		models.ClientePlano.belongsTo(models.Cliente, {
			foreignKey: 'clientesFk'
		});

		models.ClientePlano.belongsTo(models.Plano, {
			foreignKey: 'planosFk',
			as: 'plano'
		});

		models.ClientePlano.belongsTo(models.Endereco, {
			foreignKey: 'enderecosFk'
		});

		models.ClientePlano.belongsTo(models.Conectividade, {
			foreignKey: 'conectividadeFk'
		});

		models.ClientePlano.belongsTo(models.Atendimento, {
			foreignKey: 'atendimentosFk'
		});
	};

	return ClientePlano;
};
