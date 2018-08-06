import mysql from 'mysql';

export default class Database {
	constructor(config) {
		this.connection = mysql.createConnection(config);
	}

	query(sql, args) {
		return new Promise((resolve, reject) => {
			this.connection.query(sql, args, (err, rows) => {
				if (err) {
					return reject(err);
				}
				return resolve(rows);
			});
		});
	}

	close() {
		this.connection.end();
	}

	startTransaction() {
		return this.query('start transaction');
	}

	commit() {
		return this.query('commit');
	}

	rollback() {
		return this.query('rollback');
	}

	async lastInsertId() {
		const insertId = await this.query('SELECT LAST_INSERT_ID()');
		return insertId[0]['LAST_INSERT_ID()'];
	}


	async qbSelect(query) {
		return this.query(this.buildQuery(query));
	}

	buildQuery(opts) {
		const sql = 'SELECT {0} FROM {1}{2}{3}{4}{5}{6}';
		let table = opts.table;
		let fields = (typeof opts.fields !== 'undefined') ? this.formatFields(opts.fields) : '*';
		const where = (typeof opts.conditions !== 'undefined') ? ` WHERE${this.formatConditions(opts.conditions)}` : '';
		const joins = (typeof opts.joins !== 'undefined') ? this.formatJoins(opts.table, opts.joins) : '';
		const start_row = (typeof opts.offset !== 'undefined') ? opts.offset : 0;
		const limit = (typeof opts.limit !== 'undefined') ? ` LIMIT ${start_row}, ${opts.limit}` : '';
		const group_by = (typeof opts.group !== 'undefined') ? ` GROUP BY ${opts.group}` : '';
		const order_by = (typeof opts.order !== 'undefined') ? ` ORDER BY ${opts.order}` : '';

		fields = (typeof opts.count !== 'undefined') ? ((typeof opts.count_fields !== 'undefined') ? opts.count_fields : 'COUNT( * ) AS count') : fields;

		const pos = table.indexOf(' ');

		if (pos > -1) {
			const keyArr = table.split(' ');
			table = `${mysql.escapeId(keyArr[0])} ${keyArr[1]}`;
		} else {
			table = mysql.escapeId(table);
		}


		const sqlString = this.format([sql, fields, table, joins, where, group_by, order_by, limit]);

		if (opts.debug) {
			console.log('-------------------------------------------------------------------------------------------------------');
			console.log(sqlString);
		}

		return sqlString;
	}

	size(obj) {
		let size = 0,
			key;
		for (key in obj) {
			if (obj.hasOwnProperty(key)) size++;
		}
		return size;
	}

	format(arg) {
		// The string containing the format items (e.g. "{0}")
		// will and always has to be the first argument.
		let theString = arg[0];

		// start with the second argument (i = 1)
		for (let i = 1; i < arg.length; i++) {
			// "gm" = RegEx options for Global search (more than one instance)
			// and for Multiline search
			const regEx = new RegExp(`\\{${i - 1}\\}`, 'gm');
			theString = theString.replace(regEx, arg[i]);
		}

		return theString;
	}

	formatFields(fields) {
		const returnFields = [];

		for (let i = 0; i < fields.length; i++) {
			if (fields[i].constructor === Array) {
				returnFields.push(`${this.formatField(fields[i][0])} as ${mysql.escapeId(fields[i][1])}`);
			} else {
				returnFields.push(this.formatField(fields[i]));
			}
		}

		return returnFields;
	}


	formatField(field) {
		if(/SUM|sum|CONVERT|convert|SELECT|select/g.test(field)) {
			return field;
		} else if (/COUNT|count|MAX|max|COALESCE|coalesce/g.test(field)) {
			const regExp = /\(([^)]+)\)/;
			let str = regExp.exec(field);
			if (str[1] === '*') {
				return field;
			}
			str = mysql.escapeId(str[1].replace(/ /g, '').split(','));
			return field.replace(regExp, `(${str})`);
		} else if (/"|'/g.test(field)) {
			return field;
		} else if (/DISTINCT|distinct/g.test(field)) {
			return field;
		}

