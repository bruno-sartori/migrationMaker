export function up(queryInterface) {
	return queryInterface.bulkInsert('bairros', [
		{ id: 1, bairro: 'TERMAS DE IBIRÁ', cidadesFk: 4930 },
		{ id: 2, bairro: 'CENTRO', cidadesFk: 4930 }
	]);
}

export function down(queryInterface) {
	return queryInterface.bulkDelete('bairros', null, {});
}
