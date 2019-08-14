export default (sequelize, DataType) => {
	const Endereco = sequelize.define('Endereco',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			numero: {
				type: DataType.INTEGER(5),
				allowNull: true
			},
			complemento: {
				type: DataType.STRING,
				allowNull: true
			},
			pontoReferencia: {
				type: DataType.STRING,
				allowNull: true
			},
			cep: {
				type: DataType.STRING(10),
				allowNull: false,
				validate: {
					notEmpty: true
				}
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
				type: DataType.DATE
			},
			logradourosFk: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			}
		},
		{
			tableName: 'enderecos'
		}
	);

	Endereco.associate = (models) => {
		models.Endereco.belongsTo(models.Logradouro, {
			onDelete: 'CASCADE',
			foreignKey: 'logradourosFk'
		});
	};

	Endereco.createLocal = async function(db, data, transaction) {
		const { Estado, Cidade, Bairro, Logradouro } = db.models;
		const { estado, cidade, bairro, logradouro, numero, complemento, pontoReferencia, cep } = data;

		let _endereco = await this.findOne({ where: { numero, complemento, pontoReferencia, cep } });
		let _logradouro;

		if (_endereco !== null) {
			_logradouro = await Logradouro.findOne({ where: { id: _endereco.logradourosFk, logradouro } });

			if (_logradouro !== null) {
				return _endereco;
			}
		}

		const _estado = await Estado.upsert(estado, transaction);
		const _cidade = await Cidade.upsert({ cidade, estadosFk: _estado.id }, transaction);
		const _bairro = await Bairro.upsert({ bairro, cidadesFk: _cidade.id }, transaction);
		_logradouro = await Logradouro.upsert({ logradouro, bairrosFk: _bairro.id }, transaction);

		_endereco = await this.create({
			numero, complemento, pontoReferencia, cep, logradourosFk: _logradouro.id
		}, { transaction });

		return _endereco;
	};

	Endereco.getLocal = async function(db, id) {
		const response = await db.query(
			'select e.*, l.logradouro, e.logradourosFk, b.bairro, l.bairrosFk, c.cidade, b.cidadesFk, u.estado, c.estadosFk from enderecos e ' +
			'left join logradouros l on l.id = e.logradourosFk left join bairros b on b.id = l.bairrosFk ' +
			'left join cidades c on c.id = b.cidadesFk left join estados u on u.id = c.estadosFk where e.id = ?',
			{ replacements: [id], type: db.QueryTypes.SELECT }
		);
		return response[0];
	};

	return Endereco;
};
