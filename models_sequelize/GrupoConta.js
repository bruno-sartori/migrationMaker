export default (sequelize, DataType) => {
	const GrupoConta = sequelize.define('GrupoConta',
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
			status: {
				type: DataType.BOOLEAN,
				allowNull: true,
				defaultValue: true
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
			},
			planoContasFk: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			}
		},
		{
			tableName: 'grupo_contas',
			hooks: {
				beforeCreate: (grupoConta) => {
					grupoConta.set('nome', grupoConta.nome.toUpperCase());
				}
			}
		}
	);

	GrupoConta.associate = (models) => {
		models.GrupoConta.belongsTo(models.PlanoConta, {
			as: 'PlanoConta',
			onDelete: 'CASCADE',
			foreignKey: 'planoContasFk'
		});
	};

	return GrupoConta;
};
