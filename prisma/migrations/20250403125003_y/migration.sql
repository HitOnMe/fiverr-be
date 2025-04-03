-- CreateTable
CREATE TABLE `nguoidung` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `age` INTEGER NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `pass_word` VARCHAR(191) NOT NULL,
    `phone` INTEGER NOT NULL,
    `birth_day` DATETIME(3) NOT NULL,
    `gender` VARCHAR(191) NOT NULL,
    `role` VARCHAR(191) NOT NULL,
    `Skills` VARCHAR(191) NOT NULL DEFAULT 'string',
    `certification` VARCHAR(191) NOT NULL,
    `avatar` VARCHAR(191) NOT NULL DEFAULT 'default-avatar.png',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `congviec` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ten_cong_viec` VARCHAR(191) NOT NULL,
    `danh_gia` INTEGER NOT NULL,
    `gia_tien` INTEGER NOT NULL,
    `hinh_anh` VARCHAR(191) NOT NULL,
    `mo_ta` VARCHAR(191) NOT NULL,
    `mo_ta_ngan` VARCHAR(191) NOT NULL,
    `sao_cong_viec` INTEGER NOT NULL,
    `ma_loai_cong_viec` INTEGER NOT NULL DEFAULT 1,
    `ma_chi_tiet_loai` INTEGER NOT NULL,
    `nguoi_tao` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `thuecongviec` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ma_cong_viec` INTEGER NOT NULL,
    `ma_nguoi_thue` INTEGER NOT NULL,
    `ngay_thue` DATETIME(3) NOT NULL,
    `hoan_thanh` BOOLEAN NOT NULL,

    UNIQUE INDEX `thuecongviec_ma_cong_viec_key`(`ma_cong_viec`),
    UNIQUE INDEX `thuecongviec_ma_nguoi_thue_key`(`ma_nguoi_thue`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `chitietloaicongviec` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ten_chi_tiet` VARCHAR(191) NOT NULL,
    `hinh_anh` VARCHAR(191) NOT NULL,
    `ma_loai_cong_viec` INTEGER NOT NULL,

    UNIQUE INDEX `chitietloaicongviec_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `binhluan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ma_cong_viec` INTEGER NOT NULL,
    `ma_nguoi_binh_luan` INTEGER NOT NULL,
    `ngay_binh_luan` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `noi_dung` VARCHAR(191) NOT NULL,
    `sao_binh_luan` INTEGER NOT NULL,

    UNIQUE INDEX `binhluan_ma_cong_viec_key`(`ma_cong_viec`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `loaicongviec` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ten_loai_cong_viec` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `loaicongviec_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Skill` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tenSKill` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Skill_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `congviec` ADD CONSTRAINT `congviec_nguoi_tao_fkey` FOREIGN KEY (`nguoi_tao`) REFERENCES `nguoidung`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `congviec` ADD CONSTRAINT `congviec_ma_loai_cong_viec_fkey` FOREIGN KEY (`ma_loai_cong_viec`) REFERENCES `loaicongviec`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `congviec` ADD CONSTRAINT `congviec_ma_chi_tiet_loai_fkey` FOREIGN KEY (`ma_chi_tiet_loai`) REFERENCES `chitietloaicongviec`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `thuecongviec` ADD CONSTRAINT `thuecongviec_ma_cong_viec_fkey` FOREIGN KEY (`ma_cong_viec`) REFERENCES `congviec`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `thuecongviec` ADD CONSTRAINT `thuecongviec_ma_nguoi_thue_fkey` FOREIGN KEY (`ma_nguoi_thue`) REFERENCES `nguoidung`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `chitietloaicongviec` ADD CONSTRAINT `chitietloaicongviec_ma_loai_cong_viec_fkey` FOREIGN KEY (`ma_loai_cong_viec`) REFERENCES `loaicongviec`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `binhluan` ADD CONSTRAINT `binhluan_ma_nguoi_binh_luan_fkey` FOREIGN KEY (`ma_nguoi_binh_luan`) REFERENCES `nguoidung`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `binhluan` ADD CONSTRAINT `binhluan_ma_cong_viec_fkey` FOREIGN KEY (`ma_cong_viec`) REFERENCES `congviec`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
