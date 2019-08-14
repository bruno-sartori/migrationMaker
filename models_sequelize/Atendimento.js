export default (sequelize, DataType) => {
	const Atendimento = sequelize.define('Atendimento',
		{
			id: {
				type: DataType.STRING,
				primaryKey: true,
				autoIncrement: false
			},
			servicoSolicitado: {
				type: DataType.STRING,
				allowNull: true
			},
			meta: {
				type: DataType.STRING(1000),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			status: {
				type: DataType.STRING(30),
				alloNull: false,
				validate: {
					isIn: [['open', 'closed', 'scheduled', 'running', 'canceled']]
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
			scheduledAt: {
				type: DataType.DATE,
				allowNull: true
			},
			canceledAt: {
				type: DataType.DATE,
				allowNull: true
			},
			closedAt: {
				type: DataType.DATE,
				allowNull: true
			},
			obs: {
				type: DataType.STRING,
				allowNull: true
			},
			clientesFk: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			tiposAtendimentoFk: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			clientesPlanosFk: {
				type: DataType.INTEGER,
				allowNull: true
			},
			operadoresFk: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			}
		},
		{
			tableName: 'atendimentos'
		}
	);

	Atendimento.associate = (models) => {
		models.Atendimento.belongsTo(models.Cliente, {
			onDelete: 'CASCADE',
			foreignKey: 'clientesFk'
		});

		models.Atendimento.belongsTo(models.TipoAtendimento, {
			foreignKey: 'tiposAtendimentoFk'
		});

		models.Atendimento.belongsTo(models.ClientePlano, {
			foreignKey: 'clientesPlanosFk'
		});

		models.Atendimento.belongsTo(models.Operador, {
			foreignKey: 'operadoresFk'
		});

		models.Atendimento.hasMany(models.AtendimentoHistorico, {
			onDelete: 'CASCADE',
			foreignKey: 'atendimentosFk',
			as: 'historico'
		});

		models.Atendimento.hasMany(models.AtendimentoServico, {
			onDelete: 'CASCADE',
			foreignKey: 'atendimentosFk',
			as: 'servicos'
		});

		models.Atendimento.hasMany(models.AtendimentoSuprimento, {
			onDelete: 'CASCADE',
			foreignKey: 'atendimentosFk',
			as: 'suprimentos'
		});

		models.Atendimento.hasMany(models.AtendimentoAnexo, {
			onDelete: 'CASCADE',
			foreignKey: 'atendimentosFk',
			as: 'anexos2'
		});

		models.Atendimento.hasMany(models.AtendimentoTentativaContato, {
			onDelete: 'CASCADE',
			foreignKey: 'atendimentosFk',
			as: 'tentativasContato'
		});
	};

	return Atendimento;
};
