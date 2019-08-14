export default (sequelize, DataType) => {
	const Servico = sequelize.define('Servico',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			nome: {
				type: DataType.STRING(255),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			valor: {
				type: DataType.FLOAT(15, 3),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			status: {
				type: DataType.BOOLEAN,
				allowNull: true
			},
			createdAt: {
				type: DataType.DATE,
				allowNull: true
			},
			updatedAt: {
				type: DataType.DATE
			}
		},
		{
			tableName: 'servicos',
			hooks: {
				beforeCreate: (servico) => {
					servico.set('nome', servico.nome.toUpperCase());
				}
			}
		}
	);

	return Servico;
};
