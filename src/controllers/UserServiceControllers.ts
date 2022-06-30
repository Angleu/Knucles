import { Request, Response } from "express";
import UserServices from "../services/UserServices";

export default class UserServiceControllers {
    async handleExecuteOneAll(request: Request, response: Response) {
        const { username } = request.params
        const service = new UserServices();

        const result = await service.executeOneAll(username);

        if (result instanceof Error)
            return response.status(302).json(result.message)

        return response.json(result)
    }

    async handleExecuteOne(request: Request, response: Response) {
        const { username, password } = request.body
        const service = new UserServices();

        const result = await service.executeOne(username, password);

        if (result instanceof Error)
            return response.status(302).json(result.message)

        return response.json(result)
    }

    async handleSave(request: Request, response: Response) {
        const { username, type, password } = request.body
        const service = new UserServices();

        const result = await service.save(username, type, password);

        if (result instanceof Error)
            return response.status(302).json(result.message)

        return response.json(result)
    }
    async handleDelete(request: Request, response: Response) {
        const { username } = request.params
        const service = new UserServices();

        const result = await service.delete(username);

        if (result instanceof Error)
            return response.status(302).json(result.message)

        return response.json(result)
    }
}