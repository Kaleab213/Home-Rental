/*
  Warnings:

  - You are about to drop the column `authorId` on the `lesse` table. All the data in the column will be lost.
  - You are about to alter the column `role` on the `user` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(0))` to `Enum(EnumId(0))`.

*/
-- DropForeignKey
ALTER TABLE `lesse` DROP FOREIGN KEY `Lesse_authorId_fkey`;

-- AlterTable
ALTER TABLE `lesse` DROP COLUMN `authorId`;

-- AlterTable
ALTER TABLE `lesseonhouse` MODIFY `Is_deal` BOOLEAN NULL,
    MODIFY `Is_report` BOOLEAN NULL;

-- AlterTable
ALTER TABLE `user` MODIFY `role` ENUM('LESSER', 'ADMIN') NOT NULL DEFAULT 'LESSER';
