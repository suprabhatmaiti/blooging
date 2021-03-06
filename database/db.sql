CREATE TABLE `blogging`.`user` (
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(32) NOT NULL,
  `create_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `first_name` VARCHAR(45) NULL,
  `last_name` VARCHAR(45) NULL,
  `address` TEXT(250) NULL,
  `deleted` TINYINT NOT NULL DEFAULT 0,
  `deleted_time` TIMESTAMP NULL,
  `gender` CHAR NULL,
  PRIMARY KEY (`email`));

  CREATE TABLE `blogging`.`post` (
  `post_id` INT NOT NULL AUTO_INCREMENT,
  `user_id` VARCHAR(255) NOT NULL,
  `category` TINYINT NOT NULL,
  `title` VARCHAR(255) NOT NULL,
  `content` LONGTEXT NULL,
  `create_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `deleted` TINYINT NULL DEFAULT 0,
  `deleted_time` TIMESTAMP NULL,
  PRIMARY KEY (`post_id`),
  INDEX `email_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `email`
    FOREIGN KEY (`user_id`)
    REFERENCES `blogging`.`user` (`email`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE TABLE `blogging`.`comment` (
  `create_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `post_id` INT NULL,
  `user_id` VARCHAR(255) NULL,
  `content` LONGTEXT NULL,
  `deleted` TINYINT NULL DEFAULT 0,
  `deleted_time` TIMESTAMP NULL,
  INDEX `post_id_idx` (`post_id` ASC) VISIBLE,
  INDEX `email_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `post_id_comment`
    FOREIGN KEY (`post_id`)
    REFERENCES `blogging`.`post` (`post_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `email_post_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `blogging`.`user` (`email`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE TABLE `blogging`.`like` (
  `create_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `post_id` INT NULL,
  `user_id` VARCHAR(255) NULL,
  `deleted` TINYINT NULL DEFAULT 0,
  `deleted_time` VARCHAR(45) NULL,
  INDEX `fk_user_id_idx` (`user_id` ASC) VISIBLE,
  INDEX `fk_post_id_idx` (`post_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `blogging`.`user` (`email`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_post_id`
    FOREIGN KEY (`post_id`)
    REFERENCES `blogging`.`post` (`post_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
