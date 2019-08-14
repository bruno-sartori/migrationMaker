export default (sequelize, DataType) => {
	const EstoqueLocalFuncionario = sequelize.define('EstoqueLocalFuncionario',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
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
			funcionariosFk: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			estoqueLocalFk: {
				type: DataType.INTEGER,
				allowNull: true,
				validate: {
					notEmpty: true
				}
			}
		},
		{
			tableName: 'estoque_locais_funcionarios',
			hooks: {
				beforeCreate: (estoqueLocalFuncionario) => {
					estoqueLocalFuncionario.set('nome', estoqueLocalFuncionario.nome.toUpperCase());
				}
			}
		}
	);

	return EstoqueLocalFuncionario;
};
