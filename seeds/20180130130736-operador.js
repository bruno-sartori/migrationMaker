import datasource from '../datasource';

const { newDb, oldDb } = datasource();

export async function up(queryInterface) {
	try {
		await newDb.query('set foreign_key_checks = 0');
		
		const ignoreArr = [312, 53, 155, 158, 265, 157, 285, 291, 154];
		await queryInterface.bulkInsert('operadores', [
			{
				id: 1,
				login: 'brunosartori.webmaster@gmail.com',
				senha: '$2b$10$2aCCyEYGUfd19yw73TRyTeazMRh0bGqAspyyPKh0zIZGA7/pNngve',
				obs: 'teste',
				avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
				root: true,
				criadoPor: 'SISTEMA em 27/04/2018 às 09:27:26.',
				portalClientesFk: 1,
				pessoasFk: 312,
				senhaEmail: 'teste',
				hostImap: 'imap.gmail.com',
				portImap: 993,
				hostSmtp: 'smtp.gmail.com',
				portSmtp: 587,
				assinaturaEmail: `At.\n\nBruno Sartori - (17) 98154-8437`
			},
			{
				id: 2,
				login: 'jesusrodrigo@jdnet.com.br',
				senha: '$2b$10$2aCCyEYGUfd19yw73TRyTeazMRh0bGqAspyyPKh0zIZGA7/pNngve',
				obs: 'teste',
				avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
				root: false,
				criadoPor: 'SISTEMA em 27/04/2018 às 09:27:26.',
				portalClientesFk: 1,
				pessoasFk: 53
			},
			{
				id: 3,
				login: 'junior@jdnet.com.br',
				senha: '$2b$10$2aCCyEYGUfd19yw73TRyTeazMRh0bGqAspyyPKh0zIZGA7/pNngve',
				obs: 'teste',
				avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
				root: false,
				criadoPor: 'SISTEMA em 27/04/2018 às 09:27:26.',
				portalClientesFk: 1,
				pessoasFk: 155
			},
			{
				id: 4,
				login: 'tatiane@jdnet.com.br',
				senha: '$2b$10$2aCCyEYGUfd19yw73TRyTeazMRh0bGqAspyyPKh0zIZGA7/pNngve',
				obs: 'teste',
				avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
				root: false,
				criadoPor: 'SISTEMA em 27/04/2018 às 09:27:26.',
				portalClientesFk: 1,
				pessoasFk: 158
			},
			{
				id: 5,
				login: 'bruna@jdnet.com.br',
				senha: '$2b$10$2aCCyEYGUfd19yw73TRyTeazMRh0bGqAspyyPKh0zIZGA7/pNngve',
				obs: 'teste',
				avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
				root: false,
				criadoPor: 'SISTEMA em 27/04/2018 às 09:27:26.',
				portalClientesFk: 1,
				pessoasFk: 265
			},
			{
				id: 6,
				login: 'paula@jdnet.com.br',
				senha: '$2b$10$2aCCyEYGUfd19yw73TRyTeazMRh0bGqAspyyPKh0zIZGA7/pNngve',
				obs: 'teste',
				avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
				root: false,
				criadoPor: 'SISTEMA em 27/04/2018 às 09:27:26.',
				portalClientesFk: 1,
				pessoasFk: 157
			},
			{
				id: 7,
				login: 'adriana@jdnet.com.br',
				senha: '$2b$10$2aCCyEYGUfd19yw73TRyTeazMRh0bGqAspyyPKh0zIZGA7/pNngve',
				obs: 'teste',
				avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
				root: false,
				criadoPor: 'SISTEMA em 27/04/2018 às 09:27:26.',
				portalClientesFk: 1,
				pessoasFk: 285
			},
			{
				id: 8,
				login: 'beatriz@jdnet.com.br',
				senha: '$2b$10$2aCCyEYGUfd19yw73TRyTeazMRh0bGqAspyyPKh0zIZGA7/pNngve',
				obs: 'teste',
				avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
				root: false,
				criadoPor: 'SISTEMA em 27/04/2018 às 09:27:26.',
				portalClientesFk: 1,
				pessoasFk: 291
			},
			{
				id: 9,
				login: 'claudinei@jdnet.com.br',
				senha: '$2b$10$2aCCyEYGUfd19yw73TRyTeazMRh0bGqAspyyPKh0zIZGA7/pNngve',
				obs: 'teste',
				avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
				root: false,
				criadoPor: 'SISTEMA em 27/04/2018 às 09:27:26.',
				portalClientesFk: 1,
				pessoasFk: 154
			},
		]);
	} catch (error) {
		console.error(error);
	}
}

export function down(queryInterface) {
	return queryInterface.bulkDelete('operadores', null, {});
}
