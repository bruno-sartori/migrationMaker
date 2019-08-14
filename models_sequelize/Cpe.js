export default (sequelize, DataType) => {
	const Cpe = sequelize.define('Cpe',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			nome: {
				type: DataType.STRING(200),
				allowNull: true
			},
			tipo: {
				type: DataType.STRING(200),
				allowNull: true
			},
			outro: {
				type: DataType.STRING(200),
				allowNull: true
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
				type: DataType.DATE,
				allowNull: true
			}
		},
		{
			tableName: 'cpe',
			hooks: {
				beforeCreate: (cpe) => {
					cpe.set('nome', cpe.nome.toUpperCase());
				}
			}
		}
	);

	return Cpe;
};
