require('@babel/register');

let config = {};

if (process.env.NODE_ENV === 'production') {
	config = {
		username: 'oton',
		password: 'zeta@odin@145',
		database: 'isp_dev',
		host: '187.49.240.20',
		port: '9306',
		dialect: "mysql",
		define: {
			charset: 'utf8',
			collate: 'utf8_general_ci'
		}
	};

} else {
	config = {
		username: 'root',
		password: 'root',
		database: 'test',
		host: 'localhost',
		dialect: "mysql",
		define: {
			charset: 'utf8',
			collate: 'utf8_general_ci'
		}
	};
}

module.exports = config;