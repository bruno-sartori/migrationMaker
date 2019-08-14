export function up(queryInterface) {
	return queryInterface.bulkInsert('subgrupo_contas', [
		// RECEITAS MENSAIS
		{ nome: 'INTERNET', grupoContasFk: 1 },
		{ nome: 'TV', grupoContasFk: 1 },
		{ nome: 'TELEFONIA FIXA', grupoContasFk: 1 },
		{ nome: 'CONTR. MANUTENÇÃO', grupoContasFk: 1 },
		{ nome: 'COMBO', grupoContasFk: 1 },
		
		// RECEITAS AVULSAS
		{ nome: 'SUPRIMENTOS', grupoContasFk: 2 },
		{ nome: 'SERVIÇOS', grupoContasFk: 2 },
		
		// COMPRAS DE SUPRIMENTOS
		{ nome: 'COMPRAS DE SUPRIMENTOS', grupoContasFk: 3 },
		
		// FIXAS
		{ nome: 'ENERGIA ELÉTRICA', grupoContasFk: 4 },
		{ nome: 'SANEAMENTO', grupoContasFk: 4 },
		{ nome: 'ALUGUEL IMÓVEL', grupoContasFk: 4 },
		{ nome: 'ALUGUEL ERB', grupoContasFk: 4 },
		{ nome: 'TELEFONIA FIXA', grupoContasFk: 4 },
		{ nome: 'TELEFONIA MÓVEL', grupoContasFk: 4 },
		{ nome: 'TELEFONIA VOIP', grupoContasFk: 4 },
		{ nome: 'LINK IP INTERNET', grupoContasFk: 4 },
		{ nome: 'ASSESSORIAS', grupoContasFk: 4 },
		{ nome: 'ALUGUEL SOFTWARES', grupoContasFk: 4 },
		{ nome: 'ALUGUEL POSTES', grupoContasFk: 4 },
		{ nome: 'CESTA C/C', grupoContasFk: 4 },

		// TAXAS DE RECEBIMENTOS
		{ nome: 'REGISTRO BOLETO', grupoContasFk: 5 },
		{ nome: 'BOLETO PAGO VENCIDO', grupoContasFk: 5 },
		{ nome: 'DECURSO DE PRAZO', grupoContasFk: 5 },

		// RH
		{ nome: 'SALÁRIO', grupoContasFk: 6 },
		{ nome: 'FÉRIAS', grupoContasFk: 6 },
		{ nome: '13º SALÁRIO', grupoContasFk: 6 },
		{ nome: 'ACERTOS', grupoContasFk: 6 },
		{ nome: 'COMISSÃO', grupoContasFk: 6 },
		{ nome: 'FGTS', grupoContasFk: 6 },
		{ nome: 'INSS', grupoContasFk: 6 },
		{ nome: 'PRÓ-LABORE', grupoContasFk: 6 },

		// DESPESAS COM TERCEIROS
		{ nome: 'SERRALHEIRO', grupoContasFk: 7 },
		{ nome: 'PEDREIRO', grupoContasFk: 7 },
		{ nome: 'ENTREGA CARTAS', grupoContasFk: 7 },
		{ nome: 'PANFLETAGEM', grupoContasFk: 7 },
		{ nome: 'FAXINA', grupoContasFk: 7 },
		{ nome: 'JARDINAGEM', grupoContasFk: 7 },
		{ nome: 'BORRACHEIRO', grupoContasFk: 7 },
		{ nome: 'MECÂNICO', grupoContasFk: 7 },
		{ nome: 'FUNILEIRO', grupoContasFk: 7 },
		{ nome: 'TAPECEIRO', grupoContasFk: 7 },
		{ nome: 'LAVADOR VEÍCULO', grupoContasFk: 7 },
		{ nome: 'WEB DESIGNER', grupoContasFk: 7 },
		{ nome: 'GRÁFICA', grupoContasFk: 7 },
		
		// COMERCIAIS
		{ nome: 'CARRO DE SOM', grupoContasFk: 8 },
		{ nome: 'ANÚNCIO NA INTERNET', grupoContasFk: 8 },
		{ nome: 'OUTDOOR', grupoContasFk: 8 },
		{ nome: 'ANÚNCIO VEICULAR', grupoContasFk: 8 },

		// ADMINISTRATIVAS
		{ nome: 'EXAME ADMISSIONAL', grupoContasFk: 9 },
		{ nome: 'EXAME DEMISSIONAL', grupoContasFk: 9 },
		{ nome: 'DESPESAS C/ COLABORADORES', grupoContasFk: 9 },
		{ nome: 'ANATEL', grupoContasFk: 9 },
		{ nome: 'CFT', grupoContasFk: 9 },
		{ nome: 'CORREIOS', grupoContasFk: 9 },
		{ nome: 'ALVARÁ PREFEITURA', grupoContasFk: 9 },
		{ nome: 'ALVARÁ BOMBEIRO', grupoContasFk: 9 },
		{ nome: 'DOCUMENTAÇÃO VEÍCULO', grupoContasFk: 9 },
		{ nome: 'SEGURO IMÓVEIS', grupoContasFk: 9 },
		{ nome: 'SEGURO VEÍCULOS', grupoContasFk: 9 },
		
		// FINANCEIRAS
		{ nome: 'TAXAS CARTÃO', grupoContasFk: 10 },
		{ nome: 'C/C', grupoContasFk: 10 },
		
		// IMPOSTOS
		{ nome: 'ALVARÁ', grupoContasFk: 11 },
		{ nome: 'DARF', grupoContasFk: 11 },
		{ nome: 'DARE', grupoContasFk: 11 },
		{ nome: 'DAS', grupoContasFk: 11 },
		{ nome: 'DEFIS', grupoContasFk: 11 },
		{ nome: 'IPTU', grupoContasFk: 11 },
		{ nome: 'IPVA', grupoContasFk: 11 },

		// EMPRÉSTIMOS
		{ nome: 'BANCÁRIOS', grupoContasFk: 12 },
		{ nome: 'TERCEIROS', grupoContasFk: 12 },

		// FRETES
		{ nome: 'FRETE RODOVIÁRIO', grupoContasFk: 13 },
		{ nome: 'FRETE AÉREO', grupoContasFk: 13 },
		{ nome: 'FRETE CORREIOS', grupoContasFk: 13 },
		{ nome: 'FRETE TERCEIROS', grupoContasFk: 13 },

		// BANCÁRIO
		{ nome: 'PREVIDÊNCIA', grupoContasFk: 14 },
		{ nome: 'TESOURO DIRETO', grupoContasFk: 14 },

		// CANCELAMENTOS
		{ nome: 'CLIENTE MENSAL', grupoContasFk: 15 },
	]);
}

export function down(queryInterface) {
	return queryInterface.bulkDelete('subgrupo_contas', null, {});
}
