import fs from 'fs';
import datasource from '../datasource';
import { isValidDate, isValidString } from '../util/isValidVariable';

const { newDb, oldDb } = datasource();

export async function up(queryInterface) {
	const parcelas = await oldDb.query('select * from custo_fixo', { type: oldDb.QueryTypes.SELECT });

	const data = [];

	for (let i = 0; i < parcelas.length; i++) {
		const o = parcelas[i];
		console.log('=============================================================');
		console.log(o.custfix_data_pagamento);
		console.log(isValidDate(o.custfix_data_pagamento));
		console.log(o.custfix_id);
		
		const parcela = {
			id: o.custfix_id,
			custoFixoFk: o.custfix_cod_lancamento,
			numParcela: 'C. Fixo',
			dataVencimento:  o.custfix_data_vencimento,
			dataPagamento: o.custfix_data_pagamento,
			status: isValidDate(o.custfix_data_pagamento) ? 'paid': 'open',
			valorParcela: o.custfix_valor_parcela === null ? 0 : o.custfix_valor_parcela,
			valorPago: o.custfix_valor_pago,
			notaFiscal: isValidString(o.custfix_nota_fiscal) ? o.custfix_nota_fiscal.toUpperCase() : o.custfix_nota_fiscal,
			juros: o.custfix_valor_juros,
			historico: null
		};
		
		data.push(parcela);
	}
	
	try {
		await queryInterface.bulkInsert('custo_fixo_parcela', data);
	} catch (error) {
		await fs.writeFileSync("./errors.js", error, (err) => {
			if (err) {
				console.error(err);
			}
		});
	}
}

export function down(queryInterface) {
	return queryInterface.bulkDelete('custo_fixo_parcela', null, {});
}
