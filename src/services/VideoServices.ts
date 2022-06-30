import { PrismaClient } from "@prisma/client"
export default class VideoServices {

    async executeByUser(id_user: string) {
        const prisma = new PrismaClient();

        try {
            const video = await prisma.video.findMany({
                where: {
                    id_user
                }
            })

            if (video instanceof Object)
                return video

            return new Error('video não existe')
        } catch {
            return new Error("Error in server")
        }
    }

    async executeAll() {
        const prisma = new PrismaClient();

        try {
            const video = await prisma.video.findMany()

            if (video instanceof Object)
                return video

            return new Error('video não existe')
        } catch {
            return new Error("Error in server")
        }
    }

    async executeVideoGroup(id_group: string) {
        const prisma = new PrismaClient();

        try {
            const video = await prisma.videoGroup.findMany({
                where: {
                    id_group
                }
            })

            if (video instanceof Object)
                return video

            return new Error('video não existe')
        } catch {
            return new Error("Error in server")
        }
    }
    async edit(title: string, description: string, id_video: string) {
        const prisma = new PrismaClient();

        try {
            const video = await prisma.video.update({
                where: {
                    id_video
                },
                data: {
                    title,
                    description
                }
            })

            if (video instanceof Object)
                return video


            return new Error('video não existe')
        } catch {
            return new Error("Error in server")
        }
    }

    async save(id_user: string, title: string, description = "normal", cover: string, actor: string, videoPath: string) {
        const prisma = new PrismaClient();
        try {
            const video = await prisma.video.create({
                data: {
                    actor,
                    cover,
                    description,
                    title,
                    videoPath,
                    id_user
                }
            })
            if (video instanceof Object)
                return video

            return new Error('video não foi criado')
        } catch {
            return new Error("Error in server")

        }

    }
    async delete(id_video: string) {
        const prisma = new PrismaClient();
        try {
            const video = await prisma.video.delete({
                where: {
                    id_video
                }
            })
            if (video instanceof Object)
                return video

            return new Error('User não existe')
        } catch {
            return new Error("Error in server")

        }
    }
}