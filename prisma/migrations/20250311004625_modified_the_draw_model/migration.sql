/*
  Warnings:

  - You are about to alter the column `figura` on the `sorteo` table. The data in that column could be lost. The data in that column will be cast from `VarChar(45)` to `Enum(EnumId(0))`.

*/
-- AlterTable
ALTER TABLE `sorteo` MODIFY `figura` ENUM('carton_lleno', 'linea_horizontal', 'linea_vertical', 'figura_1', 'figura_2', 'figura_3', 'figura_4', 'figura_5') NOT NULL;
