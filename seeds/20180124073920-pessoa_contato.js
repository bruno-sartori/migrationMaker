import datasource from '../datasource';

const { newDb, oldDb } = datasource();

export async function up(queryInterface) {
	await Promise.all([
		oldDb.query('update cadastro_pessoa set pes_telefone1 = null where pes_telefone1 = "" or pes_telefone1 = "(" or pes_telefone1 = "(17)"'),
		oldDb.query('update cadastro_pessoa set pes_telefone2 = null where pes_telefone2 = ""'),
	]);

	const pessoas = await oldDb.query('select * from cadastro_pessoa', { type: oldDb.QueryTypes.SELECT });

	const data = [];

	for (let i = 0; i < pessoas.length; i++) {
		const obj = pessoas[i];

		if (obj.pes_telefone1 !== null && obj.pes_telefone1.trim().length !== 0) {
			const contato = {
				tipoContato: obj.pes_telefone1.trim().length === 14 ? 'TELEFONE FIXO' : 'TELEFONE CELULAR',
				contato: obj.pes_telefone1.trim(),
				pessoasFk: obj.pes_id
			};

			data.push(contato);
		}

		if (obj.pes_telefone2 !== null && obj.pes_telefone2.trim().length !== 0) {
			const contato2 = {
				tipoContato: obj.pes_telefone2.trim().length === 14 ? 'TELEFONE FIXO' : 'TELEFONE CELULAR',
				contato: obj.pes_telefone2.trim(),
				pessoasFk: obj.pes_id
			};

			data.push(contato2);
		}

		if (obj.pes_email !== null && obj.pes_email.trim().length !== 0) {
			const contato3 = {
				tipoContato: 'EMAIL',
				contato: obj.pes_email.trim(),
				pessoasFk: obj.pes_id
			};

			data.push(contato3);
		}
	}

	try {
		await queryInterface.bulkInsert('pessoas_contato', data);
	} catch (error) {
		console.error(error);
	}
}

export function down(queryInterface) {
	return queryInterface.bulkDelete('pessoas_contato', null, {});
}
