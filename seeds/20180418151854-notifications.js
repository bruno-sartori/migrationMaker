import moment from 'moment';

export function up(queryInterface) {
	return queryInterface.bulkInsert('notifications', [
		{
			title: 'Banco de Dados migrado!',
			description: `A migração foi concluída com sucesso em ${moment().format('DD/MM/YYYY HH:mm:ss')}`,
			extra: 'Executado',
			status: 'processing',
			type: 'event',
			operadoresFk: 1
		},
	]);
}

export function down(queryInterface) {
	return queryInterface.bulkDelete('notifications', null, {});
}
