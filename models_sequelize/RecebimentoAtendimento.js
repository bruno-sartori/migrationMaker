export default (sequelize, DataType) => {
	const RecebimentoAtendimento = sequelize.define('RecebimentoAtendimento',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			contasReceberFk: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			atendimentosFk: {
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
				type: DataType.DATE
			},
		},
		{
			tableName: 'recebimento_atendimento'
		}
	);


	RecebimentoAtendimento.associate = (models) => {
		models.RecebimentoAtendimento.belongsTo(models.ContasReceber, {
			foreignKey: 'contasReceberFk'
		});

		models.RecebimentoAtendimento.belongsTo(models.Atendimento, {
			foreignKey: 'atendimentosFk'
		});
	};

	return RecebimentoAtendimento;
};
