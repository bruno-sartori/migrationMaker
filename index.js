import datasource from './datasource';
import fs from 'fs';

const { oldDb, newDb } = datasource();

async function binaryConvert(table, field) {
	await oldDb.query(`update ${table} set ${field} = convert(binary convert(${field} using latin1) using utf8)`);
}

async function processTables() {
	try {
		await newDb.query('set foreign_key_checks=0');
	
		await Promise.all([
			binaryConvert('custo_variavel', 'custvar_num_parcela'),
			binaryConvert('lancamento_custo_variavel', 'lancustvar_historico'),
			binaryConvert('lancamento_custo_variavel', 'lancustvar_nota_fiscal'),
			binaryConvert('lancamento_custo_variavel', 'lancustvar_obs'),
			binaryConvert('custo_fixo', 'custfix_nota_fiscal'),
			binaryConvert('lancamento_custo_fixo', 'lancustfix_historico'),
			binaryConvert('lancamento_custo_fixo', 'lancustfix_obs'),
			binaryConvert('cadastro_pessoa', 'pes_nome'),
			binaryConvert('cadastro_pessoa', 'pes_cidade'),
			binaryConvert('cadastro_pessoa', 'pes_bairro'),
			binaryConvert('cadastro_pessoa', 'pes_endereco'),
			binaryConvert('cadastro_suprimento', 'sup_nome'),
			binaryConvert('cadastro_fornecedor', 'for_nome_fantasia'),
			binaryConvert('cadastro_funcionario', 'fun_cargo'),
			oldDb.query('update cadastro_fornecedor set for_cod_pessoa = "138" where for_id = 2'),
			oldDb.query('update cadastro_pessoa set pes_telefone1 = NULL where pes_telefone1 = "" or  pes_telefone1 = "(17) 35512-121" or pes_telefone1 = "("'),
			oldDb.query('update cadastro_pessoa set pes_telefone2 = NULL where pes_telefone2 = ""'),
			oldDb.query('update cadastro_funcionario set fun_data_admissao = NOW() where fun_data_admissao = "19988-05-25"'),
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
	} catch (error) {
		await fs.writeFileSync("./errors.js", error, (err) => {
			if(err) {
				console.log("ERRO: ");
				return console.err(err);
			}
		});
	}
}

processTables().then(() => { process.exit(0); });