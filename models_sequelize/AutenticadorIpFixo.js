export default (sequelize, DataType) => {
	const AutenticadorIpFixo = sequelize.define('AutenticadorIpFixo',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			ip: {
				type: DataType.STRING(40),
				allowNull: false
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
			federatedIspTipoIpFk: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			autenticadoresFk: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			}
		},
		{
			tableName: 'autenticadores_ip_fixo'
		}
	);

	return AutenticadorIpFixo;
};
