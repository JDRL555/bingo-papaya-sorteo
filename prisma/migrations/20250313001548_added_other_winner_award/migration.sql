/*
  Warnings:

  - You are about to drop the column `premio` on the `ganadores` table. All the data in the column will be lost.
  - Added the required column `premioreferencia` to the `Ganadores` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `ganadores` DROP COLUMN `premio`,
    ADD COLUMN `premio_ganado` DOUBLE NULL,
    ADD COLUMN `premioreferencia` DOUBLE NOT NULL;
