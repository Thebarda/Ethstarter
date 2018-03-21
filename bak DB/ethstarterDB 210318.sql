-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le :  mer. 21 mars 2018 à 11:28
-- Version du serveur :  10.1.26-MariaDB-0+deb9u1
-- Version de PHP :  7.0.27-1~dotdeb+8.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
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
-- Déchargement des données de la table `campagnes`
--

INSERT INTO `campagnes` (`idCampagne`, `idEntrepreneur`, `nomCampagne`, `but`, `montantActuel`, `montantMax`, `dateLimite`, `description`, `descriptionCourte`, `image`, `estEnCours`, `validated`, `descriptionValidation`) VALUES
(1249, 42, 'mon projet', 10, 31.78, 20, '2018-05-24', '<span></span><span>mon projet</span><span>mon projet</span><span>mon projet</span><span>?</span>mon projet<span>mon projet</span><span>?</span>mon projet<span>?</span>mon projet<span>?</span>mon projet<span>?</span>mon projet<span>mon projet</span><span>mon projet</span><span>mon projet</span><span>mon projet</span><span>?</span>mon projet<span>?</span>mon projet<span>?</span>mon projet<span>?</span>mon projet<span>mon projet</span><span>?</span>mon projet<span>?</span>mon projet<span>mon projet</span><span>mon projet</span><span>mon projetmon projet</span><span>mon projet</span><span>mon projet</span>mon projet<span>mon projet</span><span>?</span>mon projet<span>mon projet</span><span>mon projet</span><span>mon projet</span><span>mon projet</span><span>mon projet</span><span>?</span>mon projet<span>mon projet</span><span>mon projet</span><span>mon projet</span><span>?</span>mon projet<span>mon projet</span><br>', 'ma description courte', 'DUMMY PATH', 1, 1, 'j\'approuve'),
(1250, 1, 'mon projet 2', 10, 0.25, 20, '2018-03-30', '<span></span><span>mon projet 2</span><br>', 'mon projet 2', 'DUMMY PATH', 1, 1, 'OK'),
(1251, 42, 'test notif', 2, 0, 4, '2018-04-28', '<span></span><span>?</span>test notif<br><span>test notif</span><br><span>test notif</span><br><span>test notif</span><br><span>?</span>test notif<br><span>test notif</span><br><span>test notif</span><br><span>test notif</span><br>', 'test notif', 'DUMMY PATH', 1, 2, ''),
(1252, 42, 'test notif 2', 4, 0, 6, '2018-04-27', '<span></span><span>?</span>test notif 2<br><span>test notif 2</span><br><span>test notif 2</span><br><span>test notif 2</span><br><span>test notif 2</span><br><span>?</span>test notif 2<br><span>test notif 2</span><br>', 'test notif 2test notif 2', 'DUMMY PATH', 1, 2, ''),
(1253, 1, 'test notif 3', 5, 5.1, 7, '2018-03-31', '<span></span><span>?</span>test notif 3<br><span>?</span>test notif 3<br><br><span>?</span>test notif 3<span>test notif 3</span><span>test notif 3</span><span>test notif 3</span><br>', 'test notif 3', 'DUMMY PATH', 1, 1, 'j\'approuve'),
(1254, 42, 'bordel', 5, 0, 6, '2018-03-19', '<span></span><span>bordel</span><br><span>bordel</span><br><span>bordel</span><br><span>bordel</span><br><span>bordel</span><br><span>bordel</span><br>', 'bordel', 'DUMMY PATH', 1, 1, ''),
(1255, 1, 'araafsqraz', 6, 0, 7, '2018-03-19', '<span></span><span>araafsqraz</span><br><span>?</span>araafsqraz<br><span>?</span>araafsqraz<br><span>araafsqraz</span><br><br>', 'ze', 'DUMMY PATH', 1, 1, ''),
(1256, 1, 'dsdsdsq', 1, 0.25, 3, '2018-03-29', '<span></span>sqsdsqsqsq<br>', 'sdsqsq', 'DUMMY PATH', 1, 1, ''),
(1257, 42, 'qqfsdsd', 1, 0, 3, '2018-03-19', '<span></span>qsqdsqs<br>', 'dqdsqdsqds', 'DUMMY PATH', 1, 1, ''),
(1258, 1, 'CA PASSE BORDEL', 23, 0, 56, '2018-03-27', '<span></span><span>CA PASSE BORDEL</span><br><span>CA PASSE BORDEL</span><br><span>CA PASSE BORDEL</span><br><span>?</span>CA PASSE BORDEL<br>', 'CA PASSE BORDEL', 'DUMMY PATH', 1, 2, ''),
(1259, 1, 'LES QUOTES', 12, 0, 13, '2018-03-21', '<span></span><span>?</span>LES QUOTES<br><span>LES QUOTES</span><br><span>LES QUOTES</span><br><span>LES QUOTES</span><br>', 'LES QUOTES', 'DUMMY PATH', 1, 1, ''),
(1260, 1, 'fvsdqrftgcv sdfsdfvcvfdrrdfsqS', 2, 0, 3, '2018-03-29', '<span></span>zerfgddfrzerdfxcwsdqdfgcvxwdsrtfgfsdrtygdfsrty<br>', 'SQdfvsdsfcvwxsqdfxs', 'DUMMY PATH', 1, 1, ''),
(1261, 1, 'C DE LA MERDE LES QUOTES', 2, 0, 4, '2018-03-29', '<span></span><span>C DE LA MERDE LES QUOTES</span><br><span>C DE LA MERDE LES QUOTES</span><br><span>?</span>C DE LA MERDE LES QUOTES<br><span>C DE LA MERDE LES QUOTES</span><br>', 'C DE LA MERDE LES QUOTES', 'DUMMY PATH', 1, 2, ''),
(1262, 46, 'denied campaign', 12, 0, 23, '2018-03-29', '<span></span><span>?</span>denied campaign<span>denied campaign</span><span>denied campaign</span><span>denied campaign</span><span>denied campaign</span><br>', 'denied campaign', 'DUMMY PATH', 1, 1, '');

