export default (sequelize, DataType) => {
	const Plano = sequelize.define('Plano',
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
			valor: {
				type: DataType.FLOAT(15, 2),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			download: {
				type: DataType.FLOAT,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			upload: {
				type: DataType.FLOAT,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			periodo: {
				type: DataType.INTEGER,
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
			grupoPlanosFk: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			}
		},
		{
			tableName: 'planos',
			hooks: {
				beforeCreate: (plano) => {
					plano.set('nome', plano.nome.toUpperCase());
				}
			}
		}
	);

	Plano.associate = (models) => {
		models.Plano.hasMany(models.PlanoServico, {
			onDelete: 'CASCADE',
			foreignKey: 'planosFk',
			as: 'servicos'
		});

		models.Plano.belongsTo(models.GrupoPlano, {
			onDelete: 'CASCADE',
			foreignKey: 'grupoPlanosFk'
		});
	};

	return Plano;
};
