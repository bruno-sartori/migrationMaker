import CpfCnpjValidator from "../util/CpfCnpjValidator";

export default (sequelize, DataType) => {
	const Pessoa = sequelize.define('Pessoa',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			nome: {
				type: DataType.STRING,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			cpfCnpj: {
				type: DataType.STRING(18),
				allowNull: false,
				unique: true,
				validate: {
					notEmpty: true
				}
			},
			rgIe: {
				type: DataType.STRING(20),
				allowNull: true
			},
			createdAt: {
				type: DataType.DATE,
				allowNull: false
			},
			updatedAt: {
				type: DataType.DATE
			},
			enderecosFk: {
				type: DataType.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			}
		},
		{
			tableName: 'pessoas',
			hooks: {
				beforeCreate: (pessoa) => {
					pessoa.set('nome', pessoa.nome.toUpperCase());
				}
			}
		}
	);

	Pessoa.associate = (models) => {
		models.Pessoa.hasMany(models.PessoaContato, {
			onDelete: 'CASCADE',
			foreignKey: 'pessoasFk',
			as: 'contatos'
		});

		models.Pessoa.belongsTo(models.Endereco, {
			onDelete: 'CASCADE',
			foreignKey: 'enderecosFk'
		});
	};

	Pessoa.upsert = async function(data, transaction) {
		const { cpfCnpj } = data;

		let pessoa = await this.findOne({ where: { cpfCnpj } });

		if (pessoa !== null) {
			await this.update(data, { where: { id: pessoa.id }, transaction });
			pessoa = await this.findOne({ where: { id: pessoa.id }, raw: true });
			return pessoa;
		}

		pessoa = await this.create(data, { transaction });

		return pessoa.toJSON();
	};

	Pessoa.validateCpfCnpj = async function(cpfCnpj) {
		try {
			const validator = new CpfCnpjValidator(cpfCnpj);

			if (cpfCnpj.length === 14) {
				return validator.validateCPF();
			}

			return validator.validateCNPJ();
		} catch (error) {
			throw error;
		}
	};

	return Pessoa;
};
