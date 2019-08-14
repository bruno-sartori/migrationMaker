export function up(queryInterface) {
	return queryInterface.bulkInsert('estoque_locais', [
		{ id: 1, nome: 'PRINCIPAL', principal: true, enderecosFk: 1, tipoLocal: 'IMÓVEL' },
		{ id: 2, nome: 'BARRACÃO', principal: false, enderecosFk: 1, tipoLocal: 'IMÓVEL' }
	]);
}

export function down(queryInterface) {
	return queryInterface.bulkDelete('estoque_locais', null, {});
}
