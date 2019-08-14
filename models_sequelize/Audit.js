export default (sequelize, DataType) => {
	const Audit = sequelize.define('Audit',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			path: {
				type: DataType.STRING,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			method: {
				type: DataType.STRING,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			body: {
				type: DataType.TEXT,
				allowNull: true
			},
			remoteAddress: {
				type: DataType.STRING,
				allowNull: true
			},
			response: {
				type: DataType.INTEGER,
				allowNull: true
			},
			message: {
				type: DataType.STRING,
				allowNull: true
			},
			acao: {
				type: DataType.STRING,
				allowNull: true
			},
			level: {
				type: DataType.STRING,
				allowNull: true
			},
			ref: {
				type: DataType.STRING,
				allowNull: true
			},
			createdAt: {
				type: DataType.DATE,
				allowNull: false
			},
			updatedAt: {
				type: DataType.DATE
			},
			operadoresFk: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			}
		},
		{
			tableName: 'audit'
		}
	);

	Audit.associate = (models) => {
		models.Audit.belongsTo(models.Operador, {
			onDelete: 'CASCADE',
			foreignKey: 'operadoresFk'
		});
	};

	return Audit;
};
