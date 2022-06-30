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
class MusicServices {
    executeMusicGroup(id_group) {
        return __awaiter(this, void 0, void 0, function* () {
            const prisma = new client_1.PrismaClient();
            try {
                const music = yield prisma.musicGroup.findMany({
                    where: {
                        id_group
                    },
                    include: {
                        music: true
                    }
                });
                if (music instanceof Object)
                    return music;
                return new Error('music não existe');
            }
            catch (_a) {
                return new Error("Error in server");
            }
        });
    }
    save(id_album, id_user, title, cover, actor, musicPath) {
        return __awaiter(this, void 0, void 0, function* () {
            const prisma = new client_1.PrismaClient();
            try {
                const music = yield prisma.music.create({
                    data: {
                        actor,
                        cover,
                        title,
                        musicPath,
                        id_album,
                        id_user
                    }
                });
                if (music instanceof Object)
                    return music;
                return new Error('music não foi criado');
            }
            catch (_a) {
                return new Error("Error in server");
            }
        });
    }
    delete(id_music) {
        return __awaiter(this, void 0, void 0, function* () {
            const prisma = new client_1.PrismaClient();
            try {
                const music = yield prisma.music.delete({
                    where: {
                        id_music
                    }
                });
                if (music instanceof Object)
                    return music;
                return new Error('music não existe');
            }
            catch (_a) {
                return new Error("Error in server");
            }
        });
    }
}
exports.default = MusicServices;
