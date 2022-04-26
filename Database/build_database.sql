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
-- Table `cse job fair registration`.`Account`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cse job fair registration`.`Account` (
  `idAccount` VARCHAR(20) NOT NULL,
  `Account_email` VARCHAR(45) NOT NULL,
  `Account_pass` VARCHAR(45) NOT NULL,
  `Account_sdt` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idAccount`),
  UNIQUE INDEX `idAccount_UNIQUE` (`idAccount` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `cse job fair registration`.`Admin`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cse job fair registration`.`Admin` (
  `idAdmin` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`idAdmin`),
  CONSTRAINT `fk_admin_account1`
    FOREIGN KEY (`idAdmin`)
    REFERENCES `cse job fair registration`.`Account` (`idAccount`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `cse job fair registration`.`DoanhNghiep`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cse job fair registration`.`DoanhNghiep` (
  `idDN` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`idDN`),
  CONSTRAINT `fk_doanhnghiep_account`
    FOREIGN KEY (`idDN`)
    REFERENCES `cse job fair registration`.`Account` (`idAccount`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `cse job fair registration`.`GianHang`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cse job fair registration`.`GianHang` (
  `idGianHang` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`idGianHang`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cse job fair registration`.`DoanhNghiep_DK_GianHang`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cse job fair registration`.`DoanhNghiep_DK_GianHang` (
  `DoanhNghiep_idDN` VARCHAR(20) NOT NULL,
  `GianHang_idGianHang` VARCHAR(20) NOT NULL,
  `ThoiGian` DATETIME NOT NULL,
  `idDangKy` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idDangKy`, `DoanhNghiep_idDN`, `GianHang_idGianHang`),
  INDEX `fk_DoanhNghiep_DK_GianHang_GianHang1_idx` (`GianHang_idGianHang` ASC) VISIBLE,
  INDEX `fk_DoanhNghiep_DK_GianHang_DoanhNghiep1_idx` (`DoanhNghiep_idDN` ASC) VISIBLE,
  CONSTRAINT `fk_DoanhNghiep_DK_GianHang_GianHang1`
    FOREIGN KEY (`GianHang_idGianHang`)
    REFERENCES `cse job fair registration`.`GianHang` (`idGianHang`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_DoanhNghiep_DK_GianHang_DoanhNghiep1`
    FOREIGN KEY (`DoanhNghiep_idDN`)
    REFERENCES `cse job fair registration`.`DoanhNghiep` (`idDN`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `cse job fair registration`.`Admin_Duyet_Hoac_Tuchoi_DK`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cse job fair registration`.`Admin_Duyet_Hoac_Tuchoi_DK` (
  `Admin_idAdmin` VARCHAR(20) NOT NULL,
  `Duyet` TINYINT(1) NULL,
  `idDangKy` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idDangKy`),
  INDEX `fk_Admin_Duyet_Hoac_Tuchoi_DK_DoanhNghiep_DK_GianHang1_idx` (`idDangKy` ASC) VISIBLE,
  INDEX `fk_Admin_Duyet_Hoac_Tuchoi_DK_Admin1_idx` (`Admin_idAdmin` ASC) VISIBLE,
  CONSTRAINT `fk_Admin_Duyet_Hoac_Tuchoi_DK_DoanhNghiep_DK_GianHang1`
    FOREIGN KEY (`idDangKy`)
    REFERENCES `cse job fair registration`.`DoanhNghiep_DK_GianHang` (`idDangKy`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Admin_Duyet_Hoac_Tuchoi_DK_Admin1`
    FOREIGN KEY (`Admin_idAdmin`)
    REFERENCES `cse job fair registration`.`Admin` (`idAdmin`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
