-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('USER', 'ADMIN', 'MEMBRE', 'MEMBRE_HONNEUR', 'PRESIDENT', 'CO_PRESIDENT', 'VICE_PRESIDENT', 'TRESORIER', 'VICE_TRESORIER', 'SECRETAIRE', 'VICE_SECRETAIRE');

-- CreateEnum
CREATE TYPE "EventType" AS ENUM ('ASSEMBLEE_GENERALE', 'REUNION', 'VIDE_GRENIER', 'LOTO', 'VENTE', 'AUTRE');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "role" "UserRole"[] DEFAULT ARRAY['USER']::"UserRole"[],
    "entityId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Entity" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" VARCHAR(10),
    "address" TEXT,
    "zipCode" DOUBLE PRECISION NOT NULL,
    "city" TEXT NOT NULL,
    "rna" TEXT NOT NULL,
    "siren" TEXT,

    CONSTRAINT "Entity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" TEXT NOT NULL,
    "eventType" "EventType" NOT NULL,
    "eventStartDate" TIMESTAMP(3) NOT NULL,
    "eventEndDate" TIMESTAMP(3) NOT NULL,
    "eventStartHour" TEXT NOT NULL,
    "eventEndHour" TEXT NOT NULL,
    "eventLocation" TEXT,
    "eventZipCode" DOUBLE PRECISION,
    "entityId" TEXT,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Entity_email_key" ON "Entity"("email");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_entityId_fkey" FOREIGN KEY ("entityId") REFERENCES "Entity"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_entityId_fkey" FOREIGN KEY ("entityId") REFERENCES "Entity"("id") ON DELETE SET NULL ON UPDATE CASCADE;
