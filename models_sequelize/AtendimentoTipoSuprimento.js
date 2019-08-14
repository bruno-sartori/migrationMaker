export default (sequelize, DataType) => {
	const AtendimentoTipoSuprimento = sequelize.define('AtendimentoTipoSuprimento',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			quantidade: {
				type: DataType.FLOAT(15, 3),
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
			atendimentosTiposFk: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			suprimentosFk: {
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
			tableName: 'atendimentos_tipos_suprimentos'
		}
	);

	AtendimentoTipoSuprimento.associate = (models) => {
		models.AtendimentoTipoSuprimento.belongsTo(models.AtendimentoTipo, {
			onDelete: 'CASCADE',
			foreignKey: 'atendimentosTiposFk'
		});

		models.AtendimentoTipoSuprimento.belongsTo(models.Suprimento, {
			foreignKey: 'suprimentosFk'
		});

		models.AtendimentoTipoSuprimento.belongsTo(models.Operador, {
			foreignKey: 'operadoresFk'
		});
	};


	return AtendimentoTipoSuprimento;
};
