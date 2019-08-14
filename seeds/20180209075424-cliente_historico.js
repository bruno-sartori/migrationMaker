export function up(queryInterface) {
	return Promise.resolve();
}

export function down(queryInterface) {
	return queryInterface.bulkDelete('clientes_historico', null, {});
}
