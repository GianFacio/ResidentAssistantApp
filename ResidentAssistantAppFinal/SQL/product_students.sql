-- MySQL dump 10.13  Distrib 8.0.24, for macos11 (x86_64)
--
-- Host: 127.0.0.1    Database: product
-- ------------------------------------------------------
-- Server version	5.7.34

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
-- Table structure for table `students`
--

DROP TABLE IF EXISTS `students`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `students` (
  `id` int(11) NOT NULL,
  `firstName` varchar(45) DEFAULT NULL,
  `lastName` varchar(45) DEFAULT NULL,
  `room` varchar(45) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `grade` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `students`
--

LOCK TABLES `students` WRITE;
/*!40000 ALTER TABLE `students` DISABLE KEYS */;
INSERT INTO `students` VALUES (1,'Konstantine','Wordsley','21','979-345-3823','Freshman'),(2,'Ted','Llopis','90','192-464-6905','Freshman'),(3,'Katuscha','Biss','3','892-930-3437','freshman'),(4,'Haroun','MacAdie','4','198-244-2136','freshman'),(5,'Sayre','Benet','5','842-825-8400','freshman'),(6,'Willi','Clotworthy','6','959-457-5741','freshman'),(7,'Angelle','Brusle','7','875-584-4752','freshman'),(8,'Simone','Severns','8','767-418-9063','freshman'),(9,'Pattie','Batteson','9','619-751-2434','freshman'),(10,'Catherina','Alwood','10','989-444-7951','freshman'),(11,'Barry','Wesker','11','428-787-8058','freshman'),(12,'Urson','Millimoe','12','210-583-4365','freshman'),(13,'Laverna','Wyleman','13','715-926-9389','freshman'),(14,'August','Volet','14','812-148-7887','freshman'),(15,'Bar','Cawse','15','950-560-9390','freshman'),(16,'Tammie','Monck','16','278-880-4391','freshman'),(17,'Alanna','Giottoi','17','815-139-3230','freshman'),(18,'Alley','Riditch','18','973-303-8855','freshman'),(19,'Moss','Lambot','19','616-375-5846','freshman'),(20,'Delmor','Picknett','20','293-729-7486','freshman'),(21,'Jervis','Bedburrow','21','915-228-3833','Sophmore'),(22,'Dolley','Sherbrook','22','923-338-3603','Sophmore'),(23,'Celle','Heistermann','23','793-495-9097','Sophmore'),(24,'Hatti','Dunphy','24','304-556-1471','Sophmore'),(25,'Bernelle','O\'Bruen','25','740-463-3066','Sophmore'),(26,'Odette','Moncreiffe','26','362-236-2406','Sophmore'),(27,'Conrado','Titchmarsh','27','451-919-7851','Sophmore'),(28,'Anson','Dayes','28','134-845-6460','Sophmore'),(29,'Clerkclaude','Langforth','29','172-971-9720','Sophmore'),(30,'Torrance','Hymor','30','989-217-3256','Sophmore'),(31,'Baryram','Gorcke','31','244-697-8977','Sophmore'),(32,'Myra','Scullion','32','318-920-8372','Sophmore'),(33,'Meaghan','Reide','33','538-691-7519','Sophmore'),(34,'Dynah','Porritt','34','393-836-4950','Sophmore'),(35,'Waly','Brown','35','828-739-3865','Sophmore'),(36,'Gunilla','MacGowing','36','998-586-9905','Sophmore'),(37,'Andonis','Pimlock','37','570-688-0556','Sophmore'),(38,'Jolee','Philippeaux','38','190-991-6182','Sophmore'),(39,'Gerri','Swindell','39','961-138-0755','Sophmore'),(40,'Rutter','Ferri','40','809-665-2052','Sophmore'),(41,'Jeannie','Gwinnett','41','785-640-5413','Junior'),(42,'Carolin','Woodhouse','42','653-809-6476','Junior'),(43,'Cleo','Cristofari','43','724-996-0541','Junior'),(44,'Diane-marie','Coon','44','515-779-5406','Junior'),(45,'Lydon','Winger','45','985-811-0941','Junior'),(46,'Carter','Frenzl','46','520-455-9131','Junior'),(47,'Pearl','Baalham','47','625-742-1794','Junior'),(48,'Ken','Bootland','48','443-822-4422','Junior'),(49,'Nichole','Kundt','49','358-825-9216','Junior'),(50,'Sherry','Letessier','50','300-920-1486','Junior'),(51,'Alida','Castaignet','51','597-367-9651','Junior'),(52,'Rakel','Morshead','52','746-198-5192','Junior'),(53,'Sydelle','Mably','53','978-423-7487','Junior'),(54,'Myrtle','MacKeague','54','520-158-8160','Junior'),(55,'Eliot','De-Ville','55','289-893-5687','Junior'),(56,'Rudolph','Kreuzer','56','464-842-3367','Junior'),(57,'Fredric','Nolot','57','428-208-3027','Junior'),(58,'Nicola','Langtry','58','127-884-7479','Junior'),(59,'Cirillo','Northam','59','946-926-8651','Junior'),(60,'Yevette','Brannan','60','896-846-6863','Junior'),(61,'Chevy','Tiltman','61','407-245-3930','Senior'),(62,'Joachim','Kunze','62','136-866-0967','Senior'),(63,'Rolph','Walpole','63','792-249-7761','Senior'),(64,'Jennie','Krienke','64','336-735-4380','Senior'),(65,'Terencio','Selwin','65','493-477-8045','Senior'),(66,'Read','Kettlestring','66','598-302-4105','Senior'),(67,'Kendricks','Scamp','67','241-319-5127','Senior'),(68,'Melodie','Georgiev','68','204-982-4463','Senior'),(69,'Eadith','Hemphall','69','473-775-7070','Senior'),(70,'Orson','McEnhill','70','175-275-8219','Senior'),(71,'Brennan','Pattullo','71','931-312-6024','Senior'),(72,'Edeline','Morando','72','777-654-5702','Senior'),(73,'Yasmeen','Mantram','73','539-809-6949','Senior'),(74,'Symon','Chevin','74','119-185-5797','Senior'),(75,'Idaline','Pillman','75','425-562-9875','Senior'),(76,'Moyra','Maasze','76','136-283-8432','Senior'),(77,'Karel','Powelee','77','836-335-8613','Senior'),(78,'Baxter','Leadbeater','78','756-417-4562','Senior'),(79,'Avram','Maylin','79','410-185-6027','Senior'),(80,'Giancarlo','Facio','80','452-884-3836','Senior');
/*!40000 ALTER TABLE `students` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-29 13:26:26
