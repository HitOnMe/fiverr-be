-- DropForeignKey
ALTER TABLE `binhluan` DROP FOREIGN KEY `BinhLuan_ma_cong_viec_fkey`;

-- DropForeignKey
ALTER TABLE `binhluan` DROP FOREIGN KEY `BinhLuan_ma_nguoi_binh_luan_fkey`;

-- DropForeignKey
ALTER TABLE `chitietloaicongviec` DROP FOREIGN KEY `ChiTietLoaiCongViec_ma_loai_cong_viec_fkey`;

-- DropForeignKey
ALTER TABLE `congviec` DROP FOREIGN KEY `CongViec_ma_chi_tiet_loai_fkey`;

-- DropForeignKey
ALTER TABLE `congviec` DROP FOREIGN KEY `CongViec_nguoi_tao_fkey`;

-- DropIndex
DROP INDEX `BinhLuan_ma_nguoi_binh_luan_fkey` ON `binhluan`;

-- DropIndex
DROP INDEX `ChiTietLoaiCongViec_ma_loai_cong_viec_fkey` ON `chitietloaicongviec`;

-- DropIndex
DROP INDEX `CongViec_ma_chi_tiet_loai_fkey` ON `congviec`;

-- DropIndex
DROP INDEX `CongViec_nguoi_tao_fkey` ON `congviec`;

-- AddForeignKey
ALTER TABLE `CongViec` ADD CONSTRAINT `CongViec_nguoi_tao_fkey` FOREIGN KEY (`nguoi_tao`) REFERENCES `NguoiDung`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CongViec` ADD CONSTRAINT `CongViec_ma_chi_tiet_loai_fkey` FOREIGN KEY (`ma_chi_tiet_loai`) REFERENCES `ChiTietLoaiCongViec`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ChiTietLoaiCongViec` ADD CONSTRAINT `ChiTietLoaiCongViec_ma_loai_cong_viec_fkey` FOREIGN KEY (`ma_loai_cong_viec`) REFERENCES `LoaiCongViec`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BinhLuan` ADD CONSTRAINT `BinhLuan_ma_nguoi_binh_luan_fkey` FOREIGN KEY (`ma_nguoi_binh_luan`) REFERENCES `NguoiDung`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BinhLuan` ADD CONSTRAINT `BinhLuan_ma_cong_viec_fkey` FOREIGN KEY (`ma_cong_viec`) REFERENCES `CongViec`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
