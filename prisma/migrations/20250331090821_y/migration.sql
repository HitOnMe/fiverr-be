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

-- DropForeignKey
ALTER TABLE `thuecongviec` DROP FOREIGN KEY `ThueCongViec_ma_cong_viec_fkey`;

-- DropForeignKey
ALTER TABLE `thuecongviec` DROP FOREIGN KEY `ThueCongViec_ma_nguoi_thue_fkey`;

-- AddForeignKey
ALTER TABLE `congviec` ADD CONSTRAINT `congviec_nguoi_tao_fkey` FOREIGN KEY (`nguoi_tao`) REFERENCES `nguoidung`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

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

-- RenameIndex
ALTER TABLE `binhluan` RENAME INDEX `BinhLuan_ma_cong_viec_key` TO `binhluan_ma_cong_viec_key`;

-- RenameIndex
ALTER TABLE `chitietloaicongviec` RENAME INDEX `ChiTietLoaiCongViec_id_key` TO `chitietloaicongviec_id_key`;

-- RenameIndex
ALTER TABLE `loaicongviec` RENAME INDEX `LoaiCongViec_id_key` TO `loaicongviec_id_key`;

-- RenameIndex
ALTER TABLE `thuecongviec` RENAME INDEX `ThueCongViec_ma_cong_viec_key` TO `thuecongviec_ma_cong_viec_key`;

-- RenameIndex
ALTER TABLE `thuecongviec` RENAME INDEX `ThueCongViec_ma_nguoi_thue_key` TO `thuecongviec_ma_nguoi_thue_key`;
