-- CreateEnum
CREATE TYPE "Role" AS ENUM ('CUSTOMER', 'ADMIN', 'TALENT');

-- CreateTable
CREATE TABLE "Auth" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "fullname" TEXT,
    "email" TEXT NOT NULL,
    "avatar" TEXT,
    "bio" TEXT,
    "status" TEXT,
    "role" "Role" NOT NULL DEFAULT 'CUSTOMER',

    CONSTRAINT "Auth_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Auth_id_key" ON "Auth"("id");
