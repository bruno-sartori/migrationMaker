export default (sequelize, DataType) => {
	const Logradouro = sequelize.define('Logradouro',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			logradouro: {
				type: DataType.STRING(255),
				allowNull: false,
				validate: {
					notEmpty: true
				}
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
			bairrosFk: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			}
		},
		{
			tableName: 'logradouros',
			hooks: {
				beforeCreate: (logradouro) => {
					logradouro.set('logradouro', logradouro.logradouro.toUpperCase());
				}
			}
		}
	);

	Logradouro.associate = (models) => {
		models.Logradouro.belongsTo(models.Bairro, {
			onDelete: 'CASCADE',
			foreignKey: 'bairrosFk'
		});
	};

	Logradouro.upsert = async function (data, transaction) {
		const { logradouro, bairrosFk } = data;

		let response = await this.findOne({ where: { logradouro, bairrosFk } });

		if (response !== null) {
			return response;
		}

		response = await this.create({ logradouro, bairrosFk }, { transaction });
		return response;
	};

	return Logradouro;
};
