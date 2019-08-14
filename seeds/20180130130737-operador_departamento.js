export function up(queryInterface) {
	if (process.env.NODE_ENV === 'test') {
		return queryInterface.bulkInsert('operadores_departamentos', [
			{ id: 1, operadoresFk: 10, departamentosFk: 1 }
		]);
	}

	return queryInterface.bulkInsert('operadores_departamentos', [
		{ id: 1, operadoresFk: 1, departamentosFk: 1 },
		{ id: 2, operadoresFk: 1, departamentosFk: 2 },
		{ id: 3, operadoresFk: 2, departamentosFk: 2 }
	]);
}

export function down(queryInterface) {
	return queryInterface.bulkDelete('operadores_departamentos', null, {});
}