		return mysql.escapeId(field);
	}


	formatJoins(table, opts) {
		const arr = [];
		const joinTypes = {
			inner: 'INNER JOIN',
			left: 'LEFT OUTER JOIN',
			right: 'RIGHT JOIN',
			default: 'JOIN'
		};

		for (const key in opts) {
			if (opts.hasOwnProperty(key)) {
				const keys = Object.keys(opts[key]);
				const values = keys.map(v => opts[key][v]);
				let joinType;

				if (typeof opts[key].type !== 'undefined') {
					joinType = opts[key].type;
					delete opts[key].type;
				}

				if (typeof joinType === 'undefined') {
					const pos = key.indexOf(' ');

					if (pos > -1) {
						const keyArr = key.split(' ');
						arr.push(` JOIN ${mysql.escapeId(keyArr[0])} ${keyArr[1]} ON ${this.formatConditions(opts[key], true)}`);
					} else {
						arr.push(` JOIN ${mysql.escapeId(key)} ON ${this.formatConditions(opts[key], true)}`);
					}
				} else {
					const pos = key.indexOf(' ');

					if (pos > -1) {
						const keyArr = key.split(' ');
						arr.push(` ${joinTypes[joinType]} ${mysql.escapeId(keyArr[0])} ${keyArr[1]} ON ${this.formatConditions(opts[key], true)}`);
					} else					{ arr.push(` ${joinTypes[joinType]} ${mysql.escapeId(key)} ON ${this.formatConditions(opts[key], true)}`); }
				}
			}
		}

		return arr.join(' ');
	}

	formatConditions(opts, is_join) {
		const arr = [];
		is_join = (typeof is_join !== 'undefined') ? is_join : false;

		if (typeof opts === 'object') {
			const or_and = ['and', 'or', 'not'];

			for (const key in opts) {
				if (opts.hasOwnProperty(key)) {
					if (or_and.indexOf(key) > -1) {
						arr.push(this.reformatFields(key, opts[key], is_join));
					} else {
						const _arr = {};
						_arr[key] = opts[key];

						if(/\(select|\(SELECT/g.test(key)) { // GAMBIARRA
							const matches = key.match(/(.*)((\>\=)|\<\=|\!\=|\>|\<)/);
							if (matches != null && this.size(matches) > 0) {
								arr.push(`${matches[1]}${matches[2]} ${opts[key]} `);
							}	else {
								arr.push(` ${key} = ${opts[key]}`);
							}
						}
						else {
							arr.push(this.reformatFields('', _arr, is_join));
						}
					}
				}
			}
		} else		{ arr.push(this.reformatFields('AND', opts, is_join)); }

		const res = arr.join(' AND ')
		.replace('AND AND', 'AND')
		.replace('AND OR', 'OR')
		.replace(/\s+/g, ' ')
		.replace(new RegExp('= \'IS NULL\'', 'g'), 'IS NULL')
		.replace(new RegExp('= \'IS NOT NULL\'', 'g'), 'IS NOT NULL');

		return res;
	}

	reformatFields(or_and, fields, is_join) {
		const arr = [];
		let matches;

		for (const key in fields) {
			if (fields.hasOwnProperty(key)) {
				if (['and', 'or', 'not'].indexOf(key) > -1 && this.size(fields[key]) > 0 && typeof fields[key] === 'object') {
					if (['and', 'or', 'not'].indexOf(key) > -1) {
						arr.push(this.reformatFields(key, fields[key], is_join));
					} else {
						const _arr = {};
						_arr[key] = fields[key];

						arr.push(this.reformatFields('', _arr, is_join));
					}
				}

				if (['and', 'or', 'not'].indexOf(key) == -1) {
					if (typeof fields[key] === 'object' && this.size(fields[key]) > 0) {
						var e = [];

						if (
							typeof fields[key] !== 'undefined'
							&& typeof fields[key][0] !== 'undefined'
							&& typeof fields[key][0][0] !== 'undefined'
							&& typeof fields[key][0] === 'object'
						) {
							for (var key1 in fields[key]) {
								if (fields[key].hasOwnProperty(key1)) {
									for (const key2 in fields[key][key1]) {
										if (fields[key][key1].hasOwnProperty(key2)) {
											e.push(fields[key][key1][key2]);
										}
									}
								}
							}
						} else {
							for (var key1 in fields[key]) {
								if (fields[key].hasOwnProperty(key1)) {
									e.push(fields[key][key1]);
								}
							}
						}
					}

					if (typeof fields[key] === 'object' && this.size(fields[key]) > 0) {
						if (or_and.toLowerCase() == 'or' && key.toLowerCase().indexOf('like') == -1) {
							arr.push(`${mysql.escapeId(key)} IN ( '${e.join('\', \'')}' ) ` + ' ');
						} else if (or_and.toLowerCase() == 'not') {
							if (key.toLowerCase().indexOf('like') == -1)								{ arr.push(`${mysql.escapeId(key)} NOT IN ('${e.join('\', \'')}' ) ` + ' '); }							else {
								for (const e_key in e) {
									if (e.hasOwnProperty(e_key)) {
										arr.push(`${mysql.escapeId(key.replace(' LIKE').replace(' like'))} NOT LIKE ${mysql.escape(e[e_key])} `);
									}
								}
							}
						} else if (this.size(e) > 1) {
							arr.push(`${mysql.escapeId(key)} IN ( '${e.join('\', \'')}' ) ` + ' ');
						} else {
							matches = key.match(/(.*)([\>|\<|\!\=|\=|\>\=|\<\=])/);
							if (matches != null && this.size(matches) > 0) {
								arr.push(`${matches[1]}${matches[2]} ${mysql.escape(e[0])} `);
							}	else {
								arr.push(`${mysql.escapeId(key)} = ${mysql.escape(e[0])} `);
							}
						}
					} else if (or_and.toLowerCase() == 'not') {
						if (key.toLowerCase().indexOf('like') > -1) {
							arr.push(`${mysql.escapeId(key.replace(' LIKE').replace(' like'))} NOT LIKE ${mysql.escape(fields[key])} `);
						} else {
							matches = key.match(/(.*)([\>|\<|\!\=|\=|\>\=|\<\=])/);
							if (this.size(matches) > 0)									{ arr.push(`${matches[1]}${matches[2]} ${mysql.escape(fields[key])} `); }							else								{ arr.push(`${mysql.escapeId(key)} != ${mysql.escape(fields[key])} `); }
						}
					} else if (key.toLowerCase().indexOf('like') > -1)						{ arr.push(`${key} ${mysql.escape(fields[key])} `); }					else {
						matches = key.match(/(.*)([\>|\<|\!\=|\=|\>\=|\<\=])/);
						if (
									matches != null
									&& this.size(matches) > 0
								)							{ arr.push(`${matches[1]}${matches[2]} ${mysql.escape(fields[key])} `); }						else {
							arr.push(`${mysql.escapeId(key)} = ${mysql.escape(fields[key])} `);
						}
					}
				}
			}
		}

		const arr_size = this.size(arr);
		if (arr_size > 0) {
			let a = '';
			if (arr_size == 1)				{ a = (or_and.toLowerCase() == 'not') ? 'AND' : `${or_and} ${arr[0]}`; }			else			{ a = ` ( ${arr.join(` ${or_and.toLowerCase() == 'not' ? 'AND' : or_and} `).replace('AND AND', 'AND').replace('AND OR', 'OR')} ) `; }

			return is_join ? a.replace(/`/g, '').replace(/'/g, '') : a;
		}
	}
}
