export function up(queryInterface) {
	return queryInterface.bulkInsert('dias_pagamento_plano', [
		{ id: 1, dia: '10' },
		{ id: 2, dia: '25' }
	]);
}

export function down(queryInterface) {
	return queryInterface.bulkDelete('dias_pagamento_plano', null, {});
}
