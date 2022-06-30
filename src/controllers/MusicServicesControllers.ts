import { Request, Response } from "express";
import MusicServices from "../services/MusicServices";



export default class MusicServicesControllers {

    async handleExecuteAll(request: Request, response: Response) {
        const { id_user } = request.params
        const service = new MusicServices();

        const result = await service.executeAll()

        if (result instanceof Error)
            return response.status(302).json(result.message)

        return response.json(result)
    }

    async handleExecuteByUser(request: Request, response: Response) {
        const { id_user } = request.params
        const service = new MusicServices();

        const result = await service.executeByUser(id_user)

        if (result instanceof Error)
            return response.status(302).json(result.message)

        return response.json(result)
    }

    async handleExecuteMusicGroup(request: Request, response: Response) {
        const { id_group } = request.params
        const service = new MusicServices();

        const result = await service.executeMusicGroup(id_group)

        if (result instanceof Error)
            return response.status(302).json(result.message)

        return response.json(result)
    }

    async handleSave(request: Request, response: Response) {
        const { id_album, title, description, cover, actor, musicPath } = request.body
        const { id_user } = request.params
        const service = new MusicServices();

        const result = await service.save(id_user, id_album, title, cover, actor, musicPath);

        if (result instanceof Error)
            return response.status(302).json(result.message)

        return response.json(result)
    }
    async handleDelete(request: Request, response: Response) {
        const { id_music } = request.params
        const service = new MusicServices();

        const result = await service.delete(id_music);

        if (result instanceof Error)
            return response.status(302).json(result.message)

        return response.json(result)
    }
}