-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: csejfregistration
-- ------------------------------------------------------
-- Server version	8.0.28

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
-- Table structure for table `registration_approve`
--

DROP TABLE IF EXISTS `registration_approve`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `registration_approve` (
  `id` int NOT NULL,
  `time_register` datetime NOT NULL,
  `time_approve` datetime DEFAULT NULL,
  `approve` tinyint DEFAULT NULL,
  `booth_id` int NOT NULL,
  `business_id` int NOT NULL,
  `admin_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_registration_booth_idx` (`booth_id`),
  KEY `fk_registration_business1_idx` (`business_id`),
  KEY `fk_registration_admin1_idx` (`admin_id`),
  CONSTRAINT `fk_registration_admin1` FOREIGN KEY (`admin_id`) REFERENCES `admin` (`id`),
  CONSTRAINT `fk_registration_booth` FOREIGN KEY (`booth_id`) REFERENCES `booth` (`id`),
  CONSTRAINT `fk_registration_business1` FOREIGN KEY (`business_id`) REFERENCES `business` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registration_approve`
--

LOCK TABLES `registration_approve` WRITE;
/*!40000 ALTER TABLE `registration_approve` DISABLE KEYS */;
INSERT INTO `registration_approve` VALUES (1,'2021-09-07 00:00:00','2022-05-01 00:00:00',0,57,43,1),(2,'2021-03-10 00:00:00','2022-05-26 00:00:00',0,2,23,4),(3,'2021-10-11 00:00:00','2021-10-07 00:00:00',1,2,8,9),(4,'2021-01-16 00:00:00','2022-01-20 00:00:00',1,26,36,1),(5,'2021-04-25 00:00:00','2022-08-31 00:00:00',0,34,15,4),(6,'2021-11-13 00:00:00','2021-06-30 00:00:00',0,38,23,2),(7,'2022-04-06 00:00:00','2021-11-11 00:00:00',0,11,45,5),(8,'2021-06-01 00:00:00','2021-11-15 00:00:00',0,3,25,8),(9,'2022-01-20 00:00:00','2022-01-13 00:00:00',1,53,17,1),(10,'2022-02-21 00:00:00','2021-09-19 00:00:00',1,47,20,2),(11,'2021-02-27 00:00:00','2022-03-28 00:00:00',0,33,10,2),(12,'2021-03-27 00:00:00','2021-10-17 00:00:00',1,38,24,4),(13,'2022-03-14 00:00:00','2022-07-11 00:00:00',1,17,19,3),(14,'2021-08-20 00:00:00','2021-09-13 00:00:00',0,8,31,5),(15,'2021-12-11 00:00:00','2021-08-23 00:00:00',1,24,43,3),(16,'2022-03-10 00:00:00','2021-12-22 00:00:00',0,59,41,2),(17,'2021-12-18 00:00:00','2022-01-30 00:00:00',0,33,8,2),(18,'2021-08-12 00:00:00','2022-04-21 00:00:00',1,57,15,8),(19,'2021-05-29 00:00:00','2021-06-25 00:00:00',1,54,38,4),(20,'2022-06-09 00:00:00','2021-06-29 00:00:00',0,24,14,6),(21,'2021-01-12 00:00:00','2022-02-12 00:00:00',0,39,16,2),(22,'2022-05-16 00:00:00','2022-02-01 00:00:00',0,56,13,5),(23,'2021-05-20 00:00:00','2022-09-18 00:00:00',1,22,46,2),(24,'2022-05-07 00:00:00','2021-09-25 00:00:00',0,23,35,2),(25,'2021-12-30 00:00:00','2022-02-24 00:00:00',1,5,37,2),(26,'2021-12-28 00:00:00','2022-02-25 00:00:00',1,63,4,2),(27,'2021-10-05 00:00:00','2021-08-09 00:00:00',0,38,26,5),(28,'2021-06-19 00:00:00','2021-07-14 00:00:00',1,1,30,8),(29,'2021-11-13 00:00:00','2021-12-28 00:00:00',0,30,11,2),(30,'2021-09-17 00:00:00','2021-07-17 00:00:00',1,53,9,4),(31,'2022-03-03 00:00:00','2022-09-30 00:00:00',0,24,30,5),(32,'2021-10-17 00:00:00','2021-10-31 00:00:00',1,53,45,9),(33,'2021-12-05 00:00:00','2021-11-18 00:00:00',0,43,11,2),(34,'2022-05-10 00:00:00','2021-08-02 00:00:00',1,60,35,6),(35,'2021-02-16 00:00:00','2022-01-26 00:00:00',0,41,39,2),(36,'2021-11-30 00:00:00','2021-09-03 00:00:00',0,53,5,4),(37,'2021-06-06 00:00:00','2022-03-25 00:00:00',1,59,30,10),(38,'2021-02-24 00:00:00','2022-01-29 00:00:00',1,57,28,2),(39,'2022-02-23 00:00:00','2021-11-23 00:00:00',1,49,44,3),(40,'2022-05-19 00:00:00','2021-06-21 00:00:00',1,43,50,2),(41,'2022-03-28 00:00:00','2022-08-16 00:00:00',0,61,34,9),(42,'2021-01-01 00:00:00','2022-01-06 00:00:00',1,8,35,9),(43,'2021-10-31 00:00:00','2022-07-29 00:00:00',1,32,45,6),(44,'2021-01-18 00:00:00','2021-06-15 00:00:00',1,13,40,7),(45,'2021-03-26 00:00:00','2021-12-15 00:00:00',1,24,43,8),(46,'2021-12-04 00:00:00','2022-02-08 00:00:00',1,6,39,9),(47,'2021-12-06 00:00:00','2021-11-18 00:00:00',1,62,6,4),(48,'2021-03-04 00:00:00','2022-04-30 00:00:00',0,19,36,6),(49,'2021-04-06 00:00:00','2022-01-16 00:00:00',1,21,6,3),(50,'2021-12-15 00:00:00','2022-02-26 00:00:00',0,6,14,3),(51,'2022-01-30 00:00:00','2022-01-27 00:00:00',1,21,18,3),(52,'2022-03-07 00:00:00','2021-10-14 00:00:00',1,23,44,5),(53,'2022-04-13 00:00:00','2022-05-31 00:00:00',0,42,37,6),(54,'2021-01-11 00:00:00','2021-10-01 00:00:00',1,3,3,2),(55,'2021-01-19 00:00:00','2021-06-21 00:00:00',1,7,7,5),(56,'2022-05-26 00:00:00','2022-08-19 00:00:00',0,10,41,2),(57,'2021-08-29 00:00:00','2022-03-21 00:00:00',0,61,16,5),(58,'2022-03-18 00:00:00','2022-07-11 00:00:00',1,9,47,5),(59,'2021-05-16 00:00:00','2021-10-21 00:00:00',1,28,44,3),(60,'2022-02-13 00:00:00','2021-11-29 00:00:00',0,13,5,7),(61,'2021-04-02 00:00:00',NULL,NULL,56,17,NULL),(62,'2022-05-12 00:00:00',NULL,NULL,50,5,NULL),(63,'2021-05-12 00:00:00',NULL,NULL,20,33,NULL),(64,'2022-01-12 00:00:00',NULL,NULL,15,18,NULL),(65,'2021-08-14 00:00:00',NULL,NULL,42,17,NULL),(66,'2021-10-10 00:00:00',NULL,NULL,47,47,NULL),(67,'2022-05-16 00:00:00',NULL,NULL,2,50,NULL),(68,'2021-03-04 00:00:00',NULL,NULL,40,13,NULL),(69,'2021-12-27 00:00:00',NULL,NULL,18,28,NULL),(70,'2021-07-13 00:00:00',NULL,NULL,7,17,NULL),(71,'2022-01-13 00:00:00',NULL,NULL,51,38,NULL),(72,'2022-01-18 00:00:00',NULL,NULL,51,25,NULL),(73,'2022-04-09 00:00:00',NULL,NULL,63,6,NULL),(74,'2022-03-17 00:00:00',NULL,NULL,27,30,NULL),(75,'2021-12-26 00:00:00',NULL,NULL,56,20,NULL),(76,'2021-06-25 00:00:00',NULL,NULL,42,9,NULL),(77,'2021-09-05 00:00:00',NULL,NULL,48,42,NULL),(78,'2021-05-19 00:00:00',NULL,NULL,25,29,NULL),(79,'2021-10-31 00:00:00',NULL,NULL,54,18,NULL),(80,'2021-07-03 00:00:00',NULL,NULL,33,27,NULL),(81,'2021-08-10 00:00:00',NULL,NULL,5,16,NULL),(82,'2021-10-25 00:00:00',NULL,NULL,36,28,NULL),(83,'2021-09-13 00:00:00',NULL,NULL,36,21,NULL),(84,'2021-09-05 00:00:00',NULL,NULL,40,9,NULL),(85,'2022-04-16 00:00:00',NULL,NULL,58,2,NULL),(86,'2022-05-02 00:00:00',NULL,NULL,52,49,NULL),(87,'2021-10-20 00:00:00',NULL,NULL,41,14,NULL),(88,'2021-06-26 00:00:00',NULL,NULL,18,40,NULL),(89,'2022-04-25 00:00:00',NULL,NULL,45,7,NULL),(90,'2022-05-22 00:00:00',NULL,NULL,27,18,NULL),(91,'2021-07-27 00:00:00',NULL,NULL,46,14,NULL),(92,'2021-12-22 00:00:00',NULL,NULL,1,18,NULL),(93,'2021-03-07 00:00:00',NULL,NULL,38,1,NULL),(94,'2021-01-25 00:00:00',NULL,NULL,27,19,NULL),(95,'2021-09-01 00:00:00',NULL,NULL,57,46,NULL),(96,'2022-04-20 00:00:00',NULL,NULL,3,20,NULL),(97,'2022-05-05 00:00:00',NULL,NULL,3,11,NULL),(98,'2021-06-03 00:00:00',NULL,NULL,10,23,NULL),(99,'2022-01-15 00:00:00',NULL,NULL,14,18,NULL),(100,'2021-04-21 00:00:00',NULL,NULL,22,46,NULL),(101,'2022-01-18 00:00:00',NULL,NULL,58,34,NULL),(102,'2021-05-17 00:00:00',NULL,NULL,44,45,NULL),(103,'2022-03-23 00:00:00',NULL,NULL,56,19,NULL),(104,'2021-05-10 00:00:00',NULL,NULL,3,27,NULL),(105,'2021-11-03 00:00:00',NULL,NULL,51,45,NULL),(106,'2021-05-30 00:00:00',NULL,NULL,12,16,NULL),(107,'2022-03-27 00:00:00',NULL,NULL,34,50,NULL),(108,'2021-06-09 00:00:00',NULL,NULL,4,22,NULL),(109,'2022-02-20 00:00:00',NULL,NULL,30,24,NULL),(110,'2021-02-22 00:00:00',NULL,NULL,3,9,NULL),(111,'2021-03-04 00:00:00',NULL,NULL,36,25,NULL),(112,'2022-02-12 00:00:00',NULL,NULL,40,44,NULL),(113,'2021-12-04 00:00:00',NULL,NULL,44,33,NULL),(114,'2021-03-19 00:00:00',NULL,NULL,42,49,NULL),(115,'2022-05-23 00:00:00',NULL,NULL,10,48,NULL),(116,'2021-09-22 00:00:00',NULL,NULL,46,27,NULL),(117,'2021-03-24 00:00:00',NULL,NULL,59,2,NULL),(118,'2021-11-19 00:00:00',NULL,NULL,1,2,NULL),(119,'2022-04-01 00:00:00',NULL,NULL,16,20,NULL),(120,'2021-08-15 00:00:00',NULL,NULL,41,25,NULL);
/*!40000 ALTER TABLE `registration_approve` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-22 13:10:10
