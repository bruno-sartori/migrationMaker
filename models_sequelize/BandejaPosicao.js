export default (sequelize, DataType) => {
	const BandejaPosicao = sequelize.define('BandejaPosicao', {
		id: {
			type: DataType.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		posicao: {
			type: DataType.INTEGER,
			allowNull: false,
			validate: {
				notEmpty: true
			}
		},
		ramal: {
			type: DataType.STRING,
			allowNull: true
		},
		descricao: {
			type: DataType.STRING(50),
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
		ponFk: {
			type: DataType.INTEGER,
			allowNull: true
		},
		bandejaFk: {
			type: DataType.INTEGER,
			allowNull: false,
			validate: {
				notEmpty: true
			}
		},
		tiposCoresFk: {
			type: DataType.INTEGER,
			allowNull: true
		}
	},
		{
			tableName: 'bandeja_posicao'
		}
	);

	BandejaPosicao.associate = (models) => {
		models.BandejaPosicao.belongsTo(models.DioBandeja, {
			onDelete: 'CASCADE',
			foreignKey: 'bandejaFk'
		});

		models.BandejaPosicao.belongsTo(models.SlotPon, {
			foreignKey: 'ponFk',
			
		});
	};

	return BandejaPosicao;
};
