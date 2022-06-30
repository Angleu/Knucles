import { PrismaClient } from "@prisma/client"


export default class {

    async executeAlbum() {
        const prisma = new PrismaClient();

        try {
            const albums = await prisma.album.findMany({
                include: {
                    Music: true,
                    Critic: true
                }
            });

            if (albums instanceof Object)
                return albums

            return new Error('albums não existe')
        } catch {
            return new Error("Error in server")
        }
    }
    async edit(name: string, description: string, id_album: string) {
        const prisma = new PrismaClient();

        try {
            const album = await prisma.album.update({
                where: {
                    id_album
                },
                data: {
                    name,
                    description
                }
            })

            if (album instanceof Object)
                return album


            return new Error('album não existe')
        } catch {
            return new Error("Error in server")
        }
    }

    async save(name: string, description: string) {
        const prisma = new PrismaClient();

        try {
            const album = await prisma.album.create({
                data: {
                    name,
                    description
                }
            })

            if (album instanceof Object)
                return album


            return new Error('album não existe')
        } catch {
            return new Error("Error in server")
        }
    }
    async delete(id_album: string) {
        const prisma = new PrismaClient();
        try {
            const album = await prisma.album.delete({
                where: {
                    id_album
                }
            })
            if (album instanceof Object)
                return album

            return new Error('album não existe')
        } catch {
            return new Error("Error in server")

        }
    }
}