export function up(queryInterface) {
	return queryInterface.bulkInsert('configuracoes_grupo_cliente', [
		{ id: 1, grupoClientesFk: 1 },
		{ id: 2, grupoClientesFk: 2 }
	]);
}

export function down(queryInterface) {
	return queryInterface.bulkDelete('configuracoes_grupo_cliente', null, {});
}
