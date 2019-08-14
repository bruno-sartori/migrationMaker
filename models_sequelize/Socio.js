export default (sequelize, DataType) => {
	const Socio = sequelize.define('Socio',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			dataNascimento: {
				type: DataType.DATE,
				allowNull: true
			},
			agencia: {
				type: DataType.STRING,
				allowNull: true
			},
			conta: {
				type: DataType.STRING,
				allowNull: true
			},
			obs: {
				type: DataType.STRING,
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
				type: DataType.DATE
			},
			pessoasFk: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			federatedBaseBancoFk: {
				type: DataType.INTEGER,
				allowNull: true
			},
		},
		{
			tableName: 'socios'
		}
	);


	Socio.associate = (models) => {
		models.Socio.belongsTo(models.Pessoa, {
			onDelete: 'CASCADE',
			foreignKey: 'pessoasFk',
		});
	};

	return Socio;
};
