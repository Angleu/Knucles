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
    executeOne(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const prisma = new client_1.PrismaClient();
            try {
                const user = yield prisma.user.findUnique({
                    where: {
                        username
                    }
                });
                if (user instanceof Object) {
                    if (user.password === password)
                        return user;
                    return new Error('Dados de autenticação errados');
                }
                return new Error('User não existe');
            }
            catch (_a) {
                return new Error("Error in server");
            }
        });
    }
    save(username, type = "normal", password) {
        return __awaiter(this, void 0, void 0, function* () {
            const prisma = new client_1.PrismaClient();
            try {
                const user = yield prisma.user.create({
                    data: {
                        username,
                        type,
                        password
                    }
                });
                if (user instanceof Object)
                    return user;
                return new Error('User não foi criado');
            }
            catch (_a) {
                return new Error("Error in server");
            }
        });
    }
    delete(username) {
        return __awaiter(this, void 0, void 0, function* () {
            const prisma = new client_1.PrismaClient();
            try {
                const user = yield prisma.user.delete({
                    where: {
                        username
                    }
                });
                if (user instanceof Object)
                    return user;
                return new Error('User não existe');
            }
            catch (_a) {
                return new Error("Error in server");
            }
        });
    }
}
exports.default = default_1;
