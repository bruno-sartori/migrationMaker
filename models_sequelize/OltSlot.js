export default (sequelize, DataType) => {
	const OltSlot = sequelize.define('OltSlot',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			slot: {
				type: DataType.STRING(100),
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
				allowNull: false
			},
			updatedAt: {
				type: DataType.DATE,
				allowNull: true
			},
			vlanFk: {
				type: DataType.INTEGER,
				allowNull: true,
				validate: {
					notEmpty: true
				}
			},
			oltFk: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			}
		},
		{
			tableName: 'olt_slot'
		}
	);

	OltSlot.associate = (models) => {
		models.OltSlot.belongsTo(models.Olt, {
			onDelete: 'CASCADE',
			foreignKey: 'oltFk',
		});

		models.OltSlot.hasMany(models.SlotPon, {
			onDelete: 'CASCADE',
			foreignKey: 'slotFk',
			as: 'pons'
		});
	};

	return OltSlot;
};
