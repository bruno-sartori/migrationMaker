export default (sequelize, DataType) => {
	const Transportadora = sequelize.define('Transportadora',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			nomeFantasia: {
				type: DataType.STRING,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			tipoPessoa: {
				type: DataType.STRING,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			obs: {
				type: DataType.STRING,
				allowNull: true
			},
			status: {
				type: DataType.BOOLEAN,
				allowNull: false,
				defaultValue: true
			},
			createdAt: {
				type: DataType.DATE,
				allowNull: false
			},
			updatedAt: {
				type: DataType.DATE
			},
			pessoasFk: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			}
		},
		{
			tableName: 'transportadoras',
			hooks: {
				beforeCreate: (transportadora) => {
					transportadora.set('nomeFantasia', transportadora.nomeFantasia.toUpperCase());
					transportadora.set('tipoPessoa', transportadora.tipoPessoa.toUpperCase());
				}
			}
		}
	);

	Transportadora.associate = (models) => {
		models.Transportadora.belongsTo(models.Pessoa, {
			onDelete: 'CASCADE',
			foreignKey: 'pessoasFk',
		});
	};

	return Transportadora;
};
