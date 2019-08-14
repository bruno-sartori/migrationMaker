export default (sequelize, DataType) => {
	const DocumentoEmitido = sequelize.define('DocumentoEmitido',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			documentosTemplateFk: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			fileUploadFk: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			clientesFk: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			atendimentosFk: {
				type: DataType.STRING,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			createdAt: {
				type: DataType.DATE,
				allowNull: false
			},
			updatedAt: {
				type: DataType.DATE
			}
		},
		{
			tableName: 'documentos_emitidos'
		}
	);

	DocumentoEmitido.associate = (models) => {
		models.DocumentoEmitido.belongsTo(models.DocumentoTemplate, {
			onDelete: 'CASCADE',
			foreignKey: 'documentosTemplateFk',
		});

		models.DocumentoEmitido.belongsTo(models.Cliente, {
			onDelete: 'CASCADE',
			foreignKey: 'clientesFk',
		});

		models.DocumentoEmitido.belongsTo(models.Atendimento, {
			onDelete: 'CASCADE',
			foreignKey: 'atendimentosFk',
		});
	};

	return DocumentoEmitido;
};
