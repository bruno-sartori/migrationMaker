export function up(queryInterface) {
	return queryInterface.bulkInsert('operadoras_boleto', [
		{ id: 1, convenio: '3231', carteira: '100', federatedBaseOperadoraBoletoFk: 1, contasBancariasFk: 1, obs: 'Lorem ipsum' },
		{ id: 2, convenio: '43434', carteira: '09', federatedBaseOperadoraBoletoFk: 2, contasBancariasFk: 2, obs: 'Lorem ipsum' }
	]);
}

export function down(queryInterface) {
	return queryInterface.bulkDelete('operadoras_boleto', null, {});
}
