import datasource from '../datasource';

const { newDb, oldDb } = datasource();

const binaryConvert = async (table, field) => {
	await oldDb.query(`update ${table} set ${field} = convert(binary convert(${field} using latin1) using utf8)`);
}

export async function up(queryInterface) {
	
	const fornecedores = await oldDb.query('select * from cadastro_fornecedor', { type: oldDb.QueryTypes.SELECT });

	const data = [];

	for (let i = 0; i < fornecedores.length; i++) {
		const obj = fornecedores[i];

		const fornecedor = {
			id: obj.for_id,
			nomeFantasia: obj.for_nome_fantasia,
			tipoPessoa: obj.for_tipo_pessoa,
			obs: obj.for_obs,
			createdAt: obj.for_data_cadastro,
			pessoasFk: parseInt(obj.for_cod_pessoa.toString(), 10)
		}

		data.push(fornecedor);
	}

	try {
		await queryInterface.bulkInsert('fornecedores', data);
	} catch (error) {
		console.error(error);
	}
}

export function down(queryInterface) {
	return queryInterface.bulkDelete('fornecedores', null, {});
}
