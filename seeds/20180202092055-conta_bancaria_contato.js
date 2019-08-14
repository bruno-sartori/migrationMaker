export function up(queryInterface) {
	return queryInterface.bulkInsert('conta_bancaria_contato', [
		{ id: 1, tipoContato: 'TELEFONE CELULAR', contato: '(17) 98154-8437', contaBancariaFk: 1 },
		{ id: 4, tipoContato: 'EMAIL', contato: 'brunosartori.webmaster@gmail.com', contaBancariaFk: 1 },
		{ id: 5, tipoContato: 'TELEFONE FIXO', contato: '(17) 3551-7493', contaBancariaFk: 2 },
		{ id: 6, tipoContato: 'EMAIL', contato: 'brunosartori@otonsolut.com', contaBancariaFk: 2 },
	]);
}

export function down(queryInterface) {
	return queryInterface.bulkDelete('conta_bancaria_contato', null, {});
}
