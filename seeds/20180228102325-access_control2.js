export function up(queryInterface) {
	const entities = [
		{ id: 1, menu: '/categorias', submenu: '/categorias/tipos', entity: 'departamentos' },
		{ id: 2, menu: '/categorias', submenu: '/categorias/tipos', entity: 'tipos-atendimentos' },
		{ id: 3, menu: '/categorias', submenu: '/categorias/grupos', entity: 'grupos-clientes' },
		{ id: 4, menu: '/categorias', submenu: '/categorias/grupos', entity: 'grupos-planos' },
		{ id: 5, menu: '/categorias', submenu: '/categorias/grupos', entity: 'grupos-suprimentos' },

		{ id: 6, menu: '/categorias', submenu: '/categorias/grupos', entity: 'grupos-anexos' },

		{ id: 7, menu: '/categorias', submenu: '/categorias/dre', entity: 'planos-contas' },
		{ id: 8, menu: '/categorias', submenu: '/categorias/dre', entity: 'grupos-contas' },
		{ id: 9, menu: '/categorias', submenu: '/categorias/dre', entity: 'subgrupos-contas' },

		{ id: 10, menu: '/infraestrutura', submenu: '/infraestrutura/geral', entity: 'vlan' },
		{ id: 11, menu: '/infraestrutura', submenu: '/infraestrutura/geral', entity: 'ip' },
		{ id: 12, menu: '/infraestrutura', submenu: '/infraestrutura/radio', entity: 'painel' },
		{ id: 13, menu: '/infraestrutura', submenu: '/infraestrutura/radio', entity: 'cpe' },
		{ id: 14, menu: '/infraestrutura', submenu: '/infraestrutura/fibra', entity: 'olt' },
		{ id: 15, menu: '/infraestrutura', submenu: '/infraestrutura/fibra', entity: 'dio' },
		{ id: 16, menu: '/infraestrutura', submenu: '/infraestrutura/fibra', entity: 'cto' },
		{ id: 17, menu: '/infraestrutura', submenu: '/infraestrutura/fibra', entity: 'ont' },
		{ id: 18, menu: '/infraestrutura', submenu: '/infraestrutura/utp', entity: 'switch' },
		{ id: 19, menu: '/infraestrutura', submenu: '/infraestrutura/autenticadores', entity: 'autenticador' },

		{ id: 20, menu: '/cadastros', submenu: '/cadastros/enderecos', entity: 'bairros' },
		{ id: 21, menu: '/cadastros', submenu: '/cadastros/enderecos', entity: 'logradouros' },
		{ id: 22, menu: '/cadastros', submenu: '/cadastros/enderecos', entity: 'enderecos' },
		{ id: 23, menu: '/cadastros', submenu: '/cadastros/operadoras-financeiras', entity: 'contas-bancarias' },
		{ id: 24, menu: '/cadastros', submenu: '/cadastros/operadoras-financeiras', entity: 'maquinas-cartao' },
		{ id: 25, menu: '/cadastros', submenu: '/cadastros/operadoras-financeiras', entity: 'operadoras-boleto' },
		{ id: 26, menu: '/cadastros', submenu: '/cadastros/operadoras-financeiras', entity: 'cartoes-empresa' },
		{ id: 27, menu: '/cadastros', submenu: '/cadastros/colaboradores', entity: 'fornecedores' },
		{ id: 28, menu: '/cadastros', submenu: '/cadastros/colaboradores', entity: 'funcionarios' },
		{ id: 29, menu: '/cadastros', submenu: '/cadastros/colaboradores', entity: 'operadores' },
		{ id: 30, menu: '/cadastros', submenu: '/cadastros/colaboradores', entity: 'socios' },
		{ id: 31, menu: '/cadastros', submenu: '/cadastros/colaboradores', entity: 'transportadoras' },

		{ id: 32, menu: '/comercial', submenu: null, entity: 'planos' },
		{ id: 33, menu: '/comercial', submenu: null, entity: 'servicos' },
		{ id: 34, menu: '/comercial', submenu: null, entity: 'suprimentos' },

		{ id: 35, menu: '/cliente', submenu: null, entity: 'clientes' },

		{ id: 36, menu: '/atendimentos', submenu: null, entity: 'atendimentos' },

		{ id: 37, menu: '/estoque', submenu: '/estoque/estoque-itens', entity: 'estoque-itens' },
		{ id: 38, menu: '/estoque', submenu: '/estoque/estoque-locais', entity: 'estoque-locais' },
		{ id: 39, menu: '/estoque', submenu: '/estoque/estoque-transacoes', entity: 'estoque-transacoes' },
		{ id: 40, menu: '/estoque', submenu: '/estoque/estoque-cotacoes', entity: 'estoque-cotacoes' },
		{ id: 41, menu: '/estoque', submenu: '/estoque/estoque-pedidos', entity: 'estoque-pedidos' },


		{ id: 42, menu: '/financeiro', submenu: '/financeiro/contas-receber', entity: 'contas-receber' },
		{ id: 43, menu: '/financeiro', submenu: '/financeiro/contas-pagar', entity: 'custos-variaveis' },
		{ id: 44, menu: '/financeiro', submenu: '/financeiro/contas-pagar', entity: 'custos-fixos' },

		{ id: 45, menu: '/relatorios', submenu: null, entity: 'relatorios' },

		{ id: 46, menu: '/configuracoes', submenu: '/configuracoes/auditoria', entity: 'auditoria' },
		{ id: 47, menu: '/configuracoes', submenu: '/configuracoes/geral', entity: 'configuracoes-sistema' },
	];

	return queryInterface.bulkInsert('access_control2', entities);
}

export function down(queryInterface) {
	return queryInterface.bulkDelete('access_control2', null, {});
}
