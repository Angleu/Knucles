import { PrismaClient } from "@prisma/client"
export default class MusicServices {

    async executeMusicGroup(id_group: string) {
        const prisma = new PrismaClient();

        try {
            const music = await prisma.musicGroup.findMany({
                where: {
                    id_group
                },
                include: {
                    music: true
                }
            })

            if (music instanceof Object)
                return music

            return new Error('music não existe')
        } catch {
            return new Error("Error in server")
        }
    }

    async save(id_album: string, id_user: string, title: string, cover: string, actor: string, musicPath: string) {
        const prisma = new PrismaClient();
        try {
            const music = await prisma.music.create({
                data: {
                    actor,
                    cover,
                    title,
                    musicPath,
                    id_album,
                    id_user

                }
            })
            if (music instanceof Object)
                return music

            return new Error('music não foi criado')
        } catch {
            return new Error("Error in server")

        }

    }
    async delete(id_music: string) {
        const prisma = new PrismaClient();
        try {
            const music = await prisma.music.delete({
                where: {
                    id_music
                }
            })
            if (music instanceof Object)
                return music

            return new Error('music não existe')
        } catch {
            return new Error("Error in server")

        }
    }
}