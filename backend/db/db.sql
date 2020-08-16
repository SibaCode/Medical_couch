-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 06, 2020 at 10:48 PM
-- Server version: 10.1.36-MariaDB
-- PHP Version: 5.6.38

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db`
--

DELIMITER $$
--
-- Procedures
--
CREATE   PROCEDURE `addBookings` (IN `patient_id` INT(11), IN `practice_id` INT(11), IN `symp` VARCHAR(100), IN `p_date` DATE)  NO SQL
BEGIN

    INSERT INTO `appointments` (`id`, `date`, `patiend_id`, 				`practice_id`, `symptoms`, `created_at`, `updated_at`) VALUES (NULL, 	 p_date, patient_id, practice_id ,symp , NOW(), NOW());

END$$

CREATE   PROCEDURE `addPractrice` (IN `doctor_id` INT(11), IN `name` VARCHAR(200), IN `number` VARCHAR(200), IN `discipline` VARCHAR(200), IN `web` VARCHAR(200), IN `operating_hours` VARCHAR(200))  NO SQL
BEGIN

    INSERT INTO `practice` (`id`, `name`, `number`, `discipline`, 			`website`, `operating_hours`, `doctor_id`, `created_at`, 				`updated_at`) VALUES (NULL, name , number , discipline , web, 			operating_hours , doctor_id , NOW() , NOW() );


END$$

CREATE   PROCEDURE `authUser` (IN `_id` INT(11), IN `type` VARCHAR(3))  NO SQL
BEGIN

	IF LCASE(type) = 'p' THEN
    	SELECT id FROM patients
        WHERE id = _id; 
   	ELSEIF LCASE(type) = 'd' THEN
    	SELECT id FROM doctors
        WHERE id = _id; 
    END IF;

END$$

CREATE   PROCEDURE `getDoctors` ()  NO SQL
BEGIN

	SELECT * 
    FROM practice ;

END$$

CREATE   PROCEDURE `getMedicalAid` ()  NO SQL
BEGIN
	
    
    SELECT * 
    FROM medical_aid_schemes ; 



END$$

CREATE   PROCEDURE `loginDoctor` (IN `p_email` VARCHAR(200))  NO SQL
BEGIN 

	SELECT d.password , d.id
    FROM `doctors` d
    WHERE email = p_email ;

END$$

CREATE   PROCEDURE `loginPatient` (IN `p_email` VARCHAR(200))  NO SQL
BEGIN

	SELECT p.id , p.password
    FROM `patients` p
    WHERE email = p_email ;
END$$

CREATE   PROCEDURE `patientGetAppointments` (IN `p_id` INT(11))  NO SQL
BEGIN

	SELECT a.date , CONCAT('Dr ',d.surname) AS 'Doctor', p.name 'Pratice' FROM appointments a , doctors d , practice p WHERE a.patiend_id = p_id ;

END$$

CREATE   PROCEDURE `patientUpdateAppoint` (IN `a_id` INT(11), IN `p_date` DATETIME, IN `symp` VARCHAR(200))  NO SQL
BEGIN

UPDATE `appointments` SET `date` = p_date, `symptoms` = symp , `updated_at` = NOW() WHERE `appointments`.`id` = a_id ;

END$$

CREATE   PROCEDURE `registerDoctor` (IN `name` VARCHAR(200), IN `p_email` VARCHAR(200), IN `passwrd` VARCHAR(200), IN `surname` VARCHAR(200), IN `title` VARCHAR(200), IN `contact_work` VARCHAR(200), IN `contact_home` VARCHAR(200), IN `qualification` VARCHAR(200), IN `p_name` VARCHAR(200), IN `p_number` VARCHAR(200), IN `website` VARCHAR(200), IN `operating_hours` VARCHAR(220), IN `discipline` VARCHAR(200))  NO SQL
BEGIN

	DECLARE d_id INT ; 
    
	INSERT INTO `doctors` (`id`, `title`, `name`, `surname`, 				`contact_home`, `contact_work`, `qualification`, `email`, 				`password`, `created_at`, `updated_at`) VALUES (NULL, title , name, 	 surname , contact_home, contact_work, qualification , p_email, 		      passwrd, 	NOW() , NOW());

	SELECT id INTO d_id 
    FROM doctors 
    WHERE email = p_email ; 
    
    CALL addPractrice(d_id, p_name , p_number ,discipline , website , operating_hours) ; 

END$$

CREATE   PROCEDURE `registerPatient` (IN `name` VARCHAR(50), IN `surname` VARCHAR(200), IN `title` VARCHAR(200), IN `medical_aid` TINYINT(1), IN `address` VARCHAR(200), IN `email` VARCHAR(200), IN `passwrd` VARCHAR(200), IN `medical_name` INT(11), IN `idno` VARCHAR(200), IN `cell` VARCHAR(200))  NO SQL
BEGIN


	INSERT INTO `patients` (`id`, `name`, `surname`, `created_at`, 			`updated_at`, `title`, `idno`, `medical_aid`, `address`, `email`, 		`password`, `medical_name` , `cell`) VALUES (NULL, name, surname, NOW(), NOW(), title, idno, medical_aid, address , email, passwrd,medical_name, cell );
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `appointments`
--

CREATE TABLE `appointments` (
  `id` int(11) NOT NULL,
  `date` datetime NOT NULL,
  `patiend_id` int(11) NOT NULL,
  `practice_id` int(11) NOT NULL,
  `symptoms` varchar(200) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `status` smallint(4) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `appointments`
--

INSERT INTO `appointments` (`id`, `date`, `patiend_id`, `practice_id`, `symptoms`, `created_at`, `updated_at`, `status`) VALUES
(12, '2020-12-12 00:00:00', 5, 11, 'Flu', '2020-08-04 21:39:16', '2020-08-04 22:22:33', 1),
(13, '2020-12-12 00:00:00', 5, 11, 'Flu', '2020-08-04 21:55:14', '2020-08-04 21:55:14', 1),
(14, '2020-12-12 00:00:00', 5, 11, 'Flu', '2020-08-04 21:55:22', '2020-08-04 21:55:22', 1);

-- --------------------------------------------------------

--
-- Table structure for table `doctors`
--

CREATE TABLE `doctors` (
  `id` int(11) NOT NULL,
  `title` varchar(5) NOT NULL,
  `name` varchar(50) NOT NULL,
  `surname` varchar(50) NOT NULL,
  `contact_home` varchar(15) NOT NULL,
  `contact_work` varchar(15) NOT NULL,
  `qualification` varchar(100) NOT NULL,
  `email` varchar(150) NOT NULL,
  `password` varchar(5000) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `doctors`
--

INSERT INTO `doctors` (`id`, `title`, `name`, `surname`, `contact_home`, `contact_work`, `qualification`, `email`, `password`, `created_at`, `updated_at`) VALUES
(18, '09218', 'Sibusiso', 'Jiyane', 'MBA', '0116782912', 'Botshelo', 'sbu@gmail.com', '$2a$10$nmCJ8SIQz8h0dOty8wja4.faPZjVxSoB6RXDi7yquoR2Y5GuB4YUW', '2020-08-04 21:28:17', '2020-08-04 21:28:17');

-- --------------------------------------------------------

--
-- Table structure for table `medical_aid_schemes`
--

CREATE TABLE `medical_aid_schemes` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `medical_aid_schemes`
--

INSERT INTO `medical_aid_schemes` (`id`, `name`) VALUES
(1, 'Bonitas'),
(2, 'Medihelp'),
(3, 'Discovery'),
(4, 'Momentum'),
(5, 'Fedhealth'),
(6, 'Medshield'),
(7, 'None');

-- --------------------------------------------------------

--
-- Table structure for table `patients`
--

CREATE TABLE `patients` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `surname` varchar(50) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `title` varchar(10) NOT NULL,
  `idno` varchar(20) NOT NULL,
  `medical_aid` tinyint(1) NOT NULL DEFAULT '0',
  `address` varchar(200) NOT NULL,
  `email` varchar(150) NOT NULL,
  `password` varchar(500) NOT NULL,
  `medical_name` int(11) NOT NULL,
  `cell` varchar(200) NOT NULL,
  `idLocation` varchar(255) NOT NULL,
  `aidLocation` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `patients`
--

INSERT INTO `patients` (`id`, `name`, `surname`, `created_at`, `updated_at`, `title`, `idno`, `medical_aid`, `address`, `email`, `password`, `medical_name`, `cell`, `idLocation`, `aidLocation`) VALUES
(5, 'Blessing', 'Jiya', '2020-08-04 21:36:10', '2020-08-04 21:36:10', 'Mr', '93299827381282', 1, '11759 block x ext', 'blessing@gmail.com', '$2a$10$HMW6gAOaOlPGBiNFKT9Z9u/1SEX1S7GV0tbkQcAMW4hTLhZJSVx7m', 1, '0839238729', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `practice`
--

CREATE TABLE `practice` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `number` varchar(15) NOT NULL,
  `discipline` varchar(100) NOT NULL,
  `website` varchar(100) NOT NULL,
  `operating_hours` varchar(200) NOT NULL,
  `doctor_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '0',
  `address` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `practice`
