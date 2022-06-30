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
const VideoServices_1 = __importDefault(require("../services/VideoServices"));
class VideoServicesControllers {
    handleExecuteByUser(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_user } = request.params;
            const service = new VideoServices_1.default();
            const result = yield service.executeByUser(id_user);
            if (result instanceof Error)
                return response.status(302).json(result.message);
            return response.json(result);
        });
    }
    handleExecuteAll(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const service = new VideoServices_1.default();
            const result = yield service.executeAll();
            if (result instanceof Error)
                return response.status(302).json(result.message);
            return response.json(result);
        });
    }
    handleExecuteVideoGroup(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_group } = request.params;
            const service = new VideoServices_1.default();
            const result = yield service.executeVideoGroup(id_group);
            if (result instanceof Error)
                return response.status(302).json(result.message);
            return response.json(result);
        });
    }
    handleEdit(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, description } = request.body;
            const { id_video } = request.params;
            const service = new VideoServices_1.default();
            const result = yield service.edit(title, description, id_video);
            if (result instanceof Error)
                return response.status(302).json(result.message);
            return response.json(result);
        });
    }
    handleSave(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, description, cover, actor, videoPath } = request.body;
            const { id_user } = request.params;
            const service = new VideoServices_1.default();
            const result = yield service.save(id_user, title, description, cover, actor, videoPath);
            if (result instanceof Error)
                return response.status(302).json(result.message);
            return response.json(result);
        });
    }
    handleDelete(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_video } = request.params;
            const service = new VideoServices_1.default();
            const result = yield service.delete(id_video);
            if (result instanceof Error)
                return response.status(302).json(result.message);
            return response.json(result);
        });
    }
}
exports.default = VideoServicesControllers;
