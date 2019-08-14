const DB_PORTAL_HOST = '192.168.9.22';
const DB_PORTAL_PORT = '3306';
const DB_PORTAL_NAME = 'oton_portal';
const DB_PORTAL_USER = 'oton';
const DB_PORTAL_PASSWORD = 'zeta@odin@145';

export function up(queryInterface) {
	return Promise.all([
		queryInterface.sequelize.query(
			'CREATE SERVER portalLink ' +
			'FOREIGN DATA WRAPPER mysql ' +
			`OPTIONS(USER "${DB_PORTAL_USER}", PASSWORD "${DB_PORTAL_PASSWORD}", HOST "${DB_PORTAL_HOST}", PORT ${DB_PORTAL_PORT}, DATABASE "${DB_PORTAL_NAME}")`
		),
		queryInterface.sequelize.query(
			'CREATE TABLE federated_notifications( ' +
			'	id int(10) UNSIGNED NOT NULL AUTO_INCREMENT, ' +
			'	createdAt datetime NOT NULL, ' +
			'	title varchar(255) NOT NULL, ' +
			'	message varchar(255) NOT NULL, ' +
			'	path varchar(255) NOT NULL, ' +
			'	method varchar(10) NOT NULL, ' +
			'	link varchar(255) NOT NULL, ' +
			'	icon varchar(255) DEFAULT NULL, ' +
			'	level int(11) DEFAULT NULL, ' +
			'	requires varchar(200) DEFAULT NULL, ' +
			'	PRIMARY KEY(`id`) ' +
			') ENGINE = FEDERATED DEFAULT CHARSET = latin1 CONNECTION = "portalLink/notifications"'
		),
		queryInterface.sequelize.query(
			'CREATE TABLE federated_clientes( ' +
			'	id int(10) UNSIGNED NOT NULL AUTO_INCREMENT, ' +
			'	tipoPessoa varchar(255) NOT NULL, ' +
			'	cpfCnpj varchar(255) NOT NULL, ' +
			'	nome varchar(255) NOT NULL, ' +
			'	login varchar(255) NOT NULL, ' +
			'	senha varchar(255) NOT NULL, ' +
			'	status tinyint(1) NOT NULL, ' +
			'	createdAt datetime NOT NULL, ' +
			'	updatedAt datetime DEFAULT NULL, ' +
			'	PRIMARY KEY(`id`) ' +
			') ENGINE = FEDERATED DEFAULT CHARSET = latin1 CONNECTION = "portalLink/notifications"'
		),
		queryInterface.sequelize.query(
			'CREATE TABLE federated_base_operadora_boleto( ' +
			'	id int(10) UNSIGNED NOT NULL AUTO_INCREMENT, ' +
			'	nome VARCHAR(255) NOT NULL, ' +
			'	nomeGeracao VARCHAR(255) NOT NULL, ' +
			'	camposNecessarios VARCHAR(255) NOT NULL, ' +
			'	status TINYINT(1) NOT NULL, ' +
			'	createdAt DATETIME NOT NULL, ' +
			'	updatedAt DATETIME DEFAULT NULL, ' +
			'	PRIMARY KEY(`id`) ' +
			') ' +
			'ENGINE = FEDERATED DEFAULT CHARSET = latin1 CONNECTION = "portalLink/base_operadora_boleto"'
		),
		queryInterface.sequelize.query(
			'CREATE TABLE federated_base_operadora_cartao( ' +
			'	id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT, ' +
			'	nome VARCHAR(255) NOT NULL, ' +
			'	status TINYINT(1) NOT NULL, ' +
			'	createdAt DATETIME NOT NULL, ' +
			'	updatedAt DATETIME DEFAULT NULL, ' +
			'	PRIMARY KEY(`id`) ' +
			') ENGINE = FEDERATED DEFAULT CHARSET = latin1 CONNECTION = "portalLink/base_operadora_cartao"'
		),
		queryInterface.sequelize.query(
			'CREATE TABLE federated_base_banco( ' +
			'	id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT, ' +
			'	nome VARCHAR(255) NOT NULL, ' +
			'	codigo VARCHAR(255) NOT NULL, ' +
			'	status TINYINT(1) NOT NULL, ' +
			'	createdAt DATETIME NOT NULL, ' +
			'	updatedAt DATETIME DEFAULT NULL, ' +
			'	PRIMARY KEY(`id`) ' +
			') ENGINE = FEDERATED DEFAULT CHARSET = latin1 CONNECTION = "portalLink/base_banco"'
		),
		queryInterface.sequelize.query(
			'CREATE TABLE federated_isp_fabricante( ' +
			'	id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT, ' +
			'	nome VARCHAR(255) NOT NULL, ' +
			'	status TINYINT(1) NOT NULL, ' +
			'	tipoAcesso VARCHAR(255) NOT NULL, ' +
			'	createdAt DATETIME NOT NULL, ' +
			'	updatedAt DATETIME DEFAULT NULL, ' +
			'	PRIMARY KEY(`id`) ' +
			') ENGINE = FEDERATED DEFAULT CHARSET = latin1 CONNECTION = "portalLink/isp_fabricante"'
		),
		queryInterface.sequelize.query(
			'CREATE TABLE federated_isp_modelo_olt( ' +
			'	id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT, ' +
			'	nome VARCHAR(255) NOT NULL, ' +
			'	ispFabricanteFk INT(10) UNSIGNED DEFAULT NULL, ' +
			'	numeroSlots INT(10) NOT NULL, ' +
			'	status TINYINT(1) NOT NULL, ' +
			'	createdAt DATETIME NOT NULL, ' +
			'	updatedAt DATETIME DEFAULT NULL, ' +
			'	PRIMARY KEY(`id`), ' +
			'	CONSTRAINT`isp_moelo_olt_ibfk_1` FOREIGN KEY(`ispFabricanteFk`) REFERENCES`isp_fabricante`(`id`) ' +
			') ENGINE = FEDERATED DEFAULT CHARSET = latin1 CONNECTION = "portalLink/isp_modelo_olt"'
		),
		queryInterface.sequelize.query(
			'CREATE TABLE federated_isp_modelo_onu( ' +
			'	id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT, ' +
			'	nome VARCHAR(255) NOT NULL, ' +
			'	ispFabricanteFk INT(10) UNSIGNED DEFAULT NULL, ' +
			'	status TINYINT(1) NOT NULL, ' +
			'	createdAt DATETIME NOT NULL, ' +
			'	updatedAt DATETIME DEFAULT NULL, ' +
			'	PRIMARY KEY(`id`), ' +
			'	CONSTRAINT`isp_moelo_onu_ibfk_1` FOREIGN KEY(`ispFabricanteFk`) REFERENCES`isp_fabricante`(`id`) ' +
			') ENGINE = FEDERATED DEFAULT CHARSET = latin1 CONNECTION = "portalLink/isp_modelo_onu"'
		),
		queryInterface.sequelize.query(
			'CREATE TABLE federated_isp_modelo_dio( ' +
			'	id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT, ' +
			'	nome VARCHAR(255) NOT NULL, ' +
			'	ispFabricanteFk INT(10) UNSIGNED DEFAULT NULL, ' +
			'	numeroBandejas INT(10) NOT NULL, ' +
			'	numeroPosicoes INT(10) NOT NULL, ' +
			'	status TINYINT(1) NOT NULL, ' +
			'	createdAt DATETIME NOT NULL, ' +
			'	updatedAt DATETIME DEFAULT NULL, ' +
			'	PRIMARY KEY(`id`), ' +
			'	CONSTRAINT`isp_moelo_dio_ibfk_1` FOREIGN KEY(`ispFabricanteFk`) REFERENCES`isp_fabricante`(`id`) ' +
			') ENGINE = FEDERATED DEFAULT CHARSET = latin1 CONNECTION = "portalLink/isp_modelo_dio"'
		),
		queryInterface.sequelize.query(
			'CREATE TABLE federated_isp_tipo_ip( ' +
			'	id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT, ' +
			'	nome VARCHAR(255) NOT NULL, ' +
			'	status TINYINT(1) NOT NULL, ' +
			'	createdAt DATETIME NOT NULL, ' +
			'	updatedAt DATETIME DEFAULT NULL, ' +
			'	PRIMARY KEY(`id`) ' +
			') ENGINE = FEDERATED DEFAULT CHARSET = latin1 CONNECTION = "portalLink/isp_tipo_ip"'
		),
		queryInterface.sequelize.query(
			'CREATE TABLE federated_isp_autenticador_homologado( ' +
			'	id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT, ' +
			'	nome VARCHAR(255) NOT NULL, ' +
			'	versaoSoftware VARCHAR(255) NOT NULL, ' +
			'	tipoAcesso VARCHAR(255) NOT NULL, ' +
			'	status TINYINT(1) NOT NULL, ' +
			'	createdAt DATETIME NOT NULL, ' +
			'	updatedAt DATETIME DEFAULT NULL, ' +
			'	PRIMARY KEY(`id`) ' +
			') ENGINE = FEDERATED DEFAULT CHARSET = latin1 CONNECTION = "portalLink/isp_autenticador_homologado"'
		),
		queryInterface.sequelize.query(
			'CREATE TABLE federated_isp_tipos_cores( ' +
			'	id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT, ' +
			'	nome VARCHAR(255) NOT NULL, ' +
			'	status TINYINT(1) NOT NULL, ' +
			'	createdAt DATETIME NOT NULL, ' +
			'	updatedAt DATETIME DEFAULT NULL, ' +
			'	PRIMARY KEY(`id`) ' +
			') ENGINE = FEDERATED DEFAULT CHARSET = latin1 CONNECTION = "portalLink/isp_tipos_cores"'
		)
	]);
}

export function down() {
	return true;
}
