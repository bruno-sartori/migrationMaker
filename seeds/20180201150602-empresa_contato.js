export function up(queryInterface) {
	return queryInterface.bulkInsert('empresas_contato', [
		{ id: 1, tipoContato: 'TELEFONE', contato: '(17) 3551-2121', empresasFk: 1 },
		{ id: 2, tipoContato: 'EMAIL', contato: 'financeiro@jdnet.com.br', empresasFk: 1 }
	]);
}

export function down(queryInterface) {
	return queryInterface.bulkDelete('empresas_contato', null, {});
}
