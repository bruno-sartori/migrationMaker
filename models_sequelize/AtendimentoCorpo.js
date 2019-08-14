export default (sequelize, DataType) => {
	const AtendimentoCorpo = sequelize.define('AtendimentoCorpo',
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
			tableName: 'atendimentos_corpos'
		}
	);

	AtendimentoCorpo.associate = (models) => {
		models.AtendimentoCorpo.belongsTo(models.Atendimento, {
			onDelete: 'CASCADE',
			foreignKey: 'atendimentosFk'
		});

		models.AtendimentoCorpo.belongsTo(models.Operador, {
			foreignKey: 'operadoresFk'
		});

		models.AtendimentoCorpo.belongsTo(models.Departamento, {
			foreignKey: 'departamentosFk'
		});
	};

	return AtendimentoCorpo;
};
