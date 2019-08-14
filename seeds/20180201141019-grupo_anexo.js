export function up(queryInterface) {
	return queryInterface.bulkInsert('grupo_anexo', [
		{ id: 1, nome: 'NOTA FISCAL' },
		{ id: 2, nome: 'RECIBO BOLETO' },
		{ id: 3, nome: 'BOLETO' },
		{ id: 4, nome: 'LOGO' },
		{ id: 5, nome: 'OUTROS' },
	]);
}

export function down(queryInterface) {
	return queryInterface.bulkDelete('grupo_anexo', null, {});
}
