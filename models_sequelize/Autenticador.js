export default (sequelize, DataType) => {
	const Autenticador = sequelize.define('Autenticador',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			nome: {
				type: DataType.STRING(200),
				allowNull: false
			},
			ip: {
				type: DataType.STRING(40),
				allowNull: false
			},
			porta: {
				type: DataType.INTEGER,
				allowNull: false
			},
			login: {
				type: DataType.STRING(300),
				allowNull: false
			},
			senha: {
				type: DataType.STRING(300),
				allowNull: false
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
			},
			federatedIspAutenticadorHomologadoFk: {
				type: DataType.INTEGER,
				allowNull: false
			}
		},
		{
			tableName: 'autenticadores',
			hooks: {
				beforeCreate: (autenticadores) => {
					autenticadores.set('nome', autenticadores.nome.toUpperCase());
				}
			}
		}
	);

	return Autenticador;
};
