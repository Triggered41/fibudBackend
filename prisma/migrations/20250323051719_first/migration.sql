-- CreateTable
CREATE TABLE "Expert" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "specialization" TEXT NOT NULL,
    "availability" TEXT NOT NULL,
    "rating" REAL NOT NULL
);
