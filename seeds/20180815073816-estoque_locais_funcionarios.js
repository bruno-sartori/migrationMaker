export function up(queryInterface) {
	return queryInterface.bulkInsert('estoque_locais_funcionarios', [
		{ id: 1, funcionariosFk: 1, estoqueLocalFk: 1 }
	]);
}

export function down(queryInterface) {
	return queryInterface.bulkDelete('estoque_locais_funcionarios', null, {});
}
