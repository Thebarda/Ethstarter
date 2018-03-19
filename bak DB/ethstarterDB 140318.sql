-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le :  mer. 14 mars 2018 à 16:28
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
(1249, 42, 'mon projet', 10, 9.8, 20, '2018-05-24', '<span></span><span>mon projet</span><span>mon projet</span><span>mon projet</span><span>?</span>mon projet<span>mon projet</span><span>?</span>mon projet<span>?</span>mon projet<span>?</span>mon projet<span>?</span>mon projet<span>mon projet</span><span>mon projet</span><span>mon projet</span><span>mon projet</span><span>?</span>mon projet<span>?</span>mon projet<span>?</span>mon projet<span>?</span>mon projet<span>mon projet</span><span>?</span>mon projet<span>?</span>mon projet<span>mon projet</span><span>mon projet</span><span>mon projetmon projet</span><span>mon projet</span><span>mon projet</span>mon projet<span>mon projet</span><span>?</span>mon projet<span>mon projet</span><span>mon projet</span><span>mon projet</span><span>mon projet</span><span>mon projet</span><span>?</span>mon projet<span>mon projet</span><span>mon projet</span><span>mon projet</span><span>?</span>mon projet<span>mon projet</span><br>', 'ma description courte', 'DUMMY PATH', 1, 1, 'j\'approuve'),
(1250, 1, 'mon projet 2', 10, 0, 20, '2018-03-30', '<span></span><span>mon projet 2</span><br>', 'mon projet 2', 'DUMMY PATH', 1, 1, 'OK');

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
(1249, 1);

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
(45, 'Lafarge', '2426d216-2f56-0759-232f-9612cf700302.jpg', 2);

-- --------------------------------------------------------

--
-- Structure de la table `participation`
--

CREATE TABLE `participation` (
  `idParticipation` int(11) NOT NULL,
  `idContributeur` int(11) NOT NULL,
  `montant` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `participation`
--

INSERT INTO `participation` (`idParticipation`, `idContributeur`, `montant`) VALUES
(184, 42, 3),
(185, 1, 0.25),
(186, 1, 0.25),
(187, 1, 0.25),
(188, 1, 0.25),
(189, 1, 0.25),
(190, 1, 0.25),
(191, 1, 0.05),
(192, 1, 0.25),
(193, 1, 0.25),
(194, 1, 0.25),
(195, 1, 0.25),
(196, 1, 0.25),
(197, 1, 0.25),
(198, 1, 0.25),
(199, 1, 0.25),
(200, 1, 0.25),
(201, 1, 0.25),
(202, 1, 0.25),
(203, 1, 0.25),
(204, 1, 0.25),
(205, 1, 0.25),
(206, 1, 0.25),
(207, 1, 0.25),
(208, 1, 0.25),
(209, 1, 0.25),
(210, 1, 0.25),
(211, 1, 0.25),
(212, 1, 0.25);

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
(41, 'test', 'test', 'test@test.fe', 'test', '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08', '0x5a0413244bb1ef169dcffa7d0e7e3a6ecb230285', 1),
(42, 'Darneix', 'Tom', 'tomdar87@outlook.com', 'Mojann', 'd63be1c57ca3540738337e7556f9107a0668bb4cf6bf38e7b4bbf5a2a3bca0b9', '0xb161a714531ce4cc839419358060cddc538ccf59', 2),
(43, 'Traineau', 'Philippe', 'phill@phill.fr', 'phill', 'd63be1c57ca3540738337e7556f9107a0668bb4cf6bf38e7b4bbf5a2a3bca0b9', '0xf402049e0d9085527c2a675feaf1427d38bb9911', 2),
(44, 'testTobotframework', 'testTobotframework', 'test@test.fe', 'testTobotframework', '97bd4d44729009a658f4162f1408d0ecc8319b6bf0ffdeb2d0d6ae018206d6f2', '0x13ee5c4b7af45ee01c4b39dac2bed572bf8cf60d', 1),
(45, 'Lafarge', 'David', 'Lafarge@Lafarge.fr', 'Lafarge', '8685eb41b6a458f9ad81e63096e6c0d43deb4e8d6aa27ebf035cde67d1d62740', '0x27b9f364bd1ce1a16b9d9ee6638c95cfcad5e9f8', 2);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `campagnes`
--
ALTER TABLE `campagnes`
  ADD PRIMARY KEY (`idCampagne`);

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
  MODIFY `idCampagne` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1251;

--
-- AUTO_INCREMENT pour la table `participation`
--
ALTER TABLE `participation`
  MODIFY `idParticipation` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=213;

--
-- AUTO_INCREMENT pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
