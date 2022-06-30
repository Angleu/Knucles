"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const FileServiceControllers_1 = __importDefault(require("../controllers/FileServiceControllers"));
const GroupServiceControllers_1 = __importDefault(require("../controllers/GroupServiceControllers"));
const StreamControllers_1 = __importDefault(require("../controllers/StreamControllers"));
const UserServiceControllers_1 = __importDefault(require("../controllers/UserServiceControllers"));
const AlbumServicesControllers_1 = __importDefault(require("../controllers/AlbumServicesControllers"));
const MusicServicesControllers_1 = __importDefault(require("../controllers/MusicServicesControllers"));
const VideoServicesControllers_1 = __importDefault(require("../controllers/VideoServicesControllers"));
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
routes.get("/api/user", new UserServiceControllers_1.default().handleExecuteOneAll);
routes.post("/api/files", upload.single('file'), new FileServiceControllers_1.default().handleSaveOne);
routes.post("/api/login/user", new UserServiceControllers_1.default().handleExecuteOne);
routes.post("/api/user", new UserServiceControllers_1.default().handleSave);
routes.delete("/api/user/:username", new UserServiceControllers_1.default().handleDelete);
// group
routes.get("/api/group/user/:id_group", new GroupServiceControllers_1.default().handleExecuteGroupUser);
routes.get("/api/user/group/:username", new GroupServiceControllers_1.default().handleExecuteUserGroup);
routes.delete("/api/user/group/:id_group", new GroupServiceControllers_1.default().handleDeleteUserMember);
routes.post("/api/group/user/:id_group", new GroupServiceControllers_1.default().handleSaveUserMember);
routes.post("/api/group/", new GroupServiceControllers_1.default().handleSaveAdmin);
// Album
routes.delete("/api/album/:id_album", new AlbumServicesControllers_1.default().handleDelete);
routes.post("/api/album", new AlbumServicesControllers_1.default().handleSave);
routes.post("/api/album:id_album", new AlbumServicesControllers_1.default().handleEdit);
routes.get("/api/album", new AlbumServicesControllers_1.default().handleExecute);
// Music
routes.delete("/api/music/:id_music", new MusicServicesControllers_1.default().handleDelete);
routes.post("/api/music/:id_user", new MusicServicesControllers_1.default().handleSave);
routes.get("/api/music/:id_group", new MusicServicesControllers_1.default().handleExecuteMusicGroup);
routes.get("/api/music", new MusicServicesControllers_1.default().handleExecuteAll);
routes.get("/api/music/user/:id_user", new MusicServicesControllers_1.default().handleExecuteMusicGroup);
// Video
routes.delete("/api/video/:id_video", new VideoServicesControllers_1.default().handleDelete);
routes.post("/api/video/:id_user", new VideoServicesControllers_1.default().handleSave);
routes.put("/api/video/:id_video", new VideoServicesControllers_1.default().handleEdit);
routes.get("/api/video/:id_group", new VideoServicesControllers_1.default().handleExecuteVideoGroup);
routes.get("/api/video/", new VideoServicesControllers_1.default().handleExecuteAll);
routes.get("/api/video/user/:id_user", new VideoServicesControllers_1.default().handleExecuteByUser);
// Stream
routes.get("/api/stream", new StreamControllers_1.default().indexVideo);
exports.default = routes;
