/*
  Warnings:

  - You are about to alter the column `Approval_status` on the `house` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `TinyInt`.

*/
-- DropForeignKey
ALTER TABLE `home_photo` DROP FOREIGN KEY `Home_Photo_houseId_fkey`;

-- DropForeignKey
ALTER TABLE `house` DROP FOREIGN KEY `House_lesserId_fkey`;

-- DropForeignKey
ALTER TABLE `lesser` DROP FOREIGN KEY `Lesser_authorId_fkey`;

-- AlterTable
ALTER TABLE `house` MODIFY `Approval_status` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `lesser` ADD COLUMN `Phone_Number2` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `role` ENUM('LESSE', 'LESSER', 'ADMIN') NOT NULL DEFAULT 'LESSE';

-- CreateTable
CREATE TABLE `Admin` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `authorId` INTEGER NOT NULL,
    `First_Name` VARCHAR(191) NOT NULL,
    `Last_Name` VARCHAR(191) NOT NULL,
    `Phone_Number` VARCHAR(191) NOT NULL,
    `Email` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Admin_authorId_key`(`authorId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Lesse` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `authorId` INTEGER NOT NULL,
    `First_Name` VARCHAR(191) NOT NULL,
    `Last_Name` VARCHAR(191) NOT NULL,
    `Phone_Number` VARCHAR(191) NOT NULL,
    `Email` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Lesse_authorId_key`(`authorId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LesseOnHouse` (
    `houseId` INTEGER NOT NULL,
    `lesseId` INTEGER NOT NULL,
    `Is_deal` BOOLEAN NOT NULL,
    `Is_report` BOOLEAN NOT NULL,

    PRIMARY KEY (`houseId`, `lesseId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Admin` ADD CONSTRAINT `Admin_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Lesser` ADD CONSTRAINT `Lesser_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Lesse` ADD CONSTRAINT `Lesse_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `House` ADD CONSTRAINT `House_lesserId_fkey` FOREIGN KEY (`lesserId`) REFERENCES `Lesser`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LesseOnHouse` ADD CONSTRAINT `LesseOnHouse_houseId_fkey` FOREIGN KEY (`houseId`) REFERENCES `House`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LesseOnHouse` ADD CONSTRAINT `LesseOnHouse_lesseId_fkey` FOREIGN KEY (`lesseId`) REFERENCES `Lesse`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Home_Photo` ADD CONSTRAINT `Home_Photo_houseId_fkey` FOREIGN KEY (`houseId`) REFERENCES `House`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
