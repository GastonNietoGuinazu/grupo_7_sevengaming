DROP DATABASE IF EXISTS DbSevenGaming;
CREATE DATABASE DbSevenGaming;
USE DbSevenGaming;
  CREATE TABLE `users` (
   `id` INT AUTO_INCREMENT,
   `first_name` VARCHAR(100) NOT NULL,
   `last_name` VARCHAR(100) NOT NULL,
   `email` VARCHAR(50) NOT NULL,
   `password` VARCHAR(50) NOT NULL,
   `categoryId` INT NOT NULL,
   `image` VARCHAR(255),
   PRIMARY KEY (`id`)
);

CREATE TABLE `products` (
   `id` INT AUTO_INCREMENT,
   `name` VARCHAR(100) NOT NULL,
   `price` MEDIUMINT NOT NULL,
   `categoryId` INT NOT NULL,
   `description` TEXT,
   `image` VARCHAR(255),
   PRIMARY KEY (`id`)
);

CREATE TABLE `categoryProducts` (
   `id` INT AUTO_INCREMENT,
   `category` VARCHAR(50) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `categoryUsers` (
   `id` INT AUTO_INCREMENT,
   `category` VARCHAR(50) NOT NULL,
   PRIMARY KEY (`id`)
);


ALTER TABLE `users` ADD CONSTRAINT `FK_d3066dd4-5c92-48d9-b965-f005ddb3c0de` FOREIGN KEY (`categoryId`) REFERENCES `categoryUsers`(`id`)  ;

ALTER TABLE `products` ADD CONSTRAINT `FK_f515dbca-971e-4c01-83a0-7830c10e43f8` FOREIGN KEY (`categoryId`) REFERENCES `categoryProducts`(`id`)  ;
