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
const FileServices_1 = __importDefault(require("../services/FileServices"));
class FileServiceControllers {
    handleSaveOne(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const file = request.file;
            const { typeFile } = request.body;
            const service = new FileServices_1.default();
            try {
                const result = yield service.saveOne(typeFile, file === null || file === void 0 ? void 0 : file.filename, `.${file === null || file === void 0 ? void 0 : file.originalname.split('.')[1]}`);
                if (result instanceof Object) {
                    return response.status(200).json(result);
                }
                return response.status(302).json(result);
            }
            catch (_a) {
                return response.status(500).send("Error in server");
            }
        });
    }
    download(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
exports.default = FileServiceControllers;
