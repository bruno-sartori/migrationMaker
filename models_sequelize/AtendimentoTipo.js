export default (sequelize, DataType) => {
	const AtendimentoTipo = sequelize.define('AtendimentoTipo',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			meta: {
				type: DataType.STRING(800),
				allowNull: true
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
			tiposAtendimentosFk: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			clientesPlanosFk: {
				type: DataType.INTEGER,
				allowNull: true
			}
		},
		{
			tableName: 'atendimentos_tipos'
		}
	);

	AtendimentoTipo.associate = (models) => {
		models.AtendimentoTipo.belongsTo(models.Atendimento, {
			onDelete: 'CASCADE',
			foreignKey: 'atendimentosFk'
		});

		models.AtendimentoTipo.belongsTo(models.TipoAtendimento, {
			foreignKey: 'tiposAtendimentosFk'
		});

		models.AtendimentoTipo.belongsTo(models.ClientePlano, {
			foreignKey: 'clientesPlanosFk'
		});

		models.AtendimentoTipo.hasMany(models.AtendimentoTipoServico, {
			onDelete: 'CASCADE',
			foreignKey: 'atendimentosTiposFk',
			as: 'servicos'
		});

		models.AtendimentoTipo.hasMany(models.AtendimentoTipoSuprimento, {
			onDelete: 'CASCADE',
			foreignKey: 'atendimentosTiposFk',
			as: 'suprimentos'
		});
	};

	return AtendimentoTipo;
};
