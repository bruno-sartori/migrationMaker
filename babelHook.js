require('@babel/register');

const config = {
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

module.exports = config;