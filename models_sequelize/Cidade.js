export default (sequelize, DataType) => {
	const Cidade = sequelize.define('Cidade',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			cidade: {
				type: DataType.STRING(255),
				allowNull: false,
				validate: {
					notEmpty: true
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
			},
			estadosFk: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			}
		},
		{
			tableName: 'cidades',
			hooks: {
				beforeCreate: (cidade) => {
					cidade.set('cidade', cidade.cidade.toUpperCase());
				}
			}
		}
	);

	Cidade.associate = (models) => {
		models.Cidade.belongsTo(models.Estado, {
			onDelete: 'CASCADE',
			foreignKey: 'estadosFk'
		});
	};

	Cidade.upsert = async function(data, transaction) {
		const { cidade, estadosFk } = data;

		let response = await this.findOne({ where: { cidade, estadosFk } });

		if (response !== null) {
			return response;
		}

		response = await this.create({ cidade, estadosFk }, { transaction });
		return response;
	};

	return Cidade;
};
