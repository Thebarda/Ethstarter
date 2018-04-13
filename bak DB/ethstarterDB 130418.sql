-- phpMyAdmin SQL Dump
-- version 4.6.6deb4
-- https://www.phpmyadmin.net/
--
-- Client :  localhost:3306
-- Généré le :  Ven 13 Avril 2018 à 04:16
-- Version du serveur :  10.1.26-MariaDB-0+deb9u1
-- Version de PHP :  7.0.27-0+deb9u1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `ethstarterDB`
--

-- --------------------------------------------------------

--
-- Structure de la table `campagnes`
--

CREATE TABLE `campagnes` (
  `idCampagne` int(11) NOT NULL,
  `idEntrepreneur` int(11) NOT NULL,
  `nomCampagne` varchar(200) NOT NULL,
  `but` float NOT NULL,
  `montantActuel` float NOT NULL,
  `montantMax` int(11) NOT NULL,
  `dateLimite` date NOT NULL,
  `description` text NOT NULL,
  `descriptionCourte` text NOT NULL,
  `image` text NOT NULL,
  `estEnCours` tinyint(1) NOT NULL,
  `validated` tinyint(1) NOT NULL,
  `descriptionValidation` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `campagnes`
--

INSERT INTO `campagnes` (`idCampagne`, `idEntrepreneur`, `nomCampagne`, `but`, `montantActuel`, `montantMax`, `dateLimite`, `description`, `descriptionCourte`, `image`, `estEnCours`, `validated`, `descriptionValidation`) VALUES
(1384, 46, 'mon projet : ma boulangerie', 30, 0.19654, 40, '2018-05-30', '<span></span><font size=\"2\">Bonjour,<br><br>J\'ai un projet qui me tiens à coeur deuis quelques mois.<br>J\'aimerais créer </font><font size=\"4\">ma boulangerie participative<br></font><font size=\"2\">Cette boulangerie permettra de distribué du pain à un prix défiant toute concurrence.<br>Par exemple, la baguette à 40 Centimes<br><br>Cette idée se base sur celle-ci : <span wbb=\"wbbid_40\"><a href=\"http://www.letelegramme.fr/cotes-darmor/saint-brieuc/robien-bientot-une-boulangerie-participative-et-bio-28-06-2016-11126376.php\">http://www.letelegramme.fr/cotes-darmor/saint-brieuc/robien-bientot-une-boulangerie-participative-et-bio-28-06-2016-11126376.php<br><br></a><span>?<iframe src=\"http://www.youtube.com/embed/eXllMQ4ouz8\" width=\"640\" height=\"480\" frameborder=\"0\"></iframe><br><br>J\'en demande 30 Ether.<br>Je compte sur votre générosité<br><br>Michement votre,<br>Michel !</span></span></font><br>', 'Une boulangerie participative', 'DUMMY PATH', 1, 1, ''),
(1385, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1386, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1387, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1388, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1389, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1390, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1391, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1392, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1393, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1394, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1395, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1396, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1397, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1398, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1399, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1400, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1401, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1402, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1403, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1404, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1405, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1406, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1407, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1408, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1409, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1410, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1411, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1412, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1413, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1414, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1415, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1416, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1417, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1418, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1419, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1420, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1421, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1422, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1423, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1424, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1425, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1426, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1427, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1428, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1429, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1430, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1431, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1432, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1433, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1434, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1435, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1436, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1437, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1438, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1439, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1440, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1441, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1442, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1443, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1444, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1445, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1446, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1447, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1448, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1449, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1450, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1451, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1452, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1453, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1454, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1455, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1456, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1457, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1458, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1459, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1460, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1461, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1462, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1463, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1464, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1465, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1466, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1467, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1468, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1469, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1470, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1471, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1472, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1473, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1474, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1475, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1476, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1477, 46, 'test robotFramework', 10, 0, 12, '2020-04-16', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, '');

-- --------------------------------------------------------

--
-- Structure de la table `commentaires`
--

CREATE TABLE `commentaires` (
  `idContributeur` int(11) NOT NULL,
  `idCampagne` int(11) NOT NULL,
  `commentaire` varchar(500) NOT NULL,
  `datetime` datetime NOT NULL,
  `liked` int(11) NOT NULL,
  `unliked` int(11) NOT NULL,
  `idComm` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `commentaires`
--

INSERT INTO `commentaires` (`idContributeur`, `idCampagne`, `commentaire`, `datetime`, `liked`, `unliked`, `idComm`) VALUES
(47, 1384, 'un comm en terre robot framework', '0000-00-00 00:00:00', 0, 0, 1),
(47, 1384, 'un comm en terre robot framework', '0000-00-00 00:00:00', 0, 0, 2),
(47, 1384, 'un comm en terre robot framework', '0000-00-00 00:00:00', 0, 0, 3),
(47, 1384, 'un comm en terre robot framework', '0000-00-00 00:00:00', 0, 0, 4),
(47, 1384, 'un comm en terre robot framework', '0000-00-00 00:00:00', 0, 0, 5),
(47, 1384, 'un comm en terre robot framework', '0000-00-00 00:00:00', 0, 0, 6),
(47, 1384, 'Test', '2018-04-10 00:00:00', 0, 0, 7),
(47, 1384, 'Test', '2018-04-10 00:00:00', 0, 0, 8),
(46, 1384, 'Test date ', '2018-04-10 00:00:00', 0, 0, 9),
(47, 1384, 'un comm en terre robot framework', '2018-04-10 18:01:42', 0, 0, 10),
(47, 1384, 'un comm en terre robot framework', '2018-04-10 18:10:14', 0, 0, 11),
(47, 1384, 'un comm en terre robot framework', '2018-04-10 18:20:01', 0, 0, 12),
(47, 1384, 'un comm en terre robot framework', '2018-04-10 18:27:11', 0, 0, 13),
(47, 1384, 'un comm en terre robot framework', '2018-04-10 18:30:37', 0, 0, 14),
(47, 1384, 'un comm en terre robot framework', '2018-04-11 10:37:13', 0, 0, 15),
(47, 1384, 'un comm en terre robot framework', '2018-04-11 10:42:58', 0, 0, 16),
(47, 1384, 'un comm en terre robot framework', '2018-04-11 11:30:34', 0, 0, 17),
(47, 1384, 'un comm en terre robot framework', '2018-04-11 11:59:13', 0, 0, 18),
(47, 1384, 'un comm en terre robot framework', '2018-04-11 12:05:55', 0, 0, 19),
(47, 1384, 'un comm en terre robot framework', '2018-04-11 12:44:22', 0, 0, 20),
(47, 1384, 'un comm en terre robot framework', '2018-04-11 12:47:20', 0, 0, 21),
(47, 1384, 'un comm en terre robot framework', '2018-04-11 12:52:36', 0, 0, 22),
(47, 1384, 'un comm en terre robot framework', '2018-04-11 12:59:34', 0, 0, 23),
(47, 1384, 'un comm en terre robot framework', '2018-04-11 13:06:59', 0, 0, 24),
(47, 1384, 'un comm en terre robot framework', '2018-04-11 13:15:38', 0, 0, 25),
(47, 1384, 'un comm en terre robot framework', '2018-04-11 13:22:18', 0, 0, 26),
(47, 1384, 'un comm en terre robot framework', '2018-04-11 15:03:23', 0, 0, 27),
(47, 1384, 'un comm en terre robot framework', '2018-04-11 15:33:27', 0, 0, 28),
(47, 1384, 'un comm en terre robot framework', '2018-04-11 15:41:23', 0, 0, 29),
(47, 1384, 'un comm en terre robot framework', '2018-04-11 15:48:16', 0, 0, 30),
(47, 1384, 'un comm en terre robot framework', '2018-04-11 15:58:36', 0, 0, 31),
(47, 1384, 'un comm en terre robot framework', '2018-04-11 16:06:05', 0, 0, 32),
(47, 1384, 'un comm en terre robot framework', '2018-04-11 16:31:30', 0, 0, 33),
(47, 1384, 'un comm en terre robot framework', '2018-04-11 16:37:00', 0, 0, 34),
(47, 1384, 'un comm en terre robot framework', '2018-04-11 16:51:18', 0, 0, 35),
(47, 1384, 'un comm en terre robot framework', '2018-04-11 17:52:23', 0, 0, 36),
(47, 1384, 'un comm en terre robot framework', '2018-04-11 17:59:03', 0, 0, 37),
(47, 1384, 'un comm en terre robot framework', '2018-04-11 18:05:50', 0, 0, 38),
(47, 1384, 'un comm en terre robot framework', '2018-04-11 18:12:31', 0, 0, 39),
(47, 1384, 'un comm en terre robot framework', '2018-04-11 19:43:59', 0, 0, 40),
(47, 1384, 'un comm en terre robot framework', '2018-04-11 20:18:30', 0, 0, 41),
(47, 1384, 'un comm en terre robot framework', '2018-04-11 20:25:00', 0, 0, 42),
(47, 1384, 'un comm en terre robot framework', '2018-04-12 03:52:27', 0, 0, 43),
(47, 1384, 'un comm en terre robot framework', '2018-04-12 09:52:54', 0, 0, 44),
(47, 1384, 'un comm en terre robot framework', '2018-04-12 14:54:41', 0, 0, 45),
(47, 1384, 'un comm en terre robot framework', '2018-04-12 15:01:23', 0, 0, 46),
(47, 1384, 'un comm en terre robot framework', '2018-04-12 15:06:05', 0, 0, 47),
(47, 1384, 'un comm en terre robot framework', '2018-04-12 15:08:05', 0, 0, 48),
(47, 1384, 'un comm en terre robot framework', '2018-04-12 15:08:51', 0, 0, 49),
(47, 1384, 'un comm en terre robot framework', '2018-04-12 15:37:10', 0, 0, 50);

-- --------------------------------------------------------

--
-- Structure de la table `contrepartiesCampagne`
--

CREATE TABLE `contrepartiesCampagne` (
  `idContrepartie` int(11) NOT NULL,
  `idCampagne` int(11) NOT NULL,
  `descriptionCP` varchar(1000) NOT NULL,
  `montant` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `contrepartiesCampagne`
--

INSERT INTO `contrepartiesCampagne` (`idContrepartie`, `idCampagne`, `descriptionCP`, `montant`) VALUES
(3, 1384, 'Une semaine de pain gratuit', 0.01),
(4, 1384, 'Un mois de pain gratuit', 0.1),
(5, 1384, 'Une année de pain gratuit', 1);

-- --------------------------------------------------------

--
-- Structure de la table `contrepartiesContributeur`
--

CREATE TABLE `contrepartiesContributeur` (
  `idCampagne` int(11) NOT NULL,
  `idContributeur` int(11) NOT NULL,
  `idContrepartie` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `contrepartiesContributeur`
--

INSERT INTO `contrepartiesContributeur` (`idCampagne`, `idContributeur`, `idContrepartie`) VALUES
(1384, 47, 5),
(1384, 42, 3),
(1384, 1, 4),
(1384, 52, 5),
(1384, 46, 3),
(1384, 46, 4),
(1384, 46, 3),
(1384, 46, 4),
(1384, 46, 3),
(1384, 46, 4),
(1384, 47, 3),
(1384, 47, 3),
(1384, 47, 4),
(1384, 46, 3),
(1384, 46, 4),
(1384, 46, 3),
(1384, 46, 4),
(1384, 46, 4),
(1384, 46, 3),
(1384, 46, 4),
(1384, 46, 3),
(1384, 46, 4),
(1384, 46, 3),
(1384, 47, 4),
(1384, 47, 3),
(1384, 46, 3),
(1384, 46, 4),
(1384, 46, 3),
(1384, 46, 3),
(1384, 46, 4),
(1384, 46, 4),
(1384, 46, 3),
(1384, 46, 4),
(1384, 47, 4),
(1384, 47, 4),
(1384, 46, 3),
(1384, 46, 4),
(1384, 46, 3),
(1384, 46, 4),
(1384, 42, 4),
(1384, 47, 4),
(1384, 47, 4),
(1384, 47, 4),
(1384, 47, 4),
(1384, 47, 4),
(1384, 42, 4),
(1384, 42, 4),
(1384, 52, 4),
(1384, 52, 4),
(1384, 47, 4),
(1384, 47, 4),
(1384, 46, 3),
(1384, 47, 5),
(1384, 46, 3),
(1384, 46, 4),
(1384, 46, 3),
(1384, 46, 4),
(1384, 47, 4),
(1384, 47, 4),
(1384, 47, 4),
(1384, 47, 4),
(1384, 47, 4),
(1384, 52, 4),
(1384, 52, 4),
(1384, 52, 4),
(1384, 52, 3),
(1384, 52, 4),
(1384, 52, 3),
(1384, 52, 4),
(1384, 46, 3),
(1384, 46, 3),
(1384, 46, 3),
(1384, 46, 4),
(1384, 46, 3),
(1384, 46, 4),
(1384, 46, 3),
(1384, 46, 4),
(1384, 46, 3),
(1384, 46, 4),
(1384, 46, 3),
(1384, 46, 4),
(1384, 46, 3),
(1384, 46, 4),
(1384, 46, 3),
(1384, 46, 4),
(1384, 46, 3),
(1384, 46, 4),
(1384, 46, 3),
(1384, 46, 4),
(1384, 46, 3),
(1384, 46, 4),
(1384, 46, 3),
(1384, 46, 3),
(1384, 46, 4),
(1384, 46, 3),
(1384, 46, 4),
(1384, 46, 3),
(1384, 46, 4),
(1384, 46, 3),
(1384, 46, 4),
(1384, 46, 4),
(1384, 46, 3),
(1384, 46, 4),
(1384, 46, 4),
(1384, 46, 3),
(1384, 46, 4),
(1384, 46, 5),
(1384, 46, 3),
(1384, 46, 4),
(1384, 46, 3),
(1384, 46, 4),
(1384, 46, 3),
(1384, 46, 4),
(1384, 46, 4),
(1384, 46, 3),
(1384, 46, 4),
(1384, 46, 3),
(1384, 46, 4),
(1384, 1, 4),
(1384, 46, 3),
(1384, 46, 4),
(1384, 46, 3),
(1384, 46, 4),
(1384, 46, 3),
(1384, 46, 3),
(1384, 46, 4),
(1384, 46, 4),
(1384, 46, 3),
(1384, 46, 4);

-- --------------------------------------------------------

--
-- Structure de la table `dm`
--

CREATE TABLE `dm` (
  `idDM` int(50) NOT NULL,
  `sender` int(12) NOT NULL,
  `title` varchar(500) NOT NULL,
  `message` varchar(5000) NOT NULL,
  `datetime` datetime NOT NULL,
  `recipient` int(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `dm`
--

INSERT INTO `dm` (`idDM`, `sender`, `title`, `message`, `datetime`, `recipient`) VALUES
(1, 51, 'DB Message First Test', 'whatsup bitches', '1664-01-02 12:15:59', 0),
(5, 1, 'hello', 'partouze ce soir', '2018-04-10 11:44:15', 51),
(6, 51, 'RE: hello', 'oui pour la touze cest ok', '2018-04-10 11:45:17', 1),
(7, 46, 'Salut', 'Bonjour je souhaiterai réserver la porcherie pour mon anniversaire le 2 Juin.\nBien Cordialement \nDaniel le Violongay', '2018-04-10 12:00:45', 51),
(8, 46, 'coucou', '\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'', '2018-04-10 12:28:03', 51),
(10, 46, 'RE: RE:', 'yes', '2018-04-10 14:34:16', 51),
(11, 46, 'salut', 'salut', '2018-04-10 14:34:57', 47),
(13, 52, 'coucou', 'djsidhsod', '2018-04-11 13:21:15', 47),
(14, 47, 'RE: coucou', 'swag', '2018-04-11 13:22:53', 52),
(15, 47, 'cest bon', 'cest jadore', '2018-04-11 13:42:47', 46),
(16, 47, 'c\'est', 'c\'est j\'adore', '2018-04-11 13:48:57', 46),
(17, 46, 'RE: c\'est', 'Merci', '2018-04-11 13:50:29', 47),
(18, 52, 'sdsdsds', 'dsdss', '2018-04-11 14:23:44', 46),
(19, 52, 'un message', 'un message', '2018-04-11 15:01:32', 46),
(20, 46, 'un test avec un \' quelque part', 'coucou c\'est moi', '2018-04-12 13:32:39', 42);

-- --------------------------------------------------------

--
-- Structure de la table `entrepreneur`
--

CREATE TABLE `entrepreneur` (
  `idUtilisateur` int(11) NOT NULL,
  `nomEntreprise` varchar(30) NOT NULL,
  `pieceIdentide` varchar(200) NOT NULL,
  `validated` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `entrepreneur`
--

INSERT INTO `entrepreneur` (`idUtilisateur`, `nomEntreprise`, `pieceIdentide`, `validated`) VALUES
(1, 'Rom\'s Corp', '703cfd8a-c071-2af9-e7a4-e28c42bdb839.jpeg\r\n', 1),
(14, 'dsds', '703cfd8a-c071-2af9-e7a4-e28c42bdb839.jpeg', 0),
(15, 'dsdssdssd', '703cfd8a-c071-2af9-e7a4-e28c42bdb839.jpeg', 0),
(16, 'sqsqqss', '703cfd8a-c071-2af9-e7a4-e28c42bdb839.jpeg', 0),
(17, 'ddsdss', '703cfd8a-c071-2af9-e7a4-e28c42bdb839.jpeg', 0),
(18, 'dssdss', '703cfd8a-c071-2af9-e7a4-e28c42bdb839.jpeg', 0),
(21, 'ddssdsd', '703cfd8a-c071-2af9-e7a4-e28c42bdb839.jpeg', 0),
(22, 'zazazazazzaa', '703cfd8a-c071-2af9-e7a4-e28c42bdb839.jpeg', 0),
(26, 'testest', '703cfd8a-c071-2af9-e7a4-e28c42bdb839.jpeg', 0),
(29, 'robert', '703cfd8a-c071-2af9-e7a4-e28c42bdb839.jpeg', 0),
(33, 'Société1', '703cfd8a-c071-2af9-e7a4-e28c42bdb839.jpeg', 0),
(34, 'dsdsdss', '703cfd8a-c071-2af9-e7a4-e28c42bdb839.jpeg', 0),
(35, 'dssdsd', '703cfd8a-c071-2af9-e7a4-e28c42bdb839.jpeg', 0),
(36, 'ddsdss', '703cfd8a-c071-2af9-e7a4-e28c42bdb839.jpeg', 0),
(39, 'chheang company', '703cfd8a-c071-2af9-e7a4-e28c42bdb839.jpeg', 0),
(42, 'tom company', '703cfd8a-c071-2af9-e7a4-e28c42bdb839.jpeg', 1),
(43, 'phiiillll', '920b7c99-f7cd-7708-3f1b-132ae9868927.png', 1),
(45, 'Lafarge', '2426d216-2f56-0759-232f-9612cf700302.jpg', 2),
(46, 'denied', '020440bb-48c8-626a-6283-530c4c718473.png', 1),
(52, 'Toto', '6b49596e-ab51-9a60-4e42-6fc50338e3e3.png', 1);

-- --------------------------------------------------------

--
-- Structure de la table `favoris`
--

CREATE TABLE `favoris` (
  `idUtilisateur` int(11) NOT NULL,
  `idCampagne` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `favoris`
--

INSERT INTO `favoris` (`idUtilisateur`, `idCampagne`) VALUES
(0, 1249),
(0, 1249),
(41, 1249),
(0, 1250),
(0, 1250),
(47, 1253),
(51, 1264),
(51, 1264),
(46, 1342),
(46, 1264),
(47, 1384);

-- --------------------------------------------------------

--
-- Structure de la table `notifications`
--

CREATE TABLE `notifications` (
  `idNotification` int(11) NOT NULL,
  `idUtilisateur` int(11) NOT NULL,
  `text` varchar(1000) NOT NULL,
  `date` datetime NOT NULL,
  `viewed` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `notifications`
--

INSERT INTO `notifications` (`idNotification`, `idUtilisateur`, `text`, `date`, `viewed`) VALUES
(280, 46, 'Votre campagne mon porjet : ma boulangerie est en attente de validation', '2018-04-10 15:04:39', 0),
(281, 46, 'Votre campagne mon projet : ma boulangerie a été validé', '2018-04-10 15:05:53', 0),
(282, 46, 'Nouvelle contribution de 1 ether pour votre campagne mon projet : ma boulangerie', '2018-04-10 15:06:20', 0),
(283, 46, 'Nouvelle contribution de 0.01 ether pour votre campagne mon projet : ma boulangerie', '2018-04-10 15:06:47', 0),
(284, 46, 'Nouvelle contribution de 0.1 ether pour votre campagne mon projet : ma boulangerie', '2018-04-10 15:07:12', 0),
(285, 46, 'Nouvelle contribution de 3.23 ether pour votre campagne mon projet : ma boulangerie', '2018-04-10 15:07:46', 0),
(286, 46, 'Nouvelle contribution de 0.01 ether pour votre campagne mon projet : ma boulangerie', '2018-04-10 15:17:05', 0),
(287, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-10 15:17:19', 0),
(288, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-10 15:17:52', 0),
(289, 46, 'Nouvelle contribution de 0.3 ether pour votre campagne mon projet : ma boulangerie', '2018-04-10 15:19:46', 0),
(290, 46, 'Nouvelle contribution de 0.01 ether pour votre campagne mon projet : ma boulangerie', '2018-04-10 15:27:48', 0),
(291, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-10 15:27:59', 0),
(292, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-10 15:28:29', 0),
(293, 46, 'Nouvelle contribution de 0.3 ether pour votre campagne mon projet : ma boulangerie', '2018-04-10 15:30:05', 0),
(294, 46, 'Nouvelle contribution de 0.01 ether pour votre campagne mon projet : ma boulangerie', '2018-04-10 15:34:12', 0),
(295, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-10 15:34:23', 0),
(296, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-10 15:34:52', 0),
(297, 46, 'Nouvelle contribution de 0.01 ether pour votre campagne mon projet : ma boulangerie', '2018-04-10 15:46:20', 0),
(298, 46, 'Nouvelle contribution de 0.01 ether pour votre campagne mon projet : ma boulangerie', '2018-04-10 15:46:49', 0),
(299, 46, 'Nouvelle contribution de 0.1 ether pour votre campagne mon projet : ma boulangerie', '2018-04-10 15:46:52', 0),
(300, 46, 'Nouvelle contribution de 0.01 ether pour votre campagne mon projet : ma boulangerie', '2018-04-10 15:51:39', 0),
(301, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-10 15:51:50', 0),
(302, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-10 15:52:19', 0),
(303, 46, 'Nouvelle contribution de 0.3 ether pour votre campagne mon projet : ma boulangerie', '2018-04-10 15:53:52', 0),
(304, 46, 'Nouvelle contribution de 0.01 ether pour votre campagne mon projet : ma boulangerie', '2018-04-10 16:04:09', 0),
(305, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-10 16:04:20', 0),
(306, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-10 16:04:48', 0),
(307, 46, 'Nouvelle contribution de 0.3 ether pour votre campagne mon projet : ma boulangerie', '2018-04-10 16:06:21', 0),
(308, 46, 'Nouvelle contribution de 0.1 ether pour votre campagne mon projet : ma boulangerie', '2018-04-10 17:13:17', 0),
(309, 46, 'Nouvelle contribution de 0.01 ether pour votre campagne mon projet : ma boulangerie', '2018-04-10 18:21:15', 0),
(310, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-10 18:21:26', 0),
(311, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-10 18:21:56', 0),
(312, 46, 'Nouvelle contribution de 0.3 ether pour votre campagne mon projet : ma boulangerie', '2018-04-10 18:23:31', 0),
(313, 46, 'Nouvelle contribution de 0.01 ether pour votre campagne mon projet : ma boulangerie', '2018-04-10 18:28:25', 0),
(314, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-10 18:28:37', 0),
(315, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-10 18:29:07', 0),
(316, 46, 'Nouvelle contribution de 0.3 ether pour votre campagne mon projet : ma boulangerie', '2018-04-10 18:30:45', 0),
(317, 46, 'Nouvelle contribution de 0.01 ether pour votre campagne mon projet : ma boulangerie', '2018-04-10 18:31:42', 0),
(318, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-10 18:31:54', 0),
(319, 46, 'Nouvelle contribution de 0.2 ether pour votre campagne mon projet : ma boulangerie', '2018-04-10 18:32:18', 0),
(320, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-10 18:32:24', 0),
(321, 46, 'Nouvelle contribution de 0.01 ether pour votre campagne mon projet : ma boulangerie', '2018-04-10 18:34:57', 0),
(322, 46, 'Nouvelle contribution de 0.01 ether pour votre campagne mon projet : ma boulangerie', '2018-04-10 21:01:23', 0),
(323, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-10 21:01:36', 0),
(324, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-10 21:02:04', 0),
(325, 46, 'Nouvelle contribution de 0.3 ether pour votre campagne mon projet : ma boulangerie', '2018-04-10 21:03:38', 0),
(326, 46, 'Nouvelle contribution de 0.01 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 10:10:36', 0),
(327, 46, 'Nouvelle contribution de 0.01 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 10:10:45', 0),
(328, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-11 10:10:48', 0),
(329, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-11 10:10:57', 0),
(330, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-11 10:11:17', 0),
(331, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-11 10:11:27', 0),
(332, 46, 'Nouvelle contribution de 0.3 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 10:12:52', 0),
(333, 46, 'Nouvelle contribution de 0.3 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 10:12:56', 0),
(334, 46, 'Nouvelle contribution de 0.01 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 10:16:58', 0),
(335, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-11 10:17:10', 0),
(336, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-11 10:17:40', 0),
(337, 46, 'Nouvelle contribution de 0.3 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 10:19:18', 0),
(338, 46, 'Nouvelle contribution de 0.4 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 10:36:44', 0),
(339, 46, 'Nouvelle contribution de 0.1 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 10:36:47', 0),
(340, 46, 'Nouvelle contribution de 0.01 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 10:44:13', 0),
(341, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-11 10:44:25', 0),
(342, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-11 10:44:56', 0),
(343, 46, 'Nouvelle contribution de 0.3 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 10:46:36', 0),
(344, 46, 'Nouvelle contribution de 0.01 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 11:31:58', 0),
(345, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-11 11:32:11', 0),
(346, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-11 11:32:46', 0),
(347, 46, 'Nouvelle contribution de 0.3 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 11:34:34', 0),
(348, 46, 'Nouvelle contribution de 0.4 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 11:38:46', 0),
(349, 46, 'Nouvelle contribution de 0.4 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 11:39:36', 0),
(350, 46, 'Nouvelle contribution de 0.1 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 11:42:15', 0),
(351, 46, 'Nouvelle contribution de 0.1 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 11:42:36', 0),
(352, 46, 'Nouvelle contribution de 0.1 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 11:42:40', 0),
(353, 46, 'Nouvelle contribution de 0.1 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 11:42:43', 0),
(354, 46, 'Nouvelle contribution de 0.1 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 11:49:40', 0),
(355, 46, 'Nouvelle contribution de 0.1 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 11:49:43', 0),
(356, 46, 'Nouvelle contribution de 0.1 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 11:50:39', 0),
(357, 46, 'Nouvelle contribution de 0.1 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 11:50:42', 0),
(358, 46, 'Nouvelle contribution de 0.1 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 11:51:05', 0),
(359, 46, 'Nouvelle contribution de 0.1 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 11:51:08', 0),
(360, 46, 'Nouvelle contribution de 0.01 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 11:55:31', 0),
(361, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-11 11:55:43', 0),
(362, 46, 'Nouvelle contribution de 1 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 11:56:08', 0),
(363, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-11 11:56:12', 0),
(364, 46, 'Nouvelle contribution de 0.01 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 12:00:27', 0),
(365, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-11 12:00:39', 0),
(366, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-11 12:01:08', 0),
(367, 46, 'Nouvelle contribution de 0.3 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 12:02:44', 0),
(368, 46, 'Nouvelle contribution de 0.01 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 12:07:11', 0),
(369, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-11 12:07:22', 0),
(370, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-11 12:07:53', 0),
(371, 46, 'Nouvelle contribution de 0.3 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 12:09:31', 0),
(372, 46, 'Nouvelle contribution de 0.1 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 12:27:45', 0),
(373, 46, 'Nouvelle contribution de 0.1 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 12:27:49', 0),
(374, 46, 'Nouvelle contribution de 0.1 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 12:34:38', 0),
(375, 46, 'Nouvelle contribution de 0.1 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 12:34:42', 0),
(376, 46, 'Nouvelle contribution de 0.2 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 12:35:31', 0),
(377, 46, 'Nouvelle contribution de 0.1 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 12:35:54', 0),
(378, 46, 'Nouvelle contribution de 0.1 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 12:36:20', 0),
(379, 46, 'Nouvelle contribution de 0.1 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 12:36:25', 0),
(380, 46, 'Nouvelle contribution de 0.01 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 12:36:29', 0),
(381, 46, 'Nouvelle contribution de 0.1 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 12:37:59', 0),
(382, 46, 'Nouvelle contribution de 0.01 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 12:38:02', 0),
(383, 46, 'Nouvelle contribution de 0.1 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 12:38:04', 0),
(384, 46, 'Nouvelle contribution de 0.01 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 12:48:34', 0),
(385, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-11 12:48:45', 0),
(386, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-11 12:49:15', 0),
(387, 46, 'Nouvelle contribution de 0.01 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 12:53:47', 0),
(388, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-11 12:53:58', 0),
(389, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-11 12:54:25', 0),
(390, 46, 'Nouvelle contribution de 0.01 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 13:00:53', 0),
(391, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-11 13:01:06', 0),
(392, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-11 13:01:41', 0),
(393, 46, 'Nouvelle contribution de 0.3 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 13:03:28', 0),
(394, 46, 'Nouvelle contribution de 0.01 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 13:08:12', 0),
(395, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-11 13:08:24', 0),
(396, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-11 13:08:54', 0),
(397, 46, 'Nouvelle contribution de 0.3 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 13:10:31', 0),
(398, 46, 'Nouvelle contribution de 0.01 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 13:16:51', 0),
(399, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-11 13:17:03', 0),
(400, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-11 13:17:32', 0),
(401, 46, 'Nouvelle contribution de 0.3 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 13:19:09', 0),
(402, 46, 'Nouvelle contribution de 0.01 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 13:23:36', 0),
(403, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-11 13:23:49', 0),
(404, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-11 13:24:23', 0),
(405, 46, 'Nouvelle contribution de 0.3 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 13:26:08', 0),
(406, 46, 'Nouvelle contribution de 0.01 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 15:04:45', 0),
(407, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-11 15:04:58', 0),
(408, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-11 15:05:31', 0),
(409, 46, 'Nouvelle contribution de 0.3 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 15:07:19', 0),
(410, 46, 'Nouvelle contribution de 0.01 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 15:34:40', 0),
(411, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-11 15:34:52', 0),
(412, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-11 15:35:21', 0),
(413, 46, 'Nouvelle contribution de 0.3 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 15:37:05', 0),
(414, 46, 'Nouvelle contribution de 0.01 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 15:42:36', 0),
(415, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-11 15:42:48', 0),
(416, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-11 15:43:17', 0),
(417, 46, 'Nouvelle contribution de 0.3 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 15:44:55', 0),
(418, 46, 'Nouvelle contribution de 0.01 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 15:49:30', 0),
(419, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-11 15:49:41', 0),
(420, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-11 15:50:10', 0),
(421, 46, 'Nouvelle contribution de 0.3 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 15:51:48', 0),
(422, 46, 'Nouvelle contribution de 0.01 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 15:59:58', 0),
(423, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-11 16:00:11', 0),
(424, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-11 16:00:45', 0),
(425, 46, 'Nouvelle contribution de 0.3 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 16:02:34', 0),
(426, 46, 'Nouvelle contribution de 0.01 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 16:07:19', 0),
(427, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-11 16:07:31', 0),
(428, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-11 16:08:02', 0),
(429, 46, 'Nouvelle contribution de 0.3 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 16:09:42', 0),
(430, 46, 'Nouvelle contribution de 0.01 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 16:32:51', 0),
(431, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-11 16:33:04', 0),
(432, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-11 16:33:36', 0),
(433, 46, 'Nouvelle contribution de 0.01 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 16:38:19', 0),
(434, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-11 16:38:32', 0),
(435, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-11 16:39:05', 0),
(436, 46, 'Nouvelle contribution de 0.3 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 16:40:56', 0),
(437, 46, 'Nouvelle contribution de 0.01 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 16:52:21', 0),
(438, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-11 16:52:33', 0),
(439, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-11 16:53:02', 0),
(440, 46, 'Nouvelle contribution de 0.3 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 16:54:33', 0),
(441, 46, 'Nouvelle contribution de 0.01 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 17:53:39', 0),
(442, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-11 17:53:51', 0),
(443, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-11 17:54:21', 0),
(444, 46, 'Nouvelle contribution de 0.3 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 17:56:01', 0),
(445, 46, 'Nouvelle contribution de 0.01 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 18:00:19', 0),
(446, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-11 18:00:31', 0),
(447, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-11 18:01:04', 0),
(448, 46, 'Nouvelle contribution de 0.3 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 18:02:45', 0),
(449, 46, 'Nouvelle contribution de 0.1 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 18:05:58', 0),
(450, 46, 'Nouvelle contribution de 0.01 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 18:07:07', 0),
(451, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-11 18:07:19', 0),
(452, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-11 18:07:50', 0),
(453, 46, 'Nouvelle contribution de 0.1 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 18:07:59', 0),
(454, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-11 18:09:31', 0),
(455, 46, 'Nouvelle contribution de 0.3 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 18:09:32', 0),
(456, 46, 'Nouvelle contribution de 0.01 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 18:13:44', 0),
(457, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-11 18:13:56', 0),
(458, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-11 18:14:25', 0),
(459, 46, 'Nouvelle contribution de 0.3 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 18:16:02', 0),
(460, 46, 'Nouvelle contribution de 1 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 19:38:22', 0),
(461, 46, 'Nouvelle contribution de 0.01 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 19:45:38', 0),
(462, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-11 19:45:55', 0),
(463, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-11 19:46:35', 0),
(464, 46, 'Nouvelle contribution de 0.3 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 19:48:29', 0),
(465, 46, 'Nouvelle contribution de 0.01 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 20:19:44', 0),
(466, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-11 20:19:56', 0),
(467, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-11 20:20:27', 0),
(468, 46, 'Nouvelle contribution de 0.3 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 20:22:07', 0),
(469, 46, 'Nouvelle contribution de 0.01 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 20:26:12', 0),
(470, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-11 20:26:23', 0),
(471, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-11 20:26:51', 0),
(472, 46, 'Nouvelle contribution de 0.3 ether pour votre campagne mon projet : ma boulangerie', '2018-04-11 20:28:26', 0),
(473, 46, 'Nouvelle contribution de 0.45654 ether pour votre campagne mon projet : ma boulangerie', '2018-04-12 02:56:02', 0),
(474, 46, 'Nouvelle contribution de 0.01 ether pour votre campagne mon projet : ma boulangerie', '2018-04-12 03:53:42', 0),
(475, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-12 03:53:54', 0),
(476, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-12 03:54:25', 0),
(477, 46, 'Nouvelle contribution de 0.3 ether pour votre campagne mon projet : ma boulangerie', '2018-04-12 03:56:04', 0),
(478, 46, 'Nouvelle contribution de 0.01 ether pour votre campagne mon projet : ma boulangerie', '2018-04-12 09:54:08', 0),
(479, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-12 09:54:19', 0),
(480, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-12 09:54:49', 0),
(481, 46, 'Nouvelle contribution de 0.3 ether pour votre campagne mon projet : ma boulangerie', '2018-04-12 09:56:27', 0),
(482, 46, 'Nouvelle contribution de 0.10 ether pour votre campagne mon projet : ma boulangerie', '2018-04-12 10:01:43', 0),
(483, 46, 'Nouvelle contribution de 0.01 ether pour votre campagne mon projet : ma boulangerie', '2018-04-12 14:55:56', 0),
(484, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-12 14:56:08', 0),
(485, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-12 14:56:37', 0),
(486, 46, 'Nouvelle contribution de 0.3 ether pour votre campagne mon projet : ma boulangerie', '2018-04-12 14:58:17', 0),
(487, 46, 'Nouvelle contribution de 0.01 ether pour votre campagne mon projet : ma boulangerie', '2018-04-12 15:02:35', 0),
(488, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-12 15:02:46', 0),
(489, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-12 15:03:14', 0),
(490, 46, 'Nouvelle contribution de 0.3 ether pour votre campagne mon projet : ma boulangerie', '2018-04-12 15:04:51', 0),
(491, 46, 'Nouvelle contribution de 0.01 ether pour votre campagne mon projet : ma boulangerie', '2018-04-12 15:09:10', 0),
(492, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-12 15:09:25', 0),
(493, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-12 15:09:54', 0),
(494, 46, 'Nouvelle contribution de 0.01 ether pour votre campagne mon projet : ma boulangerie', '2018-04-12 15:10:08', 0),
(495, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-12 15:10:20', 0),
(496, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-12 15:10:51', 0),
(497, 46, 'Nouvelle contribution de 0.3 ether pour votre campagne mon projet : ma boulangerie', '2018-04-12 15:11:33', 0),
(498, 46, 'Nouvelle contribution de 0.3 ether pour votre campagne mon projet : ma boulangerie', '2018-04-12 15:12:34', 0),
(499, 46, 'Nouvelle contribution de 0.01 ether pour votre campagne mon projet : ma boulangerie', '2018-04-12 15:38:22', 0),
(500, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-12 15:38:33', 0),
(501, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-04-12 15:39:02', 0),
(502, 46, 'Nouvelle contribution de 0.3 ether pour votre campagne mon projet : ma boulangerie', '2018-04-12 15:40:40', 0);

-- --------------------------------------------------------

--
-- Structure de la table `participation`
--

CREATE TABLE `participation` (
  `idParticipation` int(11) NOT NULL,
  `idContributeur` int(11) NOT NULL,
  `montant` float NOT NULL,
  `idCampagne` int(11) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `participation`
--

INSERT INTO `participation` (`idParticipation`, `idContributeur`, `montant`, `idCampagne`, `date`) VALUES
(475, 47, 0.2, 1384, '0000-00-00');

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

CREATE TABLE `utilisateur` (
  `id` int(11) NOT NULL,
  `nom` varchar(30) NOT NULL,
  `prenom` varchar(30) NOT NULL,
  `mail` varchar(60) NOT NULL,
  `login` varchar(30) NOT NULL,
  `password` varchar(100) NOT NULL,
  `addrPubliqueEth` varchar(60) NOT NULL,
  `type` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `utilisateur`
--

INSERT INTO `utilisateur` (`id`, `nom`, `prenom`, `mail`, `login`, `password`, `addrPubliqueEth`, `type`) VALUES
(1, 'Clavaud', 'Romain', 'tomdar87@gmail.com', 'Romain', '84ca81c51a83f514b02f87ae5c393ba8bf7cb9681433010bf61b3e92ce3151a9', '0x9Ba612361C78e1d8e36daD5a2d839E1Bb8516905', 2),
(2, 'moderator', 'acme', 'modo@ame.fr', 'moderator', '822b33ad87c148a0a20a5ba7cd5ebcaa68d36a18e7aad165554903f52ca82757', '0x9Ba612361C78e1d8e36daD5a2d839E1Bb8516905', 0),
(42, 'Darneix', 'Tom', 'tomdar87@outlook.com', 'Mojann', 'd63be1c57ca3540738337e7556f9107a0668bb4cf6bf38e7b4bbf5a2a3bca0b9', '0x9Ba612361C78e1d8e36daD5a2d839E1Bb8516905', 2),
(45, 'Lafarge', 'David', 'Lafarge@Lafarge.fr', 'Lafarge', '8685eb41b6a458f9ad81e63096e6c0d43deb4e8d6aa27ebf035cde67d1d62740', '0x9Ba612361C78e1d8e36daD5a2d839E1Bb8516905', 2),
(46, 'denied', 'denied', 'tomdar87@outlook.com', 'denied', '62d6c2330036f64bcf71b95791743d6c77c38e0d7c8cbedcbc525c77c57cf0ee', '0xcC8100e87e08dd9eA07647c07Fad33bD9ACb233a', 2),
(47, 'contributor', 'contributor', 'contributor@contrib.com', 'contributor', '7ee8a8789d5be8d2be3b35505ab433d8e7ab18a25ad4abf066a47b0bd86ce851', '0xcC8100e87e08dd9eA07647c07Fad33bD9ACb233a', 1),
(50, 'testTobotframework', 'testTobotframework', 'test@test.fe', 'testTobotframework', '97bd4d44729009a658f4162f1408d0ecc8319b6bf0ffdeb2d0d6ae018206d6f2', '0xcC8100e87e08dd9eA07647c07Fad33bD9ACb233a', 1),
(51, 'Juan', 'Carlos', 'juan@lafistiniere.fr', 'superfist', '7e9f0e92bb0c104611c679b1cf6583216741ec85f453a053ef0212ce97bc43e1', '0xcC8100e87e08dd9eA07647c07Fad33bD9ACb233a', 1),
(52, 'Toto', 'Toto', 'toto@toto.com', 'Toto', '31f7a65e315586ac198bd798b6629ce4903d0899476d5741a9f32e2e521b6a66', '0xcC8100e87e08dd9eA07647c07Fad33bD9ACb233a', 2);

--
-- Index pour les tables exportées
--

--
-- Index pour la table `campagnes`
--
ALTER TABLE `campagnes`
  ADD PRIMARY KEY (`idCampagne`);

--
-- Index pour la table `commentaires`
--
ALTER TABLE `commentaires`
  ADD PRIMARY KEY (`idComm`);

--
-- Index pour la table `contrepartiesCampagne`
--
ALTER TABLE `contrepartiesCampagne`
  ADD PRIMARY KEY (`idContrepartie`);

--
-- Index pour la table `dm`
--
ALTER TABLE `dm`
  ADD PRIMARY KEY (`idDM`);

--
-- Index pour la table `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`idNotification`);

--
-- Index pour la table `participation`
--
ALTER TABLE `participation`
  ADD PRIMARY KEY (`idParticipation`);

--
-- Index pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `campagnes`
--
ALTER TABLE `campagnes`
  MODIFY `idCampagne` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1478;
--
-- AUTO_INCREMENT pour la table `commentaires`
--
ALTER TABLE `commentaires`
  MODIFY `idComm` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;
--
-- AUTO_INCREMENT pour la table `contrepartiesCampagne`
--
ALTER TABLE `contrepartiesCampagne`
  MODIFY `idContrepartie` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT pour la table `dm`
--
ALTER TABLE `dm`
  MODIFY `idDM` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
--
-- AUTO_INCREMENT pour la table `notifications`
--
ALTER TABLE `notifications`
  MODIFY `idNotification` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=503;
--
-- AUTO_INCREMENT pour la table `participation`
--
ALTER TABLE `participation`
  MODIFY `idParticipation` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=543;
--
-- AUTO_INCREMENT pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
