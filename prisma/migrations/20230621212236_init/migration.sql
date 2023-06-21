/*
  Warnings:

  - You are about to drop the `Todo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `updatedAt` on the `Sales` table. All the data in the column will be lost.
  - Added the required column `notes` to the `Sales` table without a default value. This is not possible if the table is not empty.
  - Added the required column `platform` to the `Sales` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Sales` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Todo";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Sales" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "product" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "price" REAL NOT NULL,
    "platform" TEXT NOT NULL,
    "notes" TEXT NOT NULL
);
INSERT INTO "new_Sales" ("createdAt", "id", "product", "quantity") SELECT "createdAt", "id", "product", "quantity" FROM "Sales";
DROP TABLE "Sales";
ALTER TABLE "new_Sales" RENAME TO "Sales";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
