import { Request, Response } from 'express';
import zipper from 'multer-zip';
import FileServices from '../services/FileServices';

export default class FileServiceControllers {
    async handleSaveOne(request: Request, response: Response) {
        const file = request.file
        const { typeFile } = request.body
        const service = new FileServices()


        try {
            const result = await service.saveOne(typeFile, file?.filename as string, `.${file?.originalname.split('.')[1]}`);
            if (result instanceof Object) {
                return response.status(200).json(result);
            }

            return response.status(302).json(result);

        } catch {
            return response.status(500).send("Error in server");
        }



    }
}