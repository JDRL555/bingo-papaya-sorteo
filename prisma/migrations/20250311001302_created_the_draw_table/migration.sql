/*
  Warnings:

  - You are about to drop the column `figura` on the `ganadores` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[idsorteo]` on the table `Ganadores` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `idsorteo` to the `Ganadores` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `ganadores` DROP COLUMN `figura`,
    ADD COLUMN `idsorteo` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Sorteo` (
    `idsorteo` INTEGER NOT NULL AUTO_INCREMENT,
    `fecha` DATETIME(0) NOT NULL,
    `figura` VARCHAR(45) NOT NULL,
    `premio` DOUBLE NOT NULL,

    PRIMARY KEY (`idsorteo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Ganadores_idsorteo_key` ON `Ganadores`(`idsorteo`);

-- AddForeignKey
ALTER TABLE `Ganadores` ADD CONSTRAINT `Ganadores_idsorteo_fkey` FOREIGN KEY (`idsorteo`) REFERENCES `Sorteo`(`idsorteo`) ON DELETE RESTRICT ON UPDATE CASCADE;
