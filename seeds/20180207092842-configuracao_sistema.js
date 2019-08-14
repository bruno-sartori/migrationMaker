export function up(queryInterface) {
	return queryInterface.bulkInsert('configuracoes_sistema', [
		{
			id: 1,
			emailContador: 'brunosartori.webmaster@gmail.com',
			moraBoleto: 0.02,
			multaBoleto: 3.00,
			moraIndefinido: 0.02,
			multaIndefinido: 3.00,
			vencimentoBloqueio: 5,
			instrucaoBoleto: 'BLOQUEIO DO SINAL DE INTERNET APÓS 05 DIAS DO VENCIMENTO.',
			periodoGeracao: '2019-06',
			operadoraPadrao: 2,
			valorMinimoProrata: 2,
			prazoProrata: 15,
			notificationEnabled: true,
			notificationSound: 'definite.mp3',
			intervaloLiberacaoConfianca: 1,
			unidadeLiberacaoConfianca: 'MONTH',
			intervaloAlteracaoDiaPagamento: 1,
			unidadeAlteracaoDiaPagamento: 'MONTH'
		}
	]);
}

export function down(queryInterface) {
	return queryInterface.bulkDelete('configuracoes_sistema', null, {});
}