--

INSERT INTO `practice` (`id`, `name`, `number`, `discipline`, `website`, `operating_hours`, `doctor_id`, `created_at`, `updated_at`, `active`, `address`) VALUES
(11, 'Botshelo', 'www.botshelo.co', 'General', '10 - 17', 'Jiyane', 18, '2020-08-04 21:28:17', '2020-08-04 21:28:17', 1, '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `appointments`
--
ALTER TABLE `appointments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `patiend_id` (`patiend_id`),
  ADD KEY `practice_id` (`practice_id`);

--
-- Indexes for table `doctors`
--
ALTER TABLE `doctors`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `medical_aid_schemes`
--
ALTER TABLE `medical_aid_schemes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `patients`
--
ALTER TABLE `patients`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `medical_name` (`medical_name`);

--
-- Indexes for table `practice`
--
ALTER TABLE `practice`
  ADD PRIMARY KEY (`id`),
  ADD KEY `doctor_id` (`doctor_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `appointments`
--
ALTER TABLE `appointments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `doctors`
--
ALTER TABLE `doctors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `medical_aid_schemes`
--
ALTER TABLE `medical_aid_schemes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `patients`
--
ALTER TABLE `patients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `practice`
--
ALTER TABLE `practice`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `appointments`
--
ALTER TABLE `appointments`
  ADD CONSTRAINT `appointments_ibfk_1` FOREIGN KEY (`patiend_id`) REFERENCES `patients` (`id`),
  ADD CONSTRAINT `appointments_ibfk_2` FOREIGN KEY (`practice_id`) REFERENCES `practice` (`id`);

--
-- Constraints for table `patients`
--
ALTER TABLE `patients`
  ADD CONSTRAINT `patients_ibfk_1` FOREIGN KEY (`medical_name`) REFERENCES `medical_aid_schemes` (`id`);

--
-- Constraints for table `practice`
--
ALTER TABLE `practice`
  ADD CONSTRAINT `practice_ibfk_1` FOREIGN KEY (`doctor_id`) REFERENCES `doctors` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
