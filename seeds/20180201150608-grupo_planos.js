export function up(queryInterface) {
	return queryInterface.bulkInsert('grupo_planos', [
		{ id: 1, nome: 'RESIDENCIAL' },
		{ id: 2, nome: 'EMPRESARIAL' },
		{ id: 3, nome: 'DEDICADO' }
	]);
}

export function down(queryInterface) {
	return queryInterface.bulkDelete('grupo_planos', null, {});
}
