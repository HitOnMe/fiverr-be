/*
  Warnings:

  - A unique constraint covering the columns `[ma_cong_viec]` on the table `ThueCongViec` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ma_nguoi_thue]` on the table `ThueCongViec` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `ThueCongViec_ma_cong_viec_key` ON `ThueCongViec`(`ma_cong_viec`);

-- CreateIndex
CREATE UNIQUE INDEX `ThueCongViec_ma_nguoi_thue_key` ON `ThueCongViec`(`ma_nguoi_thue`);

-- AddForeignKey
ALTER TABLE `ThueCongViec` ADD CONSTRAINT `ThueCongViec_ma_cong_viec_fkey` FOREIGN KEY (`ma_cong_viec`) REFERENCES `CongViec`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ThueCongViec` ADD CONSTRAINT `ThueCongViec_ma_nguoi_thue_fkey` FOREIGN KEY (`ma_nguoi_thue`) REFERENCES `NguoiDung`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
