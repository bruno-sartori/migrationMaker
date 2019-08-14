export default (sequelize, DataType) => {
	const Dio = sequelize.define('Dio',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			nome: {
				type: DataType.STRING,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			numeroBandejas: {
				type: DataType.INTEGER,
				allowNull: true
			},
			numeroPosicoes: {
				type: DataType.INTEGER,
				allowNull: true
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
			}
		},
		{
			tableName: 'dio',
			hooks: {
				beforeCreate: (dio) => {
					dio.set('nome', dio.nome.toUpperCase());
				}
			}
		}
	);

	Dio.associate = (models) => {
		models.Dio.hasMany(models.DioBandeja, {
			onDelete: 'CASCADE',
			foreignKey: 'dioFk',
			as: 'bandejas'
		});
	};

	return Dio;
};
