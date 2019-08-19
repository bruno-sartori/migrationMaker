import datasource from '../datasource';
import fs from 'fs';

const { newDb, oldDb } = datasource();

const binaryConvert = async (table, field) => {
	await oldDb.query(`update ${table} set ${field} = convert(binary convert(${field} using latin1) using utf8)`);
}

export async function up(queryInterface) {
	const custos = await oldDb.query('select * from lancamento_custo_fixo', { type: oldDb.QueryTypes.SELECT });

	const data = [];

	for (let i = 0; i < custos.length; i++) {
		const o = custos[i];

		const getDRE = async () => {
			let nome = await oldDb.query(
				'select desp_nome from cadastro_despesa where desp_id = (select lancustfix_cod_despesa from lancamento_custo_fixo where lancustfix_id = ? limit 1)',
				{ type: oldDb.QueryTypes.SELECT, replacements: [o.lancustfix_id] }
			);

			if (nome.length === 0) {
				return null;
			}

			nome = nome[0].desp_nome.split(' ').map(o => '%' + o + '%').join(' ');

			const response = await newDb.query(
				'select s.id, s.grupoContasFk, g.planoContasFk from subgrupo_contas s left join grupo_contas g on g.id = s.grupoContasFk where s.nome like _utf8 ? COLLATE utf8_unicode_ci',
				{ type: oldDb.QueryTypes.SELECT, replacements: [nome] }
			);

			if (response.length === 0) {
				return null;
			}
			return response[0];
		};

		const dre = await getDRE();

		const custoFixo = {
			id: o.lancustfix_id,
			status: o.lancustfix_ativo,
			credorFornecedor: o.lancustfix_cod_fornecedor,
			credorFuncionario: o.lancustfix_cod_funcionario,
			tipoCredor: o.lancustfix_cod_fornecedor !== null ? 'FORNECEDOR' : 'FUNCIONÁRIO',
			planoContasFk: dre !== null ? dre.planoContasFk : 3,
			grupoContasFk: dre !== null ? dre.grupoContasFk : 4,
			subgrupoContasFk: dre !== null ? dre.id : 9,
			inicioLancamento: o.lancustfix_data_primeiro_vencimento.split('/')[1] + '-' + o.lancustfix_data_primeiro_vencimento.split('/')[0],
			diaVencimento: (o.lancustfix_dia_vencimento.toString().length === 2) ? o.lancustfix_dia_vencimento : `0${o.lancustfix_dia_vencimento}`,
			valorParcela: o.lancustfix_valor_parcela,
			historico: o.lancustfix_historico,
			obs: o.lancustfix_obs,
			createdAt: o.lancustfix_data_lancamento
		};

		data.push(custoFixo);
	}
	
	try {
		await queryInterface.bulkInsert('custo_fixo', data);
	} catch (error) {
		await fs.writeFileSync("./errors.js", error, (err) => {
			if (err) {
				console.error(err);
			}
		});
	}
}

export function down(queryInterface) {
	return queryInterface.bulkDelete('custo_fixo', null, {});
}
