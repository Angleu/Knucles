-- CreateTable
CREATE TABLE "users" (
    "username" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("username")
);

-- CreateTable
CREATE TABLE "userGroups" (
    "id_user" TEXT NOT NULL,
    "id_group" TEXT NOT NULL,

    CONSTRAINT "userGroups_pkey" PRIMARY KEY ("id_user","id_group")
);

-- CreateTable
CREATE TABLE "groups" (
    "id_group" TEXT NOT NULL,
    "nameGroup" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "id_user" TEXT NOT NULL,

    CONSTRAINT "groups_pkey" PRIMARY KEY ("id_group")
);

-- CreateTable
CREATE TABLE "musics" (
    "id_music" TEXT NOT NULL,
    "cover" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "actor" TEXT NOT NULL,
    "musicPath" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_album" TEXT NOT NULL,
    "id_user" TEXT NOT NULL,

    CONSTRAINT "musics_pkey" PRIMARY KEY ("id_music")
);

-- CreateTable
CREATE TABLE "albums" (
    "id_album" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "albums_pkey" PRIMARY KEY ("id_album")
);

-- CreateTable
CREATE TABLE "videos" (
    "id_video" TEXT NOT NULL,
    "cover" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "actor" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "videoPath" TEXT NOT NULL,
    "id_user" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "videos_pkey" PRIMARY KEY ("id_video")
);

-- CreateTable
CREATE TABLE "critics" (
    "id_critic" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "note" DECIMAL(65,30) NOT NULL,
    "id_user" TEXT NOT NULL,
    "id_video" TEXT NOT NULL,
    "id_album" TEXT NOT NULL,

    CONSTRAINT "critics_pkey" PRIMARY KEY ("id_critic")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- AddForeignKey
ALTER TABLE "userGroups" ADD CONSTRAINT "userGroups_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("username") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userGroups" ADD CONSTRAINT "userGroups_id_group_fkey" FOREIGN KEY ("id_group") REFERENCES "groups"("id_group") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "groups" ADD CONSTRAINT "groups_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("username") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "musics" ADD CONSTRAINT "musics_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("username") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "musics" ADD CONSTRAINT "musics_id_album_fkey" FOREIGN KEY ("id_album") REFERENCES "albums"("id_album") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "videos" ADD CONSTRAINT "videos_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("username") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "critics" ADD CONSTRAINT "critics_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("username") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "critics" ADD CONSTRAINT "critics_id_album_fkey" FOREIGN KEY ("id_album") REFERENCES "albums"("id_album") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "critics" ADD CONSTRAINT "critics_id_video_fkey" FOREIGN KEY ("id_video") REFERENCES "videos"("id_video") ON DELETE RESTRICT ON UPDATE CASCADE;
