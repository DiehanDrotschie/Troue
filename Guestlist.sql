-- phpMyAdmin SQL Dump
-- version 6.0.0-dev
-- https://www.phpmyadmin.net/
--
-- Host: 192.168.30.23
-- Generation Time: Dec 08, 2023 at 11:44 PM
-- Server version: 8.0.18
-- PHP Version: 8.2.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Guests`
--

-- --------------------------------------------------------

--
-- Table structure for table `Guestlist`
--

CREATE TABLE `Guestlist` (
  `id` int(11) NOT NULL,
  `Name` varchar(20) NOT NULL,
  `Surname` varchar(20) NOT NULL,
  `Date_Name` varchar(20) NOT NULL,
  `Date_Surname` varchar(20) NOT NULL,
  `Table_Number` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Guestlist`
--

INSERT INTO `Guestlist` (`id`, `Name`, `Surname`, `Date_Name`, `Date_Surname`, `Table_Number`) VALUES
(1, 'Diehan', 'Drotschie', 'Nisha', 'Fabricius', 5);
(2, 'Johan', 'Drotschie', 'Mandie', 'Drotschie', 7);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Guestlist`
--
ALTER TABLE `Guestlist`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
