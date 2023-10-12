/*
  Warnings:

  - You are about to drop the column `City` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `Email` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `First_Name` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `Last_Name` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `Phone_Number` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `Region` on the `user` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[authorId]` on the table `Lesser` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `authorId` to the `Lesser` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `lesser` ADD COLUMN `authorId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `City`,
    DROP COLUMN `Email`,
    DROP COLUMN `First_Name`,
    DROP COLUMN `Last_Name`,
    DROP COLUMN `Phone_Number`,
    DROP COLUMN `Region`;

-- CreateIndex
CREATE UNIQUE INDEX `Lesser_authorId_key` ON `Lesser`(`authorId`);

-- AddForeignKey
ALTER TABLE `Lesser` ADD CONSTRAINT `Lesser_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
