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
  `idadmin` INT NOT NULL,
  `name` VARCHAR(45) CHARACTER SET 'utf8' NOT NULL,
  `phone` VARCHAR(45) NOT NULL,
  `mail` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idadmin`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `cse job fair registration`.`registation`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cse job fair registration`.`registation` (
  `idregistation` INT NOT NULL,
  PRIMARY KEY (`idregistation`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `cse job fair registration`.`approve`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cse job fair registration`.`approve` (
  `admin_idadmin` INT NOT NULL,
  `time_approve` DATETIME NOT NULL,
  `registation_idregistation` INT NOT NULL,
  `approve` TINYINT NOT NULL,
  PRIMARY KEY (`registation_idregistation`),
  INDEX `fk_approve_admin1_idx` (`admin_idadmin` ASC) VISIBLE,
  CONSTRAINT `fk_approve_admin1`
    FOREIGN KEY (`admin_idadmin`)
    REFERENCES `cse job fair registration`.`admin` (`idadmin`),
  CONSTRAINT `fk_approve_registation1`
    FOREIGN KEY (`registation_idregistation`)
    REFERENCES `cse job fair registration`.`registation` (`idregistation`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `cse job fair registration`.`booth`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cse job fair registration`.`booth` (
  `idbooth` INT NOT NULL,
  `location` VARCHAR(100) CHARACTER SET 'utf8' NOT NULL,
  `size` INT NOT NULL,
  `price` INT NOT NULL,
  PRIMARY KEY (`idbooth`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `cse job fair registration`.`bussiness`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cse job fair registration`.`bussiness` (
  `idbussiness` INT NOT NULL,
  `nickname` VARCHAR(45) NOT NULL,
  `name` VARCHAR(100) CHARACTER SET 'utf8' NOT NULL,
  `phone_representation` VARCHAR(45) NOT NULL,
  `mail_representation` VARCHAR(45) NOT NULL,
  `address` VARCHAR(100) CHARACTER SET 'utf8' NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idbussiness`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `cse job fair registration`.`containing`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cse job fair registration`.`containing` (
  `booth_idbooth` INT NOT NULL,
  `registation_idregistation` INT NOT NULL,
  PRIMARY KEY (`registation_idregistation`),
  INDEX `fk_containing_booth1_idx` (`booth_idbooth` ASC) VISIBLE,
  CONSTRAINT `fk_containing_booth1`
    FOREIGN KEY (`booth_idbooth`)
    REFERENCES `cse job fair registration`.`booth` (`idbooth`),
  CONSTRAINT `fk_containing_registation1`
    FOREIGN KEY (`registation_idregistation`)
    REFERENCES `cse job fair registration`.`registation` (`idregistation`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `cse job fair registration`.`register`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cse job fair registration`.`register` (
  `bussiness_idbussiness` INT NOT NULL,
  `registercol` DATETIME NOT NULL,
  `registation_idregistation` INT NOT NULL,
  PRIMARY KEY (`registation_idregistation`),
  INDEX `fk_register_bussiness_idx` (`bussiness_idbussiness` ASC) VISIBLE,
  CONSTRAINT `fk_register_bussiness`
    FOREIGN KEY (`bussiness_idbussiness`)
    REFERENCES `cse job fair registration`.`bussiness` (`idbussiness`),
  CONSTRAINT `fk_register_registation1`
    FOREIGN KEY (`registation_idregistation`)
    REFERENCES `cse job fair registration`.`registation` (`idregistation`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
