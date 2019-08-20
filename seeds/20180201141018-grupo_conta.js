export function up(queryInterface) {
	return queryInterface.bulkInsert('grupo_contas', [
		// RECEITAS
		{ id: 1, nome: 'RECEITAS MENSAIS', planoContasFk: 1 },
		{ id: 2, nome: 'RECEITAS AVULSAS', planoContasFk: 1 },

		// COMPRAS
		{ id: 3, nome: 'COMPRAS DE SUPRIMENTOS', planoContasFk: 2 },
		
		// DESPESAS
		{ id: 4, nome: 'FIXAS', planoContasFk: 3 },
		{ id: 5, nome: 'TAXAS DE RECEBIMENTOS', planoContasFk: 3 },
		{ id: 6, nome: 'RH', planoContasFk: 3 },
		{ id: 7, nome: 'DESPESAS COM TERCEIROS', planoContasFk: 3 },
		{ id: 8, nome: 'COMERCIAIS', planoContasFk: 3 },
		{ id: 9, nome: 'ADMINISTRATIVAS', planoContasFk: 3 },
		{ id: 10, nome: 'FINANCEIRAS', planoContasFk: 3 },
		{ id: 11, nome: 'IMPOSTOS', planoContasFk: 3 },
		{ id: 12, nome: 'EMPRÉSTIMOS', planoContasFk: 3 },
		{ id: 13, nome: 'FRETES', planoContasFk: 3 },
		
		// INVESTIMENTOS
		{ id: 14, nome: 'BANCÁRIO', planoContasFk: 4 },

		// PERCAS
		{ id: 15, nome: 'CANCELAMENTOS', planoContasFk: 5 },

		// INVESTIMENTOS
		{ id: 16, nome: 'IMÓVEIS', planoContasFk: 4 },

	]);
}

export function down(queryInterface) {
	return queryInterface.bulkDelete('grupo_contas', null, {});
}
