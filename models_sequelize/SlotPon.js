export default (sequelize, DataType) => {
	const SlotPon = sequelize.define('SlotPon', {
		id: {
			type: DataType.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		pon: {
			type: DataType.STRING(100),
			allowNull: false,
			validate: {
				notEmpty: true
			}
		},
		status: {
			type: DataType.BOOLEAN,
			allowNull: false
		},
		createdAt: {
			type: DataType.DATE,
			allowNull: false
		},
		updatedAt: {
			type: DataType.DATE,
			allowNull: true
		},
		vlanFk: {
			type: DataType.INTEGER,
			allowNull: true
		},
		slotFk: {
			type: DataType.INTEGER,
			allowNull: false,
			validate: {
				notEmpty: true
			}
		}
	},
		{
			tableName: 'slot_pon'
		}
	);

	SlotPon.associate = (models) => {
		models.SlotPon.belongsTo(models.OltSlot, {
			onDelete: 'CASCADE',
			foreignKey: 'slotFk',
		});

		models.SlotPon.hasMany(models.BandejaPosicao, {
			foreignKey: 'ponFk',
		});
	};

	return SlotPon;
};
