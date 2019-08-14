import bcrypt from 'bcrypt';

export default (sequelize, DataType) => {
	const Operador = sequelize.define('Operador',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			login: {
				type: DataType.STRING,
				allowNull: false,
				unique: true,
				validate: {
					notEmpty: true
				}
			},
			avatar: {
				type: DataType.STRING,
				allowNull: true,
			},
			changedPassword: {
				type: DataType.BOOLEAN,
				allowNull: false,
				defaultValue: false
			},
			senha: {
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
				allowNull: true,
				defaultValue: true
			},
			root: {
				type: DataType.BOOLEAN,
				allowNull: true
			},
			createdAt: {
				type: DataType.DATE,
				allowNull: false
			},
			updatedAt: {
				type: DataType.DATE
			},
			portalClientesFk: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			pessoasFk: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			criadoPor: {
				type: DataType.STRING,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			senhaEmail: {
				type: DataType.STRING,
				allowNull: true
			},
			hostImap: {
				type: DataType.STRING,
				allowNull: true
			},
			portImap: {
				type: DataType.INTEGER,
				allowNull: true
			},
			hostSmtp: {
				type: DataType.STRING,
				allowNull: true
			},
			portSmtp: {
				type: DataType.INTEGER,
				allowNull: true
			},
			assinaturaEmail: {
				type: DataType.STRING,
				allowNull: true
			},
		},
		{
			tableName: 'operadores',
			hooks: {
				beforeCreate: (user) => {
					const salt = bcrypt.genSaltSync();
					user.set('senha', bcrypt.hashSync(user.senha, salt));
				}
			}
		}
	);

	Operador.isPassword = (encodedPassword, password) => bcrypt.compareSync(password, encodedPassword);

	Operador.associate = (models) => {
		models.Operador.hasMany(models.OperadorDepartamento, {
			onDelete: 'CASCADE',
			foreignKey: 'operadoresFk',
			as: 'departamentos'
		});

		models.Operador.belongsTo(models.Pessoa, {
			onDelete: 'CASCADE',
			foreignKey: 'pessoasFk'
		});
	};

	return Operador;
};
