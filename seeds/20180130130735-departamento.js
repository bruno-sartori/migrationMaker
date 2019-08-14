export function up(queryInterface) {
	return queryInterface.bulkInsert('departamentos', [
		{ id: 1, nome: 'DESENVOLVIMENTO' },
		{ id: 2, nome: 'ADMINISTRATIVO' },
		{ id: 3, nome: 'PRODUÇÃO' }
	]);
}

export function down(queryInterface) {
	return queryInterface.bulkDelete('departamentos', null, {});
}
