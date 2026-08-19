/*
  Warnings:

  - Added the required column `passwordHash` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "isVerified" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "passwordHash" TEXT NOT NULL,
ADD COLUMN     "passwordResetExpiry" TIMESTAMP(3),
ADD COLUMN     "passwordResetToken" TEXT,
ADD COLUMN     "phoneNo" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "verificationToken" TEXT,
ADD COLUMN     "verificationTokenExpiry" TIMESTAMP(3);
