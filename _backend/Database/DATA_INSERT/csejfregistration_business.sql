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
-- Table structure for table `business`
--

DROP TABLE IF EXISTS `business`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `business` (
  `id` int NOT NULL,
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `phone` varchar(45) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `representation` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `business`
--

LOCK TABLES `business` WRITE;
/*!40000 ALTER TABLE `business` DISABLE KEYS */;
INSERT INTO `business` VALUES (1,'Allstate Corporation (The)','605-752-7288','bvan0@lulu.com','y9ejSGbMk','Brigid Van der Linde'),(2,'Green Dot Corporation','789-390-7511','sjehu1@dagondesign.com','JP79SoJ6','Stu Jehu'),(3,'PennantPark Floating Rate Capital Ltd.','385-488-6756','apohl2@addthis.com','YNi38vtQ','Annaliese Pohl'),(4,'Aflac Incorporated','364-523-5613','jhollerin3@marketwatch.com','BFTL9993Rk','Jodie Hollerin'),(5,'Momo Inc.','568-846-6267','fconnock4@aol.com','XH95cf','Freeman Connock'),(6,'Royal Bank Scotland plc (The)','629-675-0645','ggauford5@cdbaby.com','D4oC1uY8QV','Goldarina Gauford'),(7,'Mattersight Corporation','736-204-3824','mduckworth6@desdev.cn','SymtYeAWfYrO','Martynne Duckworth'),(8,'Roka Bioscience, Inc.','328-136-1235','wnapoli7@symantec.com','COfBjBj','Welsh Napoli'),(9,'BlackRock Income Investment Quality Trust','539-352-4184','bgiacopini8@zdnet.com','tlT00i','Basilio Giacopini'),(10,'Deutsche Bank AG','866-645-5034','amaccorley9@t.co','KCStYT4','Aline MacCorley'),(11,'Global Net Lease, Inc.','141-131-2779','mlidingtona@hud.gov','HWf1irUE','Maddie Lidington'),(12,'Aptose Biosciences, Inc.','474-854-0479','spyeb@google.es','RahkIM','Shaw Pye'),(13,'Apollo Investment Corporation','492-158-2764','ashailerc@nytimes.com','EuCAhBF','Asa Shailer'),(14,'Digital Turbine, Inc.','446-898-3955','omccuddend@angelfire.com','g1m1h8','Odell McCudden'),(15,'Hallmark Financial Services, Inc.','430-604-8735','jfroomee@freewebs.com','TDBj6MUuhnW','Jonis Froome'),(16,'BlackRock Multi-Sector Income Trust','303-412-4269','chounsomef@homestead.com','yIkhP3','Clo Hounsome'),(17,'National Presto Industries, Inc.','525-461-8095','gbartheletg@wisc.edu','VmfWH1B','Gillan Barthelet'),(18,'United Insurance Holdings Corp.','431-360-5283','cspringallh@smugmug.com','vC9SIHj','Chico Springall'),(19,'Newmont Mining Corporation','592-680-2770','oconnocki@canalblog.com','ld5h2cgstJg','Oralla Connock'),(20,'InnerWorkings, Inc.','514-240-4576','beadmeadesj@howstuffworks.com','zG0pOFxR9lDk','Bordie Eadmeades'),(21,'Tronox Limited','860-919-4446','csiggeryk@youtu.be','WKGZW286','Codee Siggery'),(22,'Coherus BioSciences, Inc.','454-175-7351','zrendbaekl@youtu.be','hkawv4lp','Zorah Rendbaek'),(23,'First Trust NASDAQ ABA Community Bank Index Fund','110-806-5578','wstormontm@lycos.com','5oALimACu','Woodman Stormont'),(24,'RXi Pharmaceuticals Corporation','277-814-3618','oblaiklockn@msu.edu','WUEcp9IdV','Onfroi Blaiklock'),(25,'Dycom Industries, Inc.','454-299-6904','fwickwaro@japanpost.jp','1Yzh7aB6ro3g','Farah Wickwar'),(26,'Colony NorthStar, Inc.','694-335-1307','blinnep@hatena.ne.jp','jyIBVT','Bettye Linne'),(27,'CTI BioPharma Corp.','455-642-1740','kjorryq@buzzfeed.com','bzG63dj','Karrah Jorry'),(28,'Exactech, Inc.','134-870-8906','tbushillr@wp.com','sLsZ1bYxt','Tucky Bushill'),(29,'Hospitality Properties Trust','181-283-5628','knanellis@domainmarket.com','2XlwsMTNOa','Kearney Nanelli'),(30,'TFS Financial Corporation','647-235-3482','rmegarrellt@telegraph.co.uk','3D2g7le','Rosette Megarrell'),(31,'Argos Therapeutics, Inc.','708-861-0266','ghollowu@nsw.gov.au','KN6DyHNG','Gayleen Hollow'),(32,'Hemisphere Media Group, Inc.','323-781-6890','vblaszczynskiv@newsvine.com','Wdyqjs4u','Vivie Blaszczynski'),(33,'GSI Technology, Inc.','546-651-4479','cmathelyw@newyorker.com','0kH5xaacL','Clementina Mathely'),(34,'Vident Core U.S. Bond Strategy Fund','367-127-6567','ibeamesx@nature.com','RX6qSHDD','Ingaborg Beames'),(35,'Digi International Inc.','438-731-1123','echallisy@patch.com','Sg5JpgiVMSE6','Emanuele Challis'),(36,'Acco Brands Corporation','603-462-0884','jwhysallz@rediff.com','wenXxKoHB','Javier Whysall'),(37,'PIMCO New York Municipal Income Fund','148-866-9771','tdartnell10@fc2.com','dzxFd6bqshi9','Tressa Dartnell'),(38,'Gabelli Dividend','190-818-1085','rcouronne11@bizjournals.com','giBVES4Oy','Raddy Couronne'),(39,'Sientra, Inc.','600-245-1565','dotto12@sphinn.com','L6kGy2Dt6A4','Darrelle Otto'),(40,'MINDBODY, Inc.','969-471-1146','kpattenden13@lulu.com','MpzZnW4HqExg','Kerby Pattenden'),(41,'PowerShares KBW Property & Casualty Insurance Portfolio','361-208-3812','pde14@java.com','OyvulS8','Prent De Lacey'),(42,'Sears Holdings Corporation','993-303-5163','bdeave15@zdnet.com','TUvXpH','Blondell Deave'),(43,'ARI Network Services, Inc.','300-255-8130','tmcconnal16@amazon.com','KPskdzoL','Tamara McConnal'),(44,'Cytori Therapeutics Inc','768-611-4866','elongdon17@typepad.com','rIR39mL2h','Etheline Longdon'),(45,'Neurotrope, Inc.','699-959-4879','gcostello18@wikispaces.com','sB2CL0NPV3fD','Gerty Costello'),(46,'Akebia Therapeutics, Inc.','856-768-6186','promney19@ted.com','E94tGvhLov5a','Prentice Romney'),(47,'Frank\'s International N.V.','208-158-5798','mdoncaster1a@samsung.com','ysNWnXj','Marcus Doncaster'),(48,'Osisko Gold Royalties Ltd','444-290-2342','eglenfield1b@amazon.com','leyoloQ','Elvina Glenfield'),(49,'Qwest Corporation','810-454-4180','cbrixey1c@about.me','KyX4gPEaq7','Clemence Brixey'),(50,'B&G Foods, Inc.','121-753-4278','mwordley1d@springer.com','7qZz4rGONNFZ','Miguela Wordley'),(51,'Công Ty Khang TNMTV','0945447356','khang.nguyen4165@hcmut.edu.vn','Khang202620','MR. Khang');
/*!40000 ALTER TABLE `business` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-14 13:58:22
