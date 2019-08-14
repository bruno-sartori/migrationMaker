export default (sequelize, DataType) => {
	const Bairro = sequelize.define('Bairro',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			bairro: {
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
			cidadesFk: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			}
		},
		{
			tableName: 'bairros',
			hooks: {
				beforeCreate: (bairro) => {
					bairro.set('bairro', bairro.bairro.toUpperCase());
				}
			}
		}
	);

	Bairro.associate = (models) => {
		models.Bairro.belongsTo(models.Cidade, {
			onDelete: 'CASCADE',
			foreignKey: 'cidadesFk'
		});
	};

	Bairro.upsert = async function (data, transaction) {
		const { bairro, cidadesFk } = data;

		let response = await this.findOne({ where: { bairro, cidadesFk } });

		if (response !== null) {
			return response;
		}

		response = await this.create({ bairro, cidadesFk }, { transaction });
		return response;
	};

	return Bairro;
};
