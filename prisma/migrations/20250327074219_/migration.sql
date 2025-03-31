/*
  Warnings:

  - Added the required column `age` to the `NguoiDung` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `nguoidung` ADD COLUMN `age` INTEGER NOT NULL;
