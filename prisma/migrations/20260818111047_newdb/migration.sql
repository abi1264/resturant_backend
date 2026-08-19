/*
  Warnings:

  - You are about to drop the column `email` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `user_name` on the `User` table. All the data in the column will be lost.
  - Added the required column `username` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "User_email_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "email",
DROP COLUMN "user_name",
ADD COLUMN     "username" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Health" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "health info" TEXT,

    CONSTRAINT "Health_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Health_name_key" ON "Health"("name");
