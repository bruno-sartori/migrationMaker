export function up(queryInterface) {
	return queryInterface.bulkInsert('plano_contas', [
		{ id: 1, nome: 'RECEITAS', atributo: '+' },
		{ id: 2, nome: 'COMPRAS', atributo: '-' },
		{ id: 3, nome: 'DESPESAS', atributo: '-' },
		{ id: 4, nome: 'INVESTIMENTOS', atributo: '+' },
		{ id: 5, nome: 'PERCAS', atributo: '-' },
	]);
}

export function down(queryInterface) {
	return queryInterface.bulkDelete('plano_contas', null, {});
}
