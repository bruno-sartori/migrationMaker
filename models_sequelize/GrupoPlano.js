export default (sequelize, DataType) => {
	const GrupoPlano = sequelize.define('GrupoPlano',
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
			vlanFk: {
				type: DataType.INTEGER,
				allowNull: true
			},
			status: {
				type: DataType.BOOLEAN,
				allowNull: true,
				defaultValue: true
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
			tableName: 'grupo_planos',
			hooks: {
				beforeCreate: (grupoPlano) => {
					grupoPlano.set('nome', grupoPlano.nome.toUpperCase());
				}
			}
		}
	);

	GrupoPlano.associate = (models) => {
		models.GrupoPlano.belongsTo(models.Vlan, {
			as: 'Vlan',
			onDelete: 'CASCADE',
			foreignKey: 'vlanFk'
		});
	};

	return GrupoPlano;
};
