export function up(queryInterface) {
	return queryInterface.bulkInsert('logradouros', [
		{ id: 1, logradouro: 'RUA SÃO CARLOS', bairrosFk: 1 },
		{ id: 2, logradouro: 'AV. ADRIANO PINHO MAIA', bairrosFk: 2 }
	]);
}

export function down(queryInterface) {
	return queryInterface.bulkDelete('logradouros', null, {});
}
