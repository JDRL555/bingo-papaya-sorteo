-- DropForeignKey
ALTER TABLE `ganadores` DROP FOREIGN KEY `Ganadores_idcarton_fkey`;

-- DropForeignKey
ALTER TABLE `ganadores` DROP FOREIGN KEY `Ganadores_idsorteo_fkey`;

-- AddForeignKey
ALTER TABLE `ganadores` ADD CONSTRAINT `ganadores_idcarton_fkey` FOREIGN KEY (`idcarton`) REFERENCES `carton`(`idcarton`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ganadores` ADD CONSTRAINT `ganadores_idsorteo_fkey` FOREIGN KEY (`idsorteo`) REFERENCES `sorteo`(`idsorteo`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- RenameIndex
ALTER TABLE `ganadores` RENAME INDEX `Ganadores_idsorteo_key` TO `ganadores_idsorteo_key`;
