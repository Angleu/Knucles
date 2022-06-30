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
const GroupServices_1 = __importDefault(require("../services/GroupServices"));
class GroupServiceControllers {
    handleSaveUserMember(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username } = request.body;
            const { id_group } = request.params;
            const service = new GroupServices_1.default();
            const result = yield service.saveUserMember(username, id_group);
            if (result instanceof Error)
                return response.status(302).json(result.message);
            return response.json(result);
        });
    }
    handleDeleteUserMember(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username } = request.body;
            const { id_group } = request.params;
            const service = new GroupServices_1.default();
            const result = yield service.deleteUserMember(id_group, username);
            if (result instanceof Error)
                return response.status(302).json(result.message);
            return response.json(result);
        });
    }
    handleSaveAdmin(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username, nameGroup, description } = request.params;
            const service = new GroupServices_1.default();
            const result = yield service.saveAdmin(username, nameGroup, description);
            if (result instanceof Error)
                return response.status(302).json(result.message);
            return response.json(result);
        });
    }
}
exports.default = GroupServiceControllers;
