export function up(queryInterface) {
	return queryInterface.bulkInsert('planos', [
		{
			id: 1,
			nome: '1 MEGA',
			valor: 200.40,
			download: 1024,
			upload: 300,
			periodo: 1,
			obs: 'lorem ipsum dolor sit amet',
			grupoPlanosFk: 1
		},
		{
			id: 2,
			nome: '50 MEGA',
			valor: 290.99,
			download: 51200,
			upload: 10240,
			periodo: 1,
			obs: 'lorem ipsum dolor sit amet',
			grupoPlanosFk: 2
		}
	]);
}

export function down(queryInterface) {
	return queryInterface.bulkDelete('planos', null, {});
}
