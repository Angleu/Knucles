"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const FileServiceControllers_1 = __importDefault(require("../controllers/FileServiceControllers"));
const StreamControllers_1 = __importDefault(require("../controllers/StreamControllers"));
const UserServiceControllers_1 = __importDefault(require("../controllers/UserServiceControllers"));
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'archives');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now();
        cb(null, file.originalname.split('.')[0] + '-' + uniqueSuffix + `.${file.originalname.split('.')[1]}`);
    }
});
const upload = (0, multer_1.default)({
    storage: storage,
});
const routes = (0, express_1.Router)();
routes.get("/api/stream/video", new StreamControllers_1.default().indexVideo);
routes.post("/api/files", upload.single('file'), new FileServiceControllers_1.default().handleSaveOne);
routes.post("/api/login/user", new UserServiceControllers_1.default().handleExecuteOne);
routes.post("/api/user", new UserServiceControllers_1.default().handleSave);
routes.delete("/api/user/:username", new UserServiceControllers_1.default().handleDelete);
exports.default = routes;
