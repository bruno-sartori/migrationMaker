export default (sequelize, DataType) => {
	const PlanoConta = sequelize.define('PlanoConta',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			nome: {
				type: DataType.STRING(255),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			atributo: {
				type: DataType.STRING(1),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			viewCustoVariavel: {
				type: DataType.BOOLEAN,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			viewCustoFixo: {
				type: DataType.BOOLEAN,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			createdAt: {
				type: DataType.DATE,
				allowNull: true
			},
			updatedAt: {
				type: DataType.DATE
			}
		},
		{
			tableName: 'plano_contas',
			hooks: {
				beforeCreate: (planoConta) => {
					planoConta.set('nome', planoConta.nome.toUpperCase());
				}
			}
		}
	);

	return PlanoConta;
};
