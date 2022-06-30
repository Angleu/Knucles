import { Request, Response } from "express";
import VideoServices from "../services/VideoServices";


export default class VideoServicesControllers {
    async handleExecuteVideoGroup(request: Request, response: Response) {
        const { id_group } = request.params
        const service = new VideoServices();

        const result = await service.executeVideoGroup(id_group)

        if (result instanceof Error)
            return response.status(302).json(result.message)

        return response.json(result)
    }

    async handleEdit(request: Request, response: Response) {
        const { title, description } = request.body
        const { id_video } = request.params
        const service = new VideoServices();

        const result = await service.edit(title, description, id_video)

        if (result instanceof Error)
            return response.status(302).json(result.message)

        return response.json(result)
    }

    async handleSave(request: Request, response: Response) {
        const { title, description, cover, actor, videoPath } = request.body
        const { id_user } = request.params
        const service = new VideoServices();

        const result = await service.save(id_user, title, description, cover, actor, videoPath);

        if (result instanceof Error)
            return response.status(302).json(result.message)

        return response.json(result)
    }
    async handleDelete(request: Request, response: Response) {
        const { id_video } = request.params
        const service = new VideoServices();

        const result = await service.delete(id_video);

        if (result instanceof Error)
            return response.status(302).json(result.message)

        return response.json(result)
    }
}