import datasource from '../datasource';
import fs from 'fs';
import { isValidDate } from '../util/isValidVariable';
import dreMap from '../dreMap';

const { newDb, oldDb } = datasource();

const saveCustoVariavel = async () => {
	const custosVariaveis = await oldDb.query('select * from lancamento_custo_variavel', { type: oldDb.QueryTypes.SELECT });

	const data = [];

	for (let i = 0; i < custosVariaveis.length; i++) {
		const o = custosVariaveis[i];
	
		const [pv, tp, forn, fun] = await Promise.all([
			oldDb.query(
				'select custvar_data_vencimento from custo_variavel where custvar_cod_lancamento = ? order by custvar_cod_lancamento asc limit 1',
				{ type: oldDb.QueryTypes.SELECT, replacements: [o.lancustvar_id] }
			),
			oldDb.query(
				'select sum(custvar_valor_parcela) as alias from custo_variavel where custvar_cod_lancamento = ?',
				{ type: oldDb.QueryTypes.SELECT, replacements: [o.lancustvar_id] }
			),
			oldDb.query(
				'select custvar_cod_fornecedor as alias from custo_variavel where custvar_cod_lancamento = ? limit 1',
				{ type: oldDb.QueryTypes.SELECT, replacements: [o.lancustvar_id] }
			),
			oldDb.query(
				'select custvar_cod_funcionario as alias from custo_variavel where custvar_cod_lancamento = ? limit 1',
				{ type: oldDb.QueryTypes.SELECT, replacements: [o.lancustvar_id] }
			)
		]);

		const getDRE = async () => {
			const despId = await oldDb.query(
				'select desp_id from cadastro_despesa where desp_id = (select custvar_cod_despesa from custo_variavel where custvar_cod_lancamento = ? limit 1)',
				{ type: oldDb.QueryTypes.SELECT, replacements: [o.lancustvar_id] }
			);

			if (despId.length === 0) {
				console.error('No DespId - lancustvar', o.lancustvar_id);
				return null;
			}

			if (typeof dreMap[despId[0].desp_id] !== 'undefined') {
				const response = await newDb.query(
					'select s.id, s.grupoContasFk, g.planoContasFk from subgrupo_contas s left join grupo_contas g on g.id = s.grupoContasFk where s.id = ?',
					{ type: oldDb.QueryTypes.SELECT, replacements: [dreMap[despId[0].desp_id]] }
				);

				if (response.length === 0) {
					return null;
				}
		
				return response[0];
			} else {
				console.error('DRE NOT FOUND: ', despId[0].desp_id);
				return null;
			}
		};

		const dre = await getDRE();


		if (dre === null) {
			console.error('NULL DRE - custo_variavel', o.lancustvar_id);
		}


		const custoVariavel = {
			historico: (o.lancustvar_historico === null || o.lancustvar_historico.trim().length === 0) ? null : o.lancustvar_historico.toUpperCase(),
			tipo: 'VARIÁVEL',
			createdAt: o.lancustvar_data,
			totalParcelas: o.lancustvar_numero_parcelas,
			valorTotal: o.lancustvar_valor_total,
			notaFiscal: (o.lancustvar_nota_fiscal === null || o.lancustvar_nota_fiscal.trim().length === 0) ? null : o.lancustvar_nota_fiscal.toUpperCase(),
			dataCusto: o.lancustvar_data,
			primeiroVencimento: pv.length > 0 ? pv[0].custvar_data_vencimento : new Date(),
			totalParcelamento: tp.length > 0 && tp[0].alias !== null ? tp[0].alias : 0,
			planoContasFk: dre !== null ?  dre.planoContasFk : 1,
			grupoContasFk: dre !== null ? dre.grupoContasFk : 1,
			subgrupoContasFk: dre !== null ? dre.id : 1,
			credorFornecedor: forn.length > 0 ? forn[0].alias : null,
			credorFuncionario: fun.length > 0 ? fun[0].alias : null,
			tipoCredor: forn.length > 0 && forn[0].alias !== null ? 'FORNECEDOR' : 'FUNCIONÁRIO',
			obs: (o.lancustvar_obs === null || o.lancustvar_obs.trim().length === 0) ? null : o.lancustvar_obs,
			dataFrete: null
		};

		const oldParcelas = await oldDb.query('select * from custo_variavel where custvar_cod_lancamento = ?', {
			type: oldDb.QueryTypes.SELECT,
			replacements: [o.lancustvar_id]
		});

		const newParcelas = [];

		for (let j = 0; j < oldParcelas.length; j++) {
			const p = oldParcelas[j];

			const parcela = {
				id: p.custvar_id,
				configured: true,
				tipoPagamento: 'BOLETO',
				numParcela: (p.custvar_num_parcela === null) ? 'Única' : p.custvar_num_parcela,
				dataVencimento: p.custvar_data_vencimento,
				dataPagamento: p.custvar_data_pagamento,
				valorParcela: p.custvar_valor_parcela,
				valorPago: p.custvar_valor_pago,
				historico: null,
				juros: p.custvar_valor_juros,
				status: isValidDate(p.custvar_data_pagamento) ? 'paid' : 'open',
				boleto: {
					obs: 'Migrado pelo Sistema.'
				}
			};

			newParcelas.push(parcela);
		}

		custoVariavel.parcelas = newParcelas;

		data.push(custoVariavel);
	}

	try {
		for (let i = 0; i < data.length; i++) {
			await newDb.models.CustoVariavel.create(data[i], {
				include: [{
					model: newDb.models.CustoVariavelParcela,
					as: 'parcelas',
					include: [
						{ model: newDb.models.ConfigBoleto, as: 'boleto' },
					]
				}]
			});
		}
	} catch (error) {
		await fs.writeFileSync("./errors.js", error, (err) => {
			if (err) {
				console.error(err);
			}
		});
	}
};

