import datasource from '../datasource';
import moment from 'moment';

const { newDb, oldDb } = datasource();

export async function up(queryInterface) {
	const audits = await oldDb.query('select * from auditoria', { type: oldDb.QueryTypes.SELECT });

	const data = [];

	for (let i = 0; i < audits.length; i++) {
		const o = audits[i];

		const audit = {
			path: 'INEXISTENTE',
			method: 'INEXISTENTE',
			body: '{}',
			remoteAddress: 'INEXISTENTE',
			response: 200,
			message: o.aud_descricao,
			acao: 'INEXISTENTE',
			level: 'NORMAL',
			ref: 'INEXISTENTE',
			createdAt: moment(`${o.aud_data} ${o.aud_hora}`).format('YYYY-MM-DD HH:mm:ss'),
			updatedAt: null,
			operadoresFk: 2
		}

		data.push(audit);
	}

	try {
		await queryInterface.bulkInsert('audit', data);
	} catch (error) {
		console.error(error);
	}
}

export function down(queryInterface) {
	return queryInterface.bulkDelete('audit', null, {});
}