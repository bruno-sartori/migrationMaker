export default (sequelize, DataType) => {
	const SubgrupoConta = sequelize.define('SubgrupoConta',
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
				allowNull: false
			},
			updatedAt: {
				type: DataType.DATE
			},
			grupoContasFk: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			}
		},
		{
			tableName: 'subgrupo_contas',
			hooks: {
				beforeCreate: (subgrupoConta) => {
					subgrupoConta.set('nome', subgrupoConta.nome.toUpperCase());
				}
			}
		}
	);

	SubgrupoConta.associate = (models) => {
		models.SubgrupoConta.belongsTo(models.GrupoConta, {
			as: 'GrupoConta',
			onDelete: 'CASCADE',
			foreignKey: 'grupoContasFk'
		});
	};

	return SubgrupoConta;
};
