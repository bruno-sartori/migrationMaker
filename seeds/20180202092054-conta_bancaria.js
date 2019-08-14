export function up(queryInterface) {
	return queryInterface.bulkInsert('contas_bancarias', [
		{ id: 1, nomeGerente: 'LOREM IPSUM', federatedBaseBancoFk: 1, agencia: '6979', conta: '9032932', obs: 'Lorem ipsum', enderecosFk: 1 },
		{ id: 2, nomeGerente: 'DOLOR SIT AMET', federatedBaseBancoFk: 2, agencia: '6979', conta: '9292', obs: 'lalala', enderecosFk: 1 }
	]);
}

export function down(queryInterface) {
	return queryInterface.bulkDelete('contas_bancarias', null, {});
}
