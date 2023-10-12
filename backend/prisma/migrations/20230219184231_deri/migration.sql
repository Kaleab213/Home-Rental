/*
  Warnings:

  - A unique constraint covering the columns `[authorId]` on the table `Lesse` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `authorId` to the `Lesse` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `lesse` ADD COLUMN `authorId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `user` MODIFY `role` ENUM('LESSE', 'LESSER', 'ADMIN') NOT NULL DEFAULT 'LESSE';

-- CreateIndex
CREATE UNIQUE INDEX `Lesse_authorId_key` ON `Lesse`(`authorId`);

-- AddForeignKey
ALTER TABLE `Lesse` ADD CONSTRAINT `Lesse_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
