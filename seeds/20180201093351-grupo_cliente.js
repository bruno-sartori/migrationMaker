export function up(queryInterface) {
	return queryInterface.bulkInsert('grupo_clientes', [
		{ id: 1, nome: 'RURAIS' },
		{ id: 2, nome: 'COMODATO' },
		{ id: 3, nome: 'ANTECIPADO' }
	]);
}

export function down(queryInterface) {
	return queryInterface.bulkDelete('grupo_clientes', null, {});
}
