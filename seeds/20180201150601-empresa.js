export function up(queryInterface) {
	return queryInterface.bulkInsert('empresas', [
		{
			id: 1,
			cnpj: '10.462.153/0001-04',
			razaoSocial: 'JDNET TELECOM',
			nomeFantasia: 'JDNET',
			ie: '111.222.333.444',
			logoPath: null,
			dominio: 'jdnet.com.br',
			enderecosFk: 1
		}
	]);
}

export function down(queryInterface) {
	return queryInterface.bulkDelete('empresas', null, {});
}
