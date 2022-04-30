-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema cse job fair registration
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema cse job fair registration
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `cse job fair registration` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `cse job fair registration` ;

-- -----------------------------------------------------
-- Table `cse job fair registration`.`admin`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cse job fair registration`.`admin` (
  `idAdmin` VARCHAR(10) NOT NULL,
  `Name` NVARCHAR(45) NOT NULL,
  `Mail` VARCHAR(45) NOT NULL,
  `Pass` VARCHAR(45) NOT NULL,
  `Phone` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idAdmin`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `cse job fair registration`.`booth`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cse job fair registration`.`booth` (
  `idBooth` VARCHAR(10) NOT NULL,
  PRIMARY KEY (`idBooth`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `cse job fair registration`.`bussiness`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cse job fair registration`.`bussiness` (
  `Name` VARCHAR(45) NOT NULL,
  `Mail` VARCHAR(45) NOT NULL,
  `Pass` VARCHAR(45) NOT NULL,
  `Phone` VARCHAR(45) NOT NULL,
  `idBussiness` VARCHAR(10) NOT NULL,
  PRIMARY KEY (`idBussiness`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `cse job fair registration`.`registration`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cse job fair registration`.`registration` (
  `idRegistration` VARCHAR(10) NOT NULL,
  `Bussiness_idBussiness` VARCHAR(10) NOT NULL,
  `Booth_idBooth` VARCHAR(10) NOT NULL,
  `Time_registration` DATETIME NOT NULL,
  PRIMARY KEY (`idRegistration`),
  INDEX `fk_Registration_Booth_idx` (`Booth_idBooth` ASC) VISIBLE,
  INDEX `fk_Registration_Bussiness1_idx` (`Bussiness_idBussiness` ASC) VISIBLE,
  CONSTRAINT `fk_Registration_Booth`
    FOREIGN KEY (`Booth_idBooth`)
    REFERENCES `cse job fair registration`.`booth` (`idBooth`),
  CONSTRAINT `fk_Registration_Bussiness1`
    FOREIGN KEY (`Bussiness_idBussiness`)
    REFERENCES `cse job fair registration`.`bussiness` (`idBussiness`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `cse job fair registration`.`approve`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cse job fair registration`.`approve` (
  `Registration_idRegistration` VARCHAR(10) NOT NULL,
  `Admin_idAdmin` VARCHAR(10) NOT NULL,
  `Approve_or_Deny` TINYINT NULL DEFAULT NULL,
  `Time_approve` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`Registration_idRegistration`, `Admin_idAdmin`),
  INDEX `fk_Registration_has_Admin_Admin1_idx` (`Admin_idAdmin` ASC) VISIBLE,
  INDEX `fk_Registration_has_Admin_Registration1_idx` (`Registration_idRegistration` ASC) VISIBLE,
  CONSTRAINT `fk_Registration_has_Admin_Admin1`
    FOREIGN KEY (`Admin_idAdmin`)
    REFERENCES `cse job fair registration`.`admin` (`idAdmin`),
  CONSTRAINT `fk_Registration_has_Admin_Registration1`
    FOREIGN KEY (`Registration_idRegistration`)
    REFERENCES `cse job fair registration`.`registration` (`idRegistration`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
