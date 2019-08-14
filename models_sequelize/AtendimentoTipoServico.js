export default (sequelize, DataType) => {
	const AtendimentoTipoServico = sequelize.define('AtendimentoTipoServico',
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
			atendimentosTiposFk: {
				type: DataType.INTEGER,
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
			tableName: 'atendimentos_tipos_servicos'
		}
	);

	AtendimentoTipoServico.associate = (models) => {
		models.AtendimentoTipoServico.belongsTo(models.AtendimentoTipo, {
			onDelete: 'CASCADE',
			foreignKey: 'atendimentosTiposFk'
		});

		models.AtendimentoTipoServico.belongsTo(models.Servico, {
			foreignKey: 'servicosFk'
		});

		models.AtendimentoTipoServico.belongsTo(models.Operador, {
			foreignKey: 'operadoresFk'
		});
	};

	return AtendimentoTipoServico;
};
