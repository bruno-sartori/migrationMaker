export default (sequelize, DataType) => {
	const Cto = sequelize.define('Cto',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			numero: {
				type: DataType.STRING,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			latitude: {
				type: DataType.STRING(50),
				allowNull: true
			},
			longitude: {
				type: DataType.STRING(50),
				allowNull: true
			},
			sinal: {
				type: DataType.FLOAT,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			sinalMinimo: {
				type: DataType.FLOAT,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			sinalMaximo: {
				type: DataType.FLOAT,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			splitagem: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			status: {
				type: DataType.BOOLEAN,
				allowNull: true
			},
			createdAt: {
				type: DataType.DATE,
				allowNull: false
			},
			updatedAt: {
				type: DataType.DATE,
				allowNull: true
			},
			vlanFk: {
				type: DataType.INTEGER,
				allowNull: true
			},
			enderecosFk: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			posicaoFk: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			}
		},
		{
			tableName: 'cto'
		}
	);

	Cto.associate = (models) => {
		models.Cto.belongsTo(models.Endereco, {
			foreignKey: 'enderecosFk'
		});

		models.Cto.belongsTo(models.Vlan, {
			foreignKey: 'vlanFk'
		});

		models.Cto.belongsTo(models.BandejaPosicao, {
			foreignKey: 'posicaoFk'
		});
	};

	return Cto;
};
