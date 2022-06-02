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
  `phone` VARCHAR(45) NOT NULL,
  `name` NVARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`idadmin`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cse job fair registration`.`business`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cse job fair registration`.`business` (
  `idbusiness` INT NOT NULL,
  `name` NVARCHAR(100) NOT NULL,
  `emal` VARCHAR(100) NOT NULL,
  `phone` VARCHAR(45) NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  `representation_name` NVARCHAR(45) NOT NULL,
  PRIMARY KEY (`idbusiness`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cse job fair registration`.`booth`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cse job fair registration`.`booth` (
  `idbooth` INT NOT NULL,
  `size` VARCHAR(20) NOT NULL,
  `price` DECIMAL NOT NULL,
  PRIMARY KEY (`idbooth`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cse job fair registration`.`registration`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cse job fair registration`.`registration` (
  `idregistration` INT NOT NULL,
  PRIMARY KEY (`idregistration`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cse job fair registration`.`containing`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cse job fair registration`.`containing` (
  `registration_idregistration` INT NOT NULL,
  `business_idbusiness` INT NOT NULL,
  PRIMARY KEY (`registration_idregistration`),
  INDEX `fk_containing_business1_idx` (`business_idbusiness` ASC) VISIBLE,
  CONSTRAINT `fk_containing_registration1`
    FOREIGN KEY (`registration_idregistration`)
    REFERENCES `cse job fair registration`.`registration` (`idregistration`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_containing_business1`
    FOREIGN KEY (`business_idbusiness`)
    REFERENCES `cse job fair registration`.`business` (`idbusiness`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cse job fair registration`.`approve`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cse job fair registration`.`approve` (
  `registration_idregistration` INT NOT NULL,
  `admin_idadmin` INT NOT NULL,
  `time_approve` DATETIME NOT NULL,
  `approve` TINYINT NULL,
  PRIMARY KEY (`registration_idregistration`),
  INDEX `fk_approve_admin1_idx` (`admin_idadmin` ASC) VISIBLE,
  CONSTRAINT `fk_approve_registration1`
    FOREIGN KEY (`registration_idregistration`)
    REFERENCES `cse job fair registration`.`registration` (`idregistration`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_approve_admin1`
    FOREIGN KEY (`admin_idadmin`)
    REFERENCES `cse job fair registration`.`admin` (`idadmin`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cse job fair registration`.`register`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cse job fair registration`.`register` (
  `registration_idregistration` INT NOT NULL,
  `booth_idbooth` INT NOT NULL,
  `time_register` DATETIME NOT NULL,
  PRIMARY KEY (`registration_idregistration`),
  INDEX `fk_register_booth1_idx` (`booth_idbooth` ASC) VISIBLE,
  CONSTRAINT `fk_register_registration`
    FOREIGN KEY (`registration_idregistration`)
    REFERENCES `cse job fair registration`.`registration` (`idregistration`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_register_booth1`
    FOREIGN KEY (`booth_idbooth`)
    REFERENCES `cse job fair registration`.`booth` (`idbooth`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
