-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 15, 2021 at 09:12 AM
-- Server version: 5.7.24-log
-- PHP Version: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mini-project`
--

-- --------------------------------------------------------

--
-- Table structure for table `menu`
--

CREATE TABLE `menu` (
  `Id` int(10) NOT NULL,
  `ItemName` varchar(50) NOT NULL,
  `ImagePath` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `menu`
--

INSERT INTO `menu` (`Id`, `ItemName`, `ImagePath`) VALUES
(1, 'Burger', 'Burger.jpg'),
(2, 'Cake', 'Cake.jpg'),
(3, 'Chocolate', 'Chocolate.jpg'),
(4, 'Ice_Cream', 'Icecream.jpg'),
(5, 'Pizza', 'Pizza.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `menulist`
--

CREATE TABLE `menulist` (
  `Id` int(10) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Price` float(8,2) NOT NULL,
  `Image` varchar(80) NOT NULL,
  `Menu_Id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `menulist`
--

INSERT INTO `menulist` (`Id`, `Name`, `Price`, `Image`, `Menu_Id`) VALUES
(1, 'Chocolate ice cream', 60.00, 'icecream1.jpg', 4),
(2, 'Starwberry ice cream', 70.00, 'Icecream.jpg', 4),
(3, 'Vanilla ice cream', 50.00, 'icecream1.jpg', 4),
(4, 'Pista ice cream', 60.00, 'icecream3.jpg', 4),
(5, 'Marben', 40.00, 'burger1.jpg', 1),
(6, 'Holy Chuck', 45.00, 'burger2.jpg', 1),
(7, 'Bymark', 60.00, 'burger3.jpg', 1),
(8, 'Origin', 80.00, 'Burger.jpg', 1),
(9, 'Blackout Cake', 450.00, 'cake1.jpg', 2),
(10, 'Carrot Cake', 600.00, 'cake2.jpg', 2),
(11, 'Bundt Cake', 350.00, 'cake3.jpg', 2),
(12, 'Chestnut Cake', 800.00, 'cake4.jpg', 2),
(13, 'Dairy Milk', 45.00, 'chocolate1.jpg', 3),
(14, 'Revels', 70.00, 'chocolate2.jpg', 3),
(15, 'Maltesers', 55.00, 'chocolate3.jpg', 3),
(16, 'Minstrels', 90.00, 'chocolate4.jpg', 3),
(17, 'Vegetarian', 190.00, 'pizza1.jpg', 5),
(18, 'Margherita', 260.00, 'pizza2.jpg', 5),
(19, 'Cheese and Tomato', 149.00, 'pizza3.jpg', 5),
(20, 'Maxican Green wave', 225.00, 'pizza4.jpg', 5);

-- --------------------------------------------------------

--
-- Table structure for table `myorder`
--

CREATE TABLE `myorder` (
  `Sr_No` int(10) NOT NULL,
  `Item` varchar(70) NOT NULL,
  `No_Of_Item` int(10) NOT NULL,
  `Price` float(8,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `myorder`
--

INSERT INTO `myorder` (`Sr_No`, `Item`, `No_Of_Item`, `Price`) VALUES
(29, 'Bymark', 1, 60.00),
(30, 'Maltesers', 2, 55.00),
(31, 'Chestnut Cake', 1, 800.00);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`Id`);
ALTER TABLE `menu` ADD FULLTEXT KEY `ItemName` (`ItemName`,`ImagePath`);

--
-- Indexes for table `menulist`
--
ALTER TABLE `menulist`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `myorder`
--
ALTER TABLE `myorder`
  ADD PRIMARY KEY (`Sr_No`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `menu`
--
ALTER TABLE `menu`
  MODIFY `Id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `menulist`
--
ALTER TABLE `menulist`
  MODIFY `Id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `myorder`
--
ALTER TABLE `myorder`
  MODIFY `Sr_No` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
