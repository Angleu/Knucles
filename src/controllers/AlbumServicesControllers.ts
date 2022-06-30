import { Request, Response } from "express";
import AlbumServices from '../services/AlbumServices'



export default class AlbumServicesControllers {
    async handleExecute(request: Request, response: Response) {
        const service = new AlbumServices()

        const result = await service.executeAlbum()

        if (result instanceof Error)
            return response.status(302).json(result.message)

        return response.json(result)


    }
    async handleEdit(request: Request, response: Response) {
        const { name, description } = request.body
        const { id_album } = request.params
        const service = new AlbumServices();

        const result = await service.edit(name, description, id_album);

        if (result instanceof Error)
            return response.status(302).json(result.message)

        return response.json(result)
    }

    async handleSave(request: Request, response: Response) {
        const { name, description } = request.body
        const service = new AlbumServices();

        const result = await service.save(name, description);

        if (result instanceof Error)
            return response.status(302).json(result.message)

        return response.json(result)
    }
    async handleDelete(request: Request, response: Response) {
        const { id_album } = request.params
        const service = new AlbumServices();

        const result = await service.delete(id_album);

        if (result instanceof Error)
            return response.status(302).json(result.message)

        return response.json(result)
    }
}