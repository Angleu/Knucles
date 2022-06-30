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
const AlbumServices_1 = __importDefault(require("../services/AlbumServices"));
class AlbumServicesControllers {
    handleExecute(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const service = new AlbumServices_1.default();
            const result = yield service.executeAlbum();
            if (result instanceof Error)
                return response.status(302).json(result.message);
            return response.json(result);
        });
    }
    handleEdit(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, description } = request.body;
            const { id_album } = request.params;
            const service = new AlbumServices_1.default();
            const result = yield service.edit(name, description, id_album);
            if (result instanceof Error)
                return response.status(302).json(result.message);
            return response.json(result);
        });
    }
    handleSave(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, description } = request.body;
            const service = new AlbumServices_1.default();
            const result = yield service.save(name, description);
            if (result instanceof Error)
                return response.status(302).json(result.message);
            return response.json(result);
        });
    }
    handleDelete(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_album } = request.params;
            const service = new AlbumServices_1.default();
            const result = yield service.delete(id_album);
            if (result instanceof Error)
                return response.status(302).json(result.message);
            return response.json(result);
        });
    }
}
exports.default = AlbumServicesControllers;
