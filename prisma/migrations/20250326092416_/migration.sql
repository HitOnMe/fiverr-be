-- CreateTable
CREATE TABLE `NguoiDung` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `pass_word` VARCHAR(191) NOT NULL,
    `phone` INTEGER NOT NULL,
    `birth_day` DATETIME(3) NOT NULL,
    `gender` VARCHAR(191) NOT NULL,
    `role` VARCHAR(191) NOT NULL,
    `certification` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CongViec` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ten_cong_viec` VARCHAR(191) NOT NULL,
    `danh_gia` INTEGER NOT NULL,
    `gia_tien` INTEGER NOT NULL,
    `hinh_anh` VARCHAR(191) NOT NULL,
    `mo_ta` VARCHAR(191) NOT NULL,
    `mo_ta_ngan` VARCHAR(191) NOT NULL,
    `sao_cong_viec` INTEGER NOT NULL,
    `ma_chi_tiet_loai` INTEGER NOT NULL,
    `nguoi_tao` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ThueCongViec` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ma_cong_viec` INTEGER NOT NULL,
    `ma_nguoi_thue` INTEGER NOT NULL,
    `ngay_thue` DATETIME(3) NOT NULL,
    `hoan_thanh` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ChiTietLoaiCongViec` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ten_chi_tiet` VARCHAR(191) NOT NULL,
    `hinh_anh` VARCHAR(191) NOT NULL,
    `ma_loai_cong_viec` INTEGER NOT NULL,

    UNIQUE INDEX `ChiTietLoaiCongViec_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `BinhLuan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ma_cong_viec` INTEGER NOT NULL,
    `ma_nguoi_binh_luan` INTEGER NOT NULL,
    `ngay_binh_luan` DATETIME(3) NOT NULL,
    `noi_dung` VARCHAR(191) NOT NULL,
    `sao_binh_luan` INTEGER NOT NULL,

    UNIQUE INDEX `BinhLuan_ma_cong_viec_key`(`ma_cong_viec`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LoaiCongViec` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ten_loai_cong_viec` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `LoaiCongViec_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `CongViec` ADD CONSTRAINT `CongViec_nguoi_tao_fkey` FOREIGN KEY (`nguoi_tao`) REFERENCES `NguoiDung`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CongViec` ADD CONSTRAINT `CongViec_ma_chi_tiet_loai_fkey` FOREIGN KEY (`ma_chi_tiet_loai`) REFERENCES `ChiTietLoaiCongViec`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ChiTietLoaiCongViec` ADD CONSTRAINT `ChiTietLoaiCongViec_ma_loai_cong_viec_fkey` FOREIGN KEY (`ma_loai_cong_viec`) REFERENCES `LoaiCongViec`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BinhLuan` ADD CONSTRAINT `BinhLuan_ma_nguoi_binh_luan_fkey` FOREIGN KEY (`ma_nguoi_binh_luan`) REFERENCES `NguoiDung`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BinhLuan` ADD CONSTRAINT `BinhLuan_ma_cong_viec_fkey` FOREIGN KEY (`ma_cong_viec`) REFERENCES `CongViec`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
