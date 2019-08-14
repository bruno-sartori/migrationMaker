import datasource from '../datasource';

const { newDb, oldDb } = datasource();

export async function up(queryInterface) {
	const funcionarios = await oldDb.query('select * from cadastro_funcionario', { type: oldDb.QueryTypes.SELECT });

	const data = [];

	for (let i = 0; i < funcionarios.length; i++) {
		const o = funcionarios[i];

		const funcionario = {
			id: o.fun_id,
			dataAdmissao: new Date(o.fun_data_admissao),
			dataNascimento: null,
			carteiraNumero: o.fun_carteira_trabalho_numero,
			carteiraSerie: o.fun_carteira_trabalho_serie,
			cargo: o.fun_cargo,
			pis: o.fun_pis,
			agencia: o.fun_agencia,
			conta: o.fun_conta,
			obs: o.fun_obs,
			pessoasFk: o.fun_cod_pessoa,
			federatedBaseBancoFk: 1
		};

		data.push(funcionario);
	}

	try {
		await queryInterface.bulkInsert('funcionarios', data);
	} catch (error) {
		console.error(error);
	}
}

export function down(queryInterface) {
	return queryInterface.bulkDelete('funcionarios', null, {});
}
