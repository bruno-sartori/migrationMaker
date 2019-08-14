export default (sequelize, DataType) => {
	const Onu = sequelize.define('Onu',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			login: {
				type: DataType.STRING(100),
				allowNull: true
			},
			senha: {
				type: DataType.STRING(100),
				allowNull: true
			},
			porta: {
				type: DataType.STRING(10),
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
			},
			federatedIspModeloOnuFk: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			}
		},
		{
			tableName: 'onu'
		}
	);

	return Onu;
};
