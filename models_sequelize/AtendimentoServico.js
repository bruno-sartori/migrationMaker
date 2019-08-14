export default (sequelize, DataType) => {
	const AtendimentoServico = sequelize.define('AtendimentoServico',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			incluso: {
				type: DataType.BOOLEAN,
				allowNull: false
			},
			createdAt: {
				type: DataType.DATE,
				allowNull: false
			},
			updatedAt: {
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
			servicosFk: {
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
			tableName: 'atendimentos_servicos'
		}
	);

	AtendimentoServico.associate = (models) => {
		models.AtendimentoServico.belongsTo(models.Atendimento, {
			onDelete: 'CASCADE',
			foreignKey: 'atendimentosFk'
		});

		models.AtendimentoServico.belongsTo(models.Servico, {
			foreignKey: 'servicosFk'
		});

		models.AtendimentoServico.belongsTo(models.Operador, {
			foreignKey: 'operadoresFk'
		});
	};

	return AtendimentoServico;
};