const saveCompra = async () => {
	const compras = await oldDb.query('select * from lancamento_compra_cabecalho', { type: oldDb.QueryTypes.SELECT });

	const data = [];

	for (let i = 0; i < compras.length; i++) {
		const o = compras[i];
		
		const [tp, valor] = await Promise.all([
			oldDb.query(
				'select sum(custvar_valor_parcela) as alias from custo_variavel where custvar_cod_lancamento_compra = ?',
				{ type: oldDb.QueryTypes.SELECT, replacements: [o.lancustvar_id] }
			),
			oldDb.query(
				'select sum(lancorp_valor_total) as valor from lancamento_compra_corpo where lancorp_cod_cabecalho = ?',
				{ type: oldDb.QueryTypes.SELECT, replacements: [o.lancabec_id] }
			)		
		]);
		
		const getFrete = async () => {
			let nome = await oldDb.query(
				'select desp_nome from cadastro_despesa where desp_id = (select lancabec_frete from lancamento_compra_cabecalho where lancabec_id = ? limit 1)',
				{ type: oldDb.QueryTypes.SELECT, replacements: [o.lancabec_id] }
			);

			if (nome.length === 0) {
				return 'ISENTO';
			}

			nome = nome[0].desp_nome.split(' ').map(o => '%' + o + '%').join(' ');

			const response = await newDb.query(
				'select id from subgrupo_contas where nome like _utf8 ? COLLATE utf8_unicode_ci', 
				{ type: oldDb.QueryTypes.SELECT, replacements: [nome] }
			);

			if (response.length === 0) {
				return 'ISENTO';
			}
			return 'PAGO AO FORNECEDOR';
		};

		const getSubgrupoFrete = async () => {
			const despId = await oldDb.query(
				'select desp_id from cadastro_despesa where desp_id = (select custvar_cod_despesa from custo_variavel where custvar_cod_lancamento_compra = ? limit 1)',
				{ type: oldDb.QueryTypes.SELECT, replacements: [o.lancabec_id] }
			);

			if (despId.length === 0) {
				return null;
			}

			const response = await newDb.query(
				'select s.id from subgrupo_contas s where s.id = ?',
				{ type: oldDb.QueryTypes.SELECT, replacements: [dreMap[despId[0].desp_id]] }
			);

			if (response.length === 0) {
				return null;
			}
			return response[0].id;
		};

		const getDRE = async () => {
			const despId = await oldDb.query(
				'select desp_id from cadastro_despesa where desp_id = (select custvar_cod_despesa from custo_variavel where custvar_cod_lancamento_compra = ? limit 1)',
				{ type: oldDb.QueryTypes.SELECT, replacements: [o.lancabec_id] }
			);

			if (despId.length === 0) {
				console.error('No despId - lancabec ', o.lancabec_id);
				return null;
			}
			
			if (typeof dreMap[despId[0].desp_id] !== 'undefined') {
				const response = await newDb.query(
					'select s.id, s.grupoContasFk, g.planoContasFk from subgrupo_contas s left join grupo_contas g on g.id = s.grupoContasFk where s.id = ?',
					{ type: oldDb.QueryTypes.SELECT, replacements: [dreMap[despId[0].desp_id]] }
				);

				if (response.length === 0) {
					return null;
				}

				return response[0];
			} else {
				console.error('DRE NOT FOUND: ', o.lancustfix_cod_despesa);
				return null;
			}
		};

		const dre = await getDRE();
		
		if (dre === null) {
			console.error('NULL DRE - custo_variavel_compra', o.lancabec_id);
		}

		const compra = {
			tipo: 'COMPRA',
			notaFiscal: (o.lancabec_nota_fiscal === null || o.lancabec_nota_fiscal.trim().length === 0) ? null : o.lancabec_nota_fiscal.toUpperCase(),
			dataCusto: o.lancabec_data,
			totalParcelas: o.lancabec_numero_parcelas,
			valorTotal: o.lancabec_valor_total,
			primeiroVencimento: o.lancabec_primeiro_vencimento,
			totalParcelamento: tp.length > 0 && tp[0].alias !== null ? tp[0].alias : 0,
			planoContasFk: dre !== null ? dre.planoContasFk : 1,
			grupoContasFk: dre !== null ? dre.grupoContasFk : 1,
			subgrupoContasFk: dre !== null ? dre.id : 1,
			historico: (o.lancabec_historico === null || o.lancabec_historico.trim().length === 0) ? null : o.lancabec_historico.toUpperCase(),
			credorFornecedor: o.lancabec_cod_fornecedor,
			credorFuncionario: null,
			tipoCredor: 'FORNECEDOR',
			obs: null,
			totalServico: null,
			totalSuprimento: valor.length > 0 ? valor[0].valor : null,
			createdAt: o.lancabec_data,
			frete: await getFrete(),
			subgrupoFrete: await getSubgrupoFrete(),
			valorFrete: o.lancabec_valor_frete,
			incluirFrete: false,
			dataFrete: null,
		};

		// ------------PARCELAS------------
		
		const oldParcelas = await oldDb.query('select * from custo_variavel where custvar_cod_lancamento_compra = ?', {
			type: oldDb.QueryTypes.SELECT,
			replacements: [o.lancabec_id]
		});

		const newParcelas = [];

		for (let j = 0; j < oldParcelas.length; j++) {
			const p = oldParcelas[j];

			const parcela = {
				id: p.custvar_id,
				configured: true,
				tipoPagamento: 'BOLETO',
				numParcela: (p.custvar_num_parcela === null) ? 'Única' : p.custvar_num_parcela,
				dataVencimento: p.custvar_data_vencimento,
				dataPagamento: p.custvar_data_pagamento,
				valorParcela: p.custvar_valor_parcela,
				valorPago: p.custvar_valor_pago,
				historico: null,
				juros: p.custvar_valor_juros,
				status: isValidDate(p.custvar_data_pagamento) ? 'paid' : 'open',
				boleto: {
					obs: 'Migrado pelo Sistema.'
				}
			};

			newParcelas.push(parcela);
		}

		compra.parcelas = newParcelas;

		// ------------/PARCELAS------------

		// ------------SUPRIMENTOS------------
		const oldSuprimentos = await oldDb.query('select * from lancamento_compra_corpo where lancorp_cod_cabecalho = ?', {
			type: oldDb.QueryTypes.SELECT,
			replacements: [o.lancabec_id]
		});

		const newSuprimentos = [];

		for (let j = 0; j < oldSuprimentos.length; j++) {
			const p = oldSuprimentos[j];

			const suprimento = {
				quantidade: p.lancorp_quantidade,
				valorUnitario: p.lancorp_valor_unitario, 
				valorTotal: p.lancorp_valor_total,
				suprimentosFk: p.lancorp_cod_suprimento,
			};

			newSuprimentos.push(suprimento);
		}

		compra.suprimentos = newSuprimentos;
		
		// ------------/SUPRIMENTOS------------

		data.push(compra);
	}

	try {
		for (let i = 0; i < data.length; i++) {
			await newDb.models.CustoVariavel.create(data[i], {
				include: [
					{
						model: newDb.models.CustoVariavelParcela,
						as: 'parcelas',
						include: [
							{ model: newDb.models.ConfigBoleto, as: 'boleto' },
						]
					},
					{ model: newDb.models.CompraSuprimento, as: 'suprimentos' },
				]
			});
		}
	} catch (error) {
		await fs.writeFileSync("./errors.js", error, (err) => {
			if (err) {
				console.error(err);
			}
		});
	}
};

export async function up(queryInterface) {
	try {
		await saveCustoVariavel();
		await saveCompra();
	} catch (error) {
		await fs.writeFileSync("./errors.js", error, (err) => {
			if (err) {
				console.error(err);
			}
		});
	}
}

export function down(queryInterface) {
	return queryInterface.bulkDelete('custo_variavel', null, {});
}
