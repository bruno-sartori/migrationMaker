export default (sequelize, DataType) => {
	const Estado = sequelize.define('Estado',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			estado: {
				type: DataType.STRING(2),
				allowNull: false,
				validate: {
					notEmpty: true,
					len: [2, 2]
				}
			},
			status: {
				type: DataType.BOOLEAN,
				allowNull: true,
				defaultValue: true
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
			tableName: 'estados',
			hooks: {
				beforeCreate: (estado) => {
					estado.set('estado', estado.estado.toUpperCase());
				}
			}
		}
	);

	Estado.upsert = async function (estado, transaction) {
		let response = await this.findOne({ where: { estado } });

		if (response !== null) {
			return response;
		}

		response = await this.create({ estado }, { transaction });
		return response;
	};

	return Estado;
};
