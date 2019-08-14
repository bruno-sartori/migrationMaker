export default (sequelize, DataType) => {
	const Olt = sequelize.define('Olt',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			nome: {
				type: DataType.STRING(100),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			ip: {
				type: DataType.STRING(20),
				allowNull: true
			},
			porta: {
				type: DataType.STRING(10),
				allowNull: true
			},
			login: {
				type: DataType.STRING(100),
				allowNull: true
			},
			senha: {
				type: DataType.STRING(100),
				allowNull: true
			},
			latitude: {
				type: DataType.STRING(50),
				allowNull: true
			},
			longitude: {
				type: DataType.STRING(50),
				allowNull: true
			},
			gerenciaVlan: {
				type: DataType.STRING,
				allowNull: true
			},
			modeloCircuitId: {
				type: DataType.STRING(200),
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
				type: DataType.DATE,
				allowNull: true
			},
			federatedIspFabricantesFk: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			federatedIspModeloOltFk: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			vlanFk: {
				type: DataType.INTEGER,
				allowNull: true,
				validate: {
					notEmpty: true
				}
			},
			enderecosFk: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			}
		},
		{
			tableName: 'olt',
			hooks: {
				beforeCreate: (olt) => {
					olt.set('nome', olt.nome.toUpperCase());
				}
			}
		}
	);

	Olt.associate = (models) => {
		models.Olt.belongsTo(models.Vlan, {
			foreignKey: 'vlanFk'
		});

		models.Olt.belongsTo(models.Endereco, {
			onDelete: 'CASCADE',
			foreignKey: 'enderecosFk'
		});
	};


	return Olt;
};
