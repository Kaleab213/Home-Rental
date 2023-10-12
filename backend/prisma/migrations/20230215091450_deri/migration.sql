-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `First_Name` VARCHAR(191) NULL,
    `Last_Name` VARCHAR(191) NULL,
    `Phone_Number` VARCHAR(191) NULL,
    `Email` VARCHAR(191) NULL,
    `User_Name` VARCHAR(191) NOT NULL,
    `hash` VARCHAR(191) NOT NULL,
    `refreshPassword` VARCHAR(191) NULL,
    `Region` VARCHAR(191) NULL,
    `City` VARCHAR(191) NULL,

    UNIQUE INDEX `User_User_Name_key`(`User_Name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Lesser` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `First_Name` VARCHAR(191) NOT NULL,
    `Last_Name` VARCHAR(191) NOT NULL,
    `Phone_Number` VARCHAR(191) NOT NULL,
    `Email` VARCHAR(191) NOT NULL,
    `Region` VARCHAR(191) NOT NULL,
    `Zone` VARCHAR(191) NOT NULL,
    `Wereda` VARCHAR(191) NOT NULL,
    `City` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `House` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `lesserId` INTEGER NOT NULL,
    `Home_Type` VARCHAR(191) NOT NULL,
    `Approval_status` VARCHAR(191) NOT NULL,
    `Size` VARCHAR(191) NOT NULL,
    `Price` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `City` VARCHAR(191) NOT NULL,
    `Sub_City` VARCHAR(191) NOT NULL,
    `Wereda` VARCHAR(191) NOT NULL,
    `Kebele` VARCHAR(191) NOT NULL,
    `home_no` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Home_Photo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `houseId` INTEGER NOT NULL,
    `Toilet` VARCHAR(191) NOT NULL,
    `Kitchen` VARCHAR(191) NOT NULL,
    `Shower` VARCHAR(191) NOT NULL,
    `Door` VARCHAR(191) NOT NULL,
    `Floor` VARCHAR(191) NOT NULL,
    `Roof` VARCHAR(191) NOT NULL,
    `Wall` VARCHAR(191) NOT NULL,
    `Home_license` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Home_Photo_houseId_key`(`houseId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `House` ADD CONSTRAINT `House_lesserId_fkey` FOREIGN KEY (`lesserId`) REFERENCES `Lesser`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Home_Photo` ADD CONSTRAINT `Home_Photo_houseId_fkey` FOREIGN KEY (`houseId`) REFERENCES `House`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
