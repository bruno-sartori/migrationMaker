import moment from 'moment';


const json = {
	tables: [
		{
			name: 'cadastro_pessoa',
			replaceName: 'pessoas',
			fields: [
				{ key: 'pes_id', replace: 'id' },
				{ key: 'pes_nome', replace: 'nome' },
				{ key: 'pes_cnpj_cpf', replace: 'cpfCnpj' },
				{ key: 'pes_ie_rg', replace: 'rgIe' },
				{ key: 'pes_data_cadastro_pessoa', replace: 'createdAt' },
				{
					func: async (o, newDb) => {
						const Local = require('/home/bruno/Documentos/Projetos/oton_isp/api/src/models/local.js').default;

						let logradouro = o.pes_endereco.replace(new RegExp(/\,(.*)/), '');
						let numero = o.pes_endereco.replace(new RegExp(/.+?(?<=\, )/), '');
						let complemento;

						if (/\-/.test(numero)) {
							complemento = numero.split('-')[1].trim();
							numero = numero.split('-')[0].trim();
						} else if (/\,/.test(numero)) {
							complemento = numero.split(',')[1].trim();
							numero = numero.split(',')[0].trim();
						}

						if (logradouro === numero) {
							numero = 0;
						}

						const local = new Local({
							cep: o.pes_cep,
							complemento: complemento,
							pontoReferencia: null,
							numero: numero,
							logradouro: logradouro,
							bairro: o.pes_bairro,
							cidade: o.pes_cidade,
							estado: o.pes_estado
						}, newDb);

						const enderecosFk = await local.save();
						return enderecosFk;
					},
					replace: 'enderecosFk'
				},
				{ value: null, replace: 'updatedAt' }
			]
		},

		// telefone 1
		{
			name: 'cadastro_pessoa',
			replaceName: 'pessoas_telefones',
			beforeExecute: async (newDb) => {
				await Promise.all([
					newDb.query('delete from pessoas_telefones'),
					newDb.query('truncate table pessoas_telefones')
				]);
			},
			fields: [
				{ key: 'pes_id', replace: 'pessoasFk' },
				{ func: async (o) => (o.pes_telefone1.trim().length === 0) ? null : o.pes_telefone1, replace: 'telefone', dontSaveIf: null },
				{ value: 1, replace: 'tiposTelefonesFk' },
				{ value: true, replace: 'status' },
				{ value: new Date(), replace: 'createdAt' }
			]
		},

		// telefone 2
		{
			name: 'cadastro_pessoa',
			replaceName: 'pessoas_telefones',
			fields: [
				{ key: 'pes_id', replace: 'pessoasFk' },
				{ func: async (o) => (o.pes_telefone2.trim().length === 0) ? null : o.pes_telefone2, replace: 'telefone', dontSaveIf: null },
				{ value: 2, replace: 'tiposTelefonesFk' },
				{ value: true, replace: 'status' },
				{ value: new Date(), replace: 'createdAt' }
			]
		},

		// email 1
		{
			name: 'cadastro_pessoa',
			replaceName: 'pessoas_emails',
			beforeExecute: async (newDb) => {
				await Promise.all([
					newDb.query('delete from pessoas_emails'),
					newDb.query('truncate table pessoas_emails')
				]);
			},
			fields: [
				{ key: 'pes_id', replace: 'pessoasFk' },
				{ func: async (o) => (o.pes_email.trim().length === 0) ? null : o.pes_email, replace: 'email', dontSaveIf: null },
				{ value: 1, replace: 'tiposEmailsFk' },
				{ value: true, replace: 'status' },
				{ value: new Date(), replace: 'createdAt' }
			]
		},

		// fornecedores
		{
			name: 'cadastro_fornecedor',
			replaceName: 'fornecedores',
			beforeExecute: async (newDb) => {
				await Promise.all([
					newDb.query('delete from fornecedores'),
					newDb.query('truncate table fornecedores')
				]);
			},
			fields: [
				{ key: 'for_id', replace: 'id' },
				{ key: 'for_nome_fantasia', replace: 'nomeFantasia' },
				{ key: 'for_tipo_pessoa', replace: 'tipoPessoa' },
				{ key: 'for_obs', replace: 'obs' },
				{ value: true, replace: 'status' },
				{ key: 'for_data_cadastro', replace: 'createdAt' },
				{ value: null, replace: 'updatedAt' },
				{ func: async (o) => parseInt(o.for_cod_pessoa.toString(), 10), replace: 'pessoasFk' }
			]
		},

		// funcionarios
		{
			name: 'cadastro_funcionario',
			replaceName: 'funcionarios',
			beforeExecute: async (newDb) => {
				await Promise.all([
					newDb.query('delete from funcionarios'),
					newDb.query('truncate table funcionarios')
				]);
			},
			fields: [
				{ key: 'fun_id', replace: 'id' },
				{ key: 'fun_data_admissao', replace: 'dataAdmissao', type: 'DATE' },
				{ key: 'fun_carteira_trabalho_numero', replace: 'carteiraNumero' },
				{ key: 'fun_carteira_trabalho_serie', replace: 'carteiraSerie' },
				{ key: 'fun_cargo', replace: 'cargo' },
				{ key: 'fun_pis', replace: 'pis' },
				{ key: 'fun_agencia', replace: 'agencia' },
				{ key: 'fun_conta', replace: 'conta' },
				{ key: 'fun_obs', replace: 'obs' },
				{ value: true, replace: 'status' },
				{ key: 'fun_data_cadastro', replace: 'createdAt' },
				{ value: null, replace: 'updatedAt' },
				{ key: 'fun_cod_pessoa', replace: 'pessoasFk' },
				{ value: 1, replace: 'federatedBaseBancoFk' }
			]
		},

		// suprimentos
		{
			name: 'cadastro_suprimento',
			replaceName: 'suprimentos',
			beforeExecute: async (newDb) => {
				await Promise.all([
					newDb.query('delete from suprimentos'),
					newDb.query('truncate table suprimentos')
				]);
			},
			afterExecute: async (insertId, o, newDb) => {
				await newDb.query('insert into estoque_itens (estoqueMinimo, estoqueMaximo, suprimentosFk, quantidade, status, estoqueLocalFk) values (?, ?, ?, ?, ?, ?)', 
				[null, null, insertId, 0, true, 1]
				);

				return false;
			},
			fields: [
				{ key: 'sup_id', replace: 'id' },
				{ key: 'sup_nome', replace: 'nome' },
				{ key: 'sup_descricao', replace: 'descricao' },
				{ value: 0, replace: 'estoqueMinimo' },
				{ value: 0, replace: 'precoCusto' },
				{ value: 0, replace: 'porcentagemLucro' },
				{ value: 0, replace: 'precoPraticado' }, 
				{ value: true, replace: 'status' },
				{ value: new Date(), replace: 'createdAt' },
				{ value: null, replace: 'updatedAt' }
			]
		},

		{
			name: 'lancamento_custo_fixo',
			replaceName: 'custo_fixo',
			beforeExecute: async (newDb) => {
				await Promise.all([
					newDb.query('delete from custo_fixo'),
					newDb.query('truncate table custo_fixo')
				]);
			},
			afterExecute: (insertId, o) => {
				const resp = {};
				resp[o.lancustfix_id] = insertId[0];
				return resp;
			},
			fields: [
				{ key: 'lancustfix_id', replace: 'id' },
				{ key: 'lancustfix_ativo', replace: 'status' },
				{ key: 'lancustfix_cod_fornecedor', replace: 'credorFornecedor' },
				{ key: 'lancustfix_cod_funcionario', replace: 'credorFuncionario' },
				{ func: (o) => (o.lancustfix_cod_fornecedor === null) ? 'FUNCIONÁRIO' : 'FORNECEDOR', replace: 'tipoCredor' },
				{ value: 8, replace: 'planoContasFk' },
				{ value: 27, replace: 'grupoContasFk' },
				{ value: 23, replace: 'subgrupoContasFk' },
				{ func: (o) => o.lancustfix_data_primeiro_vencimento.split('/')[1] + '-' + o.lancustfix_data_primeiro_vencimento.split('/')[0], replace: 'inicioLancamento' },
				{ func: (o) => (o.lancustfix_dia_vencimento.toString().length === 2) ? o.lancustfix_dia_vencimento : `0${o.lancustfix_dia_vencimento}`, replace: 'diaVencimento' },
				{ key: 'lancustfix_valor_parcela', replace: 'valorParcela' },
				{ key: 'lancustfix_historico', replace: 'historico' },
				{ key: 'lancustfix_obs', replace: 'obs' },
				{ key: 'lancustfix_data_lancamento', replace: 'createdAt' },
				{ value: null, replace: 'updatedAt' }
			]
		},

		{
			name: 'custo_fixo',
			replaceName: 'custo_fixo_parcela',
			beforeExecute: async (newDb) => {
				await Promise.all([
					newDb.query('delete from custo_fixo_parcela'),
					newDb.query('truncate table custo_fixo_parcela')
				]);
			},
			fields: [
				{ func: (o, n, l, afterExecute) => afterExecute['lancamento_custo_fixo'][o.custfix_cod_lancamento], replace: 'custoFixoFk' },
				{ value: 'C. Fixo', replace: 'numParcela' },
				{ key: 'custfix_data_vencimento', replace: 'dataVencimento', type: 'DATE' },
				{ key: 'custfix_data_pagamento', replace: 'dataPagamento' },
				{ func: (o) => o.custfix_valor_parcela === null ? 0 : o.custfix_valor_parcela, replace: 'valorParcela' },
				{ key: 'custfix_valor_pago', replace: 'valorPago' },
				{ key: 'custfix_nota_fiscal', replace: 'notaFiscal' },
				{ key: 'custfix_valor_juros', replace: 'juros' },
				{ value: null, replace: 'historico' },
				{ value: true, replace: 'status' }
			]
		},

		// custo variavel
		{
			name: 'lancamento_custo_variavel',
			replaceName: 'custo_variavel',
			beforeExecute: async (newDb) => {
				await Promise.all([
					newDb.query('delete from custo_variavel'),
					newDb.query('truncate table custo_variavel')
				]);
			},
			afterExecute: (insertId, o) => {
				const resp = {};
				resp[o.lancustvar_id] = insertId;
				return resp;
			},
			fields: [
				{ func: async (o) => (o.lancustvar_historico === null || o.lancustvar_historico.trim().length === 0) ? null : o.lancustvar_historico, replace: 'historico' },
				{ key: 'lancustvar_data', replace: 'createdAt', type: 'DATE' },
				{ key: 'lancustvar_numero_parcelas', replace: 'totalParcelas' },
				{ key: 'lancustvar_valor_total', replace: 'valorTotal' },
				{ func: async (o) => (o.lancustvar_nota_fiscal === null || o.lancustvar_nota_fiscal.trim().length === 0) ? null : o.lancustvar_nota_fiscal, replace: 'notaFiscal' },
				{ value: 'VARIÁVEL', replace: 'tipo' },
				{ key: 'lancustvar_data', replace: 'dataCusto', type: 'DATE' },
				{ value: null, replace: 'totalServico' },
				{ value: null, replace: 'totalSuprimento' },
				{ value: null, replace: 'frete' },
				{ value: null, replace: 'subgrupoFrete' },
				{ value: null, replace: 'valorFrete' },
				{ value: null, replace: 'incluirFrete' },
				{
					query: 'select custvar_data_vencimento as alias from custo_variavel where custvar_cod_lancamento = ? order by custvar_cod_lancamento asc limit 1',
					queryFields: ['lancustvar_id'] ,
					replace: 'primeiroVencimento',
					type: 'DATE',
					default: moment().format('YYYY-MM-DD HH:mm:ss')
				},
				{
					query: 'select sum(custvar_valor_parcela) as alias from custo_variavel where custvar_cod_lancamento = ?',
					queryFields: ['lancustvar_id'],
					replace: 'totalParcelamento',
					default: { key: 'lancustvar_valor_total' }
				},
				{ value: 8, replace: 'planoContasFk' },
				{ value: 27, replace: 'grupoContasFk' },
				{ value: 23, replace: 'subgrupoContasFk' },
				{ query: 'select custvar_cod_fornecedor as alias from custo_variavel where custvar_cod_lancamento = ? limit 1', queryFields: ['lancustvar_id'], replace: 'credorFornecedor' },
				{ query: 'select custvar_cod_funcionario as alias from custo_variavel where custvar_cod_lancamento = ? limit 1', queryFields: ['lancustvar_id'], replace: 'credorFuncionario' },
				{ query: 'select case when custvar_cod_fornecedor = NULL then "FUNCIONÁRIO" else "FORNECEDOR" END as alias from custo_variavel where custvar_cod_lancamento = ?', queryFields: ['lancustvar_id'], replace: 'tipoCredor', default: 'FORNECEDOR' },
				{ func: async (o) => (o.lancustvar_obs === null || o.lancustvar_obs.trim().length === 0) ? null : o.lancustvar_obs, replace: 'obs' },
				{ value: null, replace: 'updatedAt' }
			]
		},

		// custo_variavel (compra)
		{
			name: 'lancamento_compra_cabecalho',
			replaceName: 'custo_variavel',
			afterExecute: async (insertId, o, newDb) => {
				const resp = {};
				resp[o.lancabec_id] = insertId;

				await newDb.query(
					'insert into estoque_transacoes (tipoTransacao, descricao, comprasFk, estoqueLocalFkTarget, operadoresFk, createdAt) values (?, ?, ?, ?, ?, NOW())', 
					['COMPRA', 'Migrado do Banco antigo', insertId, 1, 1]
				);

				return resp;
			},
			fields: [
				{ func: async (o) => (o.lancabec_historico === null || o.lancabec_historico.trim().length === 0) ? null : o.lancabec_historico, replace: 'historico' },
				{ key: 'lancabec_data', replace: 'createdAt', type: 'DATE' },
				{ key: 'lancabec_numero_parcelas', replace: 'totalParcelas' },
				{ key: 'lancabec_valor_total', replace: 'valorTotal' },
				{ func: async (o) => (o.lancabec_nota_fiscal === null || o.lancabec_nota_fiscal.trim().length === 0) ? null : o.lancabec_nota_fiscal, replace: 'notaFiscal' },
				{ value: 'COMPRA', replace: 'tipo' },
				{ key: 'lancabec_data', replace: 'dataCusto', type: 'DATE' },
				{ value: null, replace: 'totalServico' },
				{
					func: async (o, newDb, oldDb) => {
						const valor = await oldDb.query('select sum(lancorp_valor_total) as valor from lancamento_compra_corpo where lancorp_cod_cabecalho = ?', [o.lancabec_id]);
						if(valor.length === 0) {
							return null;
						}

						return valor[0].valor;
					},
					replace: 'totalSuprimento'
				},
				{
					func: async (o, newDb, oldDb) => {
						let nome = await oldDb.query('select desp_nome from cadastro_despesa where desp_id = (select lancabec_frete from lancamento_compra_cabecalho where lancabec_id = ? limit 1)', [o.lancabec_id]);

						if (nome.length === 0) {
							return 'SEM FRETE';
						}

						nome = nome[0].desp_nome.split(' ').map(o => '%' + o + '%').join(' ');

						const response = await newDb.query('select id from subgrupo_contas where nome like _utf8 ? COLLATE utf8_unicode_ci', [nome]);

						if (response.length === 0) {
							return 'SEM FRETE';
						}
						return 'MESMO';
					},
					replace: 'frete'
				},
				{
					func: async (o, newDb, oldDb) => {
						let nome = await oldDb.query('select desp_nome from cadastro_despesa where desp_id = (select lancabec_frete from lancamento_compra_cabecalho where lancabec_id = ? limit 1)', [o.lancabec_id]);

						if (nome.length === 0) {
							return null;
						}

						nome = nome[0].desp_nome.split(' ').map(o => '%' + o + '%').join(' ');

						const response = await newDb.query('select id from subgrupo_contas where nome like _utf8 ? COLLATE utf8_unicode_ci', [nome]);

						if (response.length === 0) {
							return null;
						}
						return response[0].id;
					},
					replace: 'subgrupoFrete'
				},
				{ key: 'lancabec_valor_frete', replace: 'valorFrete' },
				{ value: false, replace: 'incluirFrete' },
				{
					key: 'lancabec_primeiro_vencimento',
					replace: 'primeiroVencimento',
					type: 'DATE',
					default: moment().format('YYYY-MM-DD HH:mm:ss')
				},
				{
					query: 'select sum(custvar_valor_parcela) as alias from custo_variavel where custvar_cod_lancamento_compra = ?',
					queryFields: ['lancabec_id'],
					replace: 'totalParcelamento',
					default: { key: 'lancabec_valor_total' }
				},
				{ value: 8, replace: 'planoContasFk' },
				{ value: 27, replace: 'grupoContasFk' },
				{ value: 23, replace: 'subgrupoContasFk' },
				{ key: 'lancabec_cod_fornecedor', replace: 'credorFornecedor' },
				{ value: null, replace: 'credorFuncionario' },
				{ value: 'FORNECEDOR', replace: 'tipoCredor' },
				{ value: null, replace: 'obs' },
				{ value: null, replace: 'updatedAt' }
			]
		},

		// custo_variavel_parcelas
		{
			name: 'custo_variavel',
			replaceName: 'custo_variavel_parcela',
			afterExecute: async (insertId, o, newDb) => {
				await newDb.query('insert into config_boleto (custoVariavelParcelaFk, obs) values (?, ?)', [insertId, 'Migrado do banco antigo.']);
				return false;
			},
			fields: [
				{
					func: (o, newDb, oldDb, afterExecute) => {
						if (o.custvar_cod_lancamento !== null && o.custvar_cod_lancamento_compra === null) {
							return afterExecute['lancamento_custo_variavel'][o.custvar_cod_lancamento];
						} else {
							return afterExecute['lancamento_compra_cabecalho'][o.custvar_cod_lancamento_compra];
						}
					},
					replace: 'custoVariavelFk'
				},
				{ value: true, replace: 'configured' },
				{ value: 'BOLETO', replace: 'tipoPagamento' },
				{ func: (o) => (o.custvar_num_parcela === null) ? 'Única' : o.custvar_num_parcela, replace: 'numParcela' },
				{ key: 'custvar_data_vencimento', replace: 'dataVencimento', type: 'DATE' },
				{ key: 'custvar_data_pagamento', replace: 'dataPagamento', type: 'DATE' },
				{ key: 'custvar_valor_parcela', replace: 'valorParcela' },
				{ key: 'custvar_valor_pago', replace: 'valorPago' },
				{ value: null, replace: 'historico' },
				{ key: 'custvar_valor_juros', replace: 'juros' }
			]
		},
		{
			name: 'lancamento_compra_corpo',
			replaceName: 'compra_suprimento',
			afterExecute: async (insertId, o, newDb, oldDb, afterExecute) => {
				const transacao = await newDb.query('select id from estoque_transacoes where comprasFk = ?', [afterExecute['lancamento_compra_cabecalho'][o.lancorp_cod_cabecalho]]);
				await newDb.query('insert into estoque_transacoes_itens (suprimentosFk, quantidade, estoqueTransacaoFk) values (?, ?, ?)', [o.lancorp_cod_suprimento, o.lancorp_quantidade, transacao[0].id]);

				return false;
			},
			fields: [
				{ func: (o, newDb, oldDb, afterExecute) => afterExecute['lancamento_compra_cabecalho'][o.lancorp_cod_cabecalho], replace: 'custoVariavelFk' },
				{ key: 'lancorp_quantidade', replace: 'quantidade' },
				{ key: 'lancorp_valor_unitario', replace: 'valorUnitario' },
				{ key: 'lancorp_valor_total', replace: 'valorTotal' },
				{ value: 11, replace: 'subgrupoContasFk' },
				{ key: 'lancorp_cod_suprimento', replace: 'suprimentosFk' }
			]
		},

		{
			name: 'auditoria',
			replaceName: 'audit',
			fields: [
				{ value: 1, replace: 'operadoresFk' },
				{ value: 'INEXISTENTE', replace: 'method' },
				{ value: 'INEXISTENTE', replace: 'path' },
				{ value: 'INEXISTENTE', replace: 'remoteAddress' },
				{ value: 200, replace: 'response' },
				{ key: 'aud_descricao', replace: 'message' },
				{ value: 'INEXISTENTE', replace: 'acao' },
				{ value: 'NORMAL', replace: 'level' },
				{ value: 'INEXISTENTE', replace: 'ref' },
				{ value: new Date(), replace: 'createdAt', type: 'DATE' }
			]
		}
	]
};

export default json;
