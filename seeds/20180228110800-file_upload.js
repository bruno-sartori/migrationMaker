export function up(queryInterface) {
	return queryInterface.bulkInsert('file_upload', [
		{
			id: 1,
			name: 'jdnet-logo.png',
			extension: '.png',
			size: 9601,
			path: '/logo/jdnet-logo.png',
			folderPath: '/logo',
			description: 'LOGO',
			createdAt: new Date(),
			operadoresFk: 1,
			grupoAnexosFk: 4,
		}
	]);
}

export function down(queryInterface) {
	return queryInterface.bulkDelete('file_upload', null, {});
}
