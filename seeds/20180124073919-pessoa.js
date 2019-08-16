import datasource from '../datasource';

const { newDb, oldDb } = datasource();

export async function up(queryInterface) {
	try {
		const pessoas = await oldDb.query('select * from cadastro_pessoa', { type: oldDb.QueryTypes.SELECT });

		const data = [];

		// const ignoreArr = [312, 53, 155, 158, 265, 157, 285, 291, 154];

		for (let i = 0; i < pessoas.length; i++) {
			const obj = pessoas[i];

			try {
				let logradouro = obj.pes_endereco.replace(new RegExp(/\,(.*)/), '');
				let numero = obj.pes_endereco.replace(new RegExp(/.+?(?<=\, )/), '');
				let complemento;
		
				if (/\-/.test(numero)) {
					complemento = numero.split('-')[1].trim();
					numero = numero.split('-')[0].trim();
				} else if (/\,/.test(numero)) {
					complemento = numero.split(',')[1].trim();
					numero = numero.split(',')[0].trim();
				}
		
				if (logradouro === numero) {
					numero = '0';
				}
		
				const endereco = {
					cep: obj.pes_cep,
					complemento: complemento,
					pontoReferencia: null,
					numero: numero,
					logradouro: logradouro,
					bairro: obj.pes_bairro,
					cidade: obj.pes_cidade,
					estado: obj.pes_estado
				};
		
				const local = await newDb.models.Endereco.createLocal(newDb, endereco, null);;
		
				const pessoa = {
					id: obj.pes_id,
					nome: obj.pes_nome,
					cpfCnpj: obj.pes_cnpj_cpf,
					rgIe: obj.pes_ie_rg,
					createdAt: obj.pes_data_cadastro_pessoa,
					enderecosFk: local.id,
					updatedAt: null,
					createdAt: new Date()
				};
		
				data.push(pessoa);
			} catch (error) {
				console.error(error);
			}	
		}

		await queryInterface.bulkInsert('pessoas', data);
	} catch (error) {
		console.error(error);
	}	
}

export function down(queryInterface) {
	return queryInterface.bulkDelete('pessoas', null, {});
}
