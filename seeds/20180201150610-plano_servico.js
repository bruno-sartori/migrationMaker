export function up(queryInterface) {
	return queryInterface.bulkInsert('planos_servicos', [
		{ id: 1, planosFk: 1, servicosFk: 1, quantidade: 2 },
		{ id: 2, planosFk: 1, servicosFk: 2, quantidade: 1 },
		{ id: 3, planosFk: 1, servicosFk: 3, quantidade: 3 },
		{ id: 4, planosFk: 2, servicosFk: 1, quantidade: 2 },
		{ id: 5, planosFk: 2, servicosFk: 2, quantidade: 2 },
		{ id: 6, planosFk: 2, servicosFk: 3, quantidade: 1 }
	]);
}

export function down(queryInterface) {
	return queryInterface.bulkDelete('planos_servicos', null, {});
}