-- --------------------------------------------------------

--
-- Structure de la table `commentaires`
--

CREATE TABLE `commentaires` (
  `idContributeur` int(11) NOT NULL,
  `idCampagne` int(11) NOT NULL,
  `commentaire` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `commentaires`
--

INSERT INTO `commentaires` (`idContributeur`, `idCampagne`, `commentaire`) VALUES
(1, 1249, 'Super Projet LOL XDDDDDDDD'),
(1, 1249, 'REND L ARGENT WALLAH'),
(1, 1249, 'Test commentaire message '),
(1, 1249, '   Test 2'),
(1, 1249, 'Test Modal'),
(1, 1249, 'test toast'),
(1, 1250, 'test toast 2'),
(1, 1249, 'Test rep XHR'),
(1, 1249, 'Test body'),
(1, 1249, 'test async'),
(1, 1249, 'async false'),
(1, 1249, 'Test callback\n'),
(1, 1249, 'set Time Out Test'),
(1, 1249, 'Test'),
(1, 1253, 'lol'),
(1, 1250, 'Test');

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

-- --------------------------------------------------------

--
-- Structure de la table `contrepartiesContributeur`
--

CREATE TABLE `contrepartiesContributeur` (
  `idCampagne` int(11) NOT NULL,
  `idContributeur` int(11) NOT NULL,
  `idContrepartie` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `contributeursxcampagne`
--

CREATE TABLE `contributeursxcampagne` (
  `idCampagne` int(11) NOT NULL,
  `idContributeur` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `contributeursxcampagne`
--

INSERT INTO `contributeursxcampagne` (`idCampagne`, `idContributeur`) VALUES
(1249, 42),
(1249, 1),
(1250, 1),
(1253, 1);

-- --------------------------------------------------------

--
-- Structure de la table `dm`
--

CREATE TABLE `dm` (
  `idDM` int(50) NOT NULL,
  `idUtilisateur` int(12) NOT NULL,
  `title` varchar(500) NOT NULL,
  `message` varchar(5000) NOT NULL,
  `datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `dm`
--

INSERT INTO `dm` (`idDM`, `idUtilisateur`, `title`, `message`, `datetime`) VALUES
(1, 51, 'DB Message First Test', 'whatsup bitches', '1664-01-02 12:15:59');

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
-- Déchargement des données de la table `entrepreneur`
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
(46, 'denied', '020440bb-48c8-626a-6283-530c4c718473.png', 1);

-- --------------------------------------------------------

--
-- Structure de la table `favoris`
--

CREATE TABLE `favoris` (
  `idUtilisateur` int(11) NOT NULL,
  `idCampagne` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `favoris`
--

INSERT INTO `favoris` (`idUtilisateur`, `idCampagne`) VALUES
(0, 1249),
(0, 1249),
(41, 1249),
(0, 1250),
(0, 1250),
(47, 1253);

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
-- Déchargement des données de la table `notifications`
--

INSERT INTO `notifications` (`idNotification`, `idUtilisateur`, `text`, `date`, `viewed`) VALUES
(1, 1, 'test', '2018-03-18 18:22:10', 0),
(2, 42, 'Votre campagne C DE LA MERDE LES QUOTES est en attente de validation', '2018-03-18 18:40:03', 0),
(3, 42, 'Votre campagne test notif 2 n\'a pas pu être validé', '2018-03-18 18:55:49', 0),
(4, 42, 'Votre campagne test notif 3 n\'a pas pu être validé', '2018-03-18 18:56:59', 0),
(5, 42, 'Votre campagne bordel n\'a pas pu être validé', '2018-03-18 18:57:24', 0),
(6, 42, 'Votre campagne araafsqraz n\'a pas pu être validé', '2018-03-18 18:59:24', 0),
(7, 42, 'Votre campagne dsdsdsq n\'a pas pu être validé', '2018-03-18 19:00:03', 0),
(8, 42, 'Votre campagne qqfsdsd a été validé', '2018-03-18 19:00:49', 0),
(9, 42, 'Votre campagne CA PASSE BORDEL n\'a pas pu être validé', '2018-03-18 19:00:56', 0),
(10, 1, 'Votre campagne LES QUOTES a été validé', '2018-03-18 19:08:18', 0),
(11, 46, 'Vous êtes en attente de validation ', '2018-03-18 19:25:42', 0),
(12, 46, 'Votre compte a été validé', '2018-03-18 19:26:15', 0),
(13, 46, 'Votre campagne denied campaign est en attente de validation', '2018-03-18 19:37:06', 0),
(14, 46, 'Votre campagne denied campaign a été validé', '2018-03-18 19:37:39', 0),
(15, 42, 'Nouvelle contribution de 0.25 pour votre campagne undefined', '2018-03-19 14:21:18', 0),
(16, 1, 'Votre campagne fvsdqrftgcv sdfsdfvcvfdrrdfsqS a été validé', '2018-03-19 14:47:51', 0),
(17, 1, 'Votre campagne C DE LA MERDE LES QUOTES n\'a pas pu être validé', '2018-03-19 14:47:55', 0),
(18, 1, 'Nouvelle contribution de 1 pour votre campagne undefined', '2018-03-19 14:54:39', 0),
(19, 1, 'Nouvelle contribution de 5 pour votre campagne undefined', '2018-03-19 14:54:54', 0),
(20, 42, 'Nouvelle contribution de .23 ether pour votre campagne mon projet', '2018-03-19 16:20:55', 0),
(21, 1, 'Nouvelle contribution de .4 ether pour votre campagne mon projet 2', '2018-03-19 16:21:44', 0),
(22, 42, 'Nouvelle contribution de 0.25 ether pour votre campagne mon projet', '2018-03-19 16:27:16', 0),
(23, 42, 'Nouvelle contribution de 0.25 ether pour votre campagne mon projet', '2018-03-19 16:33:03', 0),
(24, 1, 'Nouvelle contribution de 0.3 ether pour votre campagne mon projet 2', '2018-03-19 16:36:21', 0),
(25, 42, 'Nouvelle contribution de 0.25 ether pour votre campagne mon projet', '2018-03-19 16:41:42', 0),
(26, 1, 'Nouvelle contribution de 0.10 ether pour votre campagne test notif 3', '2018-03-19 16:43:04', 0),
(27, 1, 'Nouvelle contribution de 0.25 ether pour votre campagne dsdsdsq', '2018-03-19 16:43:49', 0),
(28, 42, 'Nouvelle contribution de 0.25 ether pour votre campagne mon projet', '2018-03-19 17:01:02', 0),
(29, 42, 'Nouvelle contribution de 0.25 ether pour votre campagne mon projet', '2018-03-19 17:05:42', 0),
(30, 42, 'Nouvelle contribution de 0.25 ether pour votre campagne mon projet', '2018-03-19 18:05:09', 0),
(31, 42, 'Nouvelle contribution de 0.25 ether pour votre campagne mon projet', '2018-03-19 21:39:34', 0),
(32, 42, 'Nouvelle contribution de 0.25 ether pour votre campagne mon projet', '2018-03-19 21:50:37', 0),
(33, 1, 'Votre campagne Test est en attente de validation', '2018-03-20 16:37:28', 0),
(34, 42, 'Nouvelle contribution de 0.25 ether pour votre campagne mon projet', '2018-03-21 10:38:16', 0),
(35, 42, 'Nouvelle contribution de 0.25 ether pour votre campagne mon projet', '2018-03-21 10:45:58', 0),
(36, 42, 'Nouvelle contribution de 0.25 ether pour votre campagne mon projet', '2018-03-21 10:50:00', 0),
(37, 42, 'Nouvelle contribution de 0.25 ether pour votre campagne mon projet', '2018-03-21 10:55:09', 0),
(38, 42, 'Nouvelle contribution de 0.25 ether pour votre campagne mon projet', '2018-03-21 11:03:16', 0),
(39, 42, 'Nouvelle contribution de 0.25 ether pour votre campagne mon projet', '2018-03-21 11:09:24', 0),
(40, 1, 'Nouvelle contribution de 0.25 ether pour votre campagne mon projet 2', '2018-03-21 11:09:34', 0),
(41, 42, 'Nouvelle contribution de 0.25 ether pour votre campagne mon projet', '2018-03-21 11:18:09', 0),
(42, 42, 'Nouvelle contribution de 0.25 ether pour votre campagne mon projet', '2018-03-21 11:38:55', 0),
(43, 42, 'Nouvelle contribution de 0.25 ether pour votre campagne mon projet', '2018-03-21 12:21:19', 0);

-- --------------------------------------------------------

--
-- Structure de la table `participation`
--

CREATE TABLE `participation` (
  `idParticipation` int(11) NOT NULL,
  `idContributeur` int(11) NOT NULL,
  `montant` float NOT NULL,
  `idCampagne` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `participation`
--

INSERT INTO `participation` (`idParticipation`, `idContributeur`, `montant`, `idCampagne`) VALUES
(234, 1, 0.25, 0),
(235, 1, 0.25, 0),
(236, 1, 0.25, 0),
(237, 1, 0.25, 0),
(238, 1, 0.25, 0),
(239, 1, 0.25, 0),
(240, 1, 0.25, 0),
(241, 1, 0.25, 0),
(242, 1, 0.25, 0),
(243, 1, 0.25, 0),
(244, 1, 0.25, 0),
(245, 1, 0.25, 0),
(246, 1, 0.25, 0),
(247, 1, 0.25, 0),
(248, 1, 0.25, 0),
(249, 1, 0.25, 0),
(250, 1, 0.25, 0),
(251, 1, 0.25, 0),
(252, 1, 0.25, 0),
(253, 1, 0.25, 0),
(254, 1, 0.25, 0),
(255, 1, 0.25, 0),
(256, 1, 0.25, 0),
(257, 1, 0.25, 0),
(258, 1, 0.25, 0),
(259, 1, 0.25, 0),
(260, 1, 0.25, 0),
(261, 1, 0.25, 0),
(262, 1, 1, 0),
(263, 1, 5, 0),
(264, 1, 0.25, 0),
(265, 1, 0.25, 0),
(266, 1, 0.25, 0),
(267, 46, 0.23, 1249),
(268, 46, 0.4, 1250),
(269, 1, 0.25, 1249),
(270, 1, 0.25, 1249),
(272, 1, 0.25, 0),
(273, 1, 0.25, 1249),
(274, 1, 0.1, 1253),
(275, 1, 0.25, 1256),
(276, 1, 0.25, 0),
(277, 1, 0.25, 1249),
(278, 1, 0.25, 1249),
(279, 1, 0.25, 0),
(280, 1, 0.25, 0),
(281, 1, 0.25, 1249),
(282, 1, 0.25, 1249),
(283, 1, 0.25, 1249),
(284, 1, 0.25, 0),
(285, 1, 1, 0),
(286, 1, 1, 0),
(287, 1, 0.25, 0),
(288, 1, 0.25, 0),
(289, 1, 0.25, 0),
(290, 1, 0.25, 0),
(292, 1, 0.25, 1249),
(293, 1, 0.25, 1249),
(294, 1, 0.25, 1249),
(295, 1, 0.25, 1249),
(296, 1, 0.25, 1249),
(297, 1, 0.25, 1249),
(298, 1, 0.25, 1250),
(299, 1, 0.25, 1249),
(300, 1, 0.25, 1249),
(301, 1, 0.25, 1249);

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
-- Déchargement des données de la table `utilisateur`
--

INSERT INTO `utilisateur` (`id`, `nom`, `prenom`, `mail`, `login`, `password`, `addrPubliqueEth`, `type`) VALUES
(1, 'Clavaud', 'Romain', 'romain.clavaud@etu.iut-tlse3.fr', 'Romain', '84ca81c51a83f514b02f87ae5c393ba8bf7cb9681433010bf61b3e92ce3151a9', '0x2b089bd04da2822e52d6eb7a77b481d7c6665b53', 2),
(2, 'moderator', 'acme', 'modo@ame.fr', 'moderator', '822b33ad87c148a0a20a5ba7cd5ebcaa68d36a18e7aad165554903f52ca82757', '0xf402049e0d9085527c2a675feaf1427d38bb9911', 0),
(42, 'Darneix', 'Tom', 'tomdar87@outlook.com', 'Mojann', 'd63be1c57ca3540738337e7556f9107a0668bb4cf6bf38e7b4bbf5a2a3bca0b9', '0xb161a714531ce4cc839419358060cddc538ccf59', 2),
(45, 'Lafarge', 'David', 'Lafarge@Lafarge.fr', 'Lafarge', '8685eb41b6a458f9ad81e63096e6c0d43deb4e8d6aa27ebf035cde67d1d62740', '0x27b9f364bd1ce1a16b9d9ee6638c95cfcad5e9f8', 2),
(46, 'denied', 'denied', 'denied@denied.fr', 'denied', '62d6c2330036f64bcf71b95791743d6c77c38e0d7c8cbedcbc525c77c57cf0ee', '0xc658ec546b606c63afa04602b97e096b42bb9743', 2),
(47, 'contributor', 'contributor', 'contributor@contributor.fr', 'contributor', '7ee8a8789d5be8d2be3b35505ab433d8e7ab18a25ad4abf066a47b0bd86ce851', '0xc658ec546b606c63afa04602b97e096b42bb9743', 1),
(50, 'testTobotframework', 'testTobotframework', 'test@test.fe', 'testTobotframework', '97bd4d44729009a658f4162f1408d0ecc8319b6bf0ffdeb2d0d6ae018206d6f2', '0x13ee5c4b7af45ee01c4b39dac2bed572bf8cf60d', 1),
(51, 'Juan', 'Carlos', 'juan@lafistiniere.fr', 'superfist', '7e9f0e92bb0c104611c679b1cf6583216741ec85f453a053ef0212ce97bc43e1', '0xc1912fee45d61c87cc5ea59dae31190fffff232d', 1);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `campagnes`
--
ALTER TABLE `campagnes`
  ADD PRIMARY KEY (`idCampagne`);

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
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `campagnes`
--
ALTER TABLE `campagnes`
  MODIFY `idCampagne` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1264;

--
-- AUTO_INCREMENT pour la table `contrepartiesCampagne`
--
ALTER TABLE `contrepartiesCampagne`
  MODIFY `idContrepartie` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `dm`
--
ALTER TABLE `dm`
  MODIFY `idDM` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `notifications`
--
ALTER TABLE `notifications`
  MODIFY `idNotification` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT pour la table `participation`
--
ALTER TABLE `participation`
  MODIFY `idParticipation` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=302;

--
-- AUTO_INCREMENT pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
