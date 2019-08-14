export default (sequelize, DataType) => {
	const DocumentoTemplate = sequelize.define('DocumentoTemplate',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			nome: {
				type: DataType.STRING(70),
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
			federatedBaseGrupoDocumentosFk: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			status: {
				type: DataType.BOOLEAN,
				allowNull: false,
				defaultValue: true
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
			tableName: 'documentos_template'
		}
	);

	DocumentoTemplate.associate = (models) => {
		models.DocumentoTemplate.belongsTo(models.FileUpload, {
			onDelete: 'CASCADE',
			foreignKey: 'fileUploadFk',
		});
	};

	return DocumentoTemplate;
};
