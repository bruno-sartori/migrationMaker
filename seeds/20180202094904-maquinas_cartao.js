export function up(queryInterface) {
	return queryInterface.bulkInsert('maquinas_cartao', [
		{	id: 1, operadora: 'VISA', contasBancariasFk: 1, login: 'lorem@ipsum.com', senha: 'teste' },
		{ id: 2, operadora: 'ELO', contasBancariasFk: 2, login: 'teste@teste.com', senha: 'lala' },
		{ id: 3, operadora: 'MASTERCARD', contasBancariasFk: 1, login: 'teste@lala.com', senha: 'teste' }
	]);
}

export function down(queryInterface) {
	return queryInterface.bulkDelete('maquinas_cartao', null, {});
}
