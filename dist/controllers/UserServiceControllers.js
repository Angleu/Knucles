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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserServices_1 = __importDefault(require("../services/UserServices"));
class UserServiceControllers {
    handleExecuteOne(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username, password } = request.body;
            const service = new UserServices_1.default();
            const result = yield service.executeOne(username, password);
            if (result instanceof Error)
                return response.status(302).json(result.message);
            return response.json(result);
        });
    }
    handleSave(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username, type, password } = request.body;
            const service = new UserServices_1.default();
            const result = yield service.save(username, type, password);
            if (result instanceof Error)
                return response.status(302).json(result.message);
            return response.json(result);
        });
    }
    handleDelete(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username } = request.params;
            const service = new UserServices_1.default();
            const result = yield service.delete(username);
            if (result instanceof Error)
                return response.status(302).json(result.message);
            return response.json(result);
        });
    }
}
exports.default = UserServiceControllers;
