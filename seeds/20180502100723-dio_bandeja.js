export function up(queryInterface) {
	return Promise.resolve();
}

export function down(queryInterface) {
	return queryInterface.bulkDelete('dio_bandeja', null, {});
}
