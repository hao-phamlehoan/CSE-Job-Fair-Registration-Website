-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema csejfregistration
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema csejfregistration
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `csejfregistration` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `csejfregistration` ;

-- -----------------------------------------------------
-- Table `csejfregistration`.`admin`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `csejfregistration`.`admin` (
  `id` INT NOT NULL,
  `name` VARCHAR(100) CHARACTER SET 'utf8' NOT NULL,
  `phone` VARCHAR(45) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `csejfregistration`.`booth`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `csejfregistration`.`booth` (
  `id` INT NOT NULL,
  `price` VARCHAR(45) NOT NULL,
  `size` VARCHAR(45) NOT NULL,
  `owner` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `csejfregistration`.`business`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `csejfregistration`.`business` (
  `id` INT NOT NULL,
  `name` VARCHAR(100) CHARACTER SET 'utf8' NOT NULL,
  `phone` VARCHAR(45) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  `representation` VARCHAR(100) CHARACTER SET 'utf8' NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `csejfregistration`.`registration_approve`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `csejfregistration`.`registration_approve` (
  `id` INT NOT NULL,
  `time_register` DATETIME NOT NULL,
  `time_approve` DATETIME NULL DEFAULT NULL,
  `approve` TINYINT NULL DEFAULT NULL,
  `booth_id` INT NOT NULL,
  `business_id` INT NOT NULL,
  `admin_id` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_registration_booth_idx` (`booth_id` ASC) VISIBLE,
  INDEX `fk_registration_business1_idx` (`business_id` ASC) VISIBLE,
  INDEX `fk_registration_admin1_idx` (`admin_id` ASC) VISIBLE,
  CONSTRAINT `fk_registration_admin1`
    FOREIGN KEY (`admin_id`)
    REFERENCES `csejfregistration`.`admin` (`id`),
  CONSTRAINT `fk_registration_booth`
    FOREIGN KEY (`booth_id`)
    REFERENCES `csejfregistration`.`booth` (`id`),
  CONSTRAINT `fk_registration_business1`
    FOREIGN KEY (`business_id`)
    REFERENCES `csejfregistration`.`business` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
