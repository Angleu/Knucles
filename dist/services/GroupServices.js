"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
class GroupServices {
    executeUserGroup(id_user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const prisma = new client_1.PrismaClient();
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
                });
                if (users instanceof Object)
                    return users;
                return new Error('users não foi criado');
            }
            catch (_a) {
                return new Error("Error in server");
            }
        });
    }
    executeGroupUser(id_group) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const prisma = new client_1.PrismaClient();
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
                });
                if (group instanceof Object)
                    return group;
                return new Error('group não foi criado');
            }
            catch (_a) {
                return new Error("Error in server");
            }
        });
    }
    saveMusicGroup(id_music, id_group) {
        return __awaiter(this, void 0, void 0, function* () {
            const prisma = new client_1.PrismaClient();
            try {
                const group = yield prisma.group.update({
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
                });
                if (group instanceof Object)
                    return group;
                return new Error('group não foi criado');
            }
            catch (_a) {
                return new Error("Error in server");
            }
        });
    }
    saveVideoGroup(id_video, id_group) {
        return __awaiter(this, void 0, void 0, function* () {
            const prisma = new client_1.PrismaClient();
            try {
                const group = yield prisma.group.update({
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
                });
                if (group instanceof Object)
                    return group;
                return new Error('group não foi criado');
            }
            catch (_a) {
                return new Error("Error in server");
            }
        });
    }
    saveUserMember(username, id_group) {
        return __awaiter(this, void 0, void 0, function* () {
            const prisma = new client_1.PrismaClient();
            try {
                const group = yield prisma.group.update({
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
                });
                if (group instanceof Object)
                    return group;
                return new Error('group não foi criado');
            }
            catch (_a) {
                return new Error("Error in server");
            }
        });
    }
    deleteUserMember(id_group, username) {
        return __awaiter(this, void 0, void 0, function* () {
            const prisma = new client_1.PrismaClient();
            try {
                const group = yield prisma.group.update({
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
                });
                if (group instanceof Object)
                    return group;
                return new Error('group não foi criado');
            }
            catch (_a) {
                return new Error("Error in server");
            }
        });
    }
    saveAdmin(username, nameGroup, description) {
        return __awaiter(this, void 0, void 0, function* () {
            const prisma = new client_1.PrismaClient();
            try {
                const group = yield prisma.group.create({
                    data: {
                        admin: {
                            connect: {
                                username
                            }
                        },
                        description,
                        nameGroup
                    }
                });
                if (group instanceof Object)
                    return group;
                return new Error('group não foi criado');
            }
            catch (_a) {
                return new Error("Error in server");
            }
        });
    }
    delete(id_group) {
        return __awaiter(this, void 0, void 0, function* () {
            const prisma = new client_1.PrismaClient();
            try {
                const group = yield prisma.group.delete({
                    where: {
                        id_group
                    }
                });
                if (group instanceof Object)
                    return group;
                return new Error('group não existe');
            }
            catch (_a) {
                return new Error("Error in server");
            }
        });
    }
}
exports.default = GroupServices;
