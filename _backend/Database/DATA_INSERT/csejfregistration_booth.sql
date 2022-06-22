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
-- Table structure for table `booth`
--

DROP TABLE IF EXISTS `booth`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `booth` (
  `id` int NOT NULL,
  `price` varchar(45) NOT NULL,
  `size` varchar(45) NOT NULL,
  `owner` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `booth`
--

LOCK TABLES `booth` WRITE;
/*!40000 ALTER TABLE `booth` DISABLE KEYS */;
INSERT INTO `booth` VALUES (1,'$1612.34','3m x 3m',NULL),(2,'$949.50','3m x 3m',1),(3,'$1120.98','3m x 3m',2),(4,'$1617.49','3m x 3m',NULL),(5,'$1679.41','3m x 3m',3),(6,'$1802.55','3m x 3m',4),(7,'$1877.67','3m x 3m',5),(8,'$1969.05','3m x 3m',NULL),(9,'$1974.10','3m x 3m',6),(10,'$1985.44','3m x 3m',NULL),(11,'$1862.34','3m x 3m',7),(12,'$1592.62','3m x 3m',8),(13,'$1717.00','3m x 3m',9),(14,'$1061.62','3m x 3m',10),(15,'$668.65','3m x 3m',11),(16,'$1232.91','3m x 3m',12),(17,'$627.60','3m x 3m',13),(18,'$1665.67','3m x 3m',NULL),(19,'$826.92','3m x 3m',14),(20,'$1139.99','3m x 3m',NULL),(21,'$1229.34','3m x 3m',15),(22,'$642.12','3m x 3m',16),(23,'$531.79','3m x 3m',17),(24,'$1943.76','3m x 3m',18),(25,'$757.35','3m x 3m',NULL),(26,'$1785.12','3m x 3m',NULL),(27,'$739.78','3m x 3m',NULL),(28,'$1674.58','3m x 3m',NULL),(29,'$698.40','3m x 3m',NULL),(30,'$793.33','3m x 3m',19),(31,'$752.23','3m x 3m',NULL),(32,'$1705.85','3m x 3m',NULL),(33,'$1370.25','3m x 3m',NULL),(34,'$1636.98','3m x 3m',20),(35,'$1865.73','3m x 3m',21),(36,'$1544.69','3m x 3m',22),(37,'$1892.84','3m x 3m',NULL),(38,'$974.32','3m x 3m',NULL),(39,'$1867.83','3m x 3m',NULL),(40,'$957.52','3m x 3m',23),(41,'$822.53','3m x 3m',24),(42,'$521.52','3m x 3m',NULL),(43,'$663.42','3m x 3m',26),(44,'$1797.49','3m x 3m',27),(45,'$735.42','3m x 3m',28),(46,'$1056.22','3m x 3m',29),(47,'$1599.15','3m x 3m',30),(48,'$1175.87','3m x 3m',NULL),(49,'$518.86','3m x 3m',NULL),(50,'$851.23','3m x 3m',NULL),(51,'$1225.22','3m x 3m',NULL),(52,'$1454.49','3m x 3m',31),(53,'$1066.05','3m x 3m',32),(54,'$1215.16','3m x 3m',NULL),(55,'$680.70','3m x 3m',NULL),(56,'$1505.58','3m x 3m',NULL),(57,'$1234.70','3m x 3m',33),(58,'$1007.19','3m x 3m',NULL),(59,'$875.02','3m x 3m',34),(60,'$1409.59','3m x 3m',35),(61,'$1219.28','3m x 3m',NULL),(62,'$1583.14','3m x 3m',36),(63,'$855.64','3m x 3m',37),(64,'$995.95','3m x 3m',38);
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

-- Dump completed on 2022-06-22 13:10:10
