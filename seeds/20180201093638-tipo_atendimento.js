export function up(queryInterface) {
	return queryInterface.bulkInsert('tipos_atendimentos', [
		{ id: 1, nome: 'ATIVAÇÃO DE PLANO' }, // locked
		{ id: 2, nome: 'ALTERAÇÃO DE PLANO' },
		{ id: 3, nome: 'ENCERRAMENTO DE PLANO' },
		{ id: 4, nome: 'ENCERRAMENTO DE CONTRATO' },
		{ id: 5, nome: 'ALTERAÇÃO DE DIA DE PAGTO (1-31)' },
		{ id: 6, nome: 'ALTERAÇÃO DE TIPO PAGTO (ANT/POST)' },
		{ id: 7, nome: 'ALTERAÇÃO DE GERAÇÃO BOLETO (CARNE/AVULSO)' },
		{ id: 8, nome: 'MUDANÇA DE ENDEREÇO DE PLANO' },
		{ id: 9, nome: 'MUDANÇA DE ENDEREÇO DE COBRANÇA' },
		{ id: 10, nome: 'TESTE DE BANDA' },
		{ id: 11, nome: 'LIBERAÇÃO DE CONTA BLOQUEADA POR CONFIANÇA' },
		{ id: 12, nome: 'SUPORTE TÉCNICO CALL CENTER' },
		{ id: 13, nome: 'SUPORTE TÉCNICO EXTERNO' },
		{ id: 14, nome: 'FINANCEIRO' },
		{ id: 15, nome: 'OUTROS' }
	]);
}

export function down(queryInterface) {
	return queryInterface.bulkDelete('tipos_atendimentos', null, {});
}
