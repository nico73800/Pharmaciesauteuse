-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 22, 2022 at 10:49 AM
-- Server version: 10.4.10-MariaDB
-- PHP Version: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `aaszdqsdqsd`
--

-- --------------------------------------------------------

--
-- Table structure for table `medecins`
--

DROP TABLE IF EXISTS `medecins`;
CREATE TABLE IF NOT EXISTS `medecins` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) DEFAULT NULL,
  `prenom` varchar(50) DEFAULT NULL,
  `telephone` varchar(50) DEFAULT NULL,
  `permis` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `permis` (`permis`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `medecins`
--

INSERT INTO `medecins` (`id`, `nom`, `prenom`, `telephone`, `permis`) VALUES
(1, 'PTIKASSKRUT', 'Justin', '0458645465', '1'),
(2, 'ZOTTO', 'Henry', '0654541232', '2');

-- --------------------------------------------------------

--
-- Table structure for table `medicaments`
--

DROP TABLE IF EXISTS `medicaments`;
CREATE TABLE IF NOT EXISTS `medicaments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) DEFAULT NULL,
  `dosage` varchar(15) DEFAULT NULL,
  `frequences` varchar(50) DEFAULT NULL,
  `type` varchar(50) DEFAULT NULL,
  `stocks` int(11) DEFAULT NULL,
  `seuil_alerte` int(11) DEFAULT NULL,
  `fournisseur` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `medicaments`
--

INSERT INTO `medicaments` (`id`, `nom`, `dosage`, `frequences`, `type`, `stocks`, `seuil_alerte`, `fournisseur`) VALUES
(1, 'Aspirine', '500g', 'max. 3 fois par jour', 'Comprimé', 500, 100, 'Aspirine & co'),
(2, 'GoodSoop', '100 ml', '1x par jour', 'Sirop', 1000, 150, 'Jonh Soop de Soop.com');

-- --------------------------------------------------------

--
-- Table structure for table `ordonnances`
--

DROP TABLE IF EXISTS `ordonnances`;
CREATE TABLE IF NOT EXISTS `ordonnances` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `no_patient` int(11) NOT NULL,
  `no_pathologie` int(11) NOT NULL,
  `no_medecin` int(11) NOT NULL,
  `duree_traitement` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_pathos` (`no_pathologie`),
  KEY `fk_patients` (`no_patient`),
  KEY `fk_medecins` (`no_medecin`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ordonnances`
--

INSERT INTO `ordonnances` (`id`, `no_patient`, `no_pathologie`, `no_medecin`, `duree_traitement`) VALUES
(1, 1, 1, 2, '2 mois'),
(2, 2, 1, 1, '2 mois');

-- --------------------------------------------------------

--
-- Table structure for table `pathologies`
--

DROP TABLE IF EXISTS `pathologies`;
CREATE TABLE IF NOT EXISTS `pathologies` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nom` (`nom`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pathologies`
--

INSERT INTO `pathologies` (`id`, `nom`) VALUES
(1, 'Grippe'),
(2, 'Cancer du poumon'),
(3, 'Mal de gorge');

-- --------------------------------------------------------

--
-- Table structure for table `patients`
--

DROP TABLE IF EXISTS `patients`;
CREATE TABLE IF NOT EXISTS `patients` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `telephone` varchar(14) NOT NULL,
  `mail` varchar(50) NOT NULL,
  `date_naiss` date NOT NULL,
  `securite_sociale` varchar(15) NOT NULL,
  `mutuelle` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `securite_sociale` (`securite_sociale`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `patients`
--

INSERT INTO `patients` (`id`, `nom`, `prenom`, `telephone`, `mail`, `date_naiss`, `securite_sociale`, `mutuelle`) VALUES
(1, 'COOPER', 'Greg', ' 0688212135', 'greg.cooper@mail.com', '1978-12-16', '12345678912312', 'Harmonie Mutuelle'),
(2, 'SOTTO-COPERTURA', 'Giovanni', '0451515465', 'notaspy.iswear@hotmail.fr', '1999-11-15', '987987987987654', 'Mutuelle Entrain');

-- --------------------------------------------------------

--
-- Table structure for table `personnes`
--

DROP TABLE IF EXISTS `personnes`;
CREATE TABLE IF NOT EXISTS `personnes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) DEFAULT NULL,
  `prenom` varchar(50) DEFAULT NULL,
  `login` varchar(15) DEFAULT NULL,
  `password` varchar(15) DEFAULT NULL,
  `role` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `soigne`
--

DROP TABLE IF EXISTS `soigne`;
CREATE TABLE IF NOT EXISTS `soigne` (
  `no_ordonnance` int(11) NOT NULL,
  `no_medicament` int(11) NOT NULL,
  PRIMARY KEY (`no_ordonnance`,`no_medicament`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `soigne`
--

INSERT INTO `soigne` (`no_ordonnance`, `no_medicament`) VALUES
(1, 2),
(2, 1);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
