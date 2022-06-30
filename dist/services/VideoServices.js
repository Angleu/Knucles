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
class VideoServices {
    executeVideoGroup(id_group) {
        return __awaiter(this, void 0, void 0, function* () {
            const prisma = new client_1.PrismaClient();
            try {
                const video = yield prisma.videoGroup.findMany({
                    where: {
                        id_group
                    }
                });
                if (video instanceof Object)
                    return video;
                return new Error('video não existe');
            }
            catch (_a) {
                return new Error("Error in server");
            }
        });
    }
    edit(title, description, id_video) {
        return __awaiter(this, void 0, void 0, function* () {
            const prisma = new client_1.PrismaClient();
            try {
                const video = yield prisma.video.update({
                    where: {
                        id_video
                    },
                    data: {
                        title,
                        description
                    }
                });
                if (video instanceof Object)
                    return video;
                return new Error('video não existe');
            }
            catch (_a) {
                return new Error("Error in server");
            }
        });
    }
    save(id_user, title, description = "normal", cover, actor, videoPath) {
        return __awaiter(this, void 0, void 0, function* () {
            const prisma = new client_1.PrismaClient();
            try {
                const video = yield prisma.video.create({
                    data: {
                        actor,
                        cover,
                        description,
                        title,
                        videoPath,
                        id_user
                    }
                });
                if (video instanceof Object)
                    return video;
                return new Error('video não foi criado');
            }
            catch (_a) {
                return new Error("Error in server");
            }
        });
    }
    delete(id_video) {
        return __awaiter(this, void 0, void 0, function* () {
            const prisma = new client_1.PrismaClient();
            try {
                const video = yield prisma.video.delete({
                    where: {
                        id_video
                    }
                });
                if (video instanceof Object)
                    return video;
                return new Error('User não existe');
            }
            catch (_a) {
                return new Error("Error in server");
            }
        });
    }
}
exports.default = VideoServices;
