import datasource from '../datasource';

const { newDb, oldDb } = datasource();

export async function up(queryInterface) {
	const suprimentos = await oldDb.query('select * from cadastro_suprimento', { type: oldDb.QueryTypes.SELECT });

	const data = [];

	for (let i = 0; i < suprimentos.length; i++) {
		const o = suprimentos[i];

		const suprimento = { 
			id: o.sup_id,
			nome: o.sup_nome,
			usoVenda: true,
			grupoSuprimentosFk: 1,
			estoqueMinimo: 0,
			precoCusto: 5.00,
			porcentagemLucro: 40.0,
			precoPraticado: 7.00,
			obs: o.sup_descricao
		};

		data.push(suprimento);
	}
	
	try {
		await queryInterface.bulkInsert('suprimentos', data);
	} catch (error) {
		console.error(error);
	}
}

export function down(queryInterface) {
	return queryInterface.bulkDelete('suprimentos', null, {});
}
