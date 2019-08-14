export default (sequelize, DataType) => {
	const Empresa = sequelize.define('Empresa', {
		id: {
			type: DataType.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		cnpj: {
			type: DataType.STRING(20),
			allowNull: false,
			validate: {
				notEmpty: true
			}
		},
		razaoSocial: {
			type: DataType.STRING,
			allowNull: false,
			validate: {
				notEmpty: true
			}
		},
		nomeFantasia: {
			type: DataType.STRING,
			allowNull: false,
			validate: {
				notEmpty: true
			}
		},
		ie: {
			type: DataType.STRING(20),
			allowNull: false,
			validate: {
				notEmpty: true
			}
		},
		dominio: {
			type: DataType.STRING,
			allowNull: false,
			validate: {
				notEmpty: true
			}
		},
		logoPath: {
			type: DataType.STRING(500),
			allowNull: true
		},
		enderecosFk: {
			type: DataType.INTEGER,
			allowNull: true,
			validate: {
				notEmpty: true
			}
		},
		status: {
			type: DataType.BOOLEAN,
			allowNull: false
		},
		createdAt: {
			type: DataType.DATE,
			allowNull: false
		},
		updatedAt: {
			type: DataType.DATE
		}
	},
		{
			tableName: 'empresas',
			hooks: {
				beforeCreate: (empresa) => {
					empresa.set('razaoSocial', empresa.razaoSocial.toUpperCase());
					empresa.set('nomeFantasia', empresa.nomeFantasia.toUpperCase());
				}
			}
		}
	);


	Empresa.associate = (models) => {
		models.Empresa.hasMany(models.EmpresaContato, {
			onDelete: 'CASCADE',
			foreignKey: 'empresasFk',
			as: 'contatos'
		});

		models.Empresa.belongsTo(models.Endereco, {
			onDelete: 'CASCADE',
			foreignKey: 'enderecosFk'
		});
	};


	return Empresa;
};
