-- CreateTable
CREATE TABLE "musicGroup" (
    "id_music" TEXT NOT NULL,
    "id_group" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "musicGroup_pkey" PRIMARY KEY ("id_music","id_group")
);

-- CreateTable
CREATE TABLE "videoGroup" (
    "id_video" TEXT NOT NULL,
    "id_group" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "videoGroup_pkey" PRIMARY KEY ("id_video","id_group")
);

-- AddForeignKey
ALTER TABLE "musicGroup" ADD CONSTRAINT "musicGroup_id_group_fkey" FOREIGN KEY ("id_group") REFERENCES "groups"("id_group") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "musicGroup" ADD CONSTRAINT "musicGroup_id_music_fkey" FOREIGN KEY ("id_music") REFERENCES "musics"("id_music") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "videoGroup" ADD CONSTRAINT "videoGroup_id_group_fkey" FOREIGN KEY ("id_group") REFERENCES "groups"("id_group") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "videoGroup" ADD CONSTRAINT "videoGroup_id_video_fkey" FOREIGN KEY ("id_video") REFERENCES "videos"("id_video") ON DELETE RESTRICT ON UPDATE CASCADE;
