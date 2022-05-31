-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: cse job fair registration
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
-- Table structure for table `booth`
--

DROP TABLE IF EXISTS `booth`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `booth` (
  `idbooth` int NOT NULL,
  `location` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `size` int NOT NULL,
  `price` int NOT NULL,
  PRIMARY KEY (`idbooth`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `booth`
--

LOCK TABLES `booth` WRITE;
/*!40000 ALTER TABLE `booth` DISABLE KEYS */;
INSERT INTO `booth` VALUES (1,'x',1,1000),(2,'x',1,1000),(3,'x',1,1000),(4,'x',1,1000),(5,'x',1,1000),(6,'x',1,1000),(7,'x',1,1000),(8,'x',1,1000),(9,'x',1,1000),(10,'x',1,1000),(11,'x',1,1000),(12,'x',1,1000),(13,'x',1,1000),(14,'x',1,1000),(15,'x',1,1000),(16,'x',1,1000),(17,'x',1,1000),(18,'x',1,1000),(19,'x',1,1000),(20,'x',1,1000),(21,'x',1,1000),(22,'x',1,1000),(23,'x',1,1000),(24,'x',1,1000),(25,'x',1,1000),(26,'x',1,1000),(27,'x',1,1000),(28,'x',1,1000),(29,'x',1,1000),(30,'x',1,1000),(31,'x',1,1000),(32,'x',1,1000),(33,'x',1,1000),(34,'x',1,1000),(35,'x',1,1000),(36,'x',1,1000),(37,'x',1,1000),(38,'x',1,1000),(39,'x',1,1000),(40,'x',1,1000),(41,'x',1,1000),(42,'x',1,1000),(43,'x',1,1000),(44,'x',1,1000),(45,'x',1,1000),(46,'x',1,1000),(47,'x',1,1000),(48,'x',1,1000),(49,'x',1,1000),(50,'x',1,1000),(51,'x',1,1000),(52,'x',1,1000),(53,'x',1,1000),(54,'x',1,1000),(55,'x',1,1000),(56,'x',1,1000),(57,'x',1,1000),(58,'x',1,1000),(59,'x',1,1000),(60,'x',1,1000),(61,'x',1,1000),(62,'x',1,1000),(63,'x',1,1000),(64,'x',1,1000);
/*!40000 ALTER TABLE `booth` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-31  9:57:07
