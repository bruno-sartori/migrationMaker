export function up(queryInterface) {
	return queryInterface.bulkInsert('grupo_suprimentos', [
		{ id: 1, nome: 'CONSUMO' },
		{ id: 2, nome: 'INFRAESTRUTURA' },
		{ id: 3, nome: 'PRODUTOS' }
	]);
}

export function down(queryInterface) {
	return queryInterface.bulkDelete('grupo_suprimentos', null, {});
}
