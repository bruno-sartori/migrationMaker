export function up(queryInterface) {
	return queryInterface.bulkInsert('servicos', [
		{ id: 1, nome: 'CONFIGURAÇÃO DE ROTEADOR', valor: 50.00 },
		{ id: 2, nome: 'TROCA DE SENHA WIFI', valor: 24.99 },
		{ id: 3, nome: 'MUDANÇA DE ENDEREÇO', valor: 100.99 }
	]);
}

export function down(queryInterface) {
	return queryInterface.bulkDelete('servicos', null, {});
}
