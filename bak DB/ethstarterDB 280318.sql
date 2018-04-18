-- phpMyAdmin SQL Dump
-- version 4.6.6deb4
-- https://www.phpmyadmin.net/
--
-- Client :  localhost:3306
-- Généré le :  Mer 28 Mars 2018 à 17:26
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
(1264, 46, 'mon projet', 30, 0.23, 60, '2018-05-10', '<span></span><span>mon projet</span><br><span>?</span>mon projet<br><span>mon projet</span><br><span>mon projet</span><br><span>mon projet</span><br><br><br><br><br><br><br><span>?</span>mon projet<span>mon projet</span><span>mon projet</span><br>', 'mon projet', 'DUMMY PATH', 1, 1, 'dbdjs'),
(1265, 46, 'test robotFramework', 10, 0, 12, '2020-03-19', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1266, 46, 'test robotFramework', 10, 0, 12, '2020-03-19', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1267, 46, 'test robotFramework', 10, 0, 12, '2020-03-19', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, ''),
(1268, 46, 'test robotFramework', 10, 0, 12, '2020-03-19', 'test robot framework', 'test robot', 'DUMMY PATH', 1, 0, '');

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
-- Contenu de la table `commentaires`
--

INSERT INTO `commentaires` (`idContributeur`, `idCampagne`, `commentaire`) VALUES
(46, 1264, 'un comm en terre robot framework'),
(46, 1264, 'un comm en terre robot framework'),
(46, 1264, 'un comm en terre robot framework'),
(46, 1264, 'un comm en terre robot framework');

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
(1, 1264, 'un bisou', 0.01);

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
(1264, 46, 1),
(1264, 46, 1),
(1264, 46, 1),
(1264, 46, 1);

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
(1, 51, 'DB Message First Test', 'whatsup bitches', '1664-01-02 12:15:59', 0);

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
-- Contenu de la table `favoris`
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
-- Contenu de la table `notifications`
--

INSERT INTO `notifications` (`idNotification`, `idUtilisateur`, `text`, `date`, `viewed`) VALUES
(44, 46, 'Votre campagne mon projet est en attente de validation', '2018-03-28 16:38:13', 0),
(45, 46, 'Votre campagne undefined a été validé', '2018-03-28 16:39:28', 0),
(46, 46, 'Nouvelle contribution de 0.01 ether pour votre campagne mon projet', '2018-03-28 16:45:26', 0),
(47, 46, 'Nouvelle contribution de 0.2 ether pour votre campagne mon projet', '2018-03-28 16:45:56', 0),
(48, 46, 'Nouvelle contribution de 0.01 ether pour votre campagne mon projet', '2018-03-28 17:04:37', 0),
(49, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-03-28 17:04:49', 0),
(50, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-03-28 17:05:19', 0),
(51, 46, 'Votre campagne mon projet a été validé', '2018-03-28 17:17:29', 0),
(52, 46, 'Nouvelle contribution de 0.01 ether pour votre campagne mon projet', '2018-03-28 17:19:48', 0),
(53, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-03-28 17:20:00', 0),
(54, 46, 'Votre campagne test robotFramework est en attente de validation', '2018-03-28 17:20:32', 0);

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
-- Contenu de la table `participation`
--

INSERT INTO `participation` (`idParticipation`, `idContributeur`, `montant`, `idCampagne`) VALUES
(302, 46, 0.01, 1264),
(303, 46, 0.2, 1264),
(304, 46, 0.01, 1264),
(305, 46, 0.01, 1264);

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
(1, 'Clavaud', 'Romain', 'romain.clavaud@etu.iut-tlse3.fr', 'Romain', '84ca81c51a83f514b02f87ae5c393ba8bf7cb9681433010bf61b3e92ce3151a9', '0x657E2B943A49fC2A9196bB919DF2488d9F9Fd8a4', 2),
(2, 'moderator', 'acme', 'modo@ame.fr', 'moderator', '822b33ad87c148a0a20a5ba7cd5ebcaa68d36a18e7aad165554903f52ca82757', '0xb9E16B0bceb511CB4D7F86688E94bC05304D748c', 0),
(42, 'Darneix', 'Tom', 'tomdar87@outlook.com', 'Mojann', 'd63be1c57ca3540738337e7556f9107a0668bb4cf6bf38e7b4bbf5a2a3bca0b9', '0xb9E16B0bceb511CB4D7F86688E94bC05304D748c', 2),
(45, 'Lafarge', 'David', 'Lafarge@Lafarge.fr', 'Lafarge', '8685eb41b6a458f9ad81e63096e6c0d43deb4e8d6aa27ebf035cde67d1d62740', '0x5F2E58B09D49FE63F79A13F10669fA61eA95b2dd', 2),
(46, 'denied', 'denied', 'denied@denied.fr', 'denied', '62d6c2330036f64bcf71b95791743d6c77c38e0d7c8cbedcbc525c77c57cf0ee', '0x657E2B943A49fC2A9196bB919DF2488d9F9Fd8a4', 2),
(47, 'contributor', 'contributor', 'contributor@contrib.com', 'contributor', '7ee8a8789d5be8d2be3b35505ab433d8e7ab18a25ad4abf066a47b0bd86ce851', '0x5F2E58B09D49FE63F79A13F10669fA61eA95b2dd', 1),
(50, 'testTobotframework', 'testTobotframework', 'test@test.fe', 'testTobotframework', '97bd4d44729009a658f4162f1408d0ecc8319b6bf0ffdeb2d0d6ae018206d6f2', '0x5F2E58B09D49FE63F79A13F10669fA61eA95b2dd', 1),
(51, 'Juan', 'Carlos', 'juan@lafistiniere.fr', 'superfist', '7e9f0e92bb0c104611c679b1cf6583216741ec85f453a053ef0212ce97bc43e1', '0x5F2E58B09D49FE63F79A13F10669fA61eA95b2dd', 1);

--
-- Index pour les tables exportées
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
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `campagnes`
--
ALTER TABLE `campagnes`
  MODIFY `idCampagne` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1269;
--
-- AUTO_INCREMENT pour la table `contrepartiesCampagne`
--
ALTER TABLE `contrepartiesCampagne`
  MODIFY `idContrepartie` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT pour la table `dm`
--
ALTER TABLE `dm`
  MODIFY `idDM` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT pour la table `notifications`
--
ALTER TABLE `notifications`
  MODIFY `idNotification` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;
--
-- AUTO_INCREMENT pour la table `participation`
--
ALTER TABLE `participation`
  MODIFY `idParticipation` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=306;
--
-- AUTO_INCREMENT pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
