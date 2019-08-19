-- MySQL dump 10.13  Distrib 5.7.27, for Linux (x86_64)
--
-- Host: 187.49.240.47    Database: oton_contabil
-- ------------------------------------------------------
-- Server version	5.7.19-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `agendar_atendimento`
--

DROP TABLE IF EXISTS `agendar_atendimento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `agendar_atendimento` (
  `agen_id` int(6) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `agen_nome` varchar(40) NOT NULL,
  `agen_data` date DEFAULT NULL,
  `agen_data_agendamento` date DEFAULT NULL,
  `agen_periodo` varchar(50) DEFAULT NULL,
  `agen_dia_antecipacao` int(3) DEFAULT NULL,
  `agen_cod_tipo_atendimento` int(6) unsigned zerofill NOT NULL,
  `agen_cod_operador` int(6) unsigned zerofill NOT NULL,
  `agen_cod_cliente` int(6) unsigned zerofill NOT NULL,
  PRIMARY KEY (`agen_id`),
  KEY `agen_cod_tipo_atendimento` (`agen_cod_tipo_atendimento`),
  KEY `agen_cod_operador` (`agen_cod_operador`),
  KEY `agen_cod_cliente` (`agen_cod_cliente`),
  CONSTRAINT `agendar_atendimento_ibfk_1` FOREIGN KEY (`agen_cod_tipo_atendimento`) REFERENCES `cadastro_tipo_atendimento` (`tipoaten_id`),
  CONSTRAINT `agendar_atendimento_ibfk_2` FOREIGN KEY (`agen_cod_operador`) REFERENCES `cadastro_operador` (`ope_id`),
  CONSTRAINT `agendar_atendimento_ibfk_3` FOREIGN KEY (`agen_cod_cliente`) REFERENCES `cadastro_cliente` (`cli_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `agendar_atendimento`
--

