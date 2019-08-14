export function up(queryInterface) {
	return queryInterface.bulkInsert('enderecos', [
		{ id: 1, numero: '50', complemento: 'C', pontoReferencia: 'PRÓXIMO AO POSTO DE SAÚDE', cep: '15.860-000', logradourosFk: 1 },
		{ id: 2, numero: '550', complemento: 'D', pontoReferencia: null, cep: '15.860-000', logradourosFk: 2 }
	]);
}

export function down(queryInterface) {
	return queryInterface.bulkDelete('enderecos', null, {});
}
