export default (sequelize, DataType) => {
	const DioBandeja = sequelize.define('DioBandeja',
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
			dioFk: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			}
		},
		{
			tableName: 'dio_bandeja'
		}
	);

	DioBandeja.associate = (models) => {
		models.DioBandeja.belongsTo(models.Dio, {
			onDelete: 'CASCADE',
			foreignKey: 'dioFk'
		});

		models.DioBandeja.hasMany(models.BandejaPosicao, {
			onDelete: 'CASCADE',
			foreignKey: 'bandejaFk',
			as: 'posicoes'
		});
	};



	return DioBandeja;
};
