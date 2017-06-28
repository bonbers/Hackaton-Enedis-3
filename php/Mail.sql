-- phpMyAdmin SQL Dump
-- version 4.2.12deb2+deb8u2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jun 28, 2017 at 10:32 AM
-- Server version: 5.5.55-0+deb8u1
-- PHP Version: 5.6.30-0+deb8u1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `enedis3`
--

-- --------------------------------------------------------

--
-- Table structure for table `Mail`
--

CREATE TABLE IF NOT EXISTS `Mail` (
`id` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `prenom` varchar(255) NOT NULL,
  `mail` varchar(100) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Mail`
--

INSERT INTO `Mail` (`id`, `nom`, `prenom`, `mail`) VALUES
(1, 'anne', 'serrano', 'nico@gyu.fr'),
(2, 'anne', 'serrano', 'nico@gyu.fr'),
(3, 'ghjgjh', 'fddfd', 'anne.serrano@hotmail.fr'),
(4, 'anne', 'serrano', 'nico@gyu.fr'),
(5, 'anne', 'serrano', 'nico@gyu.fr'),
(6, 'anne', 'serrano', 'nico@gyu.fr'),
(7, 'anne', 'serrano', 'nico@gyu.fr'),
(8, 'anne', 'serrano', 'nico@gyu.fr');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Mail`
--
ALTER TABLE `Mail`
 ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Mail`
--
ALTER TABLE `Mail`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=9;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
