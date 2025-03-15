-- CreateTable
CREATE TABLE `Carton` (
    `idcarton` INTEGER NOT NULL AUTO_INCREMENT,
    `b1` INTEGER NULL,
    `i1` INTEGER NULL,
    `n1` INTEGER NULL,
    `g1` INTEGER NULL,
    `o1` INTEGER NULL,
    `b2` INTEGER NULL,
    `i2` INTEGER NULL,
    `n2` INTEGER NULL,
    `g2` INTEGER NULL,
    `o2` INTEGER NULL,
    `b3` INTEGER NULL,
    `i3` INTEGER NULL,
    `n3` INTEGER NULL,
    `g3` INTEGER NULL,
    `o3` INTEGER NULL,
    `b4` INTEGER NULL,
    `i4` INTEGER NULL,
    `n4` INTEGER NULL,
    `g4` INTEGER NULL,
    `o4` INTEGER NULL,
    `b5` INTEGER NULL,
    `i5` INTEGER NULL,
    `n5` INTEGER NULL,
    `g5` INTEGER NULL,
    `o5` INTEGER NULL,
    `fecha_sorteo` DATE NULL,
    `reservado` SMALLINT NULL,
    `fecha_reservado` DATETIME(0) NULL,
    `nombre` VARCHAR(45) NULL,
    `telefono` VARCHAR(45) NULL,
    `correo` VARCHAR(45) NULL,
    `verificado` SMALLINT NULL,

    PRIMARY KEY (`idcarton`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Ganadores` (
    `idganadores` INTEGER NOT NULL AUTO_INCREMENT,
    `idcarton` INTEGER NOT NULL,
    `fecha` DATETIME(0) NOT NULL,
    `figura` VARCHAR(45) NOT NULL,
    `premio` DOUBLE NOT NULL,

    PRIMARY KEY (`idganadores`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Ganadores` ADD CONSTRAINT `Ganadores_idcarton_fkey` FOREIGN KEY (`idcarton`) REFERENCES `Carton`(`idcarton`) ON DELETE RESTRICT ON UPDATE CASCADE;