LOCK TABLES `agendar_atendimento` WRITE;
/*!40000 ALTER TABLE `agendar_atendimento` DISABLE KEYS */;
/*!40000 ALTER TABLE `agendar_atendimento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `atendimento_anexo`
--

DROP TABLE IF EXISTS `atendimento_anexo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `atendimento_anexo` (
  `ane_id` int(6) NOT NULL AUTO_INCREMENT,
  `ane_nome` varchar(150) DEFAULT NULL,
  `ane_arquivo` varchar(200) DEFAULT NULL,
  `ane_extensao` varchar(20) DEFAULT NULL,
  `ane_tamanho` int(11) NOT NULL,
  `ane_data_envio` datetime DEFAULT NULL,
  `ane_obs` text,
  `ane_cod_cabecalho` varchar(26) NOT NULL,
  `ane_cod_operador` int(6) unsigned zerofill NOT NULL,
  PRIMARY KEY (`ane_id`),
  KEY `ane_cod_cabecalho` (`ane_cod_cabecalho`),
  KEY `ane_cod_operador` (`ane_cod_operador`),
  CONSTRAINT `atendimento_anexo_ibfk_1` FOREIGN KEY (`ane_cod_cabecalho`) REFERENCES `cliente_atendimento_cabecalho` (`atecabec_id`),
  CONSTRAINT `atendimento_anexo_ibfk_2` FOREIGN KEY (`ane_cod_operador`) REFERENCES `cadastro_operador` (`ope_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `atendimento_anexo`
--

LOCK TABLES `atendimento_anexo` WRITE;
/*!40000 ALTER TABLE `atendimento_anexo` DISABLE KEYS */;
INSERT INTO `atendimento_anexo` VALUES (5,'01032017105439.jpg','06022017140618.jpg','JPEG',59607,'2017-03-01 10:54:39','RERERER','20170301094133000004',000001),(6,'01032017110140.','a','OCTET-STREAM',406465,'2017-03-01 11:01:40','RERERER','20170301094133000004',000001);
/*!40000 ALTER TABLE `atendimento_anexo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auditoria`
--

DROP TABLE IF EXISTS `auditoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auditoria` (
  `aud_id` int(6) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `aud_data` date NOT NULL,
  `aud_hora` time NOT NULL,
  `aud_descricao` text NOT NULL,
  `aud_cod_operador` int(6) unsigned zerofill NOT NULL,
  PRIMARY KEY (`aud_id`),
  KEY `aud_cod_operador` (`aud_cod_operador`),
  CONSTRAINT `auditoria_ibfk_1` FOREIGN KEY (`aud_cod_operador`) REFERENCES `cadastro_operador` (`ope_id`)
) ENGINE=InnoDB AUTO_INCREMENT=589 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auditoria`
--

LOCK TABLES `auditoria` WRITE;
/*!40000 ALTER TABLE `auditoria` DISABLE KEYS */;
INSERT INTO `auditoria` VALUES (000001,'2017-02-10','13:49:23','O operador inseriu 000006 no HonorÃ¡rio 000006.',000004),(000002,'2017-02-10','13:49:39','O operador excluiu  do honorÃ¡rio 0.',000004),(000003,'2017-02-10','13:50:39','O operador excluiu  do honorÃ¡rio 000004.',000004),(000004,'2017-02-10','13:51:27','O operador excluiu  do honorÃ¡rio 000001.',000004),(000005,'2017-02-10','13:55:21','O operador excluiu [object HTMLSelectElement] do honorÃ¡rio 000006.',000004),(000006,'2017-02-10','13:55:55','O operador excluiu 000003 do honorÃ¡rio 000001.',000004),(000007,'2017-02-10','14:27:10','O operador inseriu 3 no lanÃ§amento de compras.',000004),(000008,'2017-02-10','14:27:10','O operador inseriu o suprimento 000007 no lanÃ§amento 2.',000004),(000009,'2017-02-10','14:27:11','O operador inseriu o suprimento 000007 no lanÃ§amento 3.',000004),(000010,'2017-02-10','14:27:11','O operador inseriu a parcela 4 em contas a pagar',000004),(000011,'2017-02-10','14:29:38','O operador brunosartori inseriu  nos atendimentos do cliente .',000004),(000012,'2017-02-11','13:17:41','O operador `brunosartori` inseriu 000004 nos atendimentos do cliente 000001.',000004),(000013,'2017-02-11','13:18:22','O operador brunosartori inseriu  nos atendimentos do cliente .',000004),(000014,'2017-02-11','13:19:16','O operador liquidou o lanÃ§amento 1 de contas Ã  pagar .',000004),(000015,'2017-02-13','09:26:46','O operador inseriu DFDF do cadastro de fornecedores.',000004),(000016,'2017-02-13','09:38:19','O operador alterou DFDF do cadastro de fornecedores.',000004),(000017,'2017-02-13','09:38:35','O operador alterou DFDF do cadastro de fornecedores.',000004),(000018,'2017-02-13','09:39:22','O operador alterou DFDF do cadastro de fornecedores.',000004),(000019,'2017-02-13','09:40:48','O operador alterou DSDSDSDSD do cadastro de funcionÃ¡rios.',000004),(000020,'2017-02-13','09:41:16','O operador excluiu 000005 do cadastro de fornecedores.',000004),(000021,'2017-02-13','09:42:02','O operador inseriu SDSDSD do cadastro de fornecedores.',000004),(000022,'2017-02-13','09:42:07','O operador alterou SDSDSD do cadastro de fornecedores.',000004),(000023,'2017-02-13','09:42:11','O operador excluiu 000006 do cadastro de fornecedores.',000004),(000024,'2017-02-13','09:45:29','O operador inseriu SDSDS do cadastro de funcionÃ¡rios.',000004),(000025,'2017-02-13','09:45:36','O operador alterou SDSDS do cadastro de funcionÃ¡rios.',000004),(000026,'2017-02-13','09:45:40','O operador excluiu 000006 do cadastro de funcionÃ¡rios.',000004),(000027,'2017-02-13','09:46:24','O operador inseriu LROEM IPSUM no cadastro de operadores.',000004),(000028,'2017-02-13','09:46:31','O operador excluiu 000007 do cadastro de operadores.',000004),(000029,'2017-02-13','10:39:15','O operador inseriu FDFDFDFDF no cadastro de HonorÃ¡rios.',000004),(000030,'2017-02-13','10:39:25','O operador alterou 000011 - FDFDFDFDF no cadastro de HonorÃ¡rios.',000004),(000031,'2017-02-13','10:39:33','O operador excluiu 000011 do cadastro de HonorÃ¡rios.',000004),(000032,'2017-02-13','10:41:30','O operador inseriu DSSDS no cadastro de Cidades Atendidas.',000004),(000033,'2017-02-13','10:41:35','O operador alterou 000005 - DSDDSSDS no cadastro de Cidades Atendidas.',000004),(000034,'2017-02-13','10:41:39','O operador excluiu 000005 do cadastro de Cidades Atendidass.',000004),(000035,'2017-02-13','10:41:47','O operador `brunosartori` inseriu DSDSDSD no cadastro de Bairros Atendidos.',000004),(000036,'2017-02-13','10:41:53','O operador `brunosartori` alterou 000009 - SSSSSSSSDSDSDSD no cadastro de Bairros Atendidos.',000004),(000037,'2017-02-13','10:41:57','O operador `brunosartori` excluiu 000009 do cadastro de Bairros Atendidos.',000004),(000038,'2017-02-13','10:42:25','O operador inseriu 0 - GFFDFDF do cadastro de serviÃ§os.',000004),(000039,'2017-02-13','10:42:33','O operador alterou o serviÃ§o 000008 nos campos  Nome  do cadastro de serviÃ§os.',000004),(000040,'2017-02-13','10:42:37','O operador excluiu 000008 do cadastro de serviÃ§os.',000004),(000041,'2017-02-13','10:42:42','O operador inseriu AAAAAAAAAAAAAAAAAA no cadastro de suprimentos.',000004),(000042,'2017-02-13','10:42:45','O operador alterou 000027 - AAAAAAAAAAAAAAAAAA no cadastro de suprimentos.',000004),(000043,'2017-02-13','10:42:49','O operador excluiu 000027 do cadastro de suprimentos.',000004),(000044,'2017-02-13','10:43:00','O operador alterou 000006 - TRTRT no cadastro de Grupo de Clientes.',000004),(000045,'2017-02-13','10:43:03','O operador excluiu 000006 do cadastro de Grupo de Clientes.',000004),(000046,'2017-02-13','10:43:09','O operador inseriu GFGFG no cadastro de Grupo de Clientes.',000004),(000047,'2017-02-13','10:43:12','O operador excluiu 000007 do cadastro de Grupo de Clientes.',000004),(000048,'2017-02-13','10:43:16','O operador excluiu 000009 do cadastro de Grupo de Clientes.',000004),(000049,'2017-02-13','10:43:24','O operador inseriu DDDDDDDDD no cadastro de grupo de despesas.',000004),(000050,'2017-02-13','10:43:29','O operador alterou 000016 - FDFDDDDDDDDD no cadastro de grupo de despesas.',000004),(000051,'2017-02-13','10:43:35','O operador excluiu 000016 do cadastro de grupos de despesas.',000004),(000052,'2017-02-13','10:43:43','O operador inseriu AAAAAAAAAA no cadastro de despesas.',000004),(000053,'2017-02-13','10:43:49','O operador alterou DDDAAAA do cadastro de despesas.',000004),(000054,'2017-02-13','10:43:56','O operador excluiu 000044 do cadastro de despesa.',000004),(000055,'2017-02-13','10:44:00','O operador inseriu AAAAAAAA no cadastro de departamentos.',000004),(000056,'2017-02-13','10:44:11','O operador alterou 000013 - AAAAAAAA no cadastro de departamentos.',000004),(000057,'2017-02-13','10:44:15','O operador excluiu 000013 do cadastro de departamentos.',000004),(000058,'2017-02-13','10:44:18','O operador inseriu AAAAAA no cadastro de departamentos.',000004),(000059,'2017-02-13','10:44:45','O operador inseriu AAAA no cadastro de tipos de atendimento.',000004),(000060,'2017-02-13','10:44:49','O operador alterou o tipo de atendimento \"000011\" nos campos  do cadastro de tipos de atendimentos.',000004),(000061,'2017-02-13','10:44:53','O operador excluiu 000011 do cadastro de tipos de atendimentos.',000004),(000062,'2017-02-13','10:51:59','O operador inseriu AAAAAAAAAAAAAA no cadastro de HonorÃ¡rios.',000004),(000063,'2017-02-13','10:52:04','O operador alterou 000012 - FAAAAAAAAAAAAAA no cadastro de HonorÃ¡rios.',000004),(000064,'2017-02-13','10:52:08','O operador excluiu 000012 do cadastro de HonorÃ¡rios.',000004),(000065,'2017-02-13','15:41:26','O operador alterou a parcela 2017-03-15 do custo fixo 2.',000004),(000066,'2017-02-13','15:44:52','O operador alterou o orÃ§amento mensal .',000004),(000067,'2017-02-13','15:47:07','O operador alterou a parcela 2017-03-15 do custo fixo 2.',000004),(000068,'2017-02-13','15:48:26','O operador inseriu 000001 no HonorÃ¡rio 000006.',000004),(000069,'2017-02-13','15:51:31','O operador inseriu 4 no lanÃ§amento de compras.',000004),(000070,'2017-02-13','15:51:31','O operador inseriu o suprimento 000019 no lanÃ§amento 4.',000004),(000071,'2017-02-13','15:51:32','O operador inseriu a parcela 5 em contas a pagar',000004),(000072,'2017-02-14','08:23:22','O operador excluiu 000001 do honorÃ¡rio 000001.',000004),(000073,'2017-02-14','08:23:27','O operador inseriu 000001 no HonorÃ¡rio 000001.',000004),(000074,'2017-02-14','08:46:30','O operador inseriu 000002 no HonorÃ¡rio 000001.',000004),(000075,'2017-02-14','08:48:09','O operador alterou 000001 - HONORÃRIO BRONZE-X no cadastro de HonorÃ¡rios.',000004),(000076,'2017-02-14','08:48:57','O operador inseriu  no serviÃ§o avulso do protocolo 20170211131333000004.',000004),(000077,'2017-02-14','09:01:54','O operador `brunosartori` inseriu 000004 nos atendimentos do cliente 000002.',000004),(000078,'2017-02-14','09:39:33','O operador alterou a parcela 2017-04-20 do custo fixo 2.',000001),(000079,'2017-02-14','09:50:45','O operador liquidou a parcela 2017-04-20 do orÃ§amento mensal 3.',000001),(000080,'2017-02-14','09:51:19','O operador liquidou a parcela 2017-10-20 do orÃ§amento mensal 2.',000001),(000081,'2017-02-14','10:11:06','O operador liquidou a parcela 2017-06-20 do orÃ§amento mensal 2.',000004),(000082,'2017-02-14','10:11:45','O operador liquidou o lanÃ§amento 3 de contas Ã  pagar .',000004),(000083,'2017-02-14','10:22:04','O operador liquidou a parcela 2017-08-20 do orÃ§amento mensal 2.',000004),(000084,'2017-02-14','10:46:01','O operador inseriu  no serviÃ§o avulso do protocolo 20170211131333000004.',000004),(000085,'2017-02-14','11:20:54','O operador inseriu 000001 no HonorÃ¡rio 000002.',000004),(000086,'2017-02-14','11:29:42','O operador inseriu 000001 no HonorÃ¡rio 000003.',000004),(000087,'2017-02-14','11:29:48','O operador inseriu 000002 no HonorÃ¡rio 000003.',000004),(000088,'2017-02-14','11:30:50','O operador `brunosartori` excluiu o honorÃ¡rio do cliente 000001.',000004),(000089,'2017-02-14','11:39:30','O operador inseriu 5 no lanÃ§amento de compras.',000004),(000090,'2017-02-14','11:39:30','O operador inseriu o suprimento 000019 no lanÃ§amento 5.',000004),(000091,'2017-02-14','11:39:30','O operador inseriu o suprimento 000019 no lanÃ§amento 6.',000004),(000092,'2017-02-14','11:39:30','O operador inseriu o suprimento 000007 no lanÃ§amento 7.',000004),(000093,'2017-02-14','11:39:31','O operador inseriu a parcela 7 em contas a pagar',000004),(000094,'2017-02-14','12:47:11','O operador inseriu  no serviÃ§o avulso do protocolo 20170211131333000004.',000004),(000095,'2017-02-14','12:47:15','O operador inseriu  no serviÃ§o avulso do protocolo 20170211131333000004.',000004),(000096,'2017-02-14','12:47:18','O operador inseriu  no serviÃ§o avulso do protocolo 20170211131333000004.',000004),(000097,'2017-02-14','13:17:22','O operador excluiu o serviÃ§o avulso 000004.',000004),(000098,'2017-02-14','13:18:15','O operador inseriu  no serviÃ§o avulso do protocolo 20170211131333000004.',000004),(000099,'2017-02-14','14:01:06','O operador inseriu 6 no lanÃ§amento de compras.',000004),(000100,'2017-02-14','14:01:06','O operador inseriu o suprimento 000007 no lanÃ§amento 8.',000004),(000101,'2017-02-14','14:01:07','O operador inseriu o suprimento 000022 no lanÃ§amento 9.',000004),(000102,'2017-02-14','14:01:07','O operador inseriu a parcela 9 em contas a pagar',000004),(000103,'2017-02-14','14:01:44','O operador excluiu 9 do lanÃ§amento de compras.',000004),(000104,'2017-02-14','14:01:51','O operador excluiu 000006 do lanÃ§amento de compras.',000004),(000105,'2017-02-14','14:01:54','O operador excluiu 000005 do lanÃ§amento de compras.',000004),(000106,'2017-02-14','14:01:57','O operador excluiu 000004 do lanÃ§amento de compras.',000004),(000107,'2017-02-14','14:02:01','O operador excluiu 000003 do lanÃ§amento de compras.',000004),(000108,'2017-02-14','14:02:05','O operador excluiu 000002 do lanÃ§amento de compras.',000004),(000109,'2017-02-14','14:02:33','O operador excluiu 3 do lanÃ§amento de compras.',000004),(000110,'2017-02-14','14:03:34','O operador inseriu 7 no lanÃ§amento de compras.',000004),(000111,'2017-02-14','14:03:34','O operador inseriu o suprimento 000003 no lanÃ§amento 10.',000004),(000112,'2017-02-14','14:03:34','O operador inseriu o suprimento 000007 no lanÃ§amento 11.',000004),(000113,'2017-02-14','14:03:34','O operador inseriu a parcela 11 em contas a pagar',000004),(000114,'2017-02-14','14:13:02','O operador inseriu 8 no lanÃ§amento de compras.',000004),(000115,'2017-02-14','14:13:02','O operador inseriu o suprimento 000003 no lanÃ§amento 12.',000004),(000116,'2017-02-14','14:13:02','O operador inseriu o suprimento 000003 no lanÃ§amento 13.',000004),(000117,'2017-02-14','14:13:02','O operador inseriu a parcela 12 em contas a pagar',000004),(000118,'2017-02-14','14:14:08','O operador inseriu 9 no lanÃ§amento de compras.',000004),(000119,'2017-02-14','14:14:08','O operador inseriu o suprimento 000019 no lanÃ§amento 14.',000004),(000120,'2017-02-14','14:14:08','O operador inseriu a parcela 13 em contas a pagar',000004),(000121,'2017-02-14','14:39:13','O operador estornou a parcela fixa1.',000003),(000122,'2017-02-15','09:16:59','O operador inseriu  no serviÃ§o avulso do protocolo 20170131085036000004.',000004),(000123,'2017-02-15','09:18:12','O operador inseriu  no serviÃ§o avulso do protocolo 20170131085036000004.',000004),(000124,'2017-02-15','09:28:27','O operador lanÃ§ou o orÃ§amento mensal 3.',000004),(000125,'2017-02-15','09:56:46','O operador inseriu  no serviÃ§o avulso do protocolo 20170211131333000004.',000004),(000126,'2017-02-15','09:59:23','O operador excluiu o serviÃ§o avulso 000008.',000004),(000127,'2017-02-15','10:02:28','O operador excluiu o serviÃ§o avulso 000005.',000004),(000128,'2017-02-15','10:04:47','O operador excluiu o serviÃ§o avulso 000003.',000004),(000129,'2017-02-15','10:05:52','O operador inseriu  no serviÃ§o avulso do protocolo 20170131085036000004.',000004),(000130,'2017-02-15','10:06:01','O operador excluiu o serviÃ§o avulso 000009.',000004),(000131,'2017-02-15','10:08:56','O operador inseriu  no serviÃ§o avulso do protocolo 20170211131333000004.',000004),(000132,'2017-02-15','10:09:19','O operador excluiu o serviÃ§o avulso 000010.',000004),(000133,'2017-02-15','10:09:51','O operador inseriu  no serviÃ§o avulso do protocolo 20170131085036000004.',000004),(000134,'2017-02-15','10:09:55','O operador excluiu o serviÃ§o avulso 000011.',000004),(000135,'2017-02-15','10:13:22','O operador inseriu  no serviÃ§o avulso do protocolo 20170131085036000004.',000004),(000136,'2017-02-15','10:13:30','O operador inseriu  no serviÃ§o avulso do protocolo 20170131085036000004.',000004),(000137,'2017-02-15','10:45:43','O operador inseriu 10 no lanÃ§amento de compras.',000004),(000138,'2017-02-15','10:45:43','O operador inseriu o suprimento 000003 no lanÃ§amento 15.',000004),(000139,'2017-02-15','10:45:44','O operador inseriu o suprimento 000004 no lanÃ§amento 16.',000004),(000140,'2017-02-15','10:45:44','O operador inseriu a parcela 14 em contas a pagar',000004),(000141,'2017-02-15','11:49:51','O operador inseriu 11 no lanÃ§amento de compras.',000004),(000142,'2017-02-15','11:49:51','O operador inseriu o suprimento 000007 no lanÃ§amento 17.',000004),(000143,'2017-02-15','11:49:52','O operador inseriu o suprimento 000005 no lanÃ§amento 18.',000004),(000144,'2017-02-15','11:49:52','O operador inseriu a parcela 15 em contas a pagar',000004),(000145,'2017-02-15','11:49:52','O operador inseriu a parcela 16 em contas a pagar',000004),(000146,'2017-02-15','13:06:23','O operador inseriu LOREM IPSUM no cadastro de departamentos.',000004),(000147,'2017-02-15','13:06:52','O operador alterou 000015 - GFGFGLOREM IPSUM no cadastro de departamentos.',000004),(000148,'2017-02-15','13:09:08','O operador alterou 000015 - FDFDFDF no cadastro de departamentos.',000004),(000149,'2017-02-15','13:10:11','O operador alterou 000015 - FFDFDF no cadastro de departamentos.',000004),(000150,'2017-02-15','13:10:15','O operador excluiu 000015 do cadastro de departamentos.',000004),(000151,'2017-02-15','13:11:33','O operador alterou 000014 - DSDSDAAAAAA no cadastro de departamentos.',000004),(000152,'2017-02-15','13:12:06','O operador alterou 000014 - FSDSD no cadastro de departamentos.',000004),(000153,'2017-02-15','13:24:32','O operador inseriu AAAAAAAAAAAAAA no cadastro de grupo de despesas.',000004),(000154,'2017-02-15','13:24:38','O operador alterou 000017 - SSSAAAAAAAAAAAAAA no cadastro de grupo de despesas.',000004),(000155,'2017-02-15','13:24:43','O operador excluiu 000017 do cadastro de grupos de despesas.',000004),(000156,'2017-02-15','13:58:43','O operador alterou EMPREENDEDORISMO & EMPREENDEDORISMO LOREM IPSUM DO do cadastro de fornecedores.',000004),(000157,'2017-02-15','14:18:50','O operador lanÃ§ou a despesa 2 em contas a pagar',000004),(000158,'2017-02-15','14:18:50','O operador inseriu a parcela 17 em contas a pagar',000004),(000159,'2017-02-16','08:35:51','O operador alterou o orÃ§amento mensal .',000004),(000160,'2017-02-16','08:54:47','O operador alterou a parcela 2017-02-28 do custo fixo 3.',000004),(000161,'2017-02-16','09:15:36','O operador inseriu 12 no lanÃ§amento de compras.',000003),(000162,'2017-02-16','09:15:36','O operador inseriu o suprimento 000007 no lanÃ§amento 19.',000003),(000163,'2017-02-16','09:15:36','O operador inseriu o suprimento 000004 no lanÃ§amento 20.',000003),(000164,'2017-02-16','09:15:37','O operador inseriu a parcela 19 em contas a pagar',000003),(000165,'2017-02-16','09:15:37','O operador inseriu a parcela 20 em contas a pagar',000003),(000166,'2017-02-16','09:36:08','O operador inseriu 13 no lanÃ§amento de compras.',000004),(000167,'2017-02-16','09:36:09','O operador inseriu o suprimento 000007 no lanÃ§amento 21.',000004),(000168,'2017-02-16','09:36:09','O operador inseriu o suprimento 000004 no lanÃ§amento 22.',000004),(000169,'2017-02-16','09:36:09','O operador inseriu a parcela 21 em contas a pagar',000004),(000170,'2017-02-16','15:35:11','O operador `brunosartori` alterou dados no cadastro do cliente BRUNO SARTORI.',000004),(000171,'2017-02-16','15:42:37','O operador `brunosartori` alterou dados no cadastro do cliente BRUNO SARTORI.',000004),(000172,'2017-02-16','16:00:24','O operador alterou  no lanÃ§amento de compras.',000004),(000173,'2017-02-16','16:00:24','O operador excluiu 000012 do lanÃ§amento de compras.',000004),(000174,'2017-02-16','16:00:25','O operador inseriu o suprimento 000007 no lanÃ§amento 23.',000004),(000175,'2017-02-16','16:00:25','O operador inseriu o suprimento 000004 no lanÃ§amento 24.',000004),(000176,'2017-02-16','16:00:25','O operador excluiu 000012 do lanÃ§amento de compras.',000004),(000177,'2017-02-16','16:00:25','O operador inseriu a parcela 22 em contas a pagar',000004),(000178,'2017-02-16','16:00:25','O operador inseriu a parcela 23 em contas a pagar',000004),(000179,'2017-02-17','07:56:36','O operador inseriu 14 no lanÃ§amento de compras.',000004),(000180,'2017-02-17','07:56:36','O operador inseriu o suprimento 000007 no lanÃ§amento 25.',000004),(000181,'2017-02-17','07:56:36','O operador inseriu o suprimento 000004 no lanÃ§amento 26.',000004),(000182,'2017-02-17','07:56:36','O operador inseriu a parcela 24 em contas a pagar',000004),(000183,'2017-02-17','07:56:36','O operador inseriu a parcela 25 em contas a pagar',000004),(000184,'2017-02-17','07:56:37','O operador inseriu a parcela 26 em contas a pagar',000004),(000185,'2017-02-17','09:26:13','O operador `brunosartori` inseriu TATIANE DOS SANTOS MURGI no cadastro de clientes.',000004),(000186,'2017-02-17','13:05:12','O operador `brunosartori` alterou dados no cadastro do cliente BRUNO SARTORI.',000004),(000187,'2017-02-17','13:08:35','O operador `brunosartori` alterou dados no cadastro do cliente BRUNO SARTORI.',000004),(000188,'2017-02-17','13:16:35','O operador liquidou a parcela 2017-02-28 do orÃ§amento mensal 7.',000004),(000189,'2017-02-17','13:25:16','O operador `brunosartori` alterou dados no cadastro do cliente BRUNO SARTORI.',000004),(000190,'2017-02-17','13:45:09','O operador `brunosartori` alterou dados no cadastro do cliente BRUNO SARTORI.',000004),(000191,'2017-02-17','13:45:52','O operador `brunosartori` alterou dados no cadastro do cliente BRUNO SARTORI.',000004),(000192,'2017-02-17','13:49:23','O operador `brunosartori` alterou dados no cadastro do cliente BRUNO SARTORI.',000004),(000193,'2017-02-17','13:49:31','O operador `brunosartori` alterou dados no cadastro do cliente BRUNO SARTORI.',000004),(000194,'2017-02-17','13:53:35','O operador `brunosartori` alterou dados no cadastro do cliente BRUNO SARTORI.',000004),(000195,'2017-02-17','13:53:45','O operador `brunosartori` alterou dados no cadastro do cliente BRUNO SARTORI.',000004),(000196,'2017-02-17','13:54:29','O operador `brunosartori` alterou dados no cadastro do cliente BRUNO SARTORI.',000004),(000197,'2017-02-17','13:56:46','O operador `brunosartori` alterou dados no cadastro do cliente BRUNO SARTORI.',000004),(000198,'2017-02-17','14:02:21','O operador `brunosartori` alterou dados no cadastro do cliente BRUNO SARTORI.',000004),(000199,'2017-02-17','14:03:42','O operador `brunosartori` alterou dados no cadastro do cliente BRUNO SARTORI.',000004),(000200,'2017-02-17','14:03:58','O operador `brunosartori` alterou dados no cadastro do cliente BRUNO SARTORI.',000004),(000201,'2017-02-17','14:16:00','O operador `brunosartori` alterou dados no cadastro do cliente BRUNO SARTORI.',000004),(000202,'2017-02-17','14:17:23','O operador `brunosartori` alterou dados no cadastro do cliente BRUNO SARTORI.',000004),(000203,'2017-02-17','14:17:47','O operador `brunosartori` alterou dados no cadastro do cliente BRUNO SARTORI.',000004),(000204,'2017-02-17','14:18:09','O operador `brunosartori` alterou dados no cadastro do cliente BRUNO SARTORI.',000004),(000205,'2017-02-17','14:18:25','O operador `brunosartori` alterou dados no cadastro do cliente BRUNO SARTORI.',000004),(000206,'2017-02-20','10:45:06','O operador `brunosartori` inseriu CARLOS ALBERTO SARTORI no cadastro de clientes.',000004),(000207,'2017-02-20','11:02:57','O operador `brunosartori` inseriu UMBRELLA CORPORATION no cadastro de clientes.',000004),(000208,'2017-02-20','11:19:13','O operador `brunosartori` alterou dados no cadastro do cliente CARLOS ALBERTO SARTORI.',000004),(000209,'2017-02-20','11:23:04','O operador `brunosartori` inseriu 000005 nos atendimentos do cliente 000008.',000004),(000210,'2017-02-20','11:26:58','O operador `brunosartori` inseriu FACEBOOK INC no cadastro de clientes.',000004),(000211,'2017-02-20','11:29:20','O operador `brunosartori` inseriu 000004 nos atendimentos do cliente 10.',000004),(000212,'2017-02-20','14:31:51','O operador inseriu  no serviÃ§o avulso do protocolo 20170220112907000004.',000004),(000213,'2017-02-20','14:32:16','O operador inseriu  no serviÃ§o avulso do protocolo 20170220112907000004.',000004),(000214,'2017-02-20','14:34:42','O operador inseriu  no serviÃ§o avulso do protocolo 20170220112907000004.',000004),(000215,'2017-02-21','11:32:43','O operador inseriu  no serviÃ§o avulso do protocolo 20170127084901000001000004.',000004),(000216,'2017-02-21','11:46:46','O operador `brunosartori` inseriu DSDSDSDSD no cadastro de clientes.',000004),(000217,'2017-02-21','11:49:04','O operador `brunosartori` inseriu 000004 nos atendimentos do cliente 000001.',000004),(000218,'2017-02-21','11:49:17','O operador inseriu  no serviÃ§o avulso do protocolo 20170221114848000004.',000004),(000219,'2017-02-21','12:39:48','O operador inseriu  no serviÃ§o avulso do protocolo 20170221114848000004.',000004),(000220,'2017-02-21','12:40:07','O operador `brunosartori` inseriu 000002 nos atendimentos do cliente 000001.',000004),(000221,'2017-02-21','12:40:16','O operador inseriu  no serviÃ§o avulso do protocolo 20170221124000000004.',000004),(000222,'2017-02-21','12:46:07','O operador `brunosartori` alterou dados no cadastro do cliente DSDSDSDSD.',000004),(000223,'2017-02-21','12:51:58','O operador inseriu  no serviÃ§o avulso do protocolo 20170221124000000004.',000004),(000224,'2017-02-21','12:52:04','O operador inseriu  no serviÃ§o avulso do protocolo 20170221124000000004.',000004),(000225,'2017-02-21','12:55:09','O operador inseriu  no serviÃ§o avulso do protocolo 20170221114848000004.',000004),(000226,'2017-02-21','12:55:14','O operador inseriu  no serviÃ§o avulso do protocolo 20170221114848000004.',000004),(000227,'2017-02-21','12:55:18','O operador inseriu  no serviÃ§o avulso do protocolo 20170221114848000004.',000004),(000228,'2017-02-21','12:55:20','O operador inseriu  no serviÃ§o avulso do protocolo 20170221114848000004.',000004),(000229,'2017-02-21','14:10:20','O operador excluiu o serviÃ§o avulso 000007.',000004),(000230,'2017-02-21','14:12:04','O operador `brunosartori` inseriu 000004 nos atendimentos do cliente 000001.',000004),(000231,'2017-02-21','14:12:14','O operador inseriu  no serviÃ§o avulso do protocolo 20170221141200000004.',000004),(000232,'2017-02-21','14:12:23','O operador inseriu  no serviÃ§o avulso do protocolo 20170221141200000004.',000004),(000233,'2017-02-21','14:12:30','O operador `brunosartori` inseriu 000004 nos atendimentos do cliente 000001.',000004),(000234,'2017-02-21','14:12:39','O operador inseriu  no serviÃ§o avulso do protocolo 20170221141227000004.',000004),(000235,'2017-02-21','14:51:56','O operador inseriu  no serviÃ§o avulso do protocolo 20170221141200000004.',000004),(000236,'2017-02-21','14:52:03','O operador inseriu  no serviÃ§o avulso do protocolo 20170221141200000004.',000004),(000237,'2017-02-21','14:52:07','O operador inseriu  no serviÃ§o avulso do protocolo 20170221141200000004.',000004),(000238,'2017-02-21','14:52:14','O operador inseriu  no serviÃ§o avulso do protocolo 20170221141200000004.',000004),(000239,'2017-02-22','07:57:00','O operador inseriu  no serviÃ§o avulso do protocolo 20170221141200000004.',000004),(000240,'2017-02-22','07:57:08','O operador inseriu  no serviÃ§o avulso do protocolo 20170221141200000004.',000004),(000241,'2017-02-22','07:57:13','O operador inseriu  no serviÃ§o avulso do protocolo 20170221141200000004.',000004),(000242,'2017-02-22','08:03:34','O operador `brunosartori` inseriu 17 nos recebimentos do protocolo de atendimento 20170221141200000004.',000004),(000243,'2017-02-22','08:04:20','O operador `` inseriu 18 nos recebimentos do protocolo de atendimento 20170221141200000004.',000004),(000244,'2017-02-22','09:27:36','O operador inseriu LOREM IPSUM no cadastro de HonorÃ¡rios.',000004),(000245,'2017-02-22','10:01:51','O operador alterou 000013 - HONORARIO LOREM IPSUM no cadastro de HonorÃ¡rios.',000004),(000246,'2017-02-22','10:50:52','O operador inseriu 1 no HonorÃ¡rio 000001.',000004),(000247,'2017-02-22','10:58:09','O operador alterou 000001 - HONORÃRIO BRONZE-X no cadastro de HonorÃ¡rios.',000004),(000248,'2017-02-22','10:58:15','O operador alterou 000003 - HONORÃRIO OURO no cadastro de HonorÃ¡rios.',000004),(000249,'2017-02-22','11:41:52','O operador inseriu  no serviÃ§o avulso do protocolo 20170221141200000004.',000004),(000250,'2017-02-22','11:42:01','O operador inseriu  no serviÃ§o avulso do protocolo 20170221141200000004.',000004),(000251,'2017-02-22','11:42:07','O operador inseriu  no serviÃ§o avulso do protocolo 20170221141200000004.',000004),(000252,'2017-02-22','13:09:11','O operador inseriu  no serviÃ§o avulso do protocolo 20170221141227000004.',000004),(000253,'2017-02-22','14:38:39','O operador `` inseriu 19 nos recebimentos do protocolo de atendimento 20170221141200000004.',000004),(000254,'2017-02-22','14:40:58','O operador excluiu 000013 do cadastro de HonorÃ¡rios.',000004),(000255,'2017-02-22','14:41:12','O operador inseriu 1 no HonorÃ¡rio 000002.',000004),(000256,'2017-02-22','14:41:18','O operador inseriu 6 no HonorÃ¡rio 000002.',000004),(000257,'2017-02-22','14:41:24','O operador alterou 000002 - HONORÃRIO PRATA no cadastro de HonorÃ¡rios.',000004),(000258,'2017-02-22','14:42:32','O operador `brunosartori` alterou dados no cadastro do cliente BRUNO SARTORI.',000004),(000259,'2017-02-23','08:42:36','O operador inseriu  no serviÃ§o avulso do protocolo 20170221141200000004.',000004),(000260,'2017-02-23','08:44:32','O operador `brunosartori` inseriu 000004 nos atendimentos do cliente 000001.',000004),(000261,'2017-02-23','08:44:41','O operador inseriu  no serviÃ§o avulso do protocolo 20170223084425000004.',000004),(000262,'2017-02-23','10:02:41','O operador inseriu  no serviÃ§o avulso do protocolo 20170223084425000004.',000004),(000263,'2017-02-23','10:02:47','O operador inseriu  no serviÃ§o avulso do protocolo 20170223084425000004.',000004),(000264,'2017-02-23','10:02:53','O operador inseriu  no serviÃ§o avulso do protocolo 20170223084425000004.',000004),(000265,'2017-02-23','10:03:03','O operador inseriu  no serviÃ§o avulso do protocolo 20170223084425000004.',000004),(000266,'2017-02-23','10:03:05','O operador inseriu  no serviÃ§o avulso do protocolo 20170223084425000004.',000004),(000267,'2017-02-23','10:03:07','O operador inseriu  no serviÃ§o avulso do protocolo 20170223084425000004.',000004),(000268,'2017-02-23','10:03:10','O operador inseriu  no serviÃ§o avulso do protocolo 20170223084425000004.',000004),(000269,'2017-02-23','10:13:25','O operador inseriu  no serviÃ§o avulso do protocolo 20170223084425000004.',000004),(000270,'2017-02-23','10:17:44','O operador inseriu  no serviÃ§o avulso do protocolo 20170223084425000004.',000004),(000271,'2017-02-23','10:18:45','O operador `brunosartori` inseriu 000004 nos atendimentos do cliente 000001.',000004),(000272,'2017-02-23','10:18:55','O operador inseriu  no serviÃ§o avulso do protocolo 20170223101843000004.',000004),(000273,'2017-02-23','10:18:58','O operador inseriu  no serviÃ§o avulso do protocolo 20170223101843000004.',000004),(000274,'2017-02-23','10:19:00','O operador inseriu  no serviÃ§o avulso do protocolo 20170223101843000004.',000004),(000275,'2017-02-23','10:19:31','O operador inseriu  no serviÃ§o avulso do protocolo 20170223101843000004.',000004),(000276,'2017-02-23','10:19:44','O operador inseriu  no serviÃ§o avulso do protocolo 20170223101843000004.',000004),(000277,'2017-02-23','10:28:46','O operador inseriu  no serviÃ§o avulso do protocolo 20170223101843000004.',000004),(000278,'2017-02-23','10:29:16','O operador `brunosartori` inseriu 000004 nos atendimentos do cliente 000001.',000004),(000279,'2017-02-23','10:29:23','O operador inseriu  no serviÃ§o avulso do protocolo 20170223102911000004.',000004),(000280,'2017-02-23','10:29:26','O operador inseriu  no serviÃ§o avulso do protocolo 20170223102911000004.',000004),(000281,'2017-02-23','10:29:28','O operador inseriu  no serviÃ§o avulso do protocolo 20170223102911000004.',000004),(000282,'2017-02-23','10:29:40','O operador inseriu  no serviÃ§o avulso do protocolo 20170223102911000004.',000004),(000283,'2017-02-23','10:30:23','O operador inseriu  no serviÃ§o avulso do protocolo 20170223102911000004.',000004),(000284,'2017-02-23','10:30:50','O operador inseriu  no serviÃ§o avulso do protocolo 20170223102911000004.',000004),(000285,'2017-02-23','10:30:57','O operador inseriu  no serviÃ§o avulso do protocolo 20170223102911000004.',000004),(000286,'2017-02-23','10:31:51','O operador inseriu  no serviÃ§o avulso do protocolo 20170223102911000004.',000004),(000287,'2017-02-23','10:32:16','O operador inseriu  no serviÃ§o avulso do protocolo 20170223102911000004.',000004),(000288,'2017-02-23','10:32:33','O operador inseriu  no serviÃ§o avulso do protocolo 20170223102911000004.',000004),(000289,'2017-02-23','14:08:28','O operador `brunosartori` inseriu 20 nos recebimentos do protocolo de atendimento 20170223102911000004.',000004),(000290,'2017-02-23','14:08:40','O operador `brunosartori` inseriu  nos atendimentos do cliente 000001.',000004),(000291,'2017-02-23','14:16:09','O operador `brunosartori` inseriu 000004 nos atendimentos do cliente 000001.',000004),(000292,'2017-02-27','09:09:56','O operador `brunosartori` inseriu 000004 nos atendimentos do cliente 000001.',000004),(000293,'2017-02-27','14:28:05','O operador `brunosartori` inseriu 000004 nos atendimentos do cliente 000001.',000004),(000294,'2017-02-27','14:35:40','O operador `brunosartori` inseriu 000004 nos atendimentos do cliente 000001.',000004),(000295,'2017-02-27','14:40:29','O operador `brunosartori` inseriu 000004 nos atendimentos do cliente 000001.',000004),(000296,'2017-03-01','07:25:14','O operador `brunosartori` inseriu 000004 nos atendimentos do cliente 000001.',000004),(000297,'2017-03-01','08:23:06','O operador `brunosartori` inseriu  nos atendimentos do cliente 000001.',000004),(000298,'2017-03-01','08:25:56','O operador `brunosartori` inseriu 000004 nos atendimentos do cliente 000001.',000004),(000299,'2017-03-01','08:26:43','O operador `brunosartori` inseriu  nos atendimentos do cliente 000001.',000004),(000300,'2017-03-01','08:29:52','O operador `brunosartori` inseriu  nos atendimentos do cliente 000001.',000004),(000301,'2017-03-01','08:34:08','O operador `brunosartori` inseriu  nos atendimentos do cliente 000001.',000004),(000302,'2017-03-01','08:36:13','O operador `brunosartori` inseriu  nos atendimentos do cliente 000001.',000004),(000303,'2017-03-01','08:37:49','O operador `brunosartori` inseriu  nos atendimentos do cliente 000001.',000004),(000304,'2017-03-01','08:44:18','O operador `brunosartori` inseriu 000004 nos atendimentos do cliente 000001.',000004),(000305,'2017-03-01','08:46:20','O operador `brunosartori` inseriu  nos atendimentos do cliente 000001.',000004),(000306,'2017-03-01','08:46:47','O operador `brunosartori` inseriu  nos atendimentos do cliente 000001.',000004),(000307,'2017-03-01','09:41:41','O operador `brunosartori` inseriu 000004 nos atendimentos do cliente 1.',000004),(000308,'2017-03-01','09:45:56','O operador `brunosartori` inseriu  nos atendimentos do cliente 1.',000004),(000309,'2017-03-01','09:51:51','O operador `brunosartori` inseriu  nos atendimentos do cliente 1.',000004),(000310,'2017-03-01','09:53:29','O operador `brunosartori` inseriu  nos atendimentos do cliente 1.',000004),(000311,'2017-03-01','10:10:45','O operador inseriu  no serviÃ§o avulso do protocolo 20170301094133000004.',000004),(000312,'2017-03-01','10:15:35','O operador inseriu  no serviÃ§o avulso do protocolo 20170301094133000004.',000004),(000313,'2017-03-01','10:16:37','O operador inseriu  no serviÃ§o avulso do protocolo 20170301094133000004.',000004),(000314,'2017-03-01','10:17:59','O operador inseriu  no serviÃ§o avulso do protocolo 20170301094133000004.',000004),(000315,'2017-03-01','10:24:00','O operador inseriu  no serviÃ§o avulso do protocolo 20170301094133000004.',000004),(000316,'2017-03-01','10:37:02','O operador inseriu  no serviÃ§o avulso do protocolo 20170301094133000004.',000003),(000317,'2017-03-01','10:39:09','O operador inseriu  no serviÃ§o avulso do protocolo 20170301094133000004.',000003),(000318,'2017-03-01','10:40:26','O operador inseriu  no serviÃ§o avulso do protocolo 20170301094133000004.',000003),(000319,'2017-03-01','10:41:26','O operador inseriu  no serviÃ§o avulso do protocolo 20170301094133000004.',000003),(000320,'2017-03-01','10:46:48','O operador inseriu  no serviÃ§o avulso do protocolo 20170301094133000004.',000003),(000321,'2017-03-01','10:50:31','O operador excluiu o serviÃ§o avulso 000010.',000003),(000322,'2017-03-01','10:50:36','O operador excluiu o serviÃ§o avulso 000009.',000003),(000323,'2017-03-01','12:34:28','O operador inseriu 15 no lanÃ§amento de compras.',000004),(000324,'2017-03-01','12:34:28','O operador inseriu o suprimento 000003 no lanÃ§amento 27.',000004),(000325,'2017-03-01','12:34:29','O operador inseriu o suprimento 000004 no lanÃ§amento 28.',000004),(000326,'2017-03-01','12:34:29','O operador inseriu a parcela 27 em contas a pagar',000004),(000327,'2017-03-01','12:44:27','O operador alterou  no lanÃ§amento de compras.',000004),(000328,'2017-03-01','12:44:27','O operador excluiu 000008 do lanÃ§amento de compras.',000004),(000329,'2017-03-01','12:44:28','O operador inseriu o suprimento 000003 no lanÃ§amento 29.',000004),(000330,'2017-03-01','12:44:28','O operador inseriu o suprimento 000003 no lanÃ§amento 30.',000004),(000331,'2017-03-01','12:44:28','O operador inseriu o suprimento 000003 no lanÃ§amento 31.',000004),(000332,'2017-03-01','12:44:28','O operador excluiu 000008 do lanÃ§amento de compras.',000004),(000333,'2017-03-01','12:44:29','O operador inseriu a parcela 28 em contas a pagar',000004),(000334,'2017-03-01','13:30:49','O operador excluiu 000051 do lanÃ§amento de compras.',000003),(000335,'2017-03-01','13:31:20','O operador excluiu 000051 do lanÃ§amento de compras.',000003),(000336,'2017-03-01','13:32:53','O operador excluiu 000051 do lanÃ§amento de compras.',000003),(000337,'2017-03-01','15:06:33','O operador alterou  no lanÃ§amento de compras.',000004),(000338,'2017-03-01','15:08:05','O operador alterou  no lanÃ§amento de compras.',000004),(000339,'2017-03-02','09:40:54','O operador inseriu 1 no lanÃ§amento de compras.',000004),(000340,'2017-03-02','09:40:54','O operador inseriu o suprimento 000003 no lanÃ§amento 1.',000004),(000341,'2017-03-02','09:40:55','O operador inseriu o suprimento 000020 no lanÃ§amento 2.',000004),(000342,'2017-03-02','09:40:55','O operador inseriu o suprimento 000019 no lanÃ§amento 3.',000004),(000343,'2017-03-02','09:40:55','O operador inseriu a parcela 1 em contas a pagar',000004),(000344,'2017-03-02','09:40:55','O operador inseriu a parcela 2 em contas a pagar',000004),(000345,'2017-03-02','09:54:15','O operador inseriu 1 no lanÃ§amento de compras.',000004),(000346,'2017-03-02','09:54:15','O operador inseriu o suprimento 000019 no lanÃ§amento 1.',000004),(000347,'2017-03-02','09:54:16','O operador inseriu o suprimento 000020 no lanÃ§amento 2.',000004),(000348,'2017-03-02','09:54:16','O operador inseriu a parcela 1 em contas a pagar',000004),(000349,'2017-03-02','09:54:16','O operador inseriu a parcela 2 em contas a pagar',000004),(000350,'2017-03-02','09:54:16','O operador inseriu a parcela 3 em contas a pagar',000004),(000351,'2017-03-02','10:09:24','O operador inseriu 1 no lanÃ§amento de compras.',000004),(000352,'2017-03-02','10:09:25','O operador inseriu o suprimento 000019 no lanÃ§amento 1.',000004),(000353,'2017-03-02','10:09:25','O operador inseriu o suprimento 000020 no lanÃ§amento 2.',000004),(000354,'2017-03-02','10:09:26','O operador inseriu a parcela 1 em contas a pagar',000004),(000355,'2017-03-02','10:09:26','O operador inseriu a parcela 2 em contas a pagar',000004),(000356,'2017-03-02','10:13:38','O operador alterou  no lanÃ§amento de compras.',000004),(000357,'2017-03-02','10:21:27','O operador inseriu 1 no lanÃ§amento de compras.',000004),(000358,'2017-03-02','10:21:29','O operador inseriu o suprimento 000003 no lanÃ§amento 1.',000004),(000359,'2017-03-02','10:21:29','O operador inseriu o suprimento 000004 no lanÃ§amento 2.',000004),(000360,'2017-03-02','10:21:29','O operador inseriu a parcela 1 em contas a pagar',000004),(000361,'2017-03-02','10:21:30','O operador inseriu a parcela 2 em contas a pagar',000004),(000362,'2017-03-02','10:51:17','O operador inseriu 1 no lanÃ§amento de compras.',000004),(000363,'2017-03-02','10:51:17','O operador inseriu o suprimento 000007 no lanÃ§amento 1.',000004),(000364,'2017-03-02','10:51:17','O operador inseriu o suprimento 000004 no lanÃ§amento 2.',000004),(000365,'2017-03-02','10:51:17','O operador inseriu a parcela 1 em contas a pagar',000004),(000366,'2017-03-02','10:51:17','O operador inseriu a parcela 2 em contas a pagar',000004),(000367,'2017-03-02','10:57:53','O operador alterou  no lanÃ§amento de compras.',000004),(000368,'2017-03-02','11:05:01','O operador alterou  no lanÃ§amento de compras.',000004),(000369,'2017-03-02','11:08:55','O operador alterou  no lanÃ§amento de compras.',000004),(000370,'2017-03-02','11:10:28','O operador alterou  no lanÃ§amento de compras.',000004),(000371,'2017-03-02','11:22:40','O operador inseriu 1 no lanÃ§amento de compras.',000004),(000372,'2017-03-02','11:22:40','O operador inseriu o suprimento 000019 no lanÃ§amento 1.',000004),(000373,'2017-03-02','11:22:40','O operador inseriu o suprimento 000020 no lanÃ§amento 2.',000004),(000374,'2017-03-02','11:22:41','O operador inseriu a parcela 1 em contas a pagar',000004),(000375,'2017-03-02','11:22:41','O operador inseriu a parcela 2 em contas a pagar',000004),(000376,'2017-03-02','11:23:10','O operador alterou  no lanÃ§amento de compras.',000004),(000377,'2017-03-02','11:24:12','O operador alterou  no lanÃ§amento de compras.',000004),(000378,'2017-03-02','11:27:50','O operador alterou  no lanÃ§amento de compras.',000004),(000379,'2017-03-02','11:31:08','O operador alterou  no lanÃ§amento de compras.',000004),(000380,'2017-03-02','11:33:19','O operador alterou  no lanÃ§amento de compras.',000004),(000381,'2017-03-02','11:38:24','O operador inseriu 1 no lanÃ§amento de compras.',000004),(000382,'2017-03-02','11:38:24','O operador inseriu o suprimento 000019 no lanÃ§amento 1.',000004),(000383,'2017-03-02','11:38:25','O operador inseriu a parcela 1 em contas a pagar',000004),(000384,'2017-03-02','11:38:40','O operador alterou  no lanÃ§amento de compras.',000004),(000385,'2017-03-02','11:39:38','O operador alterou  no lanÃ§amento de compras.',000004),(000386,'2017-03-02','13:07:31','O operador alterou  no lanÃ§amento de compras.',000004),(000387,'2017-03-02','13:09:39','O operador alterou  no lanÃ§amento de compras.',000004),(000388,'2017-03-02','13:23:20','O operador inseriu 1 no lanÃ§amento de compras.',000004),(000389,'2017-03-02','13:23:20','O operador inseriu o suprimento 000003 no lanÃ§amento 1.',000004),(000390,'2017-03-02','13:23:20','O operador inseriu o suprimento 000004 no lanÃ§amento 2.',000004),(000391,'2017-03-02','13:23:21','O operador inseriu a parcela 1 em contas a pagar',000004),(000392,'2017-03-02','13:23:21','O operador inseriu a parcela 2 em contas a pagar',000004),(000393,'2017-03-02','13:23:42','O operador alterou 000001 no lanÃ§amento de compras.',000004),(000394,'2017-03-02','13:27:05','O operador alterou 000001 no lanÃ§amento de compras.',000004),(000395,'2017-03-02','13:27:30','O operador alterou 000001 no lanÃ§amento de compras.',000004),(000396,'2017-03-02','13:27:55','O operador alterou 000001 no lanÃ§amento de compras.',000004),(000397,'2017-03-02','13:48:35','O operador excluiu 000001 do lanÃ§amento de compras.',000004),(000398,'2017-03-03','07:55:43','O operador inseriu 2 no lanÃ§amento de compras.',000004),(000399,'2017-03-03','07:55:43','O operador inseriu o suprimento 000019 no lanÃ§amento 17.',000004),(000400,'2017-03-03','07:55:43','O operador inseriu o suprimento 000007 no lanÃ§amento 18.',000004),(000401,'2017-03-03','07:55:43','O operador inseriu a parcela 12 em contas a pagar',000004),(000402,'2017-03-03','07:55:43','O operador inseriu a parcela 13 em contas a pagar',000004),(000403,'2017-03-03','07:57:07','O operador alterou 000002 no lanÃ§amento de compras.',000004),(000404,'2017-03-03','07:58:55','O operador `brunosartori` inseriu 000004 nos atendimentos do cliente 000001.',000004),(000405,'2017-03-03','08:01:33','O operador inseriu  no serviÃ§o avulso do protocolo 20170303075839000004.',000004),(000406,'2017-03-03','08:02:16','O operador `brunosartori` inseriu  nos atendimentos do cliente 000001.',000004),(000407,'2017-03-03','08:28:16','O operador inseriu  no serviÃ§o avulso do protocolo 20170303075839000004.',000004),(000408,'2017-03-03','08:32:11','O operador `brunosartori` inseriu  nos atendimentos do cliente 000001.',000004),(000409,'2017-03-03','08:34:10','O operador `brunosartori` inseriu  nos atendimentos do cliente 000001.',000004),(000410,'2017-03-03','08:34:29','O operador `brunosartori` inseriu  nos atendimentos do cliente 000001.',000004),(000411,'2017-03-03','08:34:47','O operador `brunosartori` inseriu  nos atendimentos do cliente 000001.',000004),(000412,'2017-03-03','14:26:21','O operador inseriu  no serviÃ§o avulso do protocolo 20170303075839000004.',000004),(000413,'2017-03-03','14:29:11','O operador `brunosartori` inseriu 13 nos recebimentos do protocolo de atendimento 20170303075839000004.',000004),(000414,'2017-03-03','14:38:52','O operador `` inseriu  nos recebimentos do protocolo de atendimento .',000004),(000415,'2017-03-03','15:30:18','O operador `brunosartori` inseriu  nos recebimentos do protocolo de atendimento .',000004),(000416,'2017-03-03','15:30:52','O operador `brunosartori` inseriu 22 nos recebimentos do protocolo de atendimento .',000004),(000417,'2017-03-03','15:43:06','O operador `brunosartori` inseriu 000004 nos atendimentos do cliente 000001.',000004),(000418,'2017-03-03','15:43:27','O operador inseriu  no serviÃ§o avulso do protocolo 20170303154301000004.',000004),(000419,'2017-03-03','15:47:29','O operador `brunosartori` inseriu 24 nos recebimentos do protocolo de atendimento 20170303154301000004.',000004),(000420,'2017-03-03','15:56:27','O operador `brunosartori` inseriu 28 nos recebimentos do protocolo de atendimento 20170303154301000004.',000004),(000421,'2017-03-06','07:27:24','O operador `brunosartori` inseriu 29 nos recebimentos do protocolo de atendimento 20170303154301000004.',000004),(000422,'2017-03-06','07:42:57','O operador `brunosartori` inseriu 30 nos recebimentos do protocolo de atendimento 20170303154301000004.',000004),(000423,'2017-03-06','07:56:34','O operador `brunosartori` inseriu 31 nos recebimentos do protocolo de atendimento 20170303154301000004.',000004),(000424,'2017-03-06','07:59:37','O operador `brunosartori` inseriu 32 nos recebimentos do protocolo de atendimento 20170303154301000004.',000004),(000425,'2017-03-06','08:04:03','O operador `brunosartori` inseriu 33 nos recebimentos do protocolo de atendimento 20170303154301000004.',000004),(000426,'2017-03-06','08:04:56','O operador `brunosartori` inseriu 34 nos recebimentos do protocolo de atendimento 20170303154301000004.',000004),(000427,'2017-03-06','08:17:30','O operador `brunosartori` inseriu  nos recebimentos do protocolo de atendimento .',000004),(000428,'2017-03-06','08:17:55','O operador `brunosartori` inseriu 36 nos recebimentos do protocolo de atendimento 20170301094133000004.',000004),(000429,'2017-03-06','08:18:11','O operador `brunosartori` inseriu 37 nos recebimentos do protocolo de atendimento .',000004),(000430,'2017-03-06','08:35:58','O operador `brunosartori` inseriu 38 nos recebimentos do protocolo de atendimento .',000004),(000431,'2017-03-06','08:41:19','O operador `brunosartori` inseriu 39 nos recebimentos do protocolo de atendimento .',000004),(000432,'2017-03-06','08:41:32','O operador `brunosartori` inseriu 40 nos recebimentos do protocolo de atendimento 20170301094133000004.',000004),(000433,'2017-03-06','08:43:04','O operador `brunosartori` inseriu 41 nos recebimentos do protocolo de atendimento 20170301094133000004.',000004),(000434,'2017-03-06','08:46:21','O operador `brunosartori` inseriu 000004 nos atendimentos do cliente 000001.',000004),(000435,'2017-03-06','08:47:39','O operador inseriu  no serviÃ§o avulso do protocolo 20170306084611000004.',000004),(000436,'2017-03-06','08:47:59','O operador `brunosartori` inseriu 1 nos recebimentos do protocolo de atendimento 20170306084611000004.',000004),(000437,'2017-03-06','08:48:20','O operador `brunosartori` inseriu 2 nos recebimentos do protocolo de atendimento 20170306084611000004.',000004),(000438,'2017-03-06','08:48:32','O operador `brunosartori` inseriu 000004 nos atendimentos do cliente 000001.',000004),(000439,'2017-03-06','08:50:30','O operador inseriu  no serviÃ§o avulso do protocolo 20170306084829000004.',000004),(000440,'2017-03-06','08:50:45','O operador inseriu  no serviÃ§o avulso do protocolo 20170306084829000004.',000004),(000441,'2017-03-06','08:50:56','O operador `brunosartori` inseriu 3 nos recebimentos do protocolo de atendimento 20170306084829000004.',000004),(000442,'2017-03-06','08:59:41','O operador `brunosartori` inseriu 4 nos recebimentos do protocolo de atendimento 20170306084829000004.',000004),(000443,'2017-03-06','09:01:08','O operador `brunosartori` inseriu 5 nos recebimentos do protocolo de atendimento 20170306084611000004.',000004),(000444,'2017-03-06','09:07:58','O operador `brunosartori` inseriu 6 nos recebimentos do protocolo de atendimento 20170306084829000004.',000004),(000445,'2017-03-06','09:10:11','O operador `brunosartori` inseriu  nos atendimentos do cliente 000001.',000004),(000446,'2017-03-06','09:11:25','O operador `brunosartori` inseriu  nos atendimentos do cliente 000001.',000004),(000447,'2017-03-06','09:14:07','O operador `brunosartori` inseriu  nos atendimentos do cliente 000001.',000004),(000448,'2017-03-06','09:19:40','O operador `brunosartori` inseriu 000004 nos atendimentos do cliente 000001.',000004),(000449,'2017-03-06','09:20:00','O operador `brunosartori` inseriu  nos atendimentos do cliente 000001.',000004),(000450,'2017-03-06','09:26:23','O operador `brunosartori` inseriu  nos atendimentos do cliente 000001.',000004),(000451,'2017-03-06','09:29:20','O operador `brunosartori` inseriu  nos atendimentos do cliente 000001.',000004),(000452,'2017-03-06','09:30:14','O operador `brunosartori` inseriu  nos atendimentos do cliente 000001.',000004),(000453,'2017-03-06','09:31:10','O operador `brunosartori` inseriu  nos atendimentos do cliente 000001.',000004),(000454,'2017-03-06','09:31:56','O operador `brunosartori` inseriu  nos atendimentos do cliente 000001.',000004),(000455,'2017-03-06','09:33:42','O operador `brunosartori` inseriu  nos atendimentos do cliente 000001.',000004),(000456,'2017-03-06','14:15:49','O operador inseriu 3 no lanÃ§amento de compras.',000004),(000457,'2017-03-06','14:15:49','O operador inseriu o suprimento 000019 no lanÃ§amento 22.',000004),(000458,'2017-03-06','14:15:49','O operador inseriu a parcela 17 em contas a pagar',000004),(000459,'2017-03-06','14:16:29','O operador alterou 000003 no lanÃ§amento de compras.',000004),(000460,'2017-03-06','14:17:44','O operador inseriu 4 no lanÃ§amento de compras.',000004),(000461,'2017-03-06','14:17:44','O operador inseriu o suprimento 000019 no lanÃ§amento 23.',000004),(000462,'2017-03-06','14:17:44','O operador inseriu a parcela 18 em contas a pagar',000004),(000463,'2017-03-06','14:18:38','O operador inseriu 5 no lanÃ§amento de compras.',000004),(000464,'2017-03-06','14:23:55','O operador inseriu 6 no lanÃ§amento de compras.',000004),(000465,'2017-03-06','14:23:55','O operador inseriu o suprimento 000019 no lanÃ§amento 24.',000004),(000466,'2017-03-06','14:23:55','O operador inseriu a parcela 19 em contas a pagar',000004),(000467,'2017-03-08','09:53:20','O operador inseriu BRUNO SARTORI no cadastro de sÃ³cios.',000004),(000468,'2017-03-08','10:00:24','O operador alterou TESTE do cadastro de sÃ³cios.',000004),(000469,'2017-03-08','10:11:05','O operador alterou BRUNO SARTORI do cadastro de sÃ³cios.',000004),(000470,'2017-03-08','10:13:39','O operador alterou BRUNO SARTORI do cadastro de sÃ³cios.',000004),(000471,'2017-03-08','10:24:42','O operador inseriu TESTE no cadastro de sÃ³cios.',000004),(000472,'2017-03-08','10:25:37','O operador excluiu 000002 do cadastro de funcionÃ¡rios.',000004),(000473,'2017-03-08','10:26:56','O operador excluiu  do cadastro de funcionÃ¡rios.',000004),(000474,'2017-03-08','10:52:48','O operador estornou a parcela fixa7.',000004),(000475,'2017-03-08','11:16:28','O operador excluiu 000006 do lanÃ§amento de compras.',000004),(000476,'2017-03-08','11:16:31','O operador excluiu 000004 do lanÃ§amento de compras.',000004),(000477,'2017-03-08','11:16:35','O operador excluiu 000003 do lanÃ§amento de compras.',000004),(000478,'2017-03-08','11:16:38','O operador excluiu 000002 do lanÃ§amento de compras.',000004),(000479,'2017-03-08','11:16:59','O operador excluiu 000005 do lanÃ§amento de compras.',000004),(000480,'2017-03-08','11:17:51','O operador inseriu 7 no lanÃ§amento de compras.',000004),(000481,'2017-03-08','11:17:51','O operador inseriu o suprimento 000019 no lanÃ§amento 25.',000004),(000482,'2017-03-08','11:17:51','O operador inseriu o suprimento 000003 no lanÃ§amento 26.',000004),(000483,'2017-03-08','11:17:51','O operador inseriu a parcela 20 em contas a pagar',000004),(000484,'2017-03-08','11:17:51','O operador inseriu a parcela 21 em contas a pagar',000004),(000485,'2017-03-08','11:17:51','O operador inseriu a parcela 22 em contas a pagar',000004),(000486,'2017-03-08','14:10:48','O operador alterou a parcela 2017-03-30 do custo fixo 3.',000004),(000487,'2017-03-08','14:15:43','O operador alterou a parcela 2017-03-30 do custo fixo 8.',000004),(000488,'2017-03-08','14:16:49','O operador alterou a parcela 2017-03-30 do custo fixo 8.',000004),(000489,'2017-03-09','07:34:41','O operador `brunosartori` alterou dados no cadastro do cliente BRUNO SARTORI.',000004),(000490,'2017-03-09','07:35:12','O operador `brunosartori` alterou dados no cadastro do cliente BRUNO SARTORI.',000004),(000491,'2017-03-09','07:38:45','O operador `brunosartori` alterou dados no cadastro do cliente BRUNO SARTORI.',000004),(000492,'2017-03-09','07:48:47','O operador `brunosartori` inseriu TESTE no cadastro de clientes.',000004),(000493,'2017-03-09','07:52:11','O operador `brunosartori` alterou dados no cadastro do cliente TESTE.',000004),(000494,'2017-03-09','08:00:21','O operador `brunosartori` alterou dados no cadastro do cliente VALÃ‰RIA GOMES.',000004),(000495,'2017-03-09','08:16:16','O operador `brunosartori` alterou dados no cadastro do cliente VALÃ‰RIA.',000004),(000496,'2017-03-09','08:47:28','O operador `brunosartori` alterou dados no cadastro do cliente VALÃ‰RIA.',000004),(000497,'2017-03-09','09:18:42','O operador inseriu BRUNO do cadastro de fornecedores.',000004),(000498,'2017-03-09','09:31:29','O operador alterou dados no cadastro do fornecedor `BRUNO SARTORI`.',000004),(000499,'2017-03-09','09:38:10','O operador alterou dados no cadastro do fornecedor `BRUNO SARTORI`.',000004),(000500,'2017-03-09','09:38:38','O operador inseriu VALÃ‰RIA do cadastro de fornecedores.',000004),(000501,'2017-03-09','09:39:09','O operador excluiu 000008 do cadastro de fornecedores.',000004),(000502,'2017-03-09','09:39:25','O operador `brunosartori` alterou dados no cadastro do cliente VALÃ‰RIA.',000004),(000503,'2017-03-09','09:40:25','O operador inseriu VALÃ‰RIA do cadastro de fornecedores.',000004),(000504,'2017-03-09','09:40:47','O operador `brunosartori` alterou dados no cadastro do cliente VALÃ‰RIA.',000004),(000505,'2017-03-09','09:41:11','O operador `brunosartori` alterou dados no cadastro do cliente VALÃ‰RIA.',000004),(000506,'2017-03-09','10:11:20','O operador alterou dados no cadastro do fornecedor `VALÃ‰RIA`.',000004),(000507,'2017-03-09','11:07:50','O operador alterou dados no cadastro do funcionÃ¡rio  `TESTE`.',000004),(000508,'2017-03-09','11:09:40','O operador alterou dados no cadastro do funcionÃ¡rio  `BRUNO SARTORI`.',000004),(000509,'2017-03-09','11:16:05','O operador alterou dados no cadastro do funcionÃ¡rio  `TESTE`.',000004),(000510,'2017-03-09','13:31:50','O operador excluiu 000006 do cadastro de operadores.',000004),(000511,'2017-03-09','14:11:47','O operador inseriu TESTE no cadastro de operadores.',000004),(000512,'2017-03-09','14:14:00','O operador alterou dados no cadastro do operador `LOREM IPSUM`.',000004),(000513,'2017-03-09','14:15:15','O operador excluiu  do cadastro de operadores.',000004),(000514,'2017-03-09','15:21:44','O operador inseriu TESTE no cadastro de despesas.',000004),(000515,'2017-03-09','15:21:56','O operador inseriu TESTE 2 no cadastro de despesas.',000004),(000516,'2017-03-09','15:22:06','O operador excluiu 000045 do cadastro de despesa.',000004),(000517,'2017-03-09','15:53:59','O operador inseriu TESTE no cadastro de Grupo de Clientes.',000004),(000518,'2017-03-09','15:54:04','O operador alterou 000010 - TESTE2 no cadastro de Grupo de Clientes.',000004),(000519,'2017-03-09','15:54:09','O operador excluiu 000010 do cadastro de Grupo de Clientes.',000004),(000520,'2017-03-10','08:03:33','O operador inseriu TESTE no cadastro de grupo de despesas.',000004),(000521,'2017-03-10','08:03:41','O operador alterou 000018 - 2 no cadastro de grupo de despesas.',000004),(000522,'2017-03-10','08:03:46','O operador excluiu `000018` do cadastro de grupo de despesas.',000004),(000523,'2017-03-10','08:36:55','O operador inseriu TESTE no cadastro de tipos de atendimento.',000004),(000524,'2017-03-10','08:37:00','O operador alterou o tipo de atendimento \"000012\" nos campos  do cadastro de tipos de atendimentos.',000004),(000525,'2017-03-10','08:37:04','O operador excluiu 000012 do cadastro de tipos de atendimentos.',000004),(000526,'2017-03-10','08:59:21','O operador `brunosartori` inseriu TESTE no cadastro de Bairros Atendidos.',000004),(000527,'2017-03-10','08:59:28','O operador `brunosartori` alterou dados no cadastro do bairro atendido `TESTE`.',000004),(000528,'2017-03-10','08:59:32','O operador `brunosartori` excluiu o bairro atendido `000010`.',000004),(000529,'2017-03-10','09:38:35','O operador inseriu TESTE no cadastro de Cidades Atendidas.',000004),(000530,'2017-03-10','09:40:30','O operador alterou dados no cadastro de cidades atendidas `TESTAND`.',000004),(000531,'2017-03-10','09:40:37','O operador alterou dados no cadastro de cidades atendidas `TESTANDO`.',000004),(000532,'2017-03-10','09:40:43','O operador excluiu dados no cadastro de cidades atendidas `000006`.',000004),(000533,'2017-03-10','10:00:11','O operador inseriu 9 - TESTE do cadastro de serviÃ§os.',000004),(000534,'2017-03-10','10:00:19','O operador alterou 000009 - TESTETESTE do cadastro de serviÃ§os.',000004),(000535,'2017-03-10','10:00:23','O operador excluiu 000009 do cadastro de serviÃ§os.',000004),(000536,'2017-03-10','10:11:54','O operador inseriu TESTE no cadastro de Suprimentos.',000004),(000537,'2017-03-10','10:12:34','O operador alterou 4344334 no cadastro de Suprimentos.',000004),(000538,'2017-03-10','10:12:38','O operador excluiu 000028 no cadastro de Suprimentos.',000004),(000539,'2017-03-10','12:57:37','O operador inseriu 4 no cadastro de contas bancÃ¡rias.',000004),(000540,'2017-03-10','12:58:32','O operador alterou 000004 no cadastro de contas bancÃ¡rias.',000004),(000541,'2017-03-10','12:58:50','O operador alterou 000004 no cadastro de contas bancÃ¡rias.',000004),(000542,'2017-03-10','12:59:24','O operador alterou 000004 no cadastro de contas bancÃ¡rias.',000004),(000543,'2017-03-10','13:01:40','O operador excluiu 000004 no cadastro de contas bancÃ¡rias.',000004),(000544,'2017-03-10','13:02:32','O operador inseriu 5 no cadastro de contas bancÃ¡rias.',000004),(000545,'2017-03-10','13:49:44','O operador `brunosartori` inseriu TESTE do cadastro de bandeiras de cartÃ£o.',000004),(000546,'2017-03-10','13:49:50','O operador `brunosartori` alterou TESTE do cadastro de bandeiras de cartÃ£o.',000004),(000547,'2017-03-10','13:49:54','O operador `brunosartori` excluiu  do cadastro de bandeiras de cartÃ£o.',000004),(000548,'2017-03-10','14:45:56','O operador `brunosartori` inseriu 000004 nos atendimentos do cliente 000003.',000004),(000549,'2017-03-10','14:46:27','O operador inseriu  no serviÃ§o avulso do protocolo 20170310144552000004.',000004),(000550,'2017-03-13','07:31:40','O operador inseriu RERFFDFDFDF do cadastro de mÃ¡quinas de cartÃ£o.',000004),(000551,'2017-03-13','07:31:50','O operador alterou SSSSSSSSSSSSSSSS do cadastro de mÃ¡quinas de cartÃ£o.',000004),(000552,'2017-03-13','07:31:56','O operador excluiu  do cadastro de mÃ¡quinas de cartÃ£o.',000004),(000553,'2017-03-13','07:32:02','O operador `brunosartori` inseriu AAAAAAAAAAAA do cadastro de bandeiras de cartÃ£o.',000004),(000554,'2017-03-13','07:32:07','O operador `brunosartori` alterou VVVVVVVVVV do cadastro de bandeiras de cartÃ£o.',000004),(000555,'2017-03-13','07:32:11','O operador `brunosartori` excluiu  do cadastro de bandeiras de cartÃ£o.',000004),(000556,'2017-03-13','10:44:03','O operador inseriu TESTE no cadastro de cartÃµes.',000004),(000557,'2017-03-13','10:44:12','O operador alterou TESTE2 no cadastro de cartÃµes.',000004),(000558,'2017-03-13','10:44:18','O operador excluiu 000008 no cadastro de cartÃµes.',000004),(000559,'2017-03-13','10:57:52','O operador alterou 000002 no cadastro de contas bancÃ¡rias.',000004),(000560,'2017-03-13','11:00:24','O operador alterou 000002 no cadastro de contas bancÃ¡rias.',000004),(000561,'2017-03-13','11:01:43','O operador alterou 000002 no cadastro de contas bancÃ¡rias.',000004),(000562,'2017-03-13','14:07:28','O operador inseriu 2 nas configuraÃ§Ãµes de boletos.',000004),(000563,'2017-03-13','14:10:09','O operador alterou 000004 nas configuraÃ§Ãµes de boletos.',000004),(000564,'2017-03-13','14:11:19','O operador excluiu  nas configuraÃ§Ãµes de boletos.',000004),(000565,'2017-03-13','14:11:37','O operador alterou 000003 nas configuraÃ§Ãµes de boletos.',000004),(000566,'2017-03-13','14:13:11','O operador alterou 000003 nas configuraÃ§Ãµes de boletos.',000004),(000567,'2017-03-13','19:54:01','O operador inseriu 8 no lanÃ§amento de compras.',000004),(000568,'2017-03-13','19:54:02','O operador inseriu o suprimento 000003 no lanÃ§amento 27.',000004),(000569,'2017-03-13','19:54:02','O operador inseriu o suprimento 000005 no lanÃ§amento 28.',000004),(000570,'2017-03-13','19:54:03','O operador inseriu a parcela 23 em contas a pagar',000004),(000571,'2017-03-13','19:54:03','O operador inseriu a parcela 24 em contas a pagar',000004),(000572,'2017-03-13','19:54:04','O operador inseriu a parcela 25 em contas a pagar',000004),(000573,'2017-03-13','19:54:04','O operador inseriu a parcela 26 em contas a pagar',000004),(000574,'2017-03-13','19:54:04','O operador inseriu a parcela 27 em contas a pagar',000004),(000575,'2017-03-13','19:55:01','O operador liquidou o lanÃ§amento 23 de contas Ã  pagar .',000004),(000576,'2017-03-13','19:55:38','O operador `brunosartori` inseriu 000004 nos atendimentos do cliente 000001.',000004),(000577,'2017-03-16','21:35:22','O operador inseriu TESTE no cadastro de Grupo de Clientes.',000004),(000578,'2017-03-17','15:51:19','O operador inseriu FEDSDSD no cadastro de Grupo de Clientes.',000004),(000579,'2017-03-17','15:51:27','O operador inseriu TERERERERERER no cadastro de Grupo de Clientes.',000004),(000580,'2017-03-18','08:46:08','O operador inseriu 10 - LKDSKLDKSLDK do cadastro de serviÃ§os.',000004),(000581,'2017-03-21','21:03:32','O operador inseriu 11 - TESTE do cadastro de serviÃ§os.',000004),(000582,'2017-03-24','10:57:05','O operador inseriu  no serviÃ§o avulso do protocolo 20170313195535000004.',000004),(000583,'2017-03-24','10:57:20','O operador inseriu  no serviÃ§o avulso do protocolo 20170313195535000004.',000004),(000584,'2017-03-28','09:52:46','O operador inseriu TESTE no cadastro de Grupo de Clientes.',000004),(000585,'2017-03-28','09:53:02','O operador inseriu TESTE no cadastro de Grupo de Clientes.',000004),(000586,'2017-04-12','08:02:02','O operador `brunosartori` inseriu 2 nos recebimentos do protocolo de atendimento 20170313195535000004.',000004),(000587,'2017-04-20','15:12:09','O operador `brunosartori` inseriu  nos recebimentos do protocolo de atendimento .',000004),(000588,'2017-04-20','15:12:09','O operador `brunosartori` inseriu  nos recebimentos do protocolo de atendimento .',000004);
/*!40000 ALTER TABLE `auditoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `boleto_auto_geracao`
--

DROP TABLE IF EXISTS `boleto_auto_geracao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `boleto_auto_geracao` (
  `bolger_id` int(6) unsigned zerofill NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`bolger_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `boleto_auto_geracao`
--

LOCK TABLES `boleto_auto_geracao` WRITE;
/*!40000 ALTER TABLE `boleto_auto_geracao` DISABLE KEYS */;
/*!40000 ALTER TABLE `boleto_auto_geracao` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cadastro_bairro_atendido`
--

DROP TABLE IF EXISTS `cadastro_bairro_atendido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cadastro_bairro_atendido` (
  `bair_id` int(6) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `bair_nome` varchar(50) NOT NULL,
  `bair_cod_cidade` int(6) unsigned zerofill NOT NULL,
  PRIMARY KEY (`bair_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cadastro_bairro_atendido`
--

LOCK TABLES `cadastro_bairro_atendido` WRITE;
/*!40000 ALTER TABLE `cadastro_bairro_atendido` DISABLE KEYS */;
INSERT INTO `cadastro_bairro_atendido` VALUES (000001,'CENTRO',000001),(000002,'CENTRO',000002),(000003,'TERMAS DE IBIRÃ',000001),(000004,'SÃƒO BENEDITO',000001),(000005,'SÃƒO MIGUEL',000002),(000006,'JARDIM OLÃMPIO',000001),(000007,'SÃƒO JOÃƒO OLÃMPIO BATISTA DA SILVA',000003);
/*!40000 ALTER TABLE `cadastro_bairro_atendido` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cadastro_bandeira_cartao`
--

DROP TABLE IF EXISTS `cadastro_bandeira_cartao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cadastro_bandeira_cartao` (
  `bancart_id` int(6) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `bancart_nome` varchar(50) NOT NULL,
  PRIMARY KEY (`bancart_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cadastro_bandeira_cartao`
--

LOCK TABLES `cadastro_bandeira_cartao` WRITE;
/*!40000 ALTER TABLE `cadastro_bandeira_cartao` DISABLE KEYS */;
INSERT INTO `cadastro_bandeira_cartao` VALUES (000001,'AMERICAN EXPRESS'),(000002,'MASTER CARD'),(000003,'HIPER CARD'),(000004,'VISA'),(000005,'DINNER\'S CLUB');
/*!40000 ALTER TABLE `cadastro_bandeira_cartao` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cadastro_cartao`
--

DROP TABLE IF EXISTS `cadastro_cartao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cadastro_cartao` (
  `cart_id` int(6) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `cart_nome` varchar(40) NOT NULL,
  `cart_tipo` int(1) NOT NULL,
  `cart_cod_maquina` int(6) unsigned zerofill NOT NULL,
  `cart_cod_bandeira` int(6) unsigned zerofill NOT NULL,
  PRIMARY KEY (`cart_id`),
  KEY `cart_cod_maquina` (`cart_cod_maquina`),
  KEY `cart_cod_bandeira` (`cart_cod_bandeira`),
  CONSTRAINT `cadastro_cartao_ibfk_1` FOREIGN KEY (`cart_cod_maquina`) REFERENCES `cadastro_maquina_cartao` (`maqcart_id`),
  CONSTRAINT `cadastro_cartao_ibfk_2` FOREIGN KEY (`cart_cod_bandeira`) REFERENCES `cadastro_bandeira_cartao` (`bancart_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cadastro_cartao`
--

LOCK TABLES `cadastro_cartao` WRITE;
/*!40000 ALTER TABLE `cadastro_cartao` DISABLE KEYS */;
INSERT INTO `cadastro_cartao` VALUES (000001,'MAESTRO - DEBITO',1,000001,000003),(000002,'MAESTRO - CREDITO',2,000001,000004),(000006,'VISA ELECTRON - DÃ‰BITO',1,000002,000005);
/*!40000 ALTER TABLE `cadastro_cartao` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cadastro_cheque`
--

DROP TABLE IF EXISTS `cadastro_cheque`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cadastro_cheque` (
  `che_id` int(6) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `che_numero` int(40) NOT NULL,
  `che_agencia` int(30) NOT NULL,
  `che_conta` int(30) NOT NULL,
  `che_emitente` varchar(60) NOT NULL,
  `che_cod_banco` int(6) unsigned zerofill NOT NULL,
  `che_tipo` int(1) NOT NULL,
  PRIMARY KEY (`che_id`),
  KEY `che_cod_banco` (`che_cod_banco`),
  CONSTRAINT `cadastro_cheque_ibfk_1` FOREIGN KEY (`che_cod_banco`) REFERENCES `oton_portal`.`oton_cadastro_banco` (`oton_ban_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cadastro_cheque`
--

LOCK TABLES `cadastro_cheque` WRITE;
/*!40000 ALTER TABLE `cadastro_cheque` DISABLE KEYS */;
/*!40000 ALTER TABLE `cadastro_cheque` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cadastro_cidade_atendida`
--

DROP TABLE IF EXISTS `cadastro_cidade_atendida`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cadastro_cidade_atendida` (
  `cid_id` int(6) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `cid_nome` varchar(50) NOT NULL,
  `cid_estado` char(2) NOT NULL,
  PRIMARY KEY (`cid_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cadastro_cidade_atendida`
--

LOCK TABLES `cadastro_cidade_atendida` WRITE;
/*!40000 ALTER TABLE `cadastro_cidade_atendida` DISABLE KEYS */;
INSERT INTO `cadastro_cidade_atendida` VALUES (000001,'IBIRÃ','SP'),(000002,'UCHOA','SP'),(000003,'SÃƒO JOSÃ‰ DO RIO PRETO','SP');
/*!40000 ALTER TABLE `cadastro_cidade_atendida` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cadastro_cliente`
--

DROP TABLE IF EXISTS `cadastro_cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cadastro_cliente` (
  `cli_id` int(6) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `cli_endereco_cobranca` varchar(50) DEFAULT NULL,
  `cli_cidade_cobranca` varchar(50) DEFAULT NULL,
  `cli_bairro_cobranca` varchar(50) DEFAULT NULL,
  `cli_estado_cobranca` char(2) DEFAULT NULL,
  `cli_cep_cobranca` varchar(10) DEFAULT NULL,
  `cli_telefone1_cobranca` varchar(15) DEFAULT NULL,
  `cli_telefone2_cobranca` varchar(15) DEFAULT NULL,
  `cli_ponto_referencia` varchar(50) DEFAULT NULL,
  `cli_tipo_pessoa` char(8) DEFAULT NULL,
  `cli_dia_pagamento` int(2) DEFAULT NULL,
  `cli_data_nascimento` date DEFAULT NULL,
  `cli_obs` text,
  `cli_status` tinyint(1) DEFAULT NULL,
  `cli_tipo_cliente` tinyint(1) DEFAULT NULL,
  `cli_tipo_pagamento` tinyint(1) DEFAULT NULL,
  `cli_cod_honorario` int(6) unsigned zerofill DEFAULT NULL,
  `cli_cod_grupo_cliente` int(6) unsigned zerofill DEFAULT NULL,
  `cli_cod_pessoa` int(6) unsigned zerofill NOT NULL,
  `cli_data_cadastro` date DEFAULT NULL,
  `cli_origem_cadastro` varchar(30) DEFAULT NULL,
  `cli_cod_cidade` int(6) unsigned zerofill NOT NULL,
  `cli_cod_bairro` int(6) unsigned zerofill NOT NULL,
  `cli_desconto` float(15,2) DEFAULT NULL,
  `cli_email_financeiro` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`cli_id`),
  KEY `cli_cod_honorario` (`cli_cod_honorario`),
  KEY `cli_cod_grupo_cliente` (`cli_cod_grupo_cliente`),
  KEY `cli_cod_pessoa` (`cli_cod_pessoa`),
  KEY `cli_cod_cidade` (`cli_cod_cidade`),
  KEY `cli_cod_bairro` (`cli_cod_bairro`),
  CONSTRAINT `cadastro_cliente_ibfk_1` FOREIGN KEY (`cli_cod_honorario`) REFERENCES `cadastro_honorario` (`hon_id`),
  CONSTRAINT `cadastro_cliente_ibfk_2` FOREIGN KEY (`cli_cod_grupo_cliente`) REFERENCES `cadastro_grupo_cliente` (`grupocli_id`),
  CONSTRAINT `cadastro_cliente_ibfk_3` FOREIGN KEY (`cli_cod_pessoa`) REFERENCES `cadastro_pessoa` (`pes_id`),
  CONSTRAINT `cadastro_cliente_ibfk_4` FOREIGN KEY (`cli_cod_cidade`) REFERENCES `cadastro_cidade_atendida` (`cid_id`),
  CONSTRAINT `cadastro_cliente_ibfk_5` FOREIGN KEY (`cli_cod_bairro`) REFERENCES `cadastro_bairro_atendido` (`bair_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cadastro_cliente`
--

LOCK TABLES `cadastro_cliente` WRITE;
/*!40000 ALTER TABLE `cadastro_cliente` DISABLE KEYS */;
INSERT INTO `cadastro_cliente` VALUES (000001,'SP','IBIRÃ','TERMAS DE IBIRÃ','SP','15.860-000',NULL,NULL,'PROXIMO','FISICA',NULL,'1995-12-08','lorem ipsum dolor sit amet. consectetur adipiscing elit.',1,NULL,NULL,000002,000001,000066,'2017-02-21','SISTEMA',000001,000001,NULL,'financeiro@brunosartori.com'),(000003,'RUA DAS ORQUÃDEAS, 1954','UCHOA','CENTRO','SP','15.840-000',NULL,NULL,'PRÃ“XIMO AO TESTE','FISICA',NULL,'2020-02-22','testetestando',1,NULL,NULL,000001,000003,000131,'2017-03-09','SISTEMA',000002,000002,NULL,'teste@teste.com');
/*!40000 ALTER TABLE `cadastro_cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cadastro_departamento`
--

DROP TABLE IF EXISTS `cadastro_departamento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cadastro_departamento` (
  `dep_id` int(6) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `dep_nome` varchar(50) NOT NULL,
  PRIMARY KEY (`dep_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cadastro_departamento`
--

LOCK TABLES `cadastro_departamento` WRITE;
/*!40000 ALTER TABLE `cadastro_departamento` DISABLE KEYS */;
INSERT INTO `cadastro_departamento` VALUES (000001,'VENDAS'),(000002,'ADMINISTRATIVO'),(000003,'FINANCEIRO/CONTABIL'),(000004,'DESENVOLVIMENTO'),(000008,'ALMOXERIFADO'),(000010,'COMPRAS'),(000011,'RECEPÃ‡ÃƒO'),(000014,'FSDSD');
/*!40000 ALTER TABLE `cadastro_departamento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cadastro_despesa`
--

DROP TABLE IF EXISTS `cadastro_despesa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cadastro_despesa` (
  `desp_id` int(6) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `desp_nome` varchar(50) NOT NULL,
  `desp_cod_grupo_despesa` int(6) unsigned zerofill DEFAULT NULL,
  PRIMARY KEY (`desp_id`),
  KEY `desp_cod_grupo_despesa` (`desp_cod_grupo_despesa`),
  CONSTRAINT `cadastro_despesa_ibfk_1` FOREIGN KEY (`desp_cod_grupo_despesa`) REFERENCES `cadastro_grupo_despesa` (`grupodesp_id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cadastro_despesa`
--

LOCK TABLES `cadastro_despesa` WRITE;
/*!40000 ALTER TABLE `cadastro_despesa` DISABLE KEYS */;
INSERT INTO `cadastro_despesa` VALUES (000001,'COMPRA NOTA/PEDIDO',000001),(000002,'ESTOQUE',000001),(000003,'INFRAESTRUTURA',000001),(000004,'ABASTECIMENTO ESCRITORIO',000001),(000005,'ALTERAÃ‡ÃƒO DE BOLETOS',000002),(000006,'BAIXA DE BOLETOS',000002),(000007,'BAIXA POR DECURSO DE PRAZO DE BOLETOS',000002),(000008,'TITULO PAGO VENCIDO DE BOLETOS',000002),(000009,'REMESSA DE BOLETOS',000002),(000010,'REGISTRO DE BOLETOS',000002),(000011,'SALÃRIO',000004),(000012,'1/3 FÃ‰RIAS',000004),(000013,'13Âº SALÃRIOS',000004),(000014,'RODOVIARIO',000003),(000015,'AÃ‰REO',000003),(000016,'CORREIOS',000003),(000017,'MOTO-TAXI',000003),(000019,'PRESTAÃ‡ÃƒO DE SERVIÃ‡O DE TERCEIROS',000009),(000020,'DAS',000008),(000021,'FGTS',000008),(000022,'INSS',000008),(000023,'JURÃDICA',000007),(000024,'ASSOCIAÃ‡ÃƒO',000007),(000025,'ELETRICISTA',000006),(000026,'IPVA',000006),(000027,'RENOVAÃ‡ÃƒO DOCUMENTO VEICULO/EMISSÃƒO',000006),(000028,'MECANICO',000006),(000029,'LAVAGEM',000006),(000030,'TELEFONE FIXO',000005),(000031,'TELEFONE CELULAR',000005),(000032,'INTERNET',000005),(000033,'ENERGIA ELÃ‰TRICA',000010),(000034,'AGUA',000010),(000035,'CONTABIL',000007),(000036,'BANCÃRIO',000011),(000037,'GRAFICA',000012),(000038,'CARRO DE SOM',000012),(000039,' ALUGUEL ERB',000013),(000040,'ALUGUEL IMÃ“VEL',000013),(000041,'ASSINATURA MENSAL',000014),(000042,'REGISTROS',000014);
/*!40000 ALTER TABLE `cadastro_despesa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cadastro_empresa`
--

DROP TABLE IF EXISTS `cadastro_empresa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cadastro_empresa` (
  `emp_id` int(6) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `emp_cnpj` varchar(18) NOT NULL,
  `emp_razao_social` varchar(50) NOT NULL,
  `emp_nome_fantasia` varchar(50) NOT NULL,
  `emp_ie` varchar(15) NOT NULL,
  `emp_endereco` varchar(50) DEFAULT NULL,
  `emp_cidade` varchar(50) DEFAULT NULL,
  `emp_bairro` varchar(50) DEFAULT NULL,
  `emp_estado` char(2) DEFAULT NULL,
  `emp_cep` varchar(10) DEFAULT NULL,
  `emp_email1` varchar(50) NOT NULL,
  `emp_email2` varchar(50) DEFAULT NULL,
  `emp_telefone1` varchar(15) NOT NULL,
  `emp_telefone2` varchar(15) DEFAULT NULL,
  `emp_site` varchar(50) DEFAULT NULL,
  `emp_nome_logo` varchar(100) DEFAULT NULL,
  `emp_arquivo_logo` varchar(200) DEFAULT NULL,
  `emp_extensao_logo` varchar(20) DEFAULT NULL,
  `emp_tamanho_logo` int(11) NOT NULL,
  PRIMARY KEY (`emp_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cadastro_empresa`
--

LOCK TABLES `cadastro_empresa` WRITE;
/*!40000 ALTER TABLE `cadastro_empresa` DISABLE KEYS */;
INSERT INTO `cadastro_empresa` VALUES (000001,'15.160.333/0001-55','JDNET TELECOM LTDA','JDNET','342.010.150.114','RUA CORONEL JONAS GONÃ‡ALVES GONZAGA, 1353-A','IBIRA','CENTRO','SP','15860-000','atendimento@jdnet.com.br','financeiro@jdnet.com.br','17 35512121','1735511864','www.jdnet.com.br','logo.png','logo.png','PNG',46807);
/*!40000 ALTER TABLE `cadastro_empresa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cadastro_emprestimo`
--

DROP TABLE IF EXISTS `cadastro_emprestimo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cadastro_emprestimo` (
  `emp_id` int(6) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `emp_nome` varchar(50) DEFAULT NULL,
  `emp_data` date DEFAULT NULL,
  `emp_valor` float(15,2) NOT NULL,
  `emp_obs` text,
  PRIMARY KEY (`emp_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cadastro_emprestimo`
--

LOCK TABLES `cadastro_emprestimo` WRITE;
/*!40000 ALTER TABLE `cadastro_emprestimo` DISABLE KEYS */;
INSERT INTO `cadastro_emprestimo` VALUES (000002,'EMPRESTIMO 1','2016-12-08',860.00,'lorem ipsum');
/*!40000 ALTER TABLE `cadastro_emprestimo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cadastro_fornecedor`
--

DROP TABLE IF EXISTS `cadastro_fornecedor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cadastro_fornecedor` (
  `for_id` int(6) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `for_obs` text,
  `for_tipo_pessoa` varchar(10) NOT NULL,
  `for_cod_pessoa` int(6) unsigned zerofill NOT NULL,
  `for_data_cadastro` date DEFAULT NULL,
  `for_nome_fantasia` varchar(100) NOT NULL,
  PRIMARY KEY (`for_id`),
  KEY `for_cod_pessoa` (`for_cod_pessoa`),
  CONSTRAINT `cadastro_fornecedor_ibfk_1` FOREIGN KEY (`for_cod_pessoa`) REFERENCES `cadastro_pessoa` (`pes_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cadastro_fornecedor`
--

LOCK TABLES `cadastro_fornecedor` WRITE;
/*!40000 ALTER TABLE `cadastro_fornecedor` DISABLE KEYS */;
INSERT INTO `cadastro_fornecedor` VALUES (000001,'lorme ipsum dolor sit amet.vcvdsdsd','JURIDICA',000017,'2016-11-14','PAPELARIA KALUNGA'),(000002,'dsdsdsd','FISICA',000001,'2016-12-20','ESCRITÃ“RIO DO EMPREENDEDOR LALALALALLA'),(000003,'','JURIDICA',000105,'2017-01-16','FACEBOOK'),(000007,'testeteste','FISICA',000066,'2017-03-09','GOOGLE INC'),(000009,'teste','FISICA',000131,'2017-03-09','LALALA');
/*!40000 ALTER TABLE `cadastro_fornecedor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cadastro_funcionario`
--

DROP TABLE IF EXISTS `cadastro_funcionario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cadastro_funcionario` (
  `fun_id` int(6) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `fun_data_admissao` varchar(20) DEFAULT NULL,
  `fun_carteira_trabalho_numero` varchar(10) NOT NULL,
  `fun_cargo` varchar(50) DEFAULT NULL,
  `fun_pis` varchar(20) DEFAULT NULL,
  `fun_agencia` varchar(10) DEFAULT NULL,
  `fun_conta` varchar(20) DEFAULT NULL,
  `fun_obs` text,
  `fun_cod_pessoa` int(6) unsigned zerofill NOT NULL,
  `fun_data_cadastro` date DEFAULT NULL,
  `fun_cod_banco` int(6) unsigned zerofill NOT NULL,
  `fun_carteira_trabalho_serie` varchar(10) NOT NULL,
  `fun_data_nascimento` date DEFAULT NULL,
  PRIMARY KEY (`fun_id`),
  KEY `fun_cod_pessoa` (`fun_cod_pessoa`),
  KEY `f` (`fun_cod_banco`),
  CONSTRAINT `cadastro_funcionario_ibfk_1` FOREIGN KEY (`fun_cod_pessoa`) REFERENCES `cadastro_pessoa` (`pes_id`),
  CONSTRAINT `f` FOREIGN KEY (`fun_cod_banco`) REFERENCES `oton_portal`.`oton_cadastro_banco` (`oton_ban_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cadastro_funcionario`
--

LOCK TABLES `cadastro_funcionario` WRITE;
/*!40000 ALTER TABLE `cadastro_funcionario` DISABLE KEYS */;
INSERT INTO `cadastro_funcionario` VALUES (000003,'1995-12-08','4930583492','RECEPCIONISTA','48359449204','45841','45656-8','lorem ipsum fdfdf',000052,'2016-12-20',000055,'',NULL),(000004,'2017-12-08','45456565','LORE MIPSU','15565626','','','ewewewe',000066,'2017-02-06',000001,'56565','2016-04-08'),(000005,'2015-12-08','teste','TESTE','teste','teste','teste','teeeestetesteLorem ipsum dolor sit amet. Consectetur adipiscing elit.',000119,'2017-02-07',000006,'teste','1996-12-08');
/*!40000 ALTER TABLE `cadastro_funcionario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cadastro_grupo_cliente`
--

DROP TABLE IF EXISTS `cadastro_grupo_cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cadastro_grupo_cliente` (
  `grupocli_id` int(6) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `grupocli_nome` varchar(50) NOT NULL,
  PRIMARY KEY (`grupocli_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cadastro_grupo_cliente`
--

LOCK TABLES `cadastro_grupo_cliente` WRITE;
/*!40000 ALTER TABLE `cadastro_grupo_cliente` DISABLE KEYS */;
INSERT INTO `cadastro_grupo_cliente` VALUES (000001,'PEQUENAS EMPRESAS'),(000003,'MÃ‰DIAS EMPRESAS'),(000004,'EMPRESAS RURAIS'),(000005,'EMPRESAS SETOR INDUSTRIAL'),(000011,'TESTE'),(000012,'FEDSDSD'),(000013,'TERERERERERER'),(000014,'TESTE'),(000015,'TESTE');
/*!40000 ALTER TABLE `cadastro_grupo_cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cadastro_grupo_despesa`
--

DROP TABLE IF EXISTS `cadastro_grupo_despesa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cadastro_grupo_despesa` (
  `grupodesp_id` int(6) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `grupodesp_nome` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`grupodesp_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cadastro_grupo_despesa`
--

LOCK TABLES `cadastro_grupo_despesa` WRITE;
/*!40000 ALTER TABLE `cadastro_grupo_despesa` DISABLE KEYS */;
INSERT INTO `cadastro_grupo_despesa` VALUES (000001,'COMPRAS'),(000002,'COBRANÃ‡AS BANCARIAS'),(000003,'FRETES'),(000004,'FOLHA DE PAGAMENTO'),(000005,'TELEFONIA & INTERNET'),(000006,'DESPESAS COM VEÃCULOS'),(000007,'ASSESSORIAS'),(000008,'IMPOSTOS'),(000009,'PRESTAÃ‡ÃƒO DE SERVIÃ‡OS DE TERCEIROS'),(000010,'ENERGIA ELÃ‰TRICA E AGUA'),(000011,'FINANCIAMENTOS'),(000012,'PUBLICIDADE E PROPAGANDA'),(000013,'ALUGUEL'),(000014,'SOFTWARES & REGISTROS');
/*!40000 ALTER TABLE `cadastro_grupo_despesa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cadastro_grupo_receita`
--

DROP TABLE IF EXISTS `cadastro_grupo_receita`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cadastro_grupo_receita` (
  `gruporece_id` int(6) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `gruporece_nome` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`gruporece_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cadastro_grupo_receita`
--

LOCK TABLES `cadastro_grupo_receita` WRITE;
/*!40000 ALTER TABLE `cadastro_grupo_receita` DISABLE KEYS */;
/*!40000 ALTER TABLE `cadastro_grupo_receita` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cadastro_honorario`
--

DROP TABLE IF EXISTS `cadastro_honorario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cadastro_honorario` (
  `hon_id` int(6) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `hon_nome` varchar(40) DEFAULT NULL,
  `hon_valor` float(15,2) NOT NULL,
  `hon_obs` text,
  `hon_periodo` int(2) NOT NULL,
  PRIMARY KEY (`hon_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cadastro_honorario`
--

LOCK TABLES `cadastro_honorario` WRITE;
/*!40000 ALTER TABLE `cadastro_honorario` DISABLE KEYS */;
INSERT INTO `cadastro_honorario` VALUES (000001,'HONORÃRIO BRONZE-X',1.20,'lakslakslkas',3),(000002,'HONORÃRIO PRATA',2.00,'',2),(000003,'HONORÃRIO OURO',3.00,'Nulla quis lorem ut libero malesuada feugiat. Vivamus suscipit tortor eget felis porttitor volutpat. Cras ultricies ligula sed magna dictum porta. Vivamus suscipit tortor eget felis porttitor volutpat. Cras ultricies ligula sed magna dictum porta. Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Sed porttitor lectus nibh.\r\n\r\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in ipsum id orci porta dapibus. Cras ultricies ligula sed magna dictum porta. Cras ultricies ligula sed magna dictum porta. Nulla quis lorem ut libero malesuada feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Nulla porttitor accumsan tincidunt. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Sed porttitor lectus nibh. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.',1),(000004,'HONORÃRIO PLATINA',400.00,'',0),(000006,'HONORÃRIO DIAMANTE',500.00,'lorem ipsum',0),(000009,'HONORÃRIO ESMERALDA',999.90,'lreom ipsum',0);
/*!40000 ALTER TABLE `cadastro_honorario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cadastro_maquina_cartao`
--

DROP TABLE IF EXISTS `cadastro_maquina_cartao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cadastro_maquina_cartao` (
  `maqcart_id` int(6) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `maqcart_obs` text,
  `maqcart_nome` varchar(50) NOT NULL,
  `maqcart_telefone1` varchar(16) NOT NULL,
  `maqcart_telefone2` varchar(16) DEFAULT NULL,
  PRIMARY KEY (`maqcart_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cadastro_maquina_cartao`
--

LOCK TABLES `cadastro_maquina_cartao` WRITE;
/*!40000 ALTER TABLE `cadastro_maquina_cartao` DISABLE KEYS */;
INSERT INTO `cadastro_maquina_cartao` VALUES (000001,'lorem ipsum','GETNET','(17) 98154-8437','(17) 98809-7542'),(000002,'lorem ipsum dolor sit amet.','CIELO','(17) 98156-8956','(17) 98809-7542');
/*!40000 ALTER TABLE `cadastro_maquina_cartao` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cadastro_operador`
--

DROP TABLE IF EXISTS `cadastro_operador`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cadastro_operador` (
  `ope_id` int(6) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `ope_usuario` varchar(30) NOT NULL,
  `ope_senha` varchar(40) NOT NULL,
  `ope_obs` text,
  `ope_cod_pessoa` int(6) unsigned zerofill DEFAULT NULL,
  `ope_data_cadastro` date DEFAULT NULL,
  PRIMARY KEY (`ope_id`),
  KEY `ope_cod_pessoa` (`ope_cod_pessoa`),
  CONSTRAINT `cadastro_operador_ibfk_1` FOREIGN KEY (`ope_cod_pessoa`) REFERENCES `cadastro_pessoa` (`pes_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cadastro_operador`
--

LOCK TABLES `cadastro_operador` WRITE;
/*!40000 ALTER TABLE `cadastro_operador` DISABLE KEYS */;
INSERT INTO `cadastro_operador` VALUES (000001,'empreendedorismo','5c99569d70f6dabd2154ba6a71886937b18cc408','lorem ipsum dolor sit amet. Consectetur adipiscing elit.',000001,'2016-10-26'),(000003,'jesusrodrigo@jdnet.com.br','fdfb484c8969c1f5e09a1b85d3fb14e2154950c4','',000053,'2016-12-21'),(000004,'brunosartori','c46d699c04055f0845ca3890091c7c4377ca4d89','lorem ipsum dolor sit amet.',000054,'2016-12-21'),(000005,'lucasumbigo','7110eda4d09e062aa5e4a390b0a572ac0d2c0220','lorem ipsum',000103,'2017-01-02');
/*!40000 ALTER TABLE `cadastro_operador` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cadastro_pessoa`
--

DROP TABLE IF EXISTS `cadastro_pessoa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cadastro_pessoa` (
  `pes_id` int(6) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `pes_nome` varchar(50) NOT NULL,
  `pes_cnpj_cpf` varchar(18) DEFAULT NULL,
  `pes_ie_rg` varchar(15) DEFAULT NULL,
  `pes_endereco` varchar(50) DEFAULT NULL,
  `pes_cidade` varchar(50) DEFAULT NULL,
  `pes_bairro` varchar(50) DEFAULT NULL,
  `pes_estado` char(2) DEFAULT NULL,
  `pes_cep` varchar(15) DEFAULT NULL,
  `pes_email` varchar(50) DEFAULT NULL,
  `pes_telefone1` varchar(15) DEFAULT NULL,
  `pes_telefone2` varchar(15) DEFAULT NULL,
  `pes_data_cadastro_pessoa` date DEFAULT NULL,
  PRIMARY KEY (`pes_id`)
) ENGINE=InnoDB AUTO_INCREMENT=134 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cadastro_pessoa`
--

LOCK TABLES `cadastro_pessoa` WRITE;
/*!40000 ALTER TABLE `cadastro_pessoa` DISABLE KEYS */;
INSERT INTO `cadastro_pessoa` VALUES (000001,'EMPREENDEDORISMO & EMPREENDEDORISMO LOREM IPSUM DO','538.279.105-87','450677072','RUA SAO CARLOS, 50 DO CABO VERDE DA LACUNA AZUL','IBIRÃ','TERMAS DE IBIRÃ','SP','15.860-000','brunosartori.webmaster@gmail.com','(17) 98154-8437','(17) 98809-7542','2016-10-26'),(000002,'LOREMIPSUM','257.252.162-84','483.984.934.893','LOREM IPSUM DOLOR SIT AMET','IBIRÃ','CONSECTETUR ADIPISCING ELIT','TO','15.860-000','lorem@ipsum.com','(17) 98154-8437','(17) 98809-7542','2016-10-26'),(000003,'LOREM IPSUM DOLOR SIT AMET','209.478.243-32','45.067.707-2','RUA LALA,50','IBIRÃ¡','TERMAS DE IBIRÃ¡','SP','15.860-000','lorem@ipsum.com','(17) 98154-8437','(17) 98809-7542','2016-10-27'),(000004,'LOREM IPSUM 2','631.704.084-29','45.067.707-2','RUA LALAL, 50','IBIRÃ¡','TERMAS DE IBIRÃ¡','SP','15.860-000','lorem@ipsum.com','(17) 98154-8437','(17) 99709-7545','2016-10-27'),(000005,'LOREM IPSUM 3','474.653.847-61','525656356+65+5','KSJSKSJDSKJDKSJD','ASOALS','DSKDOSDK','SP','65.863-565','odsodk@doksdoks.com','(49) 02930-2392','(04) 90239-2093','2016-10-27'),(000006,'TATIANE MURGI','745.299.015-30','5423856352','RUA LALALLALA, 120','IBIRÃ','TERMAS DE IBIRÃ','SP','15.860-000','TATI@OUTLOOK.COM','(17) 98154-8437','(17) 98809-7542','2016-10-27'),(000007,'FORNECEDOR 1','53.248.185/0001-14','178.652.385.635','RUA LALALL','IBIRÃ','TERMAS DE IBIRÃ','SP','15.860-000','lorem@IPSUM.COM','(17) 98154-8437','(17) 98809-7542','2016-10-27'),(000008,'TRTRTRTRT','351.538.066-34','5425356353','RUA LLALA, 50','IBIRÃ¡','TERMAS DE IBIRÃ¡','SP','15.860-000','bruno@outlook.om','(17) 98154-8437','(17) 98809-7542','2016-10-27'),(000009,'','','','','','','','','','','','2016-10-28'),(000010,'','891.112.794-94','','','','','','','','','','2016-10-28'),(000011,'LOREM IPSUM DOLOR SIT AMET','77.324.587/0001-19','298.563.596.352','CONSECTETUR ADIPISCING ELIT','DOLOR SIT AMET','LOREM IPSUM','MG','15.860-000','loremipsumdolor@sitamet.com','(17) 98154-8437','(17) 98809-7542','2016-10-31'),(000012,'WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW','440.259.828-11','555555555555555','WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW','WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW','WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW','SP','11.111-111','wwwwwwwww@www.wwwwwwwwwwwww.com','(33) 33333-3333','(33) 33333-3333','2016-11-02'),(000014,'LOREM IPSUM','42.385.843/0001-01','542.635.206.352','DOLOR','AMET','SIT','SP','15.860-000','lorem@ipsum.com','(17) 98809-7542','','2016-11-09'),(000015,'LOREM IPSUM','582.224.928-02','652635263426','DOLOR SIT ','ADIPISCING','AMET. CONSECTETUR','SP','15.860-000','lorem@ipsum.com','(17) 98154-8437','(17) 98809-7542','2016-11-09'),(000016,'LALALL','852.186.661-57','5653653','ALALAL','LALALAL','ALALL','AC','15.860-000','lorem@ipsum.com','(17) 98154-8437','(17) 98809-7542','2016-11-09'),(000017,'PAPELARIA KALUNGA ME','69.663.669/0001-60','194.356.563.563','RUA RIO PRETO, 100','SAO JOSE DO RIO PRETO','CENTRO','SP','15.860-000','KALUNGA@KALUNGA.COM.BR','(17) 98809-7542','(17) 98154-8437','2016-11-14'),(000018,'JESUS RODRIGO ALVES DA SILVA XAVIER','277.423.536-79','15653616556','DOLOR ','434IOFEKC','ORKEOKEORK','','10.902-930','lorem@ipsum.com','(17) 98154-8437','(17) 98809-7542','2016-11-14'),(000019,'JOAQUIM DA SILVA PERES LOREM','832.143.143-78','45.067.707-2','RUA SÃ£O CARLOS, 50','IBIRÃ¡','TERMAS DE IBIRÃ¡','','15.860-000','brunosartori.webmaster@gmail.com','(17) 98154-8437','(17) 98809-7542','2016-11-21'),(000020,'TATIANE DOS SANTOS MURGI','877.528.365-40','45.067.707-2','RUA SÃƒO JOÃƒO BATISTA DO CARMOS DA SILVA DOS REIS','IBIRÃ','TERMAS DE IBIRÃ','SP','15.890-000','tatimurgi@gmail.com','(17) 98111-1111','(17) 98809-7544','2016-11-23'),(000021,'TATIANE DOS SANTOS MURGI','754.562.100-02','45.067.707-2','RUA LALALAL','IBIRÃ¡','TERMAS DE IBIRÃ¡','SP','15.860-000','tati.murgi@gmail.com','(17) 98154-8437','(17) 98809-7542','2016-11-29'),(000022,'TILL LINDERMANN AA','162.115.883-72','45.067.707-2','RUA SÃƒO CARLOS, 50',NULL,NULL,'','15.860-000','till@rammstein.com','(17) 98154-8437','(17) 98809-7542','2016-12-06'),(000023,'LKLKO','771.083.349-76','fldÃ§lfdÃ§fl','IOIOI',NULL,NULL,'','65.656-562','lorem@ipsum.com','(63) 26562-0562','(65) 65636-5263','2016-12-06'),(000024,'MORPHEUS','515.811.268-16','555.555.555.555','LOREM IPSUM DOLOR SIT AMET',NULL,NULL,'','15.860-000','morpheus@hotmail.com','(17) 98154-8437','(17) 98809-7542','2016-12-06'),(000025,'MORPHEUS','515.811.268-16','555.555.555.555','LOREM IPSUM DOLOR SIT AMET',NULL,NULL,'','15.860-000','morpheus@hotmail.com','(17) 98154-8437','(17) 98809-7542','2016-12-06'),(000026,'bruno sartori','488.690.187-50','45.067.707-2','rua sÃ£o carlos, 50',NULL,NULL,NULL,'15.860-000','BRUNO.WEBMASTER@GMAIL.COM','(17) 98154-8437','(17) 98809-7542','2016-12-07'),(000027,'AMADEU ANTÃ”NIO COUTO','938.938.177-00','45.088.589-2','AV. AMADEU ANTÃ”NIO COUTO, 252',NULL,NULL,'','15.860-000','amadeuacouto@hotmail.com','(17) 98154-8437','(17) 98807-7542','2016-12-09'),(000028,'AMADEU ANTÃ”NIO COUTO','938.938.177-00','45.088.589-2','AV. AMADEU ANTÃ”NIO COUTO, 252',NULL,NULL,'','15.860-000','amadeuacouto@hotmail.com','(17) 98154-8437','(17) 98807-7542','2016-12-09'),(000029,'DAIANE DA SILVA','818.454.871-09','45.067.707-2','RUA LALALA, 123',NULL,NULL,'','15.860-000','daiane@hotmail.com','(17) 98154-8437','(17) 98809-7542','2016-12-09'),(000030,'DAIANE DA SILVA','818.454.871-09','45.067.707-2','RUA LALALA, 123',NULL,NULL,'','15.860-000','daiane@hotmail.com','(17) 98154-8437','(17) 98809-7542','2016-12-09'),(000031,'DAIANE DA SILVA','818.454.871-09','45.067.707-2','RUA LALALA, 123',NULL,NULL,'','15.860-000','daiane@hotmail.com','(17) 98154-8437','(17) 98809-7542','2016-12-09'),(000032,'MARK KNOPFLER','162.461.512-05','45.067.707-2','RUA SÃƒO CARLOS, 50',NULL,NULL,'','15.860-000','brunosartori.webmaster@gmail.com','(17) 98154-8437','(17) 98809-7542','2016-12-09'),(000033,'LOREM IPSUM DOLOR SIT AMEEEET','112.468.742-45','45.067.707-2','RUA LALALA',NULL,NULL,'','15.860-000','lorem@ipsum.com','(17) 98154-8437','(17) 98809-7542','2016-12-09'),(000034,'LELELE','888.570.567-75','45.067.707-2','RUA LALAL',NULL,NULL,'','15.860-000','loremipsum@lala.com','(17) 98154-8437','(17) 98809-7542','2016-12-09'),(000035,'LALALALALAL','355.381.073-45','45.067.707-2','LALALALALALLA,1200',NULL,NULL,'SP','15.860-000','lorem@ipsum.com','(17) 98154-8437','(17) 98809-7542','2016-12-09'),(000036,'LOREM IPSUM','682.355.469-06','965258259','DOLOR SIT',NULL,NULL,'SP','15.860-000','lorem@ipsum.com','(17) 98444-8435','(17) 96666-6666','2016-12-13'),(000037,'LOREM IPSUM DOLOR SIT AMET','553.780.616-95','45.067.707-2','CONSECTETUR ADIPISCING ELIT',NULL,NULL,'SP','15.860-000','lorem@ipsum.com','(17) 98154-8437','(17) 98809-7542','2016-12-13'),(000038,'LOREM IPSUM','184.232.511-60','45.067.707-2','DOLOR SIT AMET',NULL,NULL,'SP','15.860-000','lorem@ipsum.com','(17) 98154-8437','(17) 98809-7542','2016-12-13'),(000039,'ALALLAALLAALLAL','826.612.437-04','4734534738','FDFHGFGHF',NULL,NULL,'SP','15.860-000','lorem@ipsum.com','(17) 98154-8437','(17) 98809-7542','2016-12-13'),(000040,'LOREM','554.131.183-76','45.067.07-2','IPSUM DOLOR SIT AMET',NULL,NULL,'SP','15.860-000','LOREM@IPSUM.COM','(17) 98154-8437','(17) 98809-7454','2016-12-13'),(000041,'LOREM IPSUM DOLOR','963.286.856-02','45216532','SIT AMET. CONSECTETUR ADIPISCING ELIT.',NULL,NULL,'SP','15.860-000','lorem@ipsum.com','(17) 98154-8437','(17) 98809-7542','2016-12-13'),(000042,'LEORKEORKEORK','393.094.889-30','455262','RKEORKEORKEORK',NULL,NULL,'SP','41.546-526','lorem@ipsum.com','(17) 98154-8437','(17) 98809-7542','2016-12-13'),(000043,'LOREM IPSUM ','611.986.621-31','45.067.707-2','RUA SÃƒO CARLOS, 50',NULL,NULL,'SP','15.860-000','lorem@ipsum.com','(17) 98154-8437','(17) 98809-7542','2016-12-13'),(000044,'LOREM IPSUM','233.874.394-66','45.067.707-2','RUA SÃƒO CARLOS, 50',NULL,NULL,'SP','15.860-000','lorme@ipsum.com','(17) 98154-8437','(17) 98809-7542','2016-12-13'),(000045,'LOREM IPSUM','048.389.813-92','45.067.707-2','DOLOR',NULL,NULL,'SP','15.860-000','lorem@Ipsum.com','(17) 98154-8437','(14) 79841-5595','2016-12-13'),(000046,'CXÃ‡CLCÃ‡LSÃ‡DS','181.243.308-59','45.067.707-2','DLÃ‡DSLDSDL',NULL,NULL,'SP','15.860-000','lorem@ipsum.com','(17) 98154-8437','(17) 98809-7542','2016-12-13'),(000047,'LOREMIPSUM','781.534.520-45','5656562','ODKOD',NULL,NULL,'SP','26.526-265','fdfdf@ldll.com','(18) 56-3632','','2016-12-13'),(000048,'LOREM IPSUM','568.126.276-66','45.067.707-2','DOLOR SIT',NULL,NULL,'SP','15.860-000','','(17) 95495-9522','','2016-12-13'),(000049,'LOREM IPSUM','212.747.576-30','265926115','GDFSIXCJKDCMFDCKM',NULL,NULL,'SP','15.896-300','lorem@ipsum.com','(17) 98154-8437','(17) 98809-7542','2016-12-13'),(000050,'BRUNO 123','349.699.327-86','45.067.707-2','RUA SÃƒO CARLOS, 50',NULL,NULL,'SP','15.860-000','brunosartori.webmaster@gmail.com','(17) 98154-8437','(17) 98809-7542','2016-12-16'),(000051,'LOREM IPSUM','117.129.146-93','45.067.707-2','DOLOR Q',NULL,NULL,'SP','15.860-000','LOREM@IPSUM.COM','(17) 98154-8437','(17) 98809-7542','2016-12-19'),(000052,'TATIANE DOS SANTOS MURGI','478.786.125-52','45.067.707-2','RUA SÃƒO CARLOS, 50','IBIRÃ','TERMAS DE IBIRÃ','SP','15.860-000','tatimurgi@gmail.com','(17) 98154-8437','(17) 98809-7542','2016-12-20'),(000053,'JESUS RODRIGO ALVES','269.012.958-20','24.683.706-8','RUA CEL JONAS G. GONZAGA, 1353-A','IBIRÃ','CENTRO','SP','15.860-000','','(17) 35512-121','','2016-12-21'),(000054,'BRUNO SARTORI','427.467.978-01','450677072','RUA SÃƒO CARLOS, 50','IBIRÃ','TERMAS DE IBIRÃ','SP','15.860-000','contato@brunosartori.com','(17) 98154-8437','(17) 98809-7542','2016-12-21'),(000055,'BRUNO DOS SANTOS DE ABREU','514.542.758-12','45.067.707-2','RUA SÃƒO CARLOS, 50','IBIRÃ','TERMAS DE IBIRÃ','SP','15.860-000','bruno@hotmail.com','(17) 98154-8437','(17) 98809-7542','2016-12-22'),(000056,'TESTE','871.946.594-76','0','X',NULL,NULL,'SP','0','','(0','','2016-12-22'),(000057,'JOSE','167.766.134-86','9\'\'','U',NULL,NULL,'SP','88','','(0','','2016-12-22'),(000058,'TESTE 123','871.946.594-76','0','X',NULL,NULL,'SP','0','','(0','','2016-12-22'),(000059,'JOSE','320.714.898-02','4444','RUA TAL, 34',NULL,NULL,'SP','99.999-999','','(77) 77777-7777','(88) 88888-8888','2016-12-23'),(000060,'JOÃƒO','081.954.844-84','999','RUA 3, 55000',NULL,NULL,'SP','99.999-999','','(99) 99999-9999','(99) 99999-9999','2016-12-23'),(000061,'LOREM ','871.572.620-70','45.607.70702','IPSUM',NULL,NULL,'SP','15.860-000','orem@ipsum.com','(17) 91484-8484','','2016-12-23'),(000062,'DSDSD','617.535.688-89','dds433','DSDSD',NULL,NULL,'SP','23.232-323','','(32) 32323-2323','','2016-12-23'),(000063,'DSDSDSDSDSD','816.006.539-60','dcdsdsd','DSDSDS',NULL,NULL,'SP','15.860-000','','(48) 4545','','2016-12-23'),(000064,'LOREM IPSUM','248.185.848-43','45.607','LOREM IPSUM',NULL,NULL,'SP','15.860-00','','(23) 23232-323','','2016-12-23'),(000065,'TATIANE','198.361.359-28','32323232323','RUA LALAL',NULL,NULL,'SP','15.860-000','','(17) 98154-8437','','2016-12-23'),(000066,'BRUNO SARTORI','427.467.978-01','45.067.707-2','RUA SÃƒO CARLOS, 50','IBIRÃ','TERMAS DE IBIRÃ','SP','15.860-000','brunosartori.webmaster@gmail.com','(17) 98154-8437','(17) 98809-7542','2017-03-08'),(000067,'RUBINHO &  BARRICHELO','468.261.273-50','45.670.7070-','RA ALKSA',NULL,NULL,'SP','15.860-000','lorem@ipsum.com','(17) 98154-8484','(55) 55555-5555','2016-12-23'),(000068,'PREXECUM VITALIS','349.245.997-86','45.607.707-2','RUA LALAL. 10',NULL,NULL,'SP','15.860-000','lroem@ipsum.com','(17) 98154-8437','(17) 98809-7542','2016-12-23'),(000069,'JKJLK','702.403.282-05','99','JLKJLKJLK',NULL,NULL,'SP','99.999-999','','(99) 0','','2016-12-23'),(000070,'JKJLK','702.403.282-05','99','JLKJLKJLK',NULL,NULL,'SP','99.999-999','','(99) 0','','2016-12-23'),(000071,'TESTE 15:44','551.393.166-41','999','KÃ‡FJSDLÃ‡KFSDJ',NULL,NULL,'SP','90.459-804','','(99) 9','','2016-12-23'),(000072,'LOREM IPSUM','485.511.111-24','545454545','DSDSDSD',NULL,NULL,'SP','15.860-000','lorem@ipsum.com','(17) 98154-8437','','2016-12-26'),(000073,'LOREM IPSUM DOLOR SIT AMET','166.558.191-30','45.607','RUA SÃƒO CARLOS, 50',NULL,NULL,'SP','15.860-000','lorme@ipsum.com','(15) 79841-9492','','2016-12-26'),(000074,'LOREM IPSUM DOLOR SIT AMET','715.872.176-00','45.0667.707-5','RUA SÃƒO CARLOS ,',NULL,NULL,'SP','15.860-000','lorem@ipsum.com','(17) 98154-8437','(','2016-12-26'),(000075,'DANTE','621.446.482-80','45.067.707-2','RUA SÃƒO CARLOS, 50',NULL,NULL,'SP','15.860-000','lorem@Ipsum.com','(17) 98154-8437','(17) 98809-7542','2016-12-26'),(000076,'VIRGIL','553.692.865-15','453566','LOREM IPSUM',NULL,NULL,'SP','15.860-000','','(17) 98154-8437','(17) 98809-7542','2016-12-26'),(000077,'LOREM IPSUM','349.411.334-39','45.067.707-2','DOLOR SIT AMET',NULL,NULL,'SP','15.860-000','lorem@ipsum.com','(17) 98154-8437','','2016-12-26'),(000078,'BRUNOSARTORI','873.633.190-22','45.067.707-2','EDJSKDSKDJ',NULL,NULL,'SP','15.860-000','lorem@ipsum.com','(17) 98154-8437','(17) 98809-7542','2016-12-27'),(000094,'TESTE 16:41','116.649.575-29','999999','FSDFSD',NULL,NULL,'SP','88.888-888','','(99) 99999-9999','','2016-12-29'),(000100,'LOREM IPSUM','746.791.757-02','45.067.707-2','RUA LALAL',NULL,NULL,'SP','15.860-000','lalaal@lala.com','(17) 98154-8437','','2016-12-29'),(000101,'LOREM IPSUM','746.791.757-02','45.067.707-2','RUA LALAL',NULL,NULL,'SP','15.860-000','lalaal@lala.com','(17) 98154-8437','','2016-12-29'),(000102,'LOREM IPSUM','523.158.165-80','45226262','RUA SÃƒO CARLOS ,50',NULL,NULL,'SP','15.860-000','lorme@Ipsum.com','(17) 98125-4545','','2016-12-29'),(000103,'LUCAS UMBIGO ','395.241.463-80','43232323','RUA LALALA, 120','IBIRÃ','CENTRO','SP','15.860-000',NULL,'(17) 98154-847','(17) 98809-7542','2017-01-02'),(000104,'SSSSSSS','350.517.768-76','dd','ASDFAFA','SSSS','SSS','SC','11.111-111','sddd@ddd.com','(','(','2017-01-04'),(000105,'ADYEN DO BRASIL LTDA','14.796.606/0001-90','isento','AV DOUTOR CHUCRI ZAIDAN, 1550','SAO PAULO','VILA CORDEIRO','SP','04.583-110','BRAZIL@ADYEN.COM','(11) 5181-1372','(11) 6345-9997','2017-01-16'),(000106,'LOREM IPSUM DOLOR SIT AMET','355.481.173-43','45.067.707-2','CONSECTETUR ADIPISCING ELIT',NULL,NULL,'SP','15.860-000','lorem@ipsum.com','(17) 98154-8437','(17) 98809-7542','2017-01-24'),(000107,'LALALAL','430.528.661-09','45.067.707-2','LALALAL',NULL,NULL,'SP','15.860-000','lorme@ipsum.com','(17) 98154-8437','(17) 98809-7542','2017-01-24'),(000108,'BLABLABLA','267.920.462-05','45.067.707-2','LOREM IPSUM',NULL,NULL,'SP','15.860-000','lorem@ipsum.com','(17) 98154-8437','(17) 98809-7542','2017-01-24'),(000109,'LARARUI','839.314.532-51','45.067.707-2','LFMELFLE',NULL,NULL,'SP','15.860-000','lorem@ipsum.com','(17) 98154-8437','(17) 98809-7542','2017-01-24'),(000110,'FDFDFDF','893.824.688-46','563623','DFDF',NULL,NULL,'SP','15.860-000','','','','2017-01-24'),(000111,'BRUNO SARTORI','664.735.724-65','323232323','RUA SÃƒO CARLOS, 50',NULL,NULL,'SP','42.323-2','brunosartori.webmaster@gmail.com','(17) 98809-7542','(17) 98809-7542','2017-01-24'),(000112,'LOREM IPSUM DOLOR SIT AMET.','484.776.653-97','45.067.707-2','CONSECTETUR ADIPISCING ELIT',NULL,NULL,'SP','15.860-000','lorem@ipsum.com','(17) 98154-8437','(17) 98809-7542','2017-01-24'),(000113,'BRUNO SARTORIDSDSDSD','841.832.250-00','45.067.707-2','RUA DOS PINHEIROS ALTOS, 500',NULL,NULL,'SP','15.860-000','lorem@ipsum.com','(17) 98154-8437','(17) 98809-7542','2017-01-27'),(000114,'LOREM IPSUM DOLOR SIT AMET','28.835.927/0001-60','43232323','CONSECTETUR ADIPISCING ELIT',NULL,NULL,'SP','15.860-000','lorem@ipsum.com','(17) 98154-8437','(17) 98809-7542','2017-01-27'),(000115,'BRUNO SARTORI','366.437.716-84','45.067.707-2','RUA SÃƒO CARLOS, 40',NULL,NULL,'SP','15.860-000','lorem@ipsum.com','(17) 98154-8437','(17) 98809-7542','2017-01-27'),(000116,'PEDRO ALVARES CABRAL','605.600.725-11','45.0667.707-2','RUA DAS ORQÃDEAS , 555',NULL,NULL,'SP','15.860-000','pedro@brasil.com','(17) 98154-8437','(17) 98809-7542','2017-02-02'),(000117,'DOLOR','98.647.374/0001-06','','SIT ','AMET','CONSECTETUR','AC','15.860-000','','','','2017-02-06'),(000118,'LOREM IPSUM','038.224.992-50','45.067.707-2','DOLOR SIT','CONSECTETUR','AMET','SP','15.860-000',NULL,'(17) 98154-8437','(17) 98809-7542','2017-02-06'),(000119,'TESTE','463.188.347-29','44343443','RUA DOS TESTES ,455','TESTINHO','TESTANDO','TO','11.111-111','teste@teste.com','(22) 22222-2222','(33) 33333-3333','2017-02-07'),(000120,'DFDF','481.140.875-60','','DFDF','DFDF','DFDF','BA','32.323-232','','','','2017-02-13'),(000121,'DFDF','582.973.184-35','3232323','FDFDF','DFDF','FDFDF','ES','32.323-232','','','','2017-02-13'),(000122,'SDSDSD','43.237.611/0001-60','','DSD','SDSD','DSDSD','DF','23.232-323','','','','2017-02-13'),(000123,'SDSDS','127.326.535-19','42332323','DSDS','SDSDS','SDSDSD','DF','23.232-3','','','','2017-02-13'),(000124,'LROEM IPSUM','604.806.138-26','3232323','DSDSD','SDSD','DSDSD','DF','32.323-232',NULL,'','','2017-02-13'),(000125,'TATIANE DOS SANTOS MURGI','616.528.911-88','45.067.707-2','RUA DAS ORQUÃDEAS, 345',NULL,NULL,'SP','15.860-000','tati@gmail.com','(17) 98154-8437','(17) 98809-7542','2017-02-17'),(000126,'CARLOS ALBERTO SARTORI','156.179.959-95','45.067.707-2','RUA SÃƒO CARLOS, 50',NULL,NULL,'SP','15.860-000','sartori_qi@hotmail.com','(17) 98807-9981','(17) 99194-5359','2017-02-20'),(000127,'UMBRELLA CORPORATION','02.261.264/0001-24','4859569562','RUA SÃƒO CARLOS, 50',NULL,NULL,'SP','15.860-000','adm@umbrellacorp.com','(17) 98154-8437','(17) 98809-7542','2017-02-20'),(000128,'FACEBOOK INC','184.513.343-93','45.067.707-2','RUA SÃƒO JOAO BATISTA DO CARMO, 1002',NULL,NULL,'SP','15.860-000','facebook@gmail.com','(17) 98154-8437','(17) 98809-7542','2017-02-20'),(000129,'TESTE','562.970.685-34','45.067.707-2','TESTE','TESTE','45.067.707-2','TO','12.121-212','teste@teste.com','(17) 11111-1111','(17) 55555-5555','2017-03-08'),(000131,'VALÃ‰RIA','936.482.181-58','11111111','RUA DAS ORQUÃDEAS, 1954','IBIRÃ','TERMAS DE IBIRÃ','SP','15.840-000','valeria@teste.com','(11) 11111-1111','(22) 22222-2222','2017-03-09'),(000133,'LOREM IPSUM','062.568.736-10','45.067.707-2','RUA SÃƒO CARLOS, 50','IBIRÃ','TERMAS DE IBIRÃ','SP','15.860-000',NULL,'(18) 98154-8437','(17) 98809-7542','2017-03-09');
/*!40000 ALTER TABLE `cadastro_pessoa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cadastro_receita`
--

DROP TABLE IF EXISTS `cadastro_receita`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cadastro_receita` (
  `rece_id` int(6) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `rece_nome` varchar(50) NOT NULL,
  `rece_cod_grupo_receita` int(6) unsigned zerofill DEFAULT NULL,
  PRIMARY KEY (`rece_id`),
  KEY `rece_cod_grupo_receita` (`rece_cod_grupo_receita`),
  CONSTRAINT `cadastro_receita_ibfk_1` FOREIGN KEY (`rece_cod_grupo_receita`) REFERENCES `cadastro_grupo_receita` (`gruporece_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cadastro_receita`
--

LOCK TABLES `cadastro_receita` WRITE;
/*!40000 ALTER TABLE `cadastro_receita` DISABLE KEYS */;
/*!40000 ALTER TABLE `cadastro_receita` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cadastro_servico`
--

DROP TABLE IF EXISTS `cadastro_servico`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cadastro_servico` (
  `ser_id` int(6) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `ser_nome` varchar(50) NOT NULL,
  `ser_valor` float(15,2) NOT NULL,
  `ser_sla` time DEFAULT NULL,
  PRIMARY KEY (`ser_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cadastro_servico`
--

LOCK TABLES `cadastro_servico` WRITE;
/*!40000 ALTER TABLE `cadastro_servico` DISABLE KEYS */;
INSERT INTO `cadastro_servico` VALUES (000001,'CONTRATO',150.00,NULL),(000002,'DEMISSÃƒO DE FUNCIONÃRIO',70.00,NULL),(000006,'HORAS EXTRAS',35.00,NULL),(000010,'LKDSKLDKSLDK',42323.23,NULL),(000011,'TESTE',33.33,NULL);
/*!40000 ALTER TABLE `cadastro_servico` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cadastro_socio`
--

DROP TABLE IF EXISTS `cadastro_socio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cadastro_socio` (
  `soc_id` int(6) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `soc_data_nascimento` date NOT NULL,
  `soc_banco` varchar(50) DEFAULT NULL,
  `soc_agencia` varchar(50) DEFAULT NULL,
  `soc_conta` varchar(50) DEFAULT NULL,
  `soc_obs` text,
  `soc_data_cadastro` date DEFAULT NULL,
  `soc_cod_pessoa` int(6) unsigned zerofill NOT NULL,
  PRIMARY KEY (`soc_id`),
  KEY `soc_cod_pessoa` (`soc_cod_pessoa`),
  CONSTRAINT `cadastro_socio_ibfk_1` FOREIGN KEY (`soc_cod_pessoa`) REFERENCES `cadastro_pessoa` (`pes_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cadastro_socio`
--

LOCK TABLES `cadastro_socio` WRITE;
/*!40000 ALTER TABLE `cadastro_socio` DISABLE KEYS */;
INSERT INTO `cadastro_socio` VALUES (000001,'1995-12-08','000001','1586','1558','teste','2017-03-08',000066);
/*!40000 ALTER TABLE `cadastro_socio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cadastro_suprimento`
--

DROP TABLE IF EXISTS `cadastro_suprimento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cadastro_suprimento` (
  `sup_id` int(6) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `sup_nome` varchar(50) NOT NULL,
  `sup_descricao` text,
  PRIMARY KEY (`sup_id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cadastro_suprimento`
--

LOCK TABLES `cadastro_suprimento` WRITE;
/*!40000 ALTER TABLE `cadastro_suprimento` DISABLE KEYS */;
INSERT INTO `cadastro_suprimento` VALUES (000001,'COPO PLASTICO 200ML',''),(000002,'COPO PLASTICO 50ML',''),(000003,'AÃ‡UCAR',''),(000004,'CAFÃ‰',''),(000005,'CANETA',''),(000006,'LAPIS',''),(000007,'BORRACHA',''),(000008,'DETERGENTE',''),(000009,'FOLHA DE SULFITE',''),(000010,'PAPEL HIGIENICO',''),(000011,'MANTEIGA',''),(000012,'PAO',''),(000013,'REFRIGERANTE',''),(000014,'SABONETE',''),(000015,'TONNER DE IMPRESSORA',''),(000016,'CARTUCHO DE TINTA DE IMPRESSORA',''),(000017,'PANO P/ LIMPEZA (CHÃƒO)',''),(000018,'FLANELA P/ LIMPEZA',''),(000019,'ALCOOL',''),(000020,'GASOLINA',''),(000021,'GRAMPO P/ GRAMPEADOR',''),(000022,'CLIPS',''),(000023,'RÃ‰GUA',''),(000024,'PNEU ARO 13\"',''),(000025,'PNEU ARO 14\"','');
/*!40000 ALTER TABLE `cadastro_suprimento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cadastro_tipo_atendimento`
--

DROP TABLE IF EXISTS `cadastro_tipo_atendimento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cadastro_tipo_atendimento` (
  `tipoaten_id` int(6) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `tipoaten_nome` varchar(50) NOT NULL,
  PRIMARY KEY (`tipoaten_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cadastro_tipo_atendimento`
--

LOCK TABLES `cadastro_tipo_atendimento` WRITE;
/*!40000 ALTER TABLE `cadastro_tipo_atendimento` DISABLE KEYS */;
INSERT INTO `cadastro_tipo_atendimento` VALUES (000001,'CONTRATOS'),(000002,'FOLHA DE PAGAMENTO'),(000003,'IMPOSTOS'),(000004,'ABERTURA DE EMPRESAS'),(000005,'FECHAMENTO DE EMPRESAS'),(000006,'POSTO FISCAL'),(000007,'RECEITA FEDERAL'),(000009,'OUTROS');
/*!40000 ALTER TABLE `cadastro_tipo_atendimento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cadastro_veiculo`
--

DROP TABLE IF EXISTS `cadastro_veiculo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cadastro_veiculo` (
  `vei_id` int(6) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `vei_nome` varchar(50) NOT NULL,
  `vei_placa` varchar(8) NOT NULL,
  `vei_ano` int(4) DEFAULT NULL,
  `vei_modelo` int(4) DEFAULT NULL,
  `vei_cor` varchar(20) DEFAULT NULL,
  `vei_renavam` varchar(30) DEFAULT NULL,
  `vei_obs` text,
  PRIMARY KEY (`vei_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cadastro_veiculo`
--

LOCK TABLES `cadastro_veiculo` WRITE;
/*!40000 ALTER TABLE `cadastro_veiculo` DISABLE KEYS */;
INSERT INTO `cadastro_veiculo` VALUES (000001,'HONDA CIVIC FODÃ£O','AAB-8556',2016,2016,'PRETO','pfljggldskfs68758','lorem ipsum dolor sit amet');
/*!40000 ALTER TABLE `cadastro_veiculo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cliente_atendimento_cabecalho`
--

DROP TABLE IF EXISTS `cliente_atendimento_cabecalho`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cliente_atendimento_cabecalho` (
  `atecabec_id` varchar(26) NOT NULL,
  `atecabec_total_atendimento` int(2) DEFAULT NULL,
  `atecabec_prioridade` varchar(15) DEFAULT NULL,
  `atecabec_agendamento` datetime DEFAULT NULL,
  `atecabec_data_abertura` datetime DEFAULT NULL,
  `atecabec_data_encerrado` datetime DEFAULT NULL,
  `atecabec_cod_tipo_atendimento` int(6) unsigned zerofill NOT NULL,
  `atecabec_cod_operador` int(6) unsigned zerofill NOT NULL,
  `atecabec_cod_cliente` int(6) unsigned zerofill NOT NULL,
  PRIMARY KEY (`atecabec_id`),
  KEY `atecabec_cod_tipo_atendimento` (`atecabec_cod_tipo_atendimento`),
  KEY `atecabec_cod_operador` (`atecabec_cod_operador`),
  KEY `atecabec_cod_cliente` (`atecabec_cod_cliente`),
  CONSTRAINT `cliente_atendimento_cabecalho_ibfk_1` FOREIGN KEY (`atecabec_cod_tipo_atendimento`) REFERENCES `cadastro_tipo_atendimento` (`tipoaten_id`),
  CONSTRAINT `cliente_atendimento_cabecalho_ibfk_2` FOREIGN KEY (`atecabec_cod_operador`) REFERENCES `cadastro_operador` (`ope_id`),
  CONSTRAINT `cliente_atendimento_cabecalho_ibfk_3` FOREIGN KEY (`atecabec_cod_cliente`) REFERENCES `cadastro_cliente` (`cli_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cliente_atendimento_cabecalho`
--

LOCK TABLES `cliente_atendimento_cabecalho` WRITE;
/*!40000 ALTER TABLE `cliente_atendimento_cabecalho` DISABLE KEYS */;
INSERT INTO `cliente_atendimento_cabecalho` VALUES ('20170306091934000004',2,'3Â -Â BAIXA',NULL,'2017-03-06 09:19:40','2017-03-06 09:33:41',000004,000004,000001),('20170310144552000004',1,'3Â -Â BAIXA',NULL,'2017-03-10 14:45:55',NULL,000004,000004,000003),('20170313195535000004',1,'3Â -Â BAIXA',NULL,'2017-03-13 19:55:37',NULL,000004,000004,000001);
/*!40000 ALTER TABLE `cliente_atendimento_cabecalho` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cliente_atendimento_corpo`
--

DROP TABLE IF EXISTS `cliente_atendimento_corpo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cliente_atendimento_corpo` (
  `atecorp_id` int(6) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `atecorp_descricao_solicitada` text,
  `atecorp_descricao_solucionada` text,
  `atecorp_data_abertura` datetime DEFAULT NULL,
  `atecorp_data_fechamento` datetime DEFAULT NULL,
  `atecorp_cod_departamento` int(6) unsigned zerofill NOT NULL,
  `atecorp_cod_operador` int(6) unsigned zerofill NOT NULL,
  `atecorp_cod_cabecalho` varchar(26) NOT NULL,
  PRIMARY KEY (`atecorp_id`),
  KEY `atecorp_cod_departamento` (`atecorp_cod_departamento`),
  KEY `atecorp_cod_operador` (`atecorp_cod_operador`),
  KEY `atecorp_cod_cabecalho` (`atecorp_cod_cabecalho`),
  CONSTRAINT `cliente_atendimento_corpo_ibfk_1` FOREIGN KEY (`atecorp_cod_departamento`) REFERENCES `cadastro_departamento` (`dep_id`),
  CONSTRAINT `cliente_atendimento_corpo_ibfk_2` FOREIGN KEY (`atecorp_cod_operador`) REFERENCES `cadastro_operador` (`ope_id`),
  CONSTRAINT `cliente_atendimento_corpo_ibfk_3` FOREIGN KEY (`atecorp_cod_cabecalho`) REFERENCES `cliente_atendimento_cabecalho` (`atecabec_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cliente_atendimento_corpo`
--

LOCK TABLES `cliente_atendimento_corpo` WRITE;
/*!40000 ALTER TABLE `cliente_atendimento_corpo` DISABLE KEYS */;
INSERT INTO `cliente_atendimento_corpo` VALUES (000001,'\n\nteste encerramento\n-> O operador `` encerrou o atendimento no departamento `` em 06/03/2017 09:33:42.','teste encerramento\n-> O operador `` encerrou o atendimento no departamento `` em 06/03/2017 09:33:42.','2017-03-06 09:19:40','2017-03-06 09:33:41',000002,000004,'20170306091934000004'),(000002,'rgfgfgfgfg\n-> O operador `brunosartori` abriu o protocolo de atendimento nÃºmero: `20170310144552000004` em 10/03/2017 14:45:56.',NULL,'2017-03-10 14:45:55',NULL,000002,000004,'20170310144552000004'),(000003,'fdfdfd\n-> O operador `brunosartori` abriu o protocolo de atendimento nÃºmero: `20170313195535000004` em 13/03/2017 19:55:37.',NULL,'2017-03-13 19:55:37',NULL,000002,000004,'20170313195535000004');
/*!40000 ALTER TABLE `cliente_atendimento_corpo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cliente_ged_documentos`
--

DROP TABLE IF EXISTS `cliente_ged_documentos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cliente_ged_documentos` (
  `ged_id` int(6) NOT NULL AUTO_INCREMENT,
  `ged_nome` varchar(150) DEFAULT NULL,
  `ged_arquivo` varchar(200) DEFAULT NULL,
  `ged_extensao` varchar(20) DEFAULT NULL,
  `ged_tamanho` int(11) NOT NULL,
  `ged_data_envio` datetime DEFAULT NULL,
  `ged_obs` text,
  `ged_cod_cliente` int(6) unsigned zerofill NOT NULL,
  `ged_cod_operador` int(6) unsigned zerofill NOT NULL,
  PRIMARY KEY (`ged_id`),
  KEY `ged_cod_cliente` (`ged_cod_cliente`),
  KEY `ged_cod_operador` (`ged_cod_operador`),
  CONSTRAINT `cliente_ged_documentos_ibfk_1` FOREIGN KEY (`ged_cod_cliente`) REFERENCES `cadastro_cliente` (`cli_id`),
  CONSTRAINT `cliente_ged_documentos_ibfk_2` FOREIGN KEY (`ged_cod_operador`) REFERENCES `cadastro_operador` (`ope_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cliente_ged_documentos`
--

LOCK TABLES `cliente_ged_documentos` WRITE;
/*!40000 ALTER TABLE `cliente_ged_documentos` DISABLE KEYS */;
/*!40000 ALTER TABLE `cliente_ged_documentos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cliente_servico_avulso`
--

DROP TABLE IF EXISTS `cliente_servico_avulso`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cliente_servico_avulso` (
  `seravul_id` int(6) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `seravul_valor` float(15,2) DEFAULT NULL,
  `seravul_data_lancamento` date DEFAULT NULL,
  `seravul_cod_servico` int(6) unsigned zerofill NOT NULL,
  `seravul_cod_atendimento_cabecalho` varchar(26) NOT NULL,
  `seravul_cod_operador` int(6) unsigned zerofill NOT NULL,
  `seravul_pacote` varchar(30) NOT NULL,
  PRIMARY KEY (`seravul_id`),
  KEY `seravul_cod_servico` (`seravul_cod_servico`),
  KEY `seravul_cod_atendimento_cabecalho` (`seravul_cod_atendimento_cabecalho`),
  KEY `seravul_cod_operador` (`seravul_cod_operador`),
  CONSTRAINT `cliente_servico_avulso_ibfk_1` FOREIGN KEY (`seravul_cod_servico`) REFERENCES `cadastro_servico` (`ser_id`),
  CONSTRAINT `cliente_servico_avulso_ibfk_2` FOREIGN KEY (`seravul_cod_atendimento_cabecalho`) REFERENCES `cliente_atendimento_cabecalho` (`atecabec_id`),
  CONSTRAINT `cliente_servico_avulso_ibfk_3` FOREIGN KEY (`seravul_cod_operador`) REFERENCES `cadastro_operador` (`ope_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cliente_servico_avulso`
--

LOCK TABLES `cliente_servico_avulso` WRITE;
/*!40000 ALTER TABLE `cliente_servico_avulso` DISABLE KEYS */;
INSERT INTO `cliente_servico_avulso` VALUES (000001,150.00,'2017-06-01',000001,'20170301094133000004',000004,'Incluso'),(000002,150.00,'2017-06-01',000001,'20170301094133000004',000004,'Incluso'),(000003,150.00,'2017-06-01',000001,'20170301094133000004',000004,'NÃ£o Incluso'),(000004,70.00,'2017-06-01',000002,'20170301094133000004',000004,'NÃ£o Incluso'),(000005,70.00,'2017-06-01',000002,'20170301094133000004',000004,'NÃ£o Incluso'),(000006,150.00,'2017-06-01',000001,'20170301094133000004',000003,'NÃ£o Incluso'),(000007,150.00,'2017-06-01',000001,'20170301094133000004',000003,'NÃ£o Incluso'),(000008,70.00,'2017-06-01',000002,'20170301094133000004',000003,'NÃ£o Incluso'),(000011,150.00,'2017-06-01',000001,'20170303075839000004',000004,'NÃ£o Incluso'),(000012,70.00,'2017-06-01',000002,'20170303075839000004',000004,'NÃ£o Incluso'),(000013,150.00,'2017-06-01',000001,'20170303075839000004',000004,'NÃ£o Incluso'),(000014,150.00,'2017-06-01',000001,'20170303154301000004',000004,'NÃ£o Incluso'),(000015,150.00,'2017-06-01',000001,'20170306084611000004',000004,'NÃ£o Incluso'),(000016,70.00,'2017-06-01',000002,'20170306084829000004',000004,'NÃ£o Incluso'),(000017,35.00,'2017-06-01',000006,'20170306084829000004',000004,'Incluso'),(000018,70.00,'2017-06-01',000002,'20170310144552000004',000004,'NÃ£o Incluso'),(000019,70.00,'2017-06-01',000002,'20170313195535000004',000004,'NÃ£o Incluso'),(000020,35.00,'2017-06-01',000006,'20170313195535000004',000004,'Incluso');
/*!40000 ALTER TABLE `cliente_servico_avulso` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cliente_servico_mensal`
--

DROP TABLE IF EXISTS `cliente_servico_mensal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cliente_servico_mensal` (
  `sermen_id` int(6) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `sermen_cod_servico` int(6) unsigned zerofill NOT NULL,
  `sermen_cod_cliente` int(6) unsigned zerofill NOT NULL,
  PRIMARY KEY (`sermen_id`),
  KEY `sermen_cod_servico` (`sermen_cod_servico`),
  KEY `sermen_cod_cliente` (`sermen_cod_cliente`),
  CONSTRAINT `cliente_servico_mensal_ibfk_1` FOREIGN KEY (`sermen_cod_servico`) REFERENCES `cadastro_servico` (`ser_id`),
  CONSTRAINT `cliente_servico_mensal_ibfk_2` FOREIGN KEY (`sermen_cod_cliente`) REFERENCES `cadastro_cliente` (`cli_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cliente_servico_mensal`
--

LOCK TABLES `cliente_servico_mensal` WRITE;
/*!40000 ALTER TABLE `cliente_servico_mensal` DISABLE KEYS */;
/*!40000 ALTER TABLE `cliente_servico_mensal` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `configuracao_boleto`
--

DROP TABLE IF EXISTS `configuracao_boleto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `configuracao_boleto` (
  `bolconfig_id` int(6) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `bolconfig_convenio` varchar(50) DEFAULT NULL,
  `bolconfig_cod_conta` int(6) unsigned zerofill NOT NULL,
  `bolconfig_cod_operadora` int(6) unsigned zerofill NOT NULL,
  PRIMARY KEY (`bolconfig_id`),
  KEY `bolconfig_cod_conta` (`bolconfig_cod_conta`),
  KEY `bolconfig_cod_operadora` (`bolconfig_cod_operadora`),
  CONSTRAINT `configuracao_boleto_ibfk_1` FOREIGN KEY (`bolconfig_cod_conta`) REFERENCES `conta_bancaria` (`contbanc_id`),
  CONSTRAINT `configuracao_boleto_ibfk_2` FOREIGN KEY (`bolconfig_cod_operadora`) REFERENCES `oton_portal`.`oton_operadora_boleto` (`oton_opebol_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `configuracao_boleto`
--

LOCK TABLES `configuracao_boleto` WRITE;
/*!40000 ALTER TABLE `configuracao_boleto` DISABLE KEYS */;
INSERT INTO `configuracao_boleto` VALUES (000001,'434343434',000001,000001),(000003,'dskldklsd',000002,000002);
/*!40000 ALTER TABLE `configuracao_boleto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `configuracao_ecommerce`
--

DROP TABLE IF EXISTS `configuracao_ecommerce`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `configuracao_ecommerce` (
  `ecom_id` int(6) unsigned zerofill NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`ecom_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `configuracao_ecommerce`
--

LOCK TABLES `configuracao_ecommerce` WRITE;
/*!40000 ALTER TABLE `configuracao_ecommerce` DISABLE KEYS */;
/*!40000 ALTER TABLE `configuracao_ecommerce` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `conta_bancaria`
--

DROP TABLE IF EXISTS `conta_bancaria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `conta_bancaria` (
  `contbanc_id` int(6) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `contbanc_agencia` varchar(20) NOT NULL,
  `contbanc_conta` varchar(20) NOT NULL,
  `contbanc_correntista` varchar(150) NOT NULL,
  `contbanc_cidade` varchar(50) NOT NULL,
  `contbanc_estado` char(2) NOT NULL,
  `contbanc_gerente_nome` varchar(50) NOT NULL,
  `contbanc_gerente_telefone1` varchar(16) NOT NULL,
  `contbanc_gerente_telefone2` varchar(16) DEFAULT NULL,
  `contbanc_gerente_email` varchar(50) DEFAULT NULL,
  `contbanc_cod_banco` int(6) unsigned zerofill NOT NULL,
  `contbanc_obs` text,
  PRIMARY KEY (`contbanc_id`),
  KEY `contbanc_cod_banco` (`contbanc_cod_banco`),
  CONSTRAINT `conta_bancaria_ibfk_1` FOREIGN KEY (`contbanc_cod_banco`) REFERENCES `oton_portal`.`oton_cadastro_banco` (`oton_ban_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `conta_bancaria`
--

LOCK TABLES `conta_bancaria` WRITE;
/*!40000 ALTER TABLE `conta_bancaria` DISABLE KEYS */;
INSERT INTO `conta_bancaria` VALUES (000001,'0563256','652965-X','BRUNO SARTORI','IBIRÃ','SP','lroem ','(17) 98154-8437','(17) 98809-7542','ipsum@lala.com',000116,NULL),(000002,'6979','00.001.998-4','JDNET TELECOM LTDA - CNPJ 15.160.333/0001-55','IBIRÃ','SP','lorem ipsum','(17) 98809-7520','(17) 98804-5732','loremipsum@bradesco.com',000001,'teste'),(000005,'493043942','93420932039','JDNET TELECOM LTDA - CNPJ 15.160.333/0001-55','IBIRA','SP','lala','(90) 34920-0392','(39) 02390-2930','dlskd@dklsdk.com',000001,NULL);
/*!40000 ALTER TABLE `conta_bancaria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contas_pagar`
--

DROP TABLE IF EXISTS `contas_pagar`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `contas_pagar` (
  `cont_id` int(6) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `cont_cod_grupo_despesa` int(6) unsigned zerofill NOT NULL,
  `cont_cod_lancamento_cabecalho` int(6) unsigned zerofill NOT NULL,
  `cont_cod_despesa` int(6) unsigned zerofill NOT NULL,
  `cont_cod_fornecedor` int(6) unsigned zerofill NOT NULL,
  `cont_data` date DEFAULT NULL,
  `cont_valor_total` float(15,2) DEFAULT NULL,
  `cont_num_parcela` varchar(10) DEFAULT NULL,
  `cont_data_vencimento` date DEFAULT NULL,
  `cont_valor_parcela` float(15,2) DEFAULT NULL,
  `cont_data_pagamento` date DEFAULT NULL,
  `cont_valor_pago` float(15,2) DEFAULT NULL,
  `cont_valor_juros` float(15,2) DEFAULT NULL,
  PRIMARY KEY (`cont_id`),
  KEY `cont_cod_lancamento_cabecalho` (`cont_cod_lancamento_cabecalho`),
  KEY `cont_cod_grupo_despesa` (`cont_cod_grupo_despesa`),
  KEY `cont_cod_fornecedor` (`cont_cod_fornecedor`),
  CONSTRAINT `contas_pagar_ibfk_1` FOREIGN KEY (`cont_cod_grupo_despesa`) REFERENCES `cadastro_grupo_despesa` (`grupodesp_id`),
  CONSTRAINT `contas_pagar_ibfk_2` FOREIGN KEY (`cont_cod_lancamento_cabecalho`) REFERENCES `lancamento_compra_cabecalho` (`lancabec_id`) ON DELETE CASCADE,
  CONSTRAINT `contas_pagar_ibfk_3` FOREIGN KEY (`cont_cod_grupo_despesa`) REFERENCES `cadastro_despesa` (`desp_id`),
  CONSTRAINT `contas_pagar_ibfk_4` FOREIGN KEY (`cont_cod_fornecedor`) REFERENCES `cadastro_fornecedor` (`for_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contas_pagar`
--

LOCK TABLES `contas_pagar` WRITE;
/*!40000 ALTER TABLE `contas_pagar` DISABLE KEYS */;
/*!40000 ALTER TABLE `contas_pagar` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contas_pagar_despesa_anexo`
--

DROP TABLE IF EXISTS `contas_pagar_despesa_anexo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `contas_pagar_despesa_anexo` (
  `contanex_id` int(6) NOT NULL AUTO_INCREMENT,
  `contanex_nome` varchar(150) DEFAULT NULL,
  `contanex_arquivo` varchar(200) DEFAULT NULL,
  `contanex_extensao` varchar(20) DEFAULT NULL,
  `contanex_tamanho` int(11) NOT NULL,
  `contanex_data_envio` datetime DEFAULT NULL,
  `contanex_obs` text,
  `contanex_cod_lancamento_despesa` int(6) unsigned zerofill NOT NULL,
  `contanex_cod_operador` int(6) unsigned zerofill NOT NULL,
  PRIMARY KEY (`contanex_id`),
  KEY `contanex_cod_lancamento_despesa` (`contanex_cod_lancamento_despesa`),
  KEY `contanex_cod_operador` (`contanex_cod_operador`),
  CONSTRAINT `contas_pagar_despesa_anexo_ibfk_1` FOREIGN KEY (`contanex_cod_lancamento_despesa`) REFERENCES `lancamento_despesa` (`lancdesp_id`),
  CONSTRAINT `contas_pagar_despesa_anexo_ibfk_2` FOREIGN KEY (`contanex_cod_operador`) REFERENCES `cadastro_operador` (`ope_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contas_pagar_despesa_anexo`
--

LOCK TABLES `contas_pagar_despesa_anexo` WRITE;
/*!40000 ALTER TABLE `contas_pagar_despesa_anexo` DISABLE KEYS */;
/*!40000 ALTER TABLE `contas_pagar_despesa_anexo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contas_receber`
--

DROP TABLE IF EXISTS `contas_receber`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `contas_receber` (
  `contrec_id` int(6) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `contrec_tipo_recebimento` int(1) NOT NULL,
  `contrec_data_vencimento` date DEFAULT NULL,
  `contrec_valor_parcela` float(15,2) NOT NULL,
  `contrec_valor_pago` float(15,2) DEFAULT NULL,
  `contrec_data_pago` date DEFAULT NULL,
  `contrec_tarifa` float(15,2) DEFAULT NULL,
  `contrec_tipo_contas_receber` int(1) DEFAULT NULL,
  `contrec_cod_atendimento_cabecalho` varchar(26) NOT NULL,
  `contrec_atraso` varchar(4) DEFAULT NULL,
  PRIMARY KEY (`contrec_id`),
  KEY `contrec_cod_atendimento_cabecalho` (`contrec_cod_atendimento_cabecalho`),
  CONSTRAINT `contas_receber_ibfk_1` FOREIGN KEY (`contrec_cod_atendimento_cabecalho`) REFERENCES `cliente_atendimento_cabecalho` (`atecabec_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contas_receber`
--

LOCK TABLES `contas_receber` WRITE;
/*!40000 ALTER TABLE `contas_receber` DISABLE KEYS */;
INSERT INTO `contas_receber` VALUES (000002,3,'2017-05-12',70.00,NULL,NULL,NULL,1,'20170313195535000004',NULL),(000003,5,'2017-05-20',217.17,NULL,NULL,NULL,1,'20170313195535000004',NULL),(000004,5,'2017-06-20',217.17,NULL,NULL,NULL,1,'20170313195535000004',NULL);
/*!40000 ALTER TABLE `contas_receber` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `controle_acesso`
--

DROP TABLE IF EXISTS `controle_acesso`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `controle_acesso` (
  `conac_id` int(6) NOT NULL AUTO_INCREMENT,
  `conac_grupo_despesa` tinyint(1) DEFAULT NULL,
  `conac_grupo_despesa_incluir` tinyint(1) DEFAULT NULL,
  `conac_grupo_despesa_alterar` tinyint(1) DEFAULT NULL,
  `conac_grupo_despesa_excluir` tinyint(1) DEFAULT NULL,
  `conac_grupo_despesa_imprimir` tinyint(1) DEFAULT NULL,
  `conac_grupo_receita` tinyint(1) DEFAULT NULL,
  `conac_grupo_receita_incluir` tinyint(1) DEFAULT NULL,
  `conac_grupo_receita_alterar` tinyint(1) DEFAULT NULL,
  `conac_grupo_receita_excluir` tinyint(1) DEFAULT NULL,
  `conac_grupo_receita_imprimir` tinyint(1) DEFAULT NULL,
  `conac_grupo_cliente` tinyint(1) DEFAULT NULL,
  `conac_grupo_cliente_incluir` tinyint(1) DEFAULT NULL,
  `conac_grupo_cliente_alterar` tinyint(1) DEFAULT NULL,
  `conac_grupo_cliente_excluir` tinyint(1) DEFAULT NULL,
  `conac_grupo_cliente_imprimir` tinyint(1) DEFAULT NULL,
  `conac_tipo_atendimento` tinyint(1) DEFAULT NULL,
  `conac_tipo_atendimento_incluir` tinyint(1) DEFAULT NULL,
  `conac_tipo_atendimento_alterar` tinyint(1) DEFAULT NULL,
  `conac_tipo_atendimento_excluir` tinyint(1) DEFAULT NULL,
  `conac_tipo_atendimento_imprimir` tinyint(1) DEFAULT NULL,
  `conac_departamento` tinyint(1) DEFAULT NULL,
  `conac_departamento_incluir` tinyint(1) DEFAULT NULL,
  `conac_departamento_alterar` tinyint(1) DEFAULT NULL,
  `conac_departamento_excluir` tinyint(1) DEFAULT NULL,
  `conac_departamento_imprimir` tinyint(1) DEFAULT NULL,
  `conac_operador` tinyint(1) DEFAULT NULL,
  `conac_operador_incluir` tinyint(1) DEFAULT NULL,
  `conac_operador_alterar` tinyint(1) DEFAULT NULL,
  `conac_operador_excluir` tinyint(1) DEFAULT NULL,
  `conac_operador_imprimir` tinyint(1) DEFAULT NULL,
  `conac_fornecedor` tinyint(1) DEFAULT NULL,
  `conac_fornecedor_incluir` tinyint(1) DEFAULT NULL,
  `conac_fornecedor_alterar` tinyint(1) DEFAULT NULL,
  `conac_fornecedor_excluir` tinyint(1) DEFAULT NULL,
  `conac_fornecedor_imprimir` tinyint(1) DEFAULT NULL,
  `conac_funcionario` tinyint(1) DEFAULT NULL,
  `conac_funcionario_incluir` tinyint(1) DEFAULT NULL,
  `conac_funcionario_alterar` tinyint(1) DEFAULT NULL,
  `conac_funcionario_excluir` tinyint(1) DEFAULT NULL,
  `conac_funcionario_imprimir` tinyint(1) DEFAULT NULL,
  `conac_veiculo` tinyint(1) DEFAULT NULL,
  `conac_veiculo_incluir` tinyint(1) DEFAULT NULL,
  `conac_veiculo_alterar` tinyint(1) DEFAULT NULL,
  `conac_veiculo_excluir` tinyint(1) DEFAULT NULL,
  `conac_veiculo_imprimir` tinyint(1) DEFAULT NULL,
  `conac_servico` tinyint(1) DEFAULT NULL,
  `conac_servico_incluir` tinyint(1) DEFAULT NULL,
  `conac_servico_alterar` tinyint(1) DEFAULT NULL,
  `conac_servico_excluir` tinyint(1) DEFAULT NULL,
  `conac_servico_imprimir` tinyint(1) DEFAULT NULL,
  `conac_cliente` tinyint(1) DEFAULT NULL,
  `conac_cliente_incluir` tinyint(1) DEFAULT NULL,
  `conac_cliente_alterar` tinyint(1) DEFAULT NULL,
  `conac_cliente_excluir` tinyint(1) DEFAULT NULL,
  `conac_cliente_imprimir` tinyint(1) DEFAULT NULL,
  `conac_cliente_liberar` tinyint(1) DEFAULT NULL,
  `conac_cliente_reativar` tinyint(1) DEFAULT NULL,
  `conac_cliente_bloquear` tinyint(1) DEFAULT NULL,
  `conac_cliente_desativar` tinyint(1) DEFAULT NULL,
  `conac_cliente_total_clientes` tinyint(1) DEFAULT NULL,
  `conac_cliente_alterar_dia_pagamento` tinyint(1) DEFAULT NULL,
  `conac_cliente_alterar_valor_honorario` tinyint(1) DEFAULT NULL,
  `conac_cliente_alterar_grupo` tinyint(1) DEFAULT NULL,
  `conac_cliente_alterar_cnpj_cpf` tinyint(1) DEFAULT NULL,
  `conac_despesa` tinyint(1) DEFAULT NULL,
  `conac_despesa_incluir` tinyint(1) DEFAULT NULL,
  `conac_despesa_alterar` tinyint(1) DEFAULT NULL,
  `conac_despesa_excluir` tinyint(1) DEFAULT NULL,
  `conac_despesa_imprimir` tinyint(1) DEFAULT NULL,
  `conac_receita` tinyint(1) DEFAULT NULL,
  `conac_receita_incluir` tinyint(1) DEFAULT NULL,
  `conac_receita_alterar` tinyint(1) DEFAULT NULL,
  `conac_receita_excluir` tinyint(1) DEFAULT NULL,
  `conac_receita_imprimir` tinyint(1) DEFAULT NULL,
  `conac_auditoria` tinyint(1) DEFAULT NULL,
  `conac_auditoria_incluir` tinyint(1) DEFAULT NULL,
  `conac_auditoria_alterar` tinyint(1) DEFAULT NULL,
  `conac_auditoria_excluir` tinyint(1) DEFAULT NULL,
  `conac_auditoria_imprimir` tinyint(1) DEFAULT NULL,
  `conac_cod_operador` int(6) unsigned zerofill NOT NULL,
  PRIMARY KEY (`conac_id`),
  KEY `conac_cod_operador` (`conac_cod_operador`),
  CONSTRAINT `controle_acesso_ibfk_1` FOREIGN KEY (`conac_cod_operador`) REFERENCES `cadastro_operador` (`ope_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `controle_acesso`
--

LOCK TABLES `controle_acesso` WRITE;
/*!40000 ALTER TABLE `controle_acesso` DISABLE KEYS */;
INSERT INTO `controle_acesso` VALUES (1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,NULL,NULL,NULL,NULL,000001),(4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,NULL,NULL,NULL,NULL,000001),(5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,NULL,NULL,NULL,NULL,000003),(6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,000004),(8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,NULL,NULL,NULL,NULL,000001),(9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,NULL,NULL,NULL,NULL,000001),(11,NULL,1,1,1,1,NULL,1,1,1,1,1,1,1,1,1,NULL,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,NULL,NULL,NULL,NULL,000003),(12,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,NULL,NULL,NULL,NULL,000004),(13,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,000005);
/*!40000 ALTER TABLE `controle_acesso` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `custo_fixo`
--

DROP TABLE IF EXISTS `custo_fixo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `custo_fixo` (
  `custfix_id` int(6) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `custfix_cod_lancamento` int(6) unsigned zerofill NOT NULL,
  `custfix_nota_fiscal` varchar(30) DEFAULT NULL,
  `custfix_data_vencimento` date NOT NULL,
  `custfix_data_pagamento` date DEFAULT NULL,
  `custfix_valor_pago` float(15,2) DEFAULT NULL,
  `custfix_valor_juros` float(15,2) DEFAULT NULL,
  `custfix_valor_parcela` float(15,2) DEFAULT NULL,
  `custfix_historico` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`custfix_id`),
  KEY `custfix_cod_lancamento` (`custfix_cod_lancamento`),
  CONSTRAINT `custo_fixo_ibfk_1` FOREIGN KEY (`custfix_cod_lancamento`) REFERENCES `lancamento_custo_fixo` (`lancustfix_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `custo_fixo`
--

LOCK TABLES `custo_fixo` WRITE;
/*!40000 ALTER TABLE `custo_fixo` DISABLE KEYS */;
INSERT INTO `custo_fixo` VALUES (000002,000002,NULL,'2017-03-15',NULL,NULL,NULL,800.00,NULL),(000003,000002,'182565296','2017-04-20','2017-02-14',850.00,0.00,850.00,NULL),(000004,000002,'256256','2017-10-20','2017-02-14',900.00,0.00,NULL,NULL),(000005,000002,'48556','2017-06-20','2017-02-14',899.00,0.00,899.00,NULL),(000006,000002,'956229652','2017-08-20','2017-02-14',950.00,0.00,950.00,NULL),(000008,000003,NULL,'2017-03-30',NULL,NULL,NULL,150.00,NULL);
/*!40000 ALTER TABLE `custo_fixo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `custo_fixo_deletado`
--

DROP TABLE IF EXISTS `custo_fixo_deletado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `custo_fixo_deletado` (
  `custfixdel_id` int(6) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `custfixdel_cod_parcela` int(6) unsigned zerofill DEFAULT NULL,
  `custfixdel_data_vencimento` date DEFAULT NULL,
  `custfixdel_cod_lancamento` int(6) unsigned zerofill NOT NULL,
  PRIMARY KEY (`custfixdel_id`),
  KEY `custfixdel_cod_lancamento` (`custfixdel_cod_lancamento`),
  CONSTRAINT `custo_fixo_deletado_ibfk_1` FOREIGN KEY (`custfixdel_cod_lancamento`) REFERENCES `lancamento_custo_fixo` (`lancustfix_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `custo_fixo_deletado`
--

LOCK TABLES `custo_fixo_deletado` WRITE;
/*!40000 ALTER TABLE `custo_fixo_deletado` DISABLE KEYS */;
/*!40000 ALTER TABLE `custo_fixo_deletado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `custo_variavel`
--

DROP TABLE IF EXISTS `custo_variavel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `custo_variavel` (
  `custvar_id` int(6) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `custvar_cod_lancamento` int(6) unsigned zerofill DEFAULT NULL,
  `custvar_cod_grupo_despesa` int(6) unsigned zerofill NOT NULL,
  `custvar_cod_despesa` int(6) unsigned zerofill NOT NULL,
  `custvar_cod_fornecedor` int(6) unsigned zerofill DEFAULT NULL,
  `custvar_cod_funcionario` int(6) unsigned zerofill DEFAULT NULL,
  `custvar_data` date DEFAULT NULL,
  `custvar_valor_total` float(15,2) DEFAULT NULL,
  `custvar_num_parcela` varchar(10) DEFAULT NULL,
  `custvar_data_vencimento` date DEFAULT NULL,
  `custvar_valor_parcela` float(15,2) DEFAULT NULL,
  `custvar_data_pagamento` date DEFAULT NULL,
  `custvar_valor_pago` float(15,3) DEFAULT NULL,
  `custvar_valor_juros` float(15,2) DEFAULT NULL,
  `custvar_cod_lancamento_compra` int(6) unsigned zerofill DEFAULT NULL,
  PRIMARY KEY (`custvar_id`),
  KEY `custvar_cod_lancamento` (`custvar_cod_lancamento`),
  KEY `custvar_cod_grupo_despesa` (`custvar_cod_grupo_despesa`),
  KEY `custvar_cod_despesa` (`custvar_cod_despesa`),
  KEY `custvar_cod_fornecedor` (`custvar_cod_fornecedor`),
  KEY `custvar_cod_funcionario` (`custvar_cod_funcionario`),
  CONSTRAINT `custo_variavel_ibfk_2` FOREIGN KEY (`custvar_cod_grupo_despesa`) REFERENCES `cadastro_grupo_despesa` (`grupodesp_id`),
  CONSTRAINT `custo_variavel_ibfk_3` FOREIGN KEY (`custvar_cod_despesa`) REFERENCES `cadastro_despesa` (`desp_id`),
  CONSTRAINT `custo_variavel_ibfk_4` FOREIGN KEY (`custvar_cod_fornecedor`) REFERENCES `cadastro_fornecedor` (`for_id`),
  CONSTRAINT `custo_variavel_ibfk_5` FOREIGN KEY (`custvar_cod_funcionario`) REFERENCES `cadastro_funcionario` (`fun_id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `custo_variavel`
--

LOCK TABLES `custo_variavel` WRITE;
/*!40000 ALTER TABLE `custo_variavel` DISABLE KEYS */;
INSERT INTO `custo_variavel` VALUES (000020,NULL,000001,000001,000003,NULL,'2017-03-08',164.55,'1/3','2017-03-08',54.85,NULL,NULL,NULL,000007),(000021,NULL,000001,000001,000003,NULL,'2017-03-08',164.55,'2/3','2017-04-08',54.85,NULL,NULL,NULL,000007),(000022,NULL,000001,000001,000003,NULL,'2017-03-08',164.55,'3/3','2017-05-08',54.85,NULL,NULL,NULL,000007),(000023,NULL,000001,000001,000002,NULL,'2017-03-13',15543.20,'1/5','2017-03-13',3108.64,'1995-12-08',2121.210,0.00,000008),(000024,NULL,000001,000001,000002,NULL,'2017-03-13',15543.20,'2/5','2017-04-13',3108.64,NULL,NULL,NULL,000008),(000025,NULL,000001,000001,000002,NULL,'2017-03-13',15543.20,'3/5','2017-05-13',3108.64,NULL,NULL,NULL,000008),(000026,NULL,000001,000001,000002,NULL,'2017-03-13',15543.20,'4/5','2017-06-13',3108.64,NULL,NULL,NULL,000008),(000027,NULL,000001,000001,000002,NULL,'2017-03-13',15543.20,'5/5','2017-07-13',3108.64,NULL,NULL,NULL,000008);
/*!40000 ALTER TABLE `custo_variavel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `historico_cliente`
--

DROP TABLE IF EXISTS `historico_cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `historico_cliente` (
  `hist_id` int(6) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `hist_data` datetime DEFAULT NULL,
  `hist_acao` tinyint(1) DEFAULT NULL,
  `hist_hostname` varchar(50) DEFAULT NULL,
  `hist_ip_interno` varchar(20) DEFAULT NULL,
  `hist_ip_externo` varchar(20) DEFAULT NULL,
  `hist_nome_operador` varchar(50) DEFAULT NULL,
  `hist_msg` text,
  `hist_cod_operador` int(6) unsigned zerofill NOT NULL,
  `hist_cod_cliente` int(6) unsigned zerofill NOT NULL,
  PRIMARY KEY (`hist_id`),
  KEY `hist_cod_operador` (`hist_cod_operador`),
  KEY `hist_cod_cliente` (`hist_cod_cliente`),
  CONSTRAINT `historico_cliente_ibfk_1` FOREIGN KEY (`hist_cod_operador`) REFERENCES `cadastro_operador` (`ope_id`),
  CONSTRAINT `historico_cliente_ibfk_2` FOREIGN KEY (`hist_cod_cliente`) REFERENCES `cadastro_cliente` (`cli_id`)
) ENGINE=InnoDB AUTO_INCREMENT=160 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `historico_cliente`
--

LOCK TABLES `historico_cliente` WRITE;
/*!40000 ALTER TABLE `historico_cliente` DISABLE KEYS */;
INSERT INTO `historico_cliente` VALUES (000001,'2016-12-23 15:03:04',1,NULL,NULL,'187.49.247.65','JESUS RODRIGO ALVES','O operador `jesusrodrigo@jdnet.com.br` inseriu o cliente `JOSE`.',000003,000002),(000002,'2016-12-23 15:07:52',1,NULL,NULL,'187.49.247.65','JESUS RODRIGO ALVES','O operador `jesusrodrigo@jdnet.com.br` inseriu o cliente `JOÃƒO`.',000003,000003),(000003,'2016-12-23 15:10:37',1,NULL,NULL,'187.49.247.65','BRUNO SARTORI','O operador `brunosartori` inseriu o cliente `LOREM `.',000004,000004),(000004,'2016-12-23 15:12:37',1,NULL,NULL,'187.49.247.65','BRUNO SARTORI','O operador `brunosartori` inseriu o cliente `DSDSD`.',000004,000005),(000005,'2016-12-23 15:14:19',1,NULL,NULL,'187.49.247.65','BRUNO SARTORI','O operador `brunosartori` inseriu o cliente `DSDSDSDSDSD`.',000004,000006),(000006,'2016-12-23 15:17:06',1,NULL,NULL,'187.49.247.65','BRUNO SARTORI','O operador `brunosartori` inseriu o cliente `LOREM IPSUM`.',000004,000007),(000007,'2016-12-23 15:18:47',1,NULL,NULL,'187.49.247.65','BRUNO SARTORI','O operador `brunosartori` inseriu o cliente `TATIANE`.',000004,000008),(000008,'2016-12-23 15:20:52',1,NULL,NULL,'187.49.247.65','BRUNO SARTORI','O operador `brunosartori` inseriu o cliente `DSDSDSDSD`.',000004,000009),(000009,'2016-12-23 15:22:41',1,NULL,NULL,'187.49.247.65','BRUNO SARTORI','O operador `brunosartori` inseriu o cliente `RUBINHO BARRICHELO`.',000004,000010),(000010,'2016-12-23 15:30:40',1,NULL,NULL,'187.49.247.65','BRUNO SARTORI','O operador `brunosartori` inseriu o cliente `PREXECUM VITALIS`.',000004,000011),(000011,'2016-12-23 15:35:14',1,NULL,NULL,'187.49.247.65','JESUS RODRIGO ALVES','O operador `jesusrodrigo@jdnet.com.br` inseriu o cliente `JKJLK`.',000003,000012),(000012,'2016-12-23 15:35:19',1,NULL,NULL,'187.49.247.65','JESUS RODRIGO ALVES','O operador `jesusrodrigo@jdnet.com.br` inseriu o cliente `JKJLK`.',000003,000013),(000013,'2016-12-23 15:36:56',9,NULL,NULL,'187.49.247.65','JESUS RODRIGO ALVES','O operador `jesusrodrigo@jdnet.com.br` alterou dados no cadastro do cliente `LOREM IPSUM`.',000003,000007),(000014,'2016-12-23 15:36:57',9,NULL,NULL,'187.49.247.65','JESUS RODRIGO ALVES','O operador `jesusrodrigo@jdnet.com.br` alterou dados no cadastro do cliente `LOREM IPSUM`.',000003,000007),(000015,'2016-12-23 15:36:57',9,NULL,NULL,'187.49.247.65','JESUS RODRIGO ALVES','O operador `jesusrodrigo@jdnet.com.br` alterou dados no cadastro do cliente `LOREM IPSUM`.',000003,000007),(000016,'2016-12-23 15:36:58',9,NULL,NULL,'187.49.247.65','JESUS RODRIGO ALVES','O operador `jesusrodrigo@jdnet.com.br` alterou dados no cadastro do cliente `LOREM IPSUM`.',000003,000007),(000017,'2016-12-23 15:36:59',9,NULL,NULL,'187.49.247.65','JESUS RODRIGO ALVES','O operador `jesusrodrigo@jdnet.com.br` alterou dados no cadastro do cliente `LOREM IPSUM`.',000003,000007),(000018,'2016-12-23 15:36:59',9,NULL,NULL,'187.49.247.65','JESUS RODRIGO ALVES','O operador `jesusrodrigo@jdnet.com.br` alterou dados no cadastro do cliente `LOREM IPSUM`.',000003,000007),(000019,'2016-12-23 15:37:00',9,NULL,NULL,'187.49.247.65','JESUS RODRIGO ALVES','O operador `jesusrodrigo@jdnet.com.br` alterou dados no cadastro do cliente `LOREM IPSUM`.',000003,000007),(000020,'2016-12-23 15:37:00',9,NULL,NULL,'187.49.247.65','JESUS RODRIGO ALVES','O operador `jesusrodrigo@jdnet.com.br` alterou dados no cadastro do cliente `LOREM IPSUM`.',000003,000007),(000021,'2016-12-23 15:37:00',9,NULL,NULL,'187.49.247.65','JESUS RODRIGO ALVES','O operador `jesusrodrigo@jdnet.com.br` alterou dados no cadastro do cliente `LOREM IPSUM`.',000003,000007),(000022,'2016-12-23 15:37:01',9,NULL,NULL,'187.49.247.65','JESUS RODRIGO ALVES','O operador `jesusrodrigo@jdnet.com.br` alterou dados no cadastro do cliente `LOREM IPSUM`.',000003,000007),(000023,'2016-12-23 15:37:01',9,NULL,NULL,'187.49.247.65','JESUS RODRIGO ALVES','O operador `jesusrodrigo@jdnet.com.br` alterou dados no cadastro do cliente `LOREM IPSUM`.',000003,000007),(000024,'2016-12-23 15:37:01',9,NULL,NULL,'187.49.247.65','JESUS RODRIGO ALVES','O operador `jesusrodrigo@jdnet.com.br` alterou dados no cadastro do cliente `LOREM IPSUM`.',000003,000007),(000025,'2016-12-23 15:37:01',9,NULL,NULL,'187.49.247.65','JESUS RODRIGO ALVES','O operador `jesusrodrigo@jdnet.com.br` alterou dados no cadastro do cliente `LOREM IPSUM`.',000003,000007),(000026,'2016-12-23 15:37:02',9,NULL,NULL,'187.49.247.65','JESUS RODRIGO ALVES','O operador `jesusrodrigo@jdnet.com.br` alterou dados no cadastro do cliente `LOREM IPSUM`.',000003,000007),(000027,'2016-12-23 15:37:02',9,NULL,NULL,'187.49.247.65','JESUS RODRIGO ALVES','O operador `jesusrodrigo@jdnet.com.br` alterou dados no cadastro do cliente `LOREM IPSUM`.',000003,000007),(000028,'2016-12-23 15:37:02',9,NULL,NULL,'187.49.247.65','JESUS RODRIGO ALVES','O operador `jesusrodrigo@jdnet.com.br` alterou dados no cadastro do cliente `LOREM IPSUM`.',000003,000007),(000029,'2016-12-23 15:37:02',9,NULL,NULL,'187.49.247.65','JESUS RODRIGO ALVES','O operador `jesusrodrigo@jdnet.com.br` alterou dados no cadastro do cliente `LOREM IPSUM`.',000003,000007),(000030,'2016-12-23 15:37:03',9,NULL,NULL,'187.49.247.65','JESUS RODRIGO ALVES','O operador `jesusrodrigo@jdnet.com.br` alterou dados no cadastro do cliente `LOREM IPSUM`.',000003,000007),(000031,'2016-12-23 15:37:03',9,NULL,NULL,'187.49.247.65','JESUS RODRIGO ALVES','O operador `jesusrodrigo@jdnet.com.br` alterou dados no cadastro do cliente `LOREM IPSUM`.',000003,000007),(000032,'2016-12-23 15:37:03',9,NULL,NULL,'187.49.247.65','JESUS RODRIGO ALVES','O operador `jesusrodrigo@jdnet.com.br` alterou dados no cadastro do cliente `LOREM IPSUM`.',000003,000007),(000033,'2016-12-23 15:37:03',9,NULL,NULL,'187.49.247.65','JESUS RODRIGO ALVES','O operador `jesusrodrigo@jdnet.com.br` alterou dados no cadastro do cliente `LOREM IPSUM`.',000003,000007),(000034,'2016-12-23 15:37:04',9,NULL,NULL,'187.49.247.65','JESUS RODRIGO ALVES','O operador `jesusrodrigo@jdnet.com.br` alterou dados no cadastro do cliente `LOREM IPSUM`.',000003,000007),(000035,'2016-12-23 15:48:34',1,NULL,NULL,'187.49.247.65','JESUS RODRIGO ALVES','O operador `jesusrodrigo@jdnet.com.br` inseriu o cliente `TESTE 15:44`.',000003,000014),(000036,'2016-12-26 07:42:48',1,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` inseriu o cliente `LOREM IPSUM`.',000004,000015),(000037,'2016-12-26 07:43:46',1,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` inseriu o cliente `LOREM IPSUM DOLOR SIT AMET`.',000004,000016),(000038,'2016-12-26 07:47:42',1,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` inseriu o cliente `LOREM IPSUM DOLOR SIT AMET`.',000004,000017),(000039,'2016-12-26 07:52:11',9,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` alterou dados no cadastro do cliente `CUQUICHAICHANGUE`.',000004,000011),(000040,'2016-12-26 07:52:53',9,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` alterou dados no cadastro do cliente `PREXECUM VITALIS`.',000004,000011),(000041,'2016-12-26 09:08:26',1,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` inseriu o cliente `DANTE`.',000004,000018),(000042,'2016-12-26 09:08:34',9,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` alterou dados no cadastro do cliente `VIRGIL`.',000004,000018),(000043,'2016-12-26 09:11:12',1,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` inseriu o cliente `VIRGIL`.',000004,000019),(000044,'2016-12-26 09:11:24',9,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` alterou dados no cadastro do cliente `VIRGIL LALALAL`.',000004,000019),(000045,'2016-12-26 09:15:17',1,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` inseriu o cliente `LOREM IPSUM`.',000004,000020),(000046,'2016-12-26 16:42:40',9,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` alterou dados no cadastro do cliente `RUBINHO &  BARRICHELO`.',000004,000010),(000047,'2016-12-27 08:53:07',1,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` inseriu o cliente `BRUNOSARTORI`.',000004,000021),(000048,'2016-12-29 11:06:51',1,NULL,NULL,'187.49.247.65','JESUS RODRIGO ALVES','O operador `jesusrodrigo@jdnet.com.br` inseriu o cliente `TESTE 11:02`.',000003,000022),(000049,'2016-12-29 11:06:54',1,NULL,NULL,'187.49.247.65','JESUS RODRIGO ALVES','O operador `jesusrodrigo@jdnet.com.br` inseriu o cliente `TESTE 11:02`.',000003,000023),(000050,'2016-12-29 11:06:54',1,NULL,NULL,'187.49.247.65','JESUS RODRIGO ALVES','O operador `jesusrodrigo@jdnet.com.br` inseriu o cliente `TESTE 11:02`.',000003,000024),(000051,'2016-12-29 11:06:55',1,NULL,NULL,'187.49.247.65','JESUS RODRIGO ALVES','O operador `jesusrodrigo@jdnet.com.br` inseriu o cliente `TESTE 11:02`.',000003,000025),(000052,'2016-12-29 11:06:56',1,NULL,NULL,'187.49.247.65','JESUS RODRIGO ALVES','O operador `jesusrodrigo@jdnet.com.br` inseriu o cliente `TESTE 11:02`.',000003,000026),(000053,'2016-12-29 11:06:56',1,NULL,NULL,'187.49.247.65','JESUS RODRIGO ALVES','O operador `jesusrodrigo@jdnet.com.br` inseriu o cliente `TESTE 11:02`.',000003,000027),(000054,'2016-12-29 11:06:57',1,NULL,NULL,'187.49.247.65','JESUS RODRIGO ALVES','O operador `jesusrodrigo@jdnet.com.br` inseriu o cliente `TESTE 11:02`.',000003,000028),(000055,'2016-12-29 11:07:01',1,NULL,NULL,'187.49.247.65','JESUS RODRIGO ALVES','O operador `jesusrodrigo@jdnet.com.br` inseriu o cliente `TESTE 11:02`.',000003,000029),(000056,'2016-12-29 11:07:01',1,NULL,NULL,'187.49.247.65','JESUS RODRIGO ALVES','O operador `jesusrodrigo@jdnet.com.br` inseriu o cliente `TESTE 11:02`.',000003,000030),(000057,'2016-12-29 11:07:02',1,NULL,NULL,'187.49.247.65','JESUS RODRIGO ALVES','O operador `jesusrodrigo@jdnet.com.br` inseriu o cliente `TESTE 11:02`.',000003,000031),(000058,'2016-12-29 11:07:02',1,NULL,NULL,'187.49.247.65','JESUS RODRIGO ALVES','O operador `jesusrodrigo@jdnet.com.br` inseriu o cliente `TESTE 11:02`.',000003,000032),(000059,'2016-12-29 11:07:02',1,NULL,NULL,'187.49.247.65','JESUS RODRIGO ALVES','O operador `jesusrodrigo@jdnet.com.br` inseriu o cliente `TESTE 11:02`.',000003,000033),(000060,'2016-12-29 11:07:03',1,NULL,NULL,'187.49.247.65','JESUS RODRIGO ALVES','O operador `jesusrodrigo@jdnet.com.br` inseriu o cliente `TESTE 11:02`.',000003,000034),(000061,'2016-12-29 11:07:03',1,NULL,NULL,'187.49.247.65','JESUS RODRIGO ALVES','O operador `jesusrodrigo@jdnet.com.br` inseriu o cliente `TESTE 11:02`.',000003,000035),(000062,'2016-12-29 11:07:03',1,NULL,NULL,'187.49.247.65','JESUS RODRIGO ALVES','O operador `jesusrodrigo@jdnet.com.br` inseriu o cliente `TESTE 11:02`.',000003,000036),(000063,'2016-12-29 11:07:03',1,NULL,NULL,'187.49.247.65','JESUS RODRIGO ALVES','O operador `jesusrodrigo@jdnet.com.br` inseriu o cliente `TESTE 11:02`.',000003,000037),(000064,'2016-12-29 11:07:04',1,NULL,NULL,'187.49.247.65','JESUS RODRIGO ALVES','O operador `jesusrodrigo@jdnet.com.br` inseriu o cliente `TESTE 11:02`.',000003,000038),(000065,'2016-12-29 11:07:04',1,NULL,NULL,'187.49.247.65','JESUS RODRIGO ALVES','O operador `jesusrodrigo@jdnet.com.br` inseriu o cliente `TESTE 11:02`.',000003,000039),(000066,'2016-12-29 11:07:04',1,NULL,NULL,'187.49.247.65','JESUS RODRIGO ALVES','O operador `jesusrodrigo@jdnet.com.br` inseriu o cliente `TESTE 11:02`.',000003,000040),(000067,'2016-12-29 11:07:04',1,NULL,NULL,'187.49.247.65','JESUS RODRIGO ALVES','O operador `jesusrodrigo@jdnet.com.br` inseriu o cliente `TESTE 11:02`.',000003,000041),(000068,'2016-12-29 11:07:04',1,NULL,NULL,'187.49.247.65','JESUS RODRIGO ALVES','O operador `jesusrodrigo@jdnet.com.br` inseriu o cliente `TESTE 11:02`.',000003,000042),(000069,'2016-12-29 11:06:22',1,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` inseriu o cliente `LOREM IPSUM`.',000004,000043),(000070,'2016-12-29 11:06:25',1,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` inseriu o cliente `LOREM IPSUM`.',000004,000044),(000071,'2016-12-29 11:08:35',1,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` inseriu o cliente `LOREM IPSUM`.',000004,000045),(000072,'2016-12-29 13:41:41',9,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` alterou dados no cadastro do cliente `TESTE 16:41`.',000004,000037),(000073,'2016-12-29 13:51:28',6,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` desativou o cliente `BRUNO SARTORI`.',000004,000001),(000074,'2016-12-29 13:52:15',5,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` bloqueou o cliente `BRUNO SARTORI`.',000004,000001),(000075,'2016-12-29 13:52:33',6,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` desativou o cliente `BRUNO SARTORI`.',000004,000001),(000076,'2016-12-29 13:52:45',6,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` desativou o cliente `JOÃƒO`.',000004,000003),(000077,'2016-12-29 13:55:55',5,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` bloqueou o cliente `DSDSD`.',000004,000005),(000078,'2016-12-29 13:56:06',2,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` liberou o cliente `DSDSD`.',000004,000005),(000079,'2016-12-29 14:25:49',5,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` bloqueou o cliente `LOREM IPSUM`.',000004,000015),(000080,'2016-12-29 14:35:25',2,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` liberou o cliente `TATIANE`.',000004,000008),(000081,'2016-12-29 14:41:24',2,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` liberou o cliente `LOREM IPSUM`.',000004,000015),(000082,'2016-12-29 14:43:07',5,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` bloqueou o cliente `LOREM IPSUM`.',000004,000015),(000083,'2016-12-29 14:44:16',5,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` bloqueou o cliente `JKJLK`.',000004,000013),(000084,'2016-12-29 14:44:41',2,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` liberou o cliente `LOREM IPSUM`.',000004,000015),(000085,'2016-12-29 14:47:15',5,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` bloqueou o cliente `LOREM IPSUM`.',000004,000007),(000086,'2016-12-29 14:50:03',5,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` bloqueou o cliente `JKJLK`.',000004,000013),(000087,'2016-12-29 14:50:48',2,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` liberou o cliente `JKJLK`.',000004,000013),(000088,'2016-12-29 14:50:53',5,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` bloqueou o cliente `JKJLK`.',000004,000013),(000089,'2016-12-29 14:58:11',5,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` bloqueou o cliente `VIRGIL`.',000004,000019),(000090,'2016-12-29 14:58:19',2,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` liberou o cliente `VIRGIL`.',000004,000019),(000091,'2016-12-29 14:58:30',5,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` bloqueou o cliente `VIRGIL`.',000004,000019),(000092,'2016-12-30 07:12:14',5,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` bloqueou o cliente `PREXECUM VITALIS`.',000004,000011),(000093,'2016-12-30 07:15:35',2,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` liberou o cliente `PREXECUM VITALIS`.',000004,000011),(000094,'2016-12-30 07:15:48',5,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` bloqueou o cliente `PREXECUM VITALIS`.',000004,000011),(000095,'2016-12-30 07:15:52',2,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` liberou o cliente `PREXECUM VITALIS`.',000004,000011),(000096,'2016-12-30 07:15:57',5,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` bloqueou o cliente `PREXECUM VITALIS`.',000004,000011),(000097,'2016-12-30 07:17:24',5,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` bloqueou o cliente `PREXECUM VITALIS`.',000004,000011),(000098,'2017-01-04 09:42:22',2,NULL,NULL,'187.49.247.65','LUCAS UMBIGO ','O operador `lucasumbigo` liberou o cliente `PREXECUM VITALIS`.',000005,000011),(000099,'2017-01-04 09:42:28',5,NULL,NULL,'187.49.247.65','LUCAS UMBIGO ','O operador `lucasumbigo` bloqueou o cliente `PREXECUM VITALIS`.',000005,000011),(000100,'2017-01-24 08:15:55',1,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` inseriu o cliente `LOREM IPSUM DOLOR SIT AMET`.',000004,000046),(000101,'2017-01-24 08:37:05',1,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` inseriu o cliente `LALALAL`.',000004,000047),(000102,'2017-01-24 08:50:13',1,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` inseriu o cliente `BLABLABLA`.',000004,000048),(000103,'2017-01-24 09:01:55',1,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` inseriu o cliente `LARARUI`.',000004,000049),(000104,'2017-01-24 09:13:38',1,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` inseriu o cliente `FDFDFDF`.',000004,000050),(000105,'2017-01-24 09:18:59',1,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` inseriu o cliente `FDFDF`.',000004,000001),(000106,'2017-01-24 09:26:12',1,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` inseriu o cliente `LOREM IPSUM DOLOR SIT AMET.`.',000004,000002),(000107,'2017-01-27 08:06:44',9,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` alterou dados no cadastro do cliente `BRUNO SARTORI`.',000004,000001),(000108,'2017-01-27 08:28:54',1,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` inseriu o cliente `BRUNO SARTORI`.',000004,000003),(000109,'2017-01-27 08:36:00',1,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` inseriu o cliente `LOREM IPSUM DOLOR SIT AMET`.',000004,000004),(000110,'2017-01-27 08:48:17',1,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` inseriu o cliente `BRUNO SARTORI`.',000004,000005),(000111,'2017-01-31 14:31:03',5,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` bloqueou o cliente `BRUNO SARTORI`.',000004,000003),(000112,'2017-01-31 15:07:01',6,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` desativou o cliente `LOREM IPSUM DOLOR SIT AMET.`.',000004,000002),(000113,'2017-01-31 15:17:17',5,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` bloqueou o cliente `BRUNO SARTORI`.',000004,000005),(000114,'2017-01-31 15:17:40',9,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` alterou dados no cadastro do cliente `BRUNO SARTORIDSDSDSD`.',000004,000003),(000115,'2017-02-01 10:06:41',2,NULL,'192.168.9.23\n','127.0.0.1','JESUS RODRIGO ALVES','O operador `jesusrodrigo@jdnet.com.br` liberou o cliente `LOREM IPSUM DOLOR SIT AMET`.',000003,000004),(000116,'2017-02-02 10:04:58',1,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` inseriu o cliente `PEDRO ALVARES CABRAL`.',000004,000006),(000117,'2017-02-02 10:11:07',9,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` alterou dados no cadastro do cliente `PEDRO ALVARES CABRAL`.',000004,000006),(000118,'2017-02-06 07:52:17',6,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` desativou o cliente `PEDRO ALVARES CABRAL`.',000004,000006),(000119,'2017-02-16 15:35:11',9,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` alterou dados no cadastro do cliente `BRUNO SARTORI`.',000004,000001),(000120,'2017-02-16 15:42:37',9,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` alterou dados no cadastro do cliente `BRUNO SARTORI`.',000004,000001),(000121,'2017-02-17 09:26:13',1,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` inseriu o cliente `TATIANE DOS SANTOS MURGI`.',000004,000007),(000122,'2017-02-17 13:05:12',9,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` alterou dados no cadastro do cliente `BRUNO SARTORI`.',000004,000001),(000123,'2017-02-17 13:08:35',9,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` alterou dados no cadastro do cliente `BRUNO SARTORI`.',000004,000001),(000124,'2017-02-17 13:25:16',9,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` alterou dados no cadastro do cliente `BRUNO SARTORI`.',000004,000001),(000125,'2017-02-17 13:45:09',9,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` alterou dados no cadastro do cliente `BRUNO SARTORI`.',000004,000001),(000126,'2017-02-17 13:45:52',9,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` alterou dados no cadastro do cliente `BRUNO SARTORI`.',000004,000001),(000127,'2017-02-17 13:49:23',9,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` alterou dados no cadastro do cliente `BRUNO SARTORI`.',000004,000001),(000128,'2017-02-17 13:49:31',9,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` alterou dados no cadastro do cliente `BRUNO SARTORI`.',000004,000001),(000129,'2017-02-17 13:53:35',9,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` alterou dados no cadastro do cliente `BRUNO SARTORI`.',000004,000001),(000130,'2017-02-17 13:53:45',9,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` alterou dados no cadastro do cliente `BRUNO SARTORI`.',000004,000001),(000131,'2017-02-17 13:54:29',9,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` alterou dados no cadastro do cliente `BRUNO SARTORI`.',000004,000001),(000132,'2017-02-17 13:56:46',9,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` alterou dados no cadastro do cliente `BRUNO SARTORI`.',000004,000001),(000133,'2017-02-17 14:02:21',9,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` alterou dados no cadastro do cliente `BRUNO SARTORI`.',000004,000001),(000134,'2017-02-17 14:03:42',9,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` alterou dados no cadastro do cliente `BRUNO SARTORI`.',000004,000001),(000135,'2017-02-17 14:03:58',9,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` alterou dados no cadastro do cliente `BRUNO SARTORI`.',000004,000001),(000136,'2017-02-17 14:16:01',9,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` alterou dados no cadastro do cliente `BRUNO SARTORI`.',000004,000001),(000137,'2017-02-17 14:17:23',9,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` alterou dados no cadastro do cliente `BRUNO SARTORI`.',000004,000001),(000138,'2017-02-17 14:17:47',9,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` alterou dados no cadastro do cliente `BRUNO SARTORI`.',000004,000001),(000139,'2017-02-17 14:18:10',9,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` alterou dados no cadastro do cliente `BRUNO SARTORI`.',000004,000001),(000140,'2017-02-17 14:18:25',9,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` alterou dados no cadastro do cliente `BRUNO SARTORI`.',000004,000001),(000141,'2017-02-20 10:45:06',1,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` inseriu o cliente `CARLOS ALBERTO SARTORI`.',000004,000008),(000142,'2017-02-20 11:02:57',1,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` inseriu o cliente `UMBRELLA CORPORATION`.',000004,000009),(000143,'2017-02-20 11:19:14',9,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` alterou dados no cadastro do cliente `CARLOS ALBERTO SARTORI`.',000004,000008),(000144,'2017-02-20 11:26:58',1,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` inseriu o cliente `FACEBOOK INC`.',000004,000010),(000145,'2017-02-21 11:46:46',1,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` inseriu o cliente `DSDSDSDSD`.',000004,000001),(000146,'2017-02-21 12:46:07',9,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` alterou dados no cadastro do cliente `DSDSDSDSD`.',000004,000001),(000147,'2017-02-22 14:42:32',9,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` alterou dados no cadastro do cliente `BRUNO SARTORI`.',000004,000001),(000148,'2017-03-09 07:34:41',9,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` alterou dados no cadastro do cliente `BRUNO SARTORI`.',000004,000001),(000149,'2017-03-09 07:35:12',9,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` alterou dados no cadastro do cliente `BRUNO SARTORI`.',000004,000001),(000150,'2017-03-09 07:38:46',9,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` alterou dados no cadastro do cliente `BRUNO SARTORI`.',000004,000001),(000152,'2017-03-09 07:48:47',1,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` inseriu o cliente `TESTE`.',000004,000003),(000153,'2017-03-09 07:52:11',9,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` alterou dados no cadastro do cliente `TESTE`.',000004,000003),(000154,'2017-03-09 08:00:21',9,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` alterou dados no cadastro do cliente `VALÃ‰RIA GOMES`.',000004,000003),(000155,'2017-03-09 08:16:16',9,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` alterou dados no cadastro do cliente `VALÃ‰RIA`.',000004,000003),(000156,'2017-03-09 08:47:28',9,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` alterou dados no cadastro do cliente `VALÃ‰RIA`.',000004,000003),(000157,'2017-03-09 09:39:25',9,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` alterou dados no cadastro do cliente `VALÃ‰RIA`.',000004,000003),(000158,'2017-03-09 09:40:47',9,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` alterou dados no cadastro do cliente `VALÃ‰RIA`.',000004,000003),(000159,'2017-03-09 09:41:11',9,NULL,'192.168.9.23\n','127.0.0.1','BRUNO SARTORI','O operador `brunosartori` alterou dados no cadastro do cliente `VALÃ‰RIA`.',000004,000003);
/*!40000 ALTER TABLE `historico_cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `instrucao_dia_pagamento`
--

DROP TABLE IF EXISTS `instrucao_dia_pagamento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `instrucao_dia_pagamento` (
  `diapag_id` int(6) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `diapag_dia_pagamento` int(2) NOT NULL,
  PRIMARY KEY (`diapag_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `instrucao_dia_pagamento`
--

LOCK TABLES `instrucao_dia_pagamento` WRITE;
/*!40000 ALTER TABLE `instrucao_dia_pagamento` DISABLE KEYS */;
INSERT INTO `instrucao_dia_pagamento` VALUES (000009,25),(000010,10);
/*!40000 ALTER TABLE `instrucao_dia_pagamento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `instrucao_multa_boleto`
--

DROP TABLE IF EXISTS `instrucao_multa_boleto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `instrucao_multa_boleto` (
  `mulbol_id` int(6) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `mulbol_multa` float(15,2) NOT NULL,
  `mulbol_mora` float(15,2) NOT NULL,
  PRIMARY KEY (`mulbol_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `instrucao_multa_boleto`
--

LOCK TABLES `instrucao_multa_boleto` WRITE;
/*!40000 ALTER TABLE `instrucao_multa_boleto` DISABLE KEYS */;
INSERT INTO `instrucao_multa_boleto` VALUES (000001,2.00,1.00);
/*!40000 ALTER TABLE `instrucao_multa_boleto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `instrucao_recebimento_automatico`
--

DROP TABLE IF EXISTS `instrucao_recebimento_automatico`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `instrucao_recebimento_automatico` (
  `recaut_id` int(6) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `recaut_periodo` int(1) NOT NULL,
  PRIMARY KEY (`recaut_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `instrucao_recebimento_automatico`
--

LOCK TABLES `instrucao_recebimento_automatico` WRITE;
/*!40000 ALTER TABLE `instrucao_recebimento_automatico` DISABLE KEYS */;
INSERT INTO `instrucao_recebimento_automatico` VALUES (000001,1);
/*!40000 ALTER TABLE `instrucao_recebimento_automatico` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lancamento_compra_anexo`
--

DROP TABLE IF EXISTS `lancamento_compra_anexo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `lancamento_compra_anexo` (
  `lancanex_id` int(6) NOT NULL AUTO_INCREMENT,
  `lancanex_nome` varchar(150) DEFAULT NULL,
  `lancanex_arquivo` varchar(200) DEFAULT NULL,
  `lancanex_extensao` varchar(20) DEFAULT NULL,
  `lancanex_tamanho` int(11) NOT NULL,
  `lancanex_data_envio` datetime DEFAULT NULL,
  `lancanex_obs` text,
  `lancanex_cod_lancamento_cabecalho` int(6) unsigned zerofill NOT NULL,
  `lancanex_cod_operador` int(6) unsigned zerofill NOT NULL,
  PRIMARY KEY (`lancanex_id`),
  KEY `lancanex_cod_lancamento_cabecalho` (`lancanex_cod_lancamento_cabecalho`),
  KEY `lancanex_cod_operador` (`lancanex_cod_operador`),
  CONSTRAINT `lancamento_compra_anexo_ibfk_1` FOREIGN KEY (`lancanex_cod_lancamento_cabecalho`) REFERENCES `lancamento_compra_cabecalho` (`lancabec_id`),
  CONSTRAINT `lancamento_compra_anexo_ibfk_2` FOREIGN KEY (`lancanex_cod_operador`) REFERENCES `cadastro_operador` (`ope_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lancamento_compra_anexo`
--

LOCK TABLES `lancamento_compra_anexo` WRITE;
/*!40000 ALTER TABLE `lancamento_compra_anexo` DISABLE KEYS */;
/*!40000 ALTER TABLE `lancamento_compra_anexo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lancamento_compra_cabecalho`
--

DROP TABLE IF EXISTS `lancamento_compra_cabecalho`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `lancamento_compra_cabecalho` (
  `lancabec_id` int(6) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `lancabec_data` date NOT NULL,
  `lancabec_nota_fiscal` varchar(30) NOT NULL,
  `lancabec_primeiro_vencimento` date DEFAULT NULL,
  `lancabec_numero_parcelas` int(6) DEFAULT NULL,
  `lancabec_valor_frete` float(15,2) DEFAULT NULL,
  `lancabec_valor_total` float(15,3) DEFAULT NULL,
  `lancabec_frete` int(6) unsigned zerofill DEFAULT NULL,
  `lancabec_cod_fornecedor` int(6) unsigned zerofill NOT NULL,
  `lancabec_historico` varchar(50) NOT NULL,
  PRIMARY KEY (`lancabec_id`),
  KEY `lancabec_frete` (`lancabec_frete`),
  KEY `lancabec_cod_fornecedor` (`lancabec_cod_fornecedor`),
  CONSTRAINT `lancamento_compra_cabecalho_ibfk_1` FOREIGN KEY (`lancabec_frete`) REFERENCES `cadastro_despesa` (`desp_id`),
  CONSTRAINT `lancamento_compra_cabecalho_ibfk_2` FOREIGN KEY (`lancabec_cod_fornecedor`) REFERENCES `cadastro_fornecedor` (`for_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lancamento_compra_cabecalho`
--

LOCK TABLES `lancamento_compra_cabecalho` WRITE;
/*!40000 ALTER TABLE `lancamento_compra_cabecalho` DISABLE KEYS */;
INSERT INTO `lancamento_compra_cabecalho` VALUES (000007,'2017-03-08','2626626262','2017-03-08',3,0.00,164.560,NULL,000003,''),(000008,'2017-03-13','3434343434','2017-03-13',5,0.00,15543.210,NULL,000002,'tdrdffddf');
/*!40000 ALTER TABLE `lancamento_compra_cabecalho` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lancamento_compra_corpo`
--

DROP TABLE IF EXISTS `lancamento_compra_corpo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `lancamento_compra_corpo` (
  `lancorp_id` int(6) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `lancorp_quantidade` float(15,3) NOT NULL,
  `lancorp_valor_unitario` float(15,3) DEFAULT NULL,
  `lancorp_valor_total` float(15,3) DEFAULT NULL,
  `lancorp_cod_suprimento` int(6) unsigned zerofill NOT NULL,
  `lancorp_cod_cabecalho` int(6) unsigned zerofill NOT NULL,
  `lancorp_cod_despesa` int(6) unsigned zerofill NOT NULL,
  PRIMARY KEY (`lancorp_id`),
  KEY `lancorp_cod_suprimento` (`lancorp_cod_suprimento`),
  KEY `lancorp_cod_cabecalho` (`lancorp_cod_cabecalho`),
  KEY `lancorp_cod_despesa` (`lancorp_cod_despesa`),
  CONSTRAINT `lancamento_compra_corpo_ibfk_1` FOREIGN KEY (`lancorp_cod_suprimento`) REFERENCES `cadastro_suprimento` (`sup_id`),
  CONSTRAINT `lancamento_compra_corpo_ibfk_2` FOREIGN KEY (`lancorp_cod_cabecalho`) REFERENCES `lancamento_compra_cabecalho` (`lancabec_id`) ON DELETE CASCADE,
  CONSTRAINT `lancamento_compra_corpo_ibfk_3` FOREIGN KEY (`lancorp_cod_despesa`) REFERENCES `cadastro_despesa` (`desp_id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lancamento_compra_corpo`
--

LOCK TABLES `lancamento_compra_corpo` WRITE;
/*!40000 ALTER TABLE `lancamento_compra_corpo` DISABLE KEYS */;
INSERT INTO `lancamento_compra_corpo` VALUES (000025,2.600,6.562,17.060,000019,000007,000002),(000026,25.000,5.900,147.500,000003,000007,000004),(000027,3.323,4343.434,14433.230,000003,000008,000004),(000028,323.232,3.434,1109.980,000005,000008,000004);
/*!40000 ALTER TABLE `lancamento_compra_corpo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lancamento_custo_fixo`
--

DROP TABLE IF EXISTS `lancamento_custo_fixo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `lancamento_custo_fixo` (
  `lancustfix_id` int(6) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `lancustfix_obs` text,
  `lancustfix_cod_grupo_despesa` int(6) unsigned zerofill NOT NULL,
  `lancustfix_cod_despesa` int(6) unsigned zerofill NOT NULL,
  `lancustfix_cod_fornecedor` int(6) unsigned zerofill DEFAULT NULL,
  `lancustfix_cod_funcionario` int(6) unsigned zerofill DEFAULT NULL,
  `lancustfix_data_primeiro_vencimento` varchar(10) NOT NULL,
  `lancustfix_valor_parcela` float(15,2) NOT NULL,
  `lancustfix_data_lancamento` date NOT NULL,
  `lancustfix_historico` varchar(50) DEFAULT NULL,
  `lancustfix_ativo` tinyint(1) DEFAULT NULL,
  `lancustfix_dia_vencimento` int(2) NOT NULL,
  PRIMARY KEY (`lancustfix_id`),
  KEY `lancustfix_cod_grupo_despesa` (`lancustfix_cod_grupo_despesa`),
  KEY `lancustfix_cod_despesa` (`lancustfix_cod_despesa`),
  KEY `lancustfix_cod_fornecedor` (`lancustfix_cod_fornecedor`),
  KEY `lancustfix_cod_funcionario` (`lancustfix_cod_funcionario`),
  CONSTRAINT `lancamento_custo_fixo_ibfk_1` FOREIGN KEY (`lancustfix_cod_grupo_despesa`) REFERENCES `cadastro_grupo_despesa` (`grupodesp_id`),
  CONSTRAINT `lancamento_custo_fixo_ibfk_2` FOREIGN KEY (`lancustfix_cod_despesa`) REFERENCES `cadastro_despesa` (`desp_id`),
  CONSTRAINT `lancamento_custo_fixo_ibfk_3` FOREIGN KEY (`lancustfix_cod_fornecedor`) REFERENCES `cadastro_fornecedor` (`for_id`),
  CONSTRAINT `lancamento_custo_fixo_ibfk_4` FOREIGN KEY (`lancustfix_cod_funcionario`) REFERENCES `cadastro_funcionario` (`fun_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lancamento_custo_fixo`
--

LOCK TABLES `lancamento_custo_fixo` WRITE;
/*!40000 ALTER TABLE `lancamento_custo_fixo` DISABLE KEYS */;
INSERT INTO `lancamento_custo_fixo` VALUES (000001,'dolor sit amet',000007,000024,000002,NULL,'12/2016',150.00,'2017-02-02','lorem ipsum',0,4),(000002,'',000004,000011,NULL,000005,'01/2017',900.00,'2017-02-07','salario',1,20),(000003,'dolor sit amet.',000007,000035,000002,NULL,'02/2017',150.00,'2017-02-15','lorem ipsum',1,30);
/*!40000 ALTER TABLE `lancamento_custo_fixo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lancamento_custo_variavel`
--

DROP TABLE IF EXISTS `lancamento_custo_variavel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `lancamento_custo_variavel` (
  `lancustvar_id` int(6) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `lancustvar_obs` text,
  `lancustvar_nota_fiscal` varchar(20) DEFAULT NULL,
  `lancustvar_data` date DEFAULT NULL,
  `lancustvar_numero_parcelas` int(6) DEFAULT NULL,
  `lancustvar_valor_total` float(15,2) DEFAULT NULL,
  `lancustvar_historico` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`lancustvar_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lancamento_custo_variavel`
--

LOCK TABLES `lancamento_custo_variavel` WRITE;
/*!40000 ALTER TABLE `lancamento_custo_variavel` DISABLE KEYS */;
INSERT INTO `lancamento_custo_variavel` VALUES (000002,'lorem ipsum','oeorier0493','2017-02-28',1,666.66,'lorem ipsum');
/*!40000 ALTER TABLE `lancamento_custo_variavel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `liquidar_contas_receber`
--

DROP TABLE IF EXISTS `liquidar_contas_receber`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `liquidar_contas_receber` (
  `licontrec_id` int(6) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `licontrec_tipo_recebimento` tinyint(1) NOT NULL,
  `licontrec_data_vencimento` date DEFAULT NULL,
  `licontrec_valor_parcela` float(15,2) NOT NULL,
  `licontrec_valor_pago` float(15,2) DEFAULT NULL,
  `licontrec_data_pago` date DEFAULT NULL,
  `licontrec_tarifa` float(15,2) DEFAULT NULL,
  `licontrec_atraso` varchar(4) DEFAULT NULL,
  `licontrec_cod_contas_receber` int(6) unsigned zerofill NOT NULL,
  PRIMARY KEY (`licontrec_id`),
  KEY `licontrec_cod_contas_receber` (`licontrec_cod_contas_receber`),
  CONSTRAINT `liquidar_contas_receber_ibfk_1` FOREIGN KEY (`licontrec_cod_contas_receber`) REFERENCES `contas_receber` (`contrec_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `liquidar_contas_receber`
--

LOCK TABLES `liquidar_contas_receber` WRITE;
/*!40000 ALTER TABLE `liquidar_contas_receber` DISABLE KEYS */;
INSERT INTO `liquidar_contas_receber` VALUES (000014,4,'2017-02-07',75.00,75.00,'2017-02-07',3.75,NULL,000009),(000015,4,'2017-03-07',75.00,75.00,'2017-03-07',3.75,NULL,000009);
/*!40000 ALTER TABLE `liquidar_contas_receber` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `operador_departamento`
--

DROP TABLE IF EXISTS `operador_departamento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `operador_departamento` (
  `opedep_id` int(6) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `opedep_cod_departamento` int(6) unsigned zerofill NOT NULL,
  `opedep_cod_operador` int(6) unsigned zerofill NOT NULL,
  PRIMARY KEY (`opedep_id`),
  KEY `opedep_cod_departamento` (`opedep_cod_departamento`),
  KEY `opedep_cod_operador` (`opedep_cod_operador`),
  CONSTRAINT `operador_departamento_ibfk_1` FOREIGN KEY (`opedep_cod_departamento`) REFERENCES `cadastro_departamento` (`dep_id`),
  CONSTRAINT `operador_departamento_ibfk_2` FOREIGN KEY (`opedep_cod_operador`) REFERENCES `cadastro_operador` (`ope_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `operador_departamento`
--

LOCK TABLES `operador_departamento` WRITE;
/*!40000 ALTER TABLE `operador_departamento` DISABLE KEYS */;
INSERT INTO `operador_departamento` VALUES (000001,000001,000001),(000002,000002,000001),(000004,000003,000001),(000005,000004,000001),(000006,000002,000003),(000007,000002,000004),(000008,000003,000004),(000009,000001,000004),(000010,000004,000004),(000011,000002,000005),(000012,000001,000005);
/*!40000 ALTER TABLE `operador_departamento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recebimento_boleto`
--

DROP TABLE IF EXISTS `recebimento_boleto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `recebimento_boleto` (
  `bol_id` int(6) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `bol_nosso_numero` varchar(50) DEFAULT NULL,
  `bol_codigo_barra` varchar(30) DEFAULT NULL,
  `bol_instrucao` text NOT NULL,
  `bol_cod_recebimento` int(6) unsigned zerofill NOT NULL,
  `bol_cod_configuracao_boleto` int(6) unsigned zerofill NOT NULL,
  PRIMARY KEY (`bol_id`),
  KEY `bol_cod_recebimento` (`bol_cod_recebimento`),
  KEY `bol_cod_configuracao_boleto` (`bol_cod_configuracao_boleto`),
  CONSTRAINT `recebimento_boleto_ibfk_1` FOREIGN KEY (`bol_cod_recebimento`) REFERENCES `contas_receber` (`contrec_id`),
  CONSTRAINT `recebimento_boleto_ibfk_3` FOREIGN KEY (`bol_cod_configuracao_boleto`) REFERENCES `configuracao_boleto` (`bolconfig_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recebimento_boleto`
--

LOCK TABLES `recebimento_boleto` WRITE;
/*!40000 ALTER TABLE `recebimento_boleto` DISABLE KEYS */;
INSERT INTO `recebimento_boleto` VALUES (000001,'09/00000000001-1',NULL,'teste',000002,000003);
/*!40000 ALTER TABLE `recebimento_boleto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recebimento_cartao`
--

DROP TABLE IF EXISTS `recebimento_cartao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `recebimento_cartao` (
  `car_id` int(6) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `car_numero_autenticacao` varchar(20) DEFAULT NULL,
  `car_cod_cartao` int(6) unsigned zerofill DEFAULT NULL,
  `car_cod_recebimento` int(6) unsigned zerofill DEFAULT NULL,
  `car_cod_parcial` int(6) unsigned zerofill DEFAULT NULL,
  PRIMARY KEY (`car_id`),
  KEY `car_cod_cartao` (`car_cod_cartao`),
  KEY `car_cod_recebimento` (`car_cod_recebimento`),
  CONSTRAINT `recebimento_cartao_ibfk_1` FOREIGN KEY (`car_cod_cartao`) REFERENCES `cadastro_cartao` (`cart_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recebimento_cartao`
--

LOCK TABLES `recebimento_cartao` WRITE;
/*!40000 ALTER TABLE `recebimento_cartao` DISABLE KEYS */;
/*!40000 ALTER TABLE `recebimento_cartao` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recebimento_cheque`
--

DROP TABLE IF EXISTS `recebimento_cheque`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `recebimento_cheque` (
  `che_id` int(6) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `che_numero` int(40) NOT NULL,
  `che_agencia` int(30) NOT NULL,
  `che_conta` varchar(30) NOT NULL,
  `che_emitente` varchar(60) NOT NULL,
  `che_cod_banco` int(6) unsigned zerofill NOT NULL,
  `che_cod_recebimento` int(6) unsigned zerofill DEFAULT NULL,
  `che_cod_parcial` int(6) unsigned zerofill DEFAULT NULL,
  PRIMARY KEY (`che_id`),
  KEY `che_cod_banco` (`che_cod_banco`),
  KEY `che_cod_recebimento` (`che_cod_recebimento`),
  KEY `che_cod_parcial` (`che_cod_parcial`),
  CONSTRAINT `recebimento_cheque_ibfk_1` FOREIGN KEY (`che_cod_banco`) REFERENCES `oton_portal`.`oton_cadastro_banco` (`oton_ban_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recebimento_cheque`
--

LOCK TABLES `recebimento_cheque` WRITE;
/*!40000 ALTER TABLE `recebimento_cheque` DISABLE KEYS */;
/*!40000 ALTER TABLE `recebimento_cheque` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recebimento_cobranca`
--

DROP TABLE IF EXISTS `recebimento_cobranca`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `recebimento_cobranca` (
  `recob_id` int(6) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `recob_descricao` text,
  `recob_cod_contas_receber` int(6) unsigned zerofill NOT NULL,
  PRIMARY KEY (`recob_id`),
  KEY `recob_cod_contas_receber` (`recob_cod_contas_receber`),
  CONSTRAINT `recebimento_cobranca_ibfk_1` FOREIGN KEY (`recob_cod_contas_receber`) REFERENCES `contas_receber` (`contrec_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recebimento_cobranca`
--

LOCK TABLES `recebimento_cobranca` WRITE;
/*!40000 ALTER TABLE `recebimento_cobranca` DISABLE KEYS */;
/*!40000 ALTER TABLE `recebimento_cobranca` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recebimento_motivo_estorno`
--

DROP TABLE IF EXISTS `recebimento_motivo_estorno`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `recebimento_motivo_estorno` (
  `motest_id` int(6) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `motest_descricao` text,
  `motest_cod_contas_receber` int(6) unsigned zerofill NOT NULL,
  PRIMARY KEY (`motest_id`),
  KEY `motest_cod_contas_receber` (`motest_cod_contas_receber`),
  CONSTRAINT `recebimento_motivo_estorno_ibfk_1` FOREIGN KEY (`motest_cod_contas_receber`) REFERENCES `contas_receber` (`contrec_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recebimento_motivo_estorno`
--

LOCK TABLES `recebimento_motivo_estorno` WRITE;
/*!40000 ALTER TABLE `recebimento_motivo_estorno` DISABLE KEYS */;
/*!40000 ALTER TABLE `recebimento_motivo_estorno` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recebimento_simples`
--

DROP TABLE IF EXISTS `recebimento_simples`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `recebimento_simples` (
  `recsim_id` int(6) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `recsim_obs` text,
  `recsim_cod_recebimento` int(6) unsigned zerofill NOT NULL,
  PRIMARY KEY (`recsim_id`),
  KEY `recsim_cod_recebimento` (`recsim_cod_recebimento`),
  CONSTRAINT `recebimento_simples_ibfk_1` FOREIGN KEY (`recsim_cod_recebimento`) REFERENCES `contas_receber` (`contrec_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recebimento_simples`
--

LOCK TABLES `recebimento_simples` WRITE;
/*!40000 ALTER TABLE `recebimento_simples` DISABLE KEYS */;
INSERT INTO `recebimento_simples` VALUES (000001,'34343434',000003),(000002,'34343434',000004);
/*!40000 ALTER TABLE `recebimento_simples` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `servicos_honorario`
--

DROP TABLE IF EXISTS `servicos_honorario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `servicos_honorario` (
  `serhon_id` int(6) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `serhon_quantidade` int(4) DEFAULT NULL,
  `serhon_cod_honorario` int(6) unsigned zerofill NOT NULL,
  `serhon_cod_servico` int(6) unsigned zerofill NOT NULL,
  PRIMARY KEY (`serhon_id`),
  KEY `serhon_cod_honorario` (`serhon_cod_honorario`),
  KEY `serhon_cod_servico` (`serhon_cod_servico`),
  CONSTRAINT `servicos_honorario_ibfk_1` FOREIGN KEY (`serhon_cod_honorario`) REFERENCES `cadastro_honorario` (`hon_id`),
  CONSTRAINT `servicos_honorario_ibfk_2` FOREIGN KEY (`serhon_cod_servico`) REFERENCES `cadastro_servico` (`ser_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `servicos_honorario`
--

LOCK TABLES `servicos_honorario` WRITE;
/*!40000 ALTER TABLE `servicos_honorario` DISABLE KEYS */;
INSERT INTO `servicos_honorario` VALUES (000001,3,000003,000001),(000002,4,000003,000002),(000003,1,000001,000001),(000004,2,000002,000001),(000005,3,000002,000006);
/*!40000 ALTER TABLE `servicos_honorario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-08-19 11:18:12
