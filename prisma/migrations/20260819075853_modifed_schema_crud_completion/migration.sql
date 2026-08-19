/*
  Warnings:

  - Added the required column `email` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'CUSTOMER');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'CUSTOMER';
