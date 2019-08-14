export function up(queryInterface) {
	return queryInterface.bulkInsert('block_tables', [
		{ id: 1, tiposAtendimentosFk: 1 },
		{ id: 2, tiposAtendimentosFk: 2 },
		{ id: 3, tiposAtendimentosFk: 3 },
		{ id: 4, tiposAtendimentosFk: 4 },
		{ id: 5, tiposAtendimentosFk: 5 },
		{ id: 6, tiposAtendimentosFk: 6 },
		{ id: 7, tiposAtendimentosFk: 7 },
		{ id: 8, tiposAtendimentosFk: 8 },
		{ id: 9, tiposAtendimentosFk: 9 },
		{ id: 10, tiposAtendimentosFk: 10 },
		{ id: 11, tiposAtendimentosFk: 11 },
		{ id: 12, tiposAtendimentosFk: 12 },
		{ id: 13, tiposAtendimentosFk: 13 },
		{ id: 14, tiposAtendimentosFk: 14 },
		{ id: 15, tiposAtendimentosFk: 15 }
	]);
}

export function down(queryInterface) {
	return queryInterface.bulkDelete('block_tables', null, {});
}
