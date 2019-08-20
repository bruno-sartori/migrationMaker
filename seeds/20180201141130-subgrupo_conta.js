export function up(queryInterface) {
	return queryInterface.bulkInsert('subgrupo_contas', [
		// RECEITAS MENSAIS
		{ id: 1, nome: 'INTERNET', grupoContasFk: 1 },
		{ id: 2, nome: 'TV', grupoContasFk: 1 },
		{ id: 3, nome: 'TELEFONIA FIXA', grupoContasFk: 1 },
		{ id: 4, nome: 'CONTR. MANUTENÇÃO', grupoContasFk: 1 },
		{ id: 5, nome: 'COMBO', grupoContasFk: 1 },

		// RECEITAS AVULSAS
		{ id: 6, nome: 'SUPRIMENTOS', grupoContasFk: 2 },
		{ id: 7, nome: 'SERVIÇOS', grupoContasFk: 2 },

		// COMPRAS DE SUPRIMENTOS
		{ id: 8, nome: 'COMPRAS DE SUPRIMENTOS', grupoContasFk: 3 },

		// FIXAS
		{ id: 9, nome: 'ENERGIA ELÉTRICA', grupoContasFk: 4 },
		{ id: 10, nome: 'SANEAMENTO', grupoContasFk: 4 },
		{ id: 11, nome: 'ALUGUEL IMÓVEL', grupoContasFk: 4 },
		{ id: 12, nome: 'ALUGUEL ERB', grupoContasFk: 4 },
		{ id: 13, nome: 'TELEFONIA FIXA', grupoContasFk: 4 },
		{ id: 14, nome: 'TELEFONIA MÓVEL', grupoContasFk: 4 },
		{ id: 15, nome: 'TELEFONIA VOIP', grupoContasFk: 4 },
		{ id: 16, nome: 'LINK IP INTERNET', grupoContasFk: 4 },
		{ id: 17, nome: 'ASSESSORIAS', grupoContasFk: 4 },
		{ id: 18, nome: 'ASSINATURA DE SOFTWARES', grupoContasFk: 4 },
		{ id: 19, nome: 'ALUGUEL POSTES', grupoContasFk: 4 },
		{ id: 20, nome: 'CESTA C/C', grupoContasFk: 4 },
		{ id: 21, nome: 'CDN', grupoContasFk: 4 },

		// TAXAS DE RECEBIMENTOS
		{ id: 22, nome: 'REGISTRO BOLETO', grupoContasFk: 5 },
		{ id: 23, nome: 'BOLETO PAGO VENCIDO', grupoContasFk: 5 },
		{ id: 24, nome: 'DECURSO DE PRAZO', grupoContasFk: 5 },
		{ id: 25, nome: 'ALTERAÇÃO DE BOLETO', grupoContasFk: 5 },
		{ id: 26, nome: 'BAIXA DE BOLETO', grupoContasFk: 5 },

		// RH
		{ id: 27, nome: 'SALÁRIO', grupoContasFk: 6 },
		{ id: 28, nome: 'FÉRIAS', grupoContasFk: 6 },
		{ id: 29, nome: '13º SALÁRIO', grupoContasFk: 6 },
		{ id: 30, nome: 'ACERTOS', grupoContasFk: 6 },
		{ id: 31, nome: 'COMISSÃO', grupoContasFk: 6 },
		{ id: 32, nome: 'FGTS', grupoContasFk: 6 },
		{ id: 33, nome: 'INSS', grupoContasFk: 6 },
		{ id: 34, nome: 'PRÓ-LABORE', grupoContasFk: 6 },
		{ id: 35, nome: 'AUXILIO ALIMENTAÇÃO', grupoContasFk: 6 },
		{ id: 36, nome: 'AUXILIO TRANSPORTE', grupoContasFk: 6 },
		{ id: 37, nome: 'EXTRAS', grupoContasFk: 6 },

		// DESPESAS COM TERCEIROS
		{ id: 38, nome: 'SERRALHEIRO', grupoContasFk: 7 },
		{ id: 39, nome: 'PEDREIRO', grupoContasFk: 7 },
		{ id: 40, nome: 'ENTREGA CARTAS', grupoContasFk: 7 },
		{ id: 41, nome: 'PANFLETAGEM', grupoContasFk: 7 },
		{ id: 42, nome: 'FAXINA', grupoContasFk: 7 },
		{ id: 43, nome: 'JARDINAGEM', grupoContasFk: 7 },
		{ id: 44, nome: 'BORRACHEIRO', grupoContasFk: 7 },
		{ id: 45, nome: 'MECÂNICO', grupoContasFk: 7 },
		{ id: 46, nome: 'FUNILEIRO', grupoContasFk: 7 },
		{ id: 47, nome: 'TAPECEIRO', grupoContasFk: 7 },
		{ id: 48, nome: 'LAVADOR VEÍCULO', grupoContasFk: 7 },
		{ id: 49, nome: 'DESIGNER', grupoContasFk: 7 },
		{ id: 50, nome: 'GRÁFICA', grupoContasFk: 7 },
		{ id: 51, nome: 'JURÍDICA', grupoContasFk: 7 },
		{ id: 52, nome: 'CONTADOR', grupoContasFk: 7 },
		{ id: 53, nome: 'ASSOCIAÇÃO', grupoContasFk: 7 },
		{ id: 54, nome: 'COMUNICAÇÃO VISUAL', grupoContasFk: 7 },
		{ id: 55, nome: 'HOSPEDAGEM VIRTUAL', grupoContasFk: 7 },
		{ id: 56, nome: 'CARPINTEIRO', grupoContasFk: 7 },
		{ id: 57, nome: 'CONSULTORIA EM TI', grupoContasFk: 7 },
		{ id: 58, nome: 'ELETRICISTA DE VEÍCULOS', grupoContasFk: 7 },
		{ id: 59, nome: 'ENGENHEIRO', grupoContasFk: 7 },
		{ id: 60, nome: 'AR CONDICIONADO DE IMÓVEL', grupoContasFk: 7 },
		{ id: 61, nome: 'SOFTWARE', grupoContasFk: 7 },
		{ id: 62, nome: 'PINTOR', grupoContasFk: 7 },
		{ id: 63, nome: 'SERVIÇOS DE COBRANÇA', grupoContasFk: 7 },
		{ id: 64, nome: 'VIDRACEIRO', grupoContasFk: 7 },

		// COMERCIAIS
		{ id: 65, nome: 'CARRO DE SOM', grupoContasFk: 8 },
		{ id: 66, nome: 'ANÚNCIO NA INTERNET', grupoContasFk: 8 },
		{ id: 67, nome: 'OUTDOOR', grupoContasFk: 8 },
		{ id: 68, nome: 'ANÚNCIO VEICULAR', grupoContasFk: 8 },
		{ id: 69, nome: 'EVENTOS', grupoContasFk: 8 },
		{ id: 70, nome: 'PATROCÍNIO', grupoContasFk: 8 },

		// ADMINISTRATIVAS
		{ id: 71, nome: 'EXAME ADMISSIONAL', grupoContasFk: 9 },
		{ id: 72, nome: 'EXAME DEMISSIONAL', grupoContasFk: 9 },
		{ id: 73, nome: 'DESPESAS C/ COLABORADORES', grupoContasFk: 9 },
		{ id: 74, nome: 'ANATEL', grupoContasFk: 9 },
		{ id: 75, nome: 'CFT', grupoContasFk: 9 },
		{ id: 76, nome: 'CORREIOS', grupoContasFk: 9 },
		{ id: 77, nome: 'ALVARÁ PREFEITURA', grupoContasFk: 9 },
		{ id: 78, nome: 'ALVARÁ BOMBEIRO', grupoContasFk: 9 },
		{ id: 79, nome: 'DOCUMENTAÇÃO VEÍCULO', grupoContasFk: 9 },
		{ id: 80, nome: 'SEGURO IMÓVEIS', grupoContasFk: 9 },
		{ id: 81, nome: 'SEGURO VEÍCULOS', grupoContasFk: 9 },
		{ id: 82, nome: 'CARTÓRIO', grupoContasFk: 9 },
		{ id: 83, nome: 'CAU - CONSELHO DE ARQUITETURA E URBANISMO', grupoContasFk: 9 },
		{ id: 84, nome: 'CFT - CONSELHO FEDERAL DOS TÉCNICOS INDUSTRIAIS', grupoContasFk: 9 },
		{ id: 85, nome: 'CERTIFICADO DIGITAL', grupoContasFk: 9 },
		{ id: 86, nome: 'SEGURO COLABORADORES', grupoContasFk: 9 },
		{ id: 87, nome: 'CONTRIBUIÇÃO SINDICAL PATRONAL', grupoContasFk: 9 },
		{ id: 88, nome: 'CREA', grupoContasFk: 9 },
		{ id: 89, nome: 'MULTA DE TRÂNSITO', grupoContasFk: 9 },
		{ id: 90, nome: 'NIC.BR', grupoContasFk: 9 },
		{ id: 91, nome: 'PEDÁGIO', grupoContasFk: 9 },
		{ id: 92, nome: 'SEGURANÇA PATRIMONIAL', grupoContasFk: 9 },
		{ id: 93, nome: 'TAXAS PREFEITURA', grupoContasFk: 9 },
		{ id: 94, nome: 'TELEFONIA FIXA', grupoContasFk: 9 },
		{ id: 95, nome: 'TELEFONIA MÓVEL', grupoContasFk: 9 },
		{ id: 96, nome: 'TELEFONIA VOIP', grupoContasFk: 9 },

		// FINANCEIRAS
		{ id: 97, nome: 'TAXAS CARTÃO', grupoContasFk: 10 },
		{ id: 98, nome: 'MENSALIDADE', grupoContasFk: 10 },
		{ id: 99, nome: 'IOF', grupoContasFk: 10 },
		{ id: 100, nome: 'JUROS C/C', grupoContasFk: 10 },

		// IMPOSTOS
		{ id: 101, nome: 'ALVARÁ', grupoContasFk: 11 },
		{ id: 102, nome: 'DARF', grupoContasFk: 11 },
		{ id: 103, nome: 'DARE', grupoContasFk: 11 },
		{ id: 104, nome: 'DAS', grupoContasFk: 11 },
		{ id: 105, nome: 'DEFIS', grupoContasFk: 11 },
		{ id: 106, nome: 'IPTU', grupoContasFk: 11 },
		{ id: 107, nome: 'IPVA', grupoContasFk: 11 },
		{ id: 108, nome: 'DARF - IRPJ', grupoContasFk: 11 },
		{ id: 109, nome: 'DARF - IRPF', grupoContasFk: 11 },
		{ id: 110, nome: 'DIRF', grupoContasFk: 11 },
		{ id: 111, nome: 'GRU', grupoContasFk: 11 },
		{ id: 112, nome: 'ICMS', grupoContasFk: 11 },
		{ id: 113, nome: 'RAIZ', grupoContasFk: 11 },

		// EMPRÉSTIMOS
		{ id: 114, nome: 'BANCÁRIOS', grupoContasFk: 12 },
		{ id: 115, nome: 'TERCEIROS', grupoContasFk: 12 },
		{ id: 116, nome: 'IMÓVEIS', grupoContasFk: 12 },
		{ id: 117, nome: 'PARCELAMENTO FORNECEDORES', grupoContasFk: 12 },
		{ id: 118, nome: 'PARCELAMENTO IMPOSTOS', grupoContasFk: 12 },
		{ id: 119, nome: 'VEÍCULOS', grupoContasFk: 12 },

		// FRETES
		{ id: 120, nome: 'FRETE RODOVIÁRIO', grupoContasFk: 13 },
		{ id: 121, nome: 'FRETE AÉREO', grupoContasFk: 13 },
		{ id: 122, nome: 'FRETE CORREIOS', grupoContasFk: 13 },
		{ id: 123, nome: 'FRETE TERCEIROS', grupoContasFk: 13 },

		// BANCÁRIO
		{ id: 124, nome: 'PREVIDÊNCIA', grupoContasFk: 14 },
		{ id: 125, nome: 'TESOURO DIRETO', grupoContasFk: 14 },
		{ id: 126, nome: 'CONSÓRCIO', grupoContasFk: 14 },


		// CANCELAMENTOS
		{ id: 127, nome: 'CLIENTE MENSAL', grupoContasFk: 15 },

		{ id: 128, nome: 'OUTRAS TARIFAS', grupoContasFk: 10 }, // FINANCEIRAS
		{ id: 129, nome: 'OUTROS PRESTADORES', grupoContasFk: 7 }, // DESPESAS C/ TERCEIROS
		{ id: 130, nome: 'TERRENOS', grupoContasFk: 16 }, // IMÓVEIS

	]);
}

export function down(queryInterface) {
	return queryInterface.bulkDelete('subgrupo_contas', null, {});
}
