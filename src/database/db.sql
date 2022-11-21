CREATE SCHEMA `rest_api_nodejs` ;


CREATE TABLE `rest_api_nodejs`.`new_table` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(250) NULL,
  `description` VARCHAR(250) NULL,
  `price` DOUBLE(11,2) NULL,
  `image` VARCHAR(255) NULL,
  PRIMARY KEY (`id`));
