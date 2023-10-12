-- AlterTable
ALTER TABLE `house` MODIFY `Approval_status` BOOLEAN NULL DEFAULT false,
    MODIFY `deal` INTEGER NULL DEFAULT 0,
    MODIFY `like` INTEGER NULL DEFAULT 0,
    MODIFY `report` INTEGER NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `lesseonhouse` MODIFY `Is_deal` BOOLEAN NULL DEFAULT false,
    MODIFY `Is_report` BOOLEAN NULL DEFAULT false,
    MODIFY `Is_like` BOOLEAN NULL DEFAULT false;
