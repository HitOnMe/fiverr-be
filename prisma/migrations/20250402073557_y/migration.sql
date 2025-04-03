-- AlterTable
ALTER TABLE `congviec` ADD COLUMN `ma_loai_cong_viec` INTEGER NOT NULL DEFAULT 1;

-- AddForeignKey
ALTER TABLE `congviec` ADD CONSTRAINT `congviec_ma_loai_cong_viec_fkey` FOREIGN KEY (`ma_loai_cong_viec`) REFERENCES `loaicongviec`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
