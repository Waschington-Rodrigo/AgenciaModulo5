-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: agenciaviagemapi
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `destino`
--

DROP TABLE IF EXISTS `destino`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `destino` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `cidade` varchar(255) NOT NULL,
  `estado` varchar(255) NOT NULL,
  `local_destino` varchar(255) NOT NULL,
  `valor` decimal(38,2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `destino`
--

LOCK TABLES `destino` WRITE;
/*!40000 ALTER TABLE `destino` DISABLE KEYS */;
INSERT INTO `destino` VALUES (2,'Planaltina-go','GO','Rodoviária',240.50),(3,'Imperatriz','MA','Aeroporto',115.00),(4,'Cidade Ocidental','GO','Aeroporto ',115.00),(5,'Goiânia','GO','Terminal da Biblia',450.50);
/*!40000 ALTER TABLE `destino` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hospedagem`
--

DROP TABLE IF EXISTS `hospedagem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hospedagem` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `cidade` varchar(255) NOT NULL,
  `endereco` varchar(255) NOT NULL,
  `estado` varchar(255) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `telefone` varchar(255) NOT NULL,
  `tipo` varchar(255) NOT NULL,
  `valor_diaria` decimal(38,2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hospedagem`
--

LOCK TABLES `hospedagem` WRITE;
/*!40000 ALTER TABLE `hospedagem` DISABLE KEYS */;
INSERT INTO `hospedagem` VALUES (1,'Nova Roma',' q 13 casa 21','GO','Hotel Queiroz','61992090318','Hotel',500.40),(2,'Planaltina-go',' q 13 casa 21','GO','Hotel Pousada','61992090318','Hotel',153.00);
/*!40000 ALTER TABLE `hospedagem` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `passagem`
--

DROP TABLE IF EXISTS `passagem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `passagem` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `data_viagem` date NOT NULL,
  `pacote_promo` int NOT NULL,
  `destino_id_fk` bigint NOT NULL,
  `usuario_id_fk` bigint NOT NULL,
  `valor_total` decimal(38,2) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKca3qksa35cih3a6bdk60ytcjy` (`destino_id_fk`),
  KEY `FKvbr6mq77o5x7oherlnyjod7e` (`usuario_id_fk`),
  CONSTRAINT `FKca3qksa35cih3a6bdk60ytcjy` FOREIGN KEY (`destino_id_fk`) REFERENCES `destino` (`id`),
  CONSTRAINT `FKvbr6mq77o5x7oherlnyjod7e` FOREIGN KEY (`usuario_id_fk`) REFERENCES `usuario` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `passagem`
--

LOCK TABLES `passagem` WRITE;
/*!40000 ALTER TABLE `passagem` DISABLE KEYS */;
INSERT INTO `passagem` VALUES (1,'2023-12-31',1,2,2,1202.50),(4,'2024-12-14',1,5,2,901.00),(5,'2024-12-14',1,5,2,901.00),(6,'2020-12-15',1,4,2,115.00),(7,'2024-12-15',2,5,7,2252.50),(8,'2029-12-15',3,5,8,1351.50),(9,'2030-12-15',1,4,6,115.00),(10,'2050-12-14',3,3,7,460.00),(11,'1990-12-14',3,2,2,1683.50),(12,'2030-12-15',2,2,6,1924.00),(13,'2030-12-15',2,3,7,690.00),(14,'2024-01-13',1,2,7,240.50),(15,'2024-01-13',1,2,7,240.50),(16,'2024-01-13',1,2,7,240.50),(17,'2024-01-13',1,2,7,240.50),(18,'2024-01-13',1,2,7,240.50),(19,'2024-01-13',1,2,7,240.50),(20,'2024-01-13',1,2,7,240.50),(21,'2024-01-13',1,2,7,240.50),(22,'2024-01-13',1,2,7,240.50),(23,'2020-02-16',1,2,7,240.50),(24,'2020-02-16',1,2,7,240.50),(25,'2020-02-16',1,2,7,240.50),(26,'2024-01-24',1,3,7,230.00),(27,'2024-01-24',1,3,7,230.00),(28,'2024-01-10',1,2,6,481.00),(29,'2024-02-02',1,2,7,481.00),(30,'2024-01-12',1,2,6,-240.50),(31,'2200-12-15',1,2,6,481.00),(32,'2204-12-15',1,2,6,240.50),(33,'1990-12-14',1,2,2,481.00),(34,'2024-01-20',1,2,7,962.00);
/*!40000 ALTER TABLE `passagem` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reserva`
--

DROP TABLE IF EXISTS `reserva`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reserva` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `data_reserva` date NOT NULL,
  `pacote_promo` int NOT NULL,
  `qtd_dias` int NOT NULL,
  `valor_total` decimal(38,2) NOT NULL,
  `hospedagem_id_fk` bigint NOT NULL,
  `usuario_id_fk` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKrwrmynt5lmxergtwxo4kdcji1` (`hospedagem_id_fk`),
  KEY `FK6ujl5olguggs43p4jlg3c50id` (`usuario_id_fk`),
  CONSTRAINT `FK6ujl5olguggs43p4jlg3c50id` FOREIGN KEY (`usuario_id_fk`) REFERENCES `usuario` (`id`),
  CONSTRAINT `FKrwrmynt5lmxergtwxo4kdcji1` FOREIGN KEY (`hospedagem_id_fk`) REFERENCES `hospedagem` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reserva`
--

LOCK TABLES `reserva` WRITE;
/*!40000 ALTER TABLE `reserva` DISABLE KEYS */;
INSERT INTO `reserva` VALUES (1,'1990-12-14',3,3,459.00,2,2);
/*!40000 ALTER TABLE `reserva` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `cidade` varchar(255) NOT NULL,
  `cpf` varchar(255) NOT NULL,
  `data_nascimento` date NOT NULL,
  `email` varchar(255) NOT NULL,
  `endereco` varchar(255) NOT NULL,
  `estado` varchar(255) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `telefone` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (2,'Cidade Ocidental','04244310177','1990-12-14','chitonbispo@gmail.com',' q 13 casa 21','GO','waschington','61992090318'),(6,'Planaltina-go','15315348999','2014-05-28','cauareis@gmail.com','Quadra 137 casa 19c','GO','Cauã Dominck Dantas dos Reis','61998546413'),(7,'Cidade Ocidental','03945441102','1993-04-15','thaisemiguel@recomecar.org',' q 13 casa 21','GO','Thaise Miguel','+5561991434692'),(8,'CIDADE OCIDENTAL','00000000000','1970-07-10','chitonbispocaua@gmail.com','Quadra 137 casa 19c','GO','Sebastiana Batista dos reis','61992090318'),(9,'Cidade Ocidental','03945441122','2020-04-16','chitonbispocaua@gmail.com',' q 13 casa 21','GO','Waschington Rodrigo','61992090318');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'agenciaviagemapi'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-01-18 10:42:37
