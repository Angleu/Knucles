import { Router } from "express";
import jszip from 'jszip'
import multer from 'multer';

import FileServiceControllers from "../controllers/FileServiceControllers";
import GroupServiceControllers from "../controllers/GroupServiceControllers";
import StreamControllers from "../controllers/StreamControllers";
import UserServiceControllers from "../controllers/UserServiceControllers";
import AlbumServicesControllers from "../controllers/AlbumServicesControllers";
import MusicServicesControllers from "../controllers/MusicServicesControllers";
import VideoServicesControllers from "../controllers/VideoServicesControllers";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'archives')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now()
        cb(null, file.originalname.split('.')[0] + '-' + uniqueSuffix + `.${file.originalname.split('.')[1]}`)
    }

})

const upload = multer({
    storage: storage,
})



const routes = Router();

routes.get("/api/stream/video", new StreamControllers().indexVideo);
routes.post("/api/files", upload.single('file'), new FileServiceControllers().handleSaveOne);
routes.post("/api/login/user", new UserServiceControllers().handleExecuteOne);
routes.post("/api/user", new UserServiceControllers().handleSave);
routes.delete("/api/user/:username", new UserServiceControllers().handleDelete);

// group
routes.get("/api/group/user/:id_group", new GroupServiceControllers().handleExecuteGroupUser);
routes.get("/api/user/group/:username", new GroupServiceControllers().handleExecuteUserGroup);
routes.delete("/api/user/group/:id_group", new GroupServiceControllers().handleDeleteUserMember);
routes.post("/api/group/user/:id_group", new GroupServiceControllers().handleSaveUserMember);
routes.post("/api/group/", new GroupServiceControllers().handleSaveAdmin);

// Album
routes.delete("/api/album/:id_album", new AlbumServicesControllers().handleDelete);
routes.post("/api/album", new AlbumServicesControllers().handleSave);
routes.post("/api/album:id_album", new AlbumServicesControllers().handleEdit);
routes.get("/api/album", new AlbumServicesControllers().handleExecute);

// Music
routes.delete("/api/music/:id_music", new MusicServicesControllers().handleDelete);
routes.post("/api/music/:id_user", new MusicServicesControllers().handleSave);
routes.get("/api/music/:id_group", new MusicServicesControllers().handleExecuteMusicGroup);

// Video
routes.delete("/api/video/:id_video", new VideoServicesControllers().handleDelete);
routes.post("/api/video/:id_user", new VideoServicesControllers().handleSave);
routes.put("/api/video/:id_video", new VideoServicesControllers().handleEdit);
routes.get("/api/video/:id_group", new VideoServicesControllers().handleExecuteVideoGroup);


export default routes;