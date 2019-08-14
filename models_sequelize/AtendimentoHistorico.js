export default (sequelize, DataType) => {
	const AtendimentoHistorico = sequelize.define('AtendimentoHistorico',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			descricaoOperador: {
				type: DataType.STRING,
				allowNull: true
			},
			descricaoSistema: {
				type: DataType.STRING,
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
			tipo: {
				type: DataType.STRING,
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
			closedAt: {
				type: DataType.DATE,
				allowNull: true
			},
			atendimentosFk: {
				type: DataType.STRING,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			departamentosFk: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
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
			tableName: 'atendimentos_historico'
		}
	);

	AtendimentoHistorico.associate = (models) => {
		models.AtendimentoHistorico.belongsTo(models.Atendimento, {
			onDelete: 'CASCADE',
			foreignKey: 'atendimentosFk'
		});

		models.AtendimentoHistorico.belongsTo(models.Operador, {
			foreignKey: 'operadoresFk'
		});

		models.AtendimentoHistorico.belongsTo(models.Departamento, {
			foreignKey: 'departamentosFk'
		});
	};

	return AtendimentoHistorico;
};
