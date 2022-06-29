import { PrismaClient } from "@prisma/client"
export default class {
    async executeOne(username: string, password: string) {
        const prisma = new PrismaClient();

        try {
            const user = await prisma.user.findUnique({
                where: {
                    username
                }
            })

            if (user instanceof Object) {
                if (user.password === password)
                    return user

                return new Error('Dados de autenticação errados')

            }

            return new Error('User não existe')
        } catch {
            return new Error("Error in server")
        }
    }

    async save(username: string, type = "normal", password: string) {
        const prisma = new PrismaClient();
        try {
            const user = await prisma.user.create({
                data: {
                    username,
                    type,
                    password
                }
            })
            if (user instanceof Object)
                return user

            return new Error('User não foi criado')
        } catch {
            return new Error("Error in server")

        }

    }
    async delete(username: string) {
        const prisma = new PrismaClient();
        try {
            const user = await prisma.user.delete({
                where: {
                    username
                }
            })
            if (user instanceof Object)
                return user

            return new Error('User não existe')
        } catch {
            return new Error("Error in server")

        }
    }
}