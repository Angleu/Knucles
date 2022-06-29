import { Router } from "express";
import jszip from 'jszip'
import multer from 'multer';

import FileServiceControllers from "../controllers/FileServiceControllers";
import StreamControllers from "../controllers/StreamControllers";
import UserServiceControllers from "../controllers/UserServiceControllers";

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

export default routes;