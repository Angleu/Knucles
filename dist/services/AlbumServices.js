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
class default_1 {
    executeAlbum() {
        return __awaiter(this, void 0, void 0, function* () {
            const prisma = new client_1.PrismaClient();
            try {
                const albums = yield prisma.album.findMany({
                    include: {
                        Music: true,
                        Critic: true
                    }
                });
                if (albums instanceof Object)
                    return albums;
                return new Error('albums não existe');
            }
            catch (_a) {
                return new Error("Error in server");
            }
        });
    }
    edit(name, description, id_album) {
        return __awaiter(this, void 0, void 0, function* () {
            const prisma = new client_1.PrismaClient();
            try {
                const album = yield prisma.album.update({
                    where: {
                        id_album
                    },
                    data: {
                        name,
                        description
                    }
                });
                if (album instanceof Object)
                    return album;
                return new Error('album não existe');
            }
            catch (_a) {
                return new Error("Error in server");
            }
        });
    }
    save(name, description) {
        return __awaiter(this, void 0, void 0, function* () {
            const prisma = new client_1.PrismaClient();
            try {
                const album = yield prisma.album.create({
                    data: {
                        name,
                        description
                    }
                });
                if (album instanceof Object)
                    return album;
                return new Error('album não existe');
            }
            catch (_a) {
                return new Error("Error in server");
            }
        });
    }
    delete(id_album) {
        return __awaiter(this, void 0, void 0, function* () {
            const prisma = new client_1.PrismaClient();
            try {
                const album = yield prisma.album.delete({
                    where: {
                        id_album
                    }
                });
                if (album instanceof Object)
                    return album;
                return new Error('album não existe');
            }
            catch (_a) {
                return new Error("Error in server");
            }
        });
    }
}
exports.default = default_1;
