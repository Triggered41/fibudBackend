-- CreateTable
CREATE TABLE "Client" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ClientToExpert" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_ClientToExpert_A_fkey" FOREIGN KEY ("A") REFERENCES "Client" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ClientToExpert_B_fkey" FOREIGN KEY ("B") REFERENCES "Expert" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_ClientToExpert_AB_unique" ON "_ClientToExpert"("A", "B");

-- CreateIndex
CREATE INDEX "_ClientToExpert_B_index" ON "_ClientToExpert"("B");
