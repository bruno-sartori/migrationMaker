import util from 'util';
import Knex from 'knex';
import moment from 'moment';
import fs from 'fs';
import json from './json_example';
import Database from './Database';
import { isValidString, isValidDate, isValidObject } from './isValidVariable';


const oldDb = new Database({
	debug: false,
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'oton_isp'
});

const newDb = new Database({
	debug: false,
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'test'
});

const knex = new Knex({
	debug: false,
	client: 'mysql',
  connection: {
    host : '127.0.0.1',
    user : 'root',
    password : 'root',
    database : 'test'
  }
});

function load(i, text) {
	var p = ['\\', '|', '/', '-'];
	var index = i % p.length;
	process.stdout.write(text + p[index] + '\r');
}

async function binaryConvert(table, field) {
	await oldDb.query(`update ${table} set ${field} = convert(binary convert(${field} using latin1) using utf8)`);
}

async function processTables() {
	const errors = [];
	const afterExecute = {};
	await newDb.query('set foreign_key_checks=0');

	await Promise.all([
		binaryConvert('custo_variavel', 'custvar_num_parcela'),
		binaryConvert('lancamento_custo_variavel', 'lancustvar_historico'),
		binaryConvert('lancamento_custo_variavel', 'lancustvar_obs'),
		binaryConvert('custo_fixo', 'custfix_nota_fiscal'),
		oldDb.query('update cadastro_pessoa set pes_endereco = "RUA CEL JONAS G. GONZAGA, 1353 - A" WHERE pes_id = 165'),
		oldDb.query('update cadastro_pessoa set pes_endereco = "AV. CARLOS GOMES, 300 - AP/SL 7" WHERE pes_id = 171'),
		oldDb.query('update cadastro_pessoa set pes_endereco = "RODOVIA LUCIO MEIRA, 0 - BR 393/KM 221,5" WHERE pes_id = 246'),
		oldDb.query('update cadastro_pessoa set pes_endereco = "RODOVIA DIVALDO SURUAGY, 0 - KM 12" WHERE pes_id = 250'),
		oldDb.query('update cadastro_pessoa set pes_endereco = "RUA 17, 20" where pes_id = 265'),
		oldDb.query('update cadastro_pessoa set pes_endereco = "ROD RAMAL DE ACESSO À RODOVIA SP 310, 0" WHERE pes_id = 133'),
		oldDb.query('update cadastro_pessoa set pes_endereco = "RODOVIA, 0" WHERE pes_id = 151'),
		oldDb.query('update cadastro_pessoa set pes_endereco = "RUA CEL JONAS G. GONZAGA, 0" WHERE pes_id = 252'),
		oldDb.query('update cadastro_pessoa set pes_cidade = "SÃO JOSÉ DO RIO PRETO" WHERE pes_id = 206'),
		oldDb.query('update lancamento_compra_corpo set lancorp_quantidade = 1.000, lancorp_valor_total = 3304.800 where lancorp_id = 535'),
		oldDb.query('update lancamento_compra_corpo set lancorp_quantidade = 3.000, lancorp_valor_total = 1020.600 where lancorp_id = 536'),
		oldDb.query('update lancamento_compra_corpo set lancorp_quantidade = 1.000, lancorp_valor_total = 29.160 where lancorp_id = 537'),
		oldDb.query('update lancamento_compra_corpo set lancorp_quantidade = 1.000, lancorp_valor_total = 45.360 where lancorp_id = 538'),
		oldDb.query('update lancamento_compra_corpo set lancorp_quantidade = 1.000, lancorp_valor_total = 129.40 where lancorp_id = 539'),
		oldDb.query('update lancamento_compra_corpo set lancorp_quantidade = 1.000, lancorp_valor_total = 129.600 where lancorp_id = 540')
	]);

	for (let i = 0; i < json.tables.length; i++) {
		process.stdout.write('\x1B[2J'); // clear screem
		const table = json.tables[i];

		const oldName = table.name;
		const newName = table.replaceName;

		const records = await oldDb.query(`select * from ${oldName}`);
		const replaceRecords = [];


		if (Object.prototype.hasOwnProperty.call(table, 'beforeExecute')) {
			await table.beforeExecute(newDb);
		}

		for(let j = 0; j < records.length; j++) {
			load(j, `Parsing ${newName}: `);

			const record = records[j];
			const replace = {};
			let dontSave = false;

			for (let obj of table.fields) {
				if (Object.prototype.hasOwnProperty.call(obj, 'key')) {
					replace[obj.replace] = record[obj.key];
				} else if (Object.prototype.hasOwnProperty.call(obj, 'value')) {
					replace[obj.replace] = obj.value;
				} else if (Object.prototype.hasOwnProperty.call(obj, 'query')) {
					let query;
					if (Object.prototype.hasOwnProperty.call(obj, 'queryFields')) {
						let newQuery = obj.query;
						for (let h = 0; h < obj.queryFields.length; h++) {
							newQuery = obj.query.replace('?', record[obj.queryFields[h]]);
						}
						query = await oldDb.query(newQuery);
					} else {
						replace[obj.replace] = await oldDb.query(obj.query);
					}

					if (query.length === 0) {
						replace[obj.replace] = null;
					} else {
						replace[obj.replace] = query[0].alias;
					}

				} else if (Object.prototype.hasOwnProperty.call(obj, 'func')) {
					replace[obj.replace] = await obj.func(record, newDb, oldDb, afterExecute);
				}

				if (Object.prototype.hasOwnProperty.call(obj, 'type') && obj.type === 'DATE') {
					if (isValidDate(replace[obj.replace])) {
						replace[obj.replace] = moment(replace[obj.replace]).format('YYYY-MM-DD HH:mm:ss');
					}
				}

				if (Object.prototype.hasOwnProperty.call(table, 'afterExecute')) {
					replace.afterExecute = table.afterExecute;
				}

				if (replace[obj.replace] === null && Object.prototype.hasOwnProperty.call(obj, 'default')) {
					if (isValidString(obj.default)) {
						replace[obj.replace] = obj.default;
					} else if (isValidObject(obj.default) && Object.prototype.hasOwnProperty.call(obj.default, 'key')) {
						replace[obj.replace] = record[obj.default.key];
					}
				}

				if (Object.prototype.hasOwnProperty.call(obj, 'dontSaveIf')) {
					if (replace[obj.replace] === obj.dontSaveIf) {
						dontSave = true;
					}
				}
			}

			if (!dontSave) {
				replaceRecords.push(replace);
			}
		}

		for (let j = 0; j < replaceRecords.length; j++) {
			try {
				let execute = false;
				if (Object.prototype.hasOwnProperty.call(replaceRecords[j], 'afterExecute')) {
					execute = replaceRecords[j].afterExecute;
					delete replaceRecords[j].afterExecute;
				}

				load(j, `Inserting in ${newName}: `);

				const lastInsertId = await knex.table(newName).insert(replaceRecords[j]).returning('id');

				if (execute) {
					if (!Object.prototype.hasOwnProperty.call(afterExecute, oldName)) {
						afterExecute[oldName] = {};
					}

					const exec = await execute(lastInsertId, records[j], newDb, oldDb);
					if (exec !== false) {
						afterExecute[oldName] = { ...afterExecute[oldName], ...exec };
					}
				}
			} catch (error) {
				errors.push([error, records[j]]);
			}
		}

		await newDb.query('update enderecos set numero = null where numero = 0');
	}

	errors.push(afterExecute);

	await fs.writeFileSync("./errors.js", JSON.stringify(errors, null, 4), (err) => {
		if(err) {
			console.log("ERRO: ");
			return console.err(err);
		}
	});

	return true;
}

processTables().then(() => { process.exit(0); });

/*
UPDATE wp_zcs9ck_posts_copy SET post_title = CONVERT(BINARY CONVERT(post_title USING latin1) USING utf8);
*/
