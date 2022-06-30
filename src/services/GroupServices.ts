import { PrismaClient } from "@prisma/client"

export default class GroupServices {

    async executeUserGroup(id_user: string) {

        try {
            const prisma = new PrismaClient();
            const users = prisma.user.findMany({
                where: {
                    username: id_user
                },
                include: {
                    UserGroup: {
                        select: {
                            group: true
                        }
                    }
                }
            })
            if (users instanceof Object)
                return users

            return new Error('users não foi criado')
        } catch {
            return new Error("Error in server")

        }


    }

    async executeGroupUser(id_group: string) {

        try {
            const prisma = new PrismaClient();
            const group = prisma.group.findMany({
                where: {
                    id_group
                },
                include: {
                    UserGroup: {
                        include: {
                            user: true
                        }
                    }
                }
            })
            if (group instanceof Object)
                return group

            return new Error('group não foi criado')
        } catch {
            return new Error("Error in server")

        }


    }

    async saveMusicGroup(id_music: string, id_group: string) {
        const prisma = new PrismaClient();


        try {
            const group = await prisma.group.update({
                where: {
                    id_group
                },
                data: {
                    MusicGroup: {
                        connect: {
                            id_music_id_group: {
                                id_group,
                                id_music
                            }
                        }
                    }
                }

            })
            if (group instanceof Object)
                return group

            return new Error('group não foi criado')
        } catch {
            return new Error("Error in server")

        }

    }

    async saveVideoGroup(id_video: string, id_group: string) {
        const prisma = new PrismaClient();


        try {
            const group = await prisma.group.update({
                where: {
                    id_group
                },
                data: {
                    VideoGroup: {
                        connect: {
                            id_video_id_group: {
                                id_group,
                                id_video
                            }
                        }
                    }
                }
            })
            if (group instanceof Object)
                return group

            return new Error('group não foi criado')
        } catch {
            return new Error("Error in server")

        }

    }

    async saveUserMember(username: string, id_group: string) {
        const prisma = new PrismaClient();
        try {
            const group = await prisma.group.update({
                where: {
                    id_group
                },
                data: {
                    UserGroup: {
                        create: {
                            user: {
                                connect: {
                                    username
                                }
                            }
                        }
                    }
                },
                include: {
                    UserGroup: true
                }
            })
            if (group instanceof Object)
                return group

            return new Error('group não foi criado')
        } catch {
            return new Error("Error in server")

        }

    }

    async deleteUserMember(id_group: string, username: string) {
        const prisma = new PrismaClient();
        try {
            const group = await prisma.group.update({
                where: {
                    id_group
                },
                data: {
                    UserGroup: {
                        delete: {
                            id_user_id_group: {
                                id_user: username,
                                id_group
                            }
                        }
                    }
                }
            })

            if (group instanceof Object)
                return group

            return new Error('group não foi criado')
        } catch {
            return new Error("Error in server")

        }

    }


    async saveAdmin(username: string, nameGroup: string, description: string) {
        const prisma = new PrismaClient();
        try {
            const group = await prisma.group.create({
                data: {
                    admin: {
                        connect: {
                            username
                        }
                    },
                    description,
                    nameGroup
                }
            })
            if (group instanceof Object)
                return group

            return new Error('group não foi criado')
        } catch {
            return new Error("Error in server")

        }

    }
    async delete(id_group: string) {
        const prisma = new PrismaClient();
        try {
            const group = await prisma.group.delete({
                where: {
                    id_group
                }
            })
            if (group instanceof Object)
                return group

            return new Error('group não existe')
        } catch {
            return new Error("Error in server")

        }
    }
}