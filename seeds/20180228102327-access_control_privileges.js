export function up(queryInterface) {
	const defaultPrivileges = [
		{ privilege: 'view', value: true, valuesRestriction: null, accessControlFk: 1, operadoresFk: 1 },
		{ privilege: 'new', value: true, valuesRestriction: null, accessControlFk: 1, operadoresFk: 1 },
		{ privilege: 'update', value: true, valuesRestriction: null, accessControlFk: 1, operadoresFk: 1 },
		{ privilege: 'destroy', value: true, valuesRestriction: null, accessControlFk: 1, operadoresFk: 1 },
		{ privilege: 'changeStatus', value: true, valuesRestriction: null, accessControlFk: 1, operadoresFk: 1 },
		{ privilege: 'totals', value: true, valuesRestriction: null, accessControlFk: 1, operadoresFk: 1 },
		{ privilege: 'print', value: true, valuesRestriction: null, accessControlFk: 1, operadoresFk: 1 },
	];
	let seedData = [];

	const operadorId = [1, 2, 3, 4, 5, 6, 7, 8, 9];

	operadorId.map(i => {
		for (let j = 1; j <= 34; j++) {
			//if (j !== 6) {
				const routeData = defaultPrivileges.map(o => ({ ...o, accessControlFk: j, operadoresFk: i }));
				seedData = [...seedData, ...routeData];
			/*} else { // gambiarra: exeção para o plano de contas
				const routeData = defaultPrivileges
				.filter(o => ['view', 'print', 'totals'].includes(o.privilege))
				.map(o => ({ ...o, accessControlFk: j, operadoresFk: i }));
				seedData = [...seedData, ...routeData];
			}*/
		}

		const otherPrivileges = [
			// CLIENTES
			{ privilege: 'view', value: true, valuesRestriction: null, accessControlFk: 35, operadoresFk: i },
			{ privilege: 'new', value: true, valuesRestriction: null, accessControlFk: 35, operadoresFk: i },
			{ privilege: 'update', value: true, valuesRestriction: null, accessControlFk: 35, operadoresFk: i },
			{ privilege: 'destroy', value: true, valuesRestriction: null, accessControlFk: 35, operadoresFk: i },
			{ privilege: 'totals', value: true, valuesRestriction: null, accessControlFk: 35, operadoresFk: i },
			{ privilege: 'print', value: true, valuesRestriction: null, accessControlFk: 35, operadoresFk: i },
			{ privilege: 'viewHistorico', value: true, valuesRestriction: null, accessControlFk: 35, operadoresFk: i },
			{ privilege: 'viewPlanos', value: true, valuesRestriction: null, accessControlFk: 35, operadoresFk: i },
			{ privilege: 'liberarConfianca', value: true, valuesRestriction: null, accessControlFk: 35, operadoresFk: i },
			{ privilege: 'bloquear', value: true, valuesRestriction: null, accessControlFk: 35, operadoresFk: i },
			{ privilege: 'desativar', value: true, valuesRestriction: null, accessControlFk: 35, operadoresFk: i },
			{ privilege: 'blackList', value: true, valuesRestriction: null, accessControlFk: 35, operadoresFk: i },
			// ATENDIMENTOS
			{ privilege: 'view', value: true, valuesRestriction: null, accessControlFk: 36, operadoresFk: i },
			{ privilege: 'new', value: true, valuesRestriction: null, accessControlFk: 36, operadoresFk: i },
			{ privilege: 'update', value: true, valuesRestriction: null, accessControlFk: 36, operadoresFk: i },
			{ privilege: 'destroy', value: true, valuesRestriction: null, accessControlFk: 36, operadoresFk: i },
			{ privilege: 'totals', value: true, valuesRestriction: null, accessControlFk: 36, operadoresFk: i },
			{ privilege: 'print', value: true, valuesRestriction: null, accessControlFk: 36, operadoresFk: i },
			{ privilege: 'viewHistorico', value: true, valuesRestriction: null, accessControlFk: 36, operadoresFk: i },
			{ privilege: 'ativacaoMensalista', value: true, valuesRestriction: null, accessControlFk: 36, operadoresFk: i },
			{ privilege: 'newAnotacao', value: true, valuesRestriction: null, accessControlFk: 36, operadoresFk: i },
			{ privilege: 'transferir', value: true, valuesRestriction: null, accessControlFk: 36, operadoresFk: i },
			{ privilege: 'concluir', value: true, valuesRestriction: null, accessControlFk: 36, operadoresFk: i },
			{ privilege: 'cancelar', value: true, valuesRestriction: null, accessControlFk: 36, operadoresFk: i },
			{ privilege: 'viewServico', value: true, valuesRestriction: null, accessControlFk: 36, operadoresFk: i },
			{ privilege: 'addServico', value: true, valuesRestriction: null, accessControlFk: 36, operadoresFk: i },
			{ privilege: 'destroyServico', value: true, valuesRestriction: null, accessControlFk: 36, operadoresFk: i },

			// ESTOQUE_ITENS
			{ privilege: 'view', value: true, valuesRestriction: null, accessControlFk: 37, operadoresFk: i },
			{ privilege: 'viewItemMetric', value: true, valuesRestriction: null, accessControlFk: 37, operadoresFk: i },
			{ privilege: 'print', value: true, valuesRestriction: null, accessControlFk: 37, operadoresFk: i },
			{ privilege: 'totals', value: true, valuesRestriction: null, accessControlFk: 37, operadoresFk: i },
			// ESTOQUE_LOCAIS
			{ privilege: 'view', value: true, valuesRestriction: null, accessControlFk: 38, operadoresFk: i },
			{ privilege: 'print', value: true, valuesRestriction: null, accessControlFk: 38, operadoresFk: i },
			{ privilege: 'totals', value: true, valuesRestriction: null, accessControlFk: 38, operadoresFk: i },
			{ privilege: 'new', value: true, valuesRestriction: null, accessControlFk: 38, operadoresFk: i },
			{ privilege: 'update', value: true, valuesRestriction: null, accessControlFk: 38, operadoresFk: i },
			{ privilege: 'destroy', value: true, valuesRestriction: null, accessControlFk: 38, operadoresFk: i },
			{ privilege: 'viewFuncionariosLocal', value: true, valuesRestriction: null, accessControlFk: 38, operadoresFk: i },
			{ privilege: 'updateEstoqueMinimo', value: true, valuesRestriction: null, accessControlFk: 38, operadoresFk: i },
			// ESTOQUE_TRANSACOES
			{ privilege: 'view', value: true, valuesRestriction: null, accessControlFk: 39, operadoresFk: i },
			{ privilege: 'print', value: true, valuesRestriction: null, accessControlFk: 39, operadoresFk: i },
			{ privilege: 'totals', value: true, valuesRestriction: null, accessControlFk: 39, operadoresFk: i },
			{ privilege: 'new', value: true, valuesRestriction: null, accessControlFk: 39, operadoresFk: i },
			// CONTAS-RECEBER
			{ privilege: 'view', value: true, valuesRestriction: null, accessControlFk: 42, operadoresFk: i },
			{ privilege: 'viewEstornos', value: true, valuesRestriction: null, accessControlFk: 42, operadoresFk: i },
			{ privilege: 'viewCobrancas', value: true, valuesRestriction: null, accessControlFk: 42, operadoresFk: i },
			{ privilege: 'new', value: true, valuesRestriction: null, accessControlFk: 42, operadoresFk: i },
			{ privilege: 'liquidar', value: true, valuesRestriction: null, accessControlFk: 42, operadoresFk: i },
			{ privilege: 'estornar', value: true, valuesRestriction: null, accessControlFk: 42, operadoresFk: i },
			{ privilege: 'cobrar', value: true, valuesRestriction: null, accessControlFk: 42, operadoresFk: i },
			{ privilege: 'destroy', value: true, valuesRestriction: null, accessControlFk: 42, operadoresFk: i },
			{ privilege: 'totals', value: true, valuesRestriction: null, accessControlFk: 42, operadoresFk: i },
			{ privilege: 'print', value: true, valuesRestriction: null, accessControlFk: 42, operadoresFk: i },
			{ privilege: 'printBoleto', value: true, valuesRestriction: null, accessControlFk: 42, operadoresFk: i },
			// CONTAS-PAGAR:CUSTOS-VARIAVEIS
			{ privilege: 'view', value: true, valuesRestriction: null, accessControlFk: 43, operadoresFk: i },
			{ privilege: 'new', value: true, valuesRestriction: null, accessControlFk: 43, operadoresFk: i },
			{ privilege: 'update', value: true, valuesRestriction: null, accessControlFk: 43, operadoresFk: i },
			{ privilege: 'destroy', value: true, valuesRestriction: null, accessControlFk: 43, operadoresFk: i },
			{ privilege: 'totals', value: true, valuesRestriction: null, accessControlFk: 43, operadoresFk: i },
			{ privilege: 'liquidar', value: true, valuesRestriction: null, accessControlFk: 43, operadoresFk: i },
			{ privilege: 'estornar', value: true, valuesRestriction: null, accessControlFk: 43, operadoresFk: i },
			{ privilege: 'print', value: true, valuesRestriction: null, accessControlFk: 43, operadoresFk: i },
			// CONTAS-PAGAR:CUSTOS-FIXOS
			{ privilege: 'view', value: true, valuesRestriction: null, accessControlFk: 44, operadoresFk: i },
			{ privilege: 'new', value: true, valuesRestriction: null, accessControlFk: 44, operadoresFk: i },
			{ privilege: 'update', value: true, valuesRestriction: null, accessControlFk: 44, operadoresFk: i },
			{ privilege: 'destroy', value: true, valuesRestriction: null, accessControlFk: 44, operadoresFk: i },
			{ privilege: 'totals', value: true, valuesRestriction: null, accessControlFk: 44, operadoresFk: i },
			{ privilege: 'changeStatus', value: true, valuesRestriction: null, accessControlFk: 44, operadoresFk: i },
			{ privilege: 'print', value: true, valuesRestriction: null, accessControlFk: 44, operadoresFk: i },
			{ privilege: 'liquidar', value: true, valuesRestriction: null, accessControlFk: 44, operadoresFk: i },
			{ privilege: 'estornar', value: true, valuesRestriction: null, accessControlFk: 44, operadoresFk: i },
			// RELATÓRIOS
			{ privilege: 'view', value: true, valuesRestriction: null, accessControlFk: 45, operadoresFk: i },
			{ privilege: 'print', value: true, valuesRestriction: null, accessControlFk: 45, operadoresFk: i },
			// AUDITORIA
			{ privilege: 'view', value: true, valuesRestriction: null, accessControlFk: 46, operadoresFk: i },
			{ privilege: 'totals', value: true, valuesRestriction: null, accessControlFk: 46, operadoresFk: i },
			// CONFIGURACOES-SISTEMA
			{ privilege: 'view', value: true, valuesRestriction: null, accessControlFk: 47, operadoresFk: i },
			{ privilege: 'viewEmailContador', value: true, valuesRestriction: null, accessControlFk: 47, operadoresFk: i },
			{ privilege: 'viewIntervaloLiberacaoConfianca', value: true, valuesRestriction: null, accessControlFk: 47, operadoresFk: i },
			{ privilege: 'viewDiasBloqueio', value: true, valuesRestriction: null, accessControlFk: 47, operadoresFk: i },
			{ privilege: 'viewValorMinimoGeracaoProratas', value: true, valuesRestriction: null, accessControlFk: 47, operadoresFk: i },
			{ privilege: 'viewDiasPagamentoPlano', value: true, valuesRestriction: null, accessControlFk: 47, operadoresFk: i },
			{ privilege: 'viewPrazoVencimentoProratas', value: true, valuesRestriction: null, accessControlFk: 47, operadoresFk: i },
			{ privilege: 'viewInstrucoesPadraoBoletos', value: true, valuesRestriction: null, accessControlFk: 47, operadoresFk: i },
			{ privilege: 'viewIntervaloAlteracaoDiasPagamento', value: true, valuesRestriction: null, accessControlFk: 47, operadoresFk: i },
			{ privilege: 'viewNotificacoes', value: true, valuesRestriction: null, accessControlFk: 47, operadoresFk: i },
			{ privilege: 'viewGeracaoBoletoAutomatico', value: true, valuesRestriction: null, accessControlFk: 47, operadoresFk: i },
			{ privilege: 'viewMoraMultaIndefinido', value: true, valuesRestriction: null, accessControlFk: 47, operadoresFk: i },
			{ privilege: 'viewMoraMultaBoletos', value: true, valuesRestriction: null, accessControlFk: 47, operadoresFk: i },
			{ privilege: 'updateIntervaloLiberacaoConfianca', value: true, valuesRestriction: null, accessControlFk: 47, operadoresFk: i },
			{ privilege: 'updateDiasBloqueio', value: true, valuesRestriction: null, accessControlFk: 47, operadoresFk: i },
			{ privilege: 'updateValorMinimoGeracaoProrata', value: true, valuesRestriction: null, accessControlFk: 47, operadoresFk: i },
			{ privilege: 'updatePrazoVencimentoProrata', value: true, valuesRestriction: null, accessControlFk: 47, operadoresFk: i },
			{ privilege: 'updateDiaPagamentoPlano', value: true, valuesRestriction: null, accessControlFk: 47, operadoresFk: i },
			{ privilege: 'updateInstrucaoPadraoBoleto', value: true, valuesRestriction: null, accessControlFk: 47, operadoresFk: i },
			{ privilege: 'updateIntervaloAlteracaoDiaPagamento', value: true, valuesRestriction: null, accessControlFk: 47, operadoresFk: i },
			{ privilege: 'updateGeracaoAutomaticaMensalidade', value: true, valuesRestriction: null, accessControlFk: 47, operadoresFk: i },
			{ privilege: 'updateNotificacoes', value: true, valuesRestriction: null, accessControlFk: 47, operadoresFk: i },
			{ privilege: 'updateGeracaoBoletoAutomatico', value: true, valuesRestriction: null, accessControlFk: 47, operadoresFk: i },
			{ privilege: 'updateMoraMultaIndefinido', value: true, valuesRestriction: null, accessControlFk: 47, operadoresFk: i },
			{ privilege: 'updateMoraMultaBoleto', value: true, valuesRestriction: null, accessControlFk: 47, operadoresFk: i }
		];

		seedData = [...seedData, ...otherPrivileges];
	});

	return queryInterface.bulkInsert('access_control_privileges', seedData);
}

export function down(queryInterface) {
	return queryInterface.bulkDelete('access_control_privileges', null, {});
}
