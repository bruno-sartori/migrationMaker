export default (sequelize, DataType) => {
	const ConfiguracaoSistema = sequelize.define('ConfiguracaoSistema',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			multaBoleto: {
				type: DataType.FLOAT(15, 2),
				allowNull: true
			},
			moraBoleto: {
				type: DataType.FLOAT(15, 2),
				allowNull: true
			},
			limiteCreditoBoleto: {
				type: DataType.FLOAT(15, 2),
				allowNull: true
			},
			tipoLimiteCreditoBoleto: {
				type: DataType.STRING("20"),
				allowNull: true,
				validate: {
					isIn: [['FIXO', 'GRUPO_CLIENTE']]
				}
			},
			instrucaoBoleto: {
				type: DataType.STRING(500),
				allowNull: true
			},
			emailContador: {
				type: DataType.STRING,
				allowNull: true
			},
			multaIndefinido: {
				type: DataType.FLOAT(15, 2),
				allowNull: true
			},
			moraIndefinido: {
				type: DataType.FLOAT(15, 2),
				allowNull: true
			},
			operadoraPadrao: {
				type: DataType.INTEGER,
				allowNull: true
			},
			periodoGeracao: {
				type: DataType.STRING,
				allowNull: true
			},
			prazoProrata: {
				type: DataType.INTEGER,
				allowNull: true
			},
			valorMinimoProrata: {
				type: DataType.FLOAT(15, 2),
				allowNull: true
			},
			vencimentoBloqueio: {
				type: DataType.INTEGER(2),
				allowNull: true
			},
			intervaloLiberacaoConfianca: {
				type: DataType.INTEGER(2),
				allowNull: true
			},
			unidadeLiberacaoConfianca: {
				type: DataType.STRING,
				allowNull: true
			},
			liberacaoAutomatica: {
				type: DataType.BOOLEAN,
				allowNull: false,
				defaultValue: false
			},
			intervaloAlteracaoDiaPagamento: {
				type: DataType.INTEGER,
				allowNull: true
			},
			unidadeAlteracaoDiaPagamento: {
				type: DataType.STRING,
				allowNull: true
			},
			notificationEnabled: {
				type: DataType.BOOLEAN,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			notificationSound: {
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
			tableName: 'configuracoes_sistema'
		}
	);

	return ConfiguracaoSistema;
};
