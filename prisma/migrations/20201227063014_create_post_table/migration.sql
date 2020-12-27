-- CreateTable
CREATE TABLE "Post" (
"id" SERIAL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "publishedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Post.slug_unique" ON "Post"("slug");

-- CreateIndex
CREATE INDEX "Post.slug_index" ON "Post"("slug");
