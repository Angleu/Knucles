import { Request, Response } from "express";
import GroupServices from "../services/GroupServices";

export default class GroupServiceControllers {
    async handleSaveUserMember(request: Request, response: Response) {
        const { username } = request.body
        const { id_group } = request.params

        const service = new GroupServices();

        const result = await service.saveUserMember(username, id_group);

        if (result instanceof Error)
            return response.status(302).json(result.message)

        return response.json(result)
    }

    async handleDeleteUserMember(request: Request, response: Response) {
        const { username } = request.body
        const { id_group } = request.params
        const service = new GroupServices();

        const result = await service.deleteUserMember(id_group, username);

        if (result instanceof Error)
            return response.status(302).json(result.message)

        return response.json(result)
    }
    async handleSaveAdmin(request: Request, response: Response) {
        const {nameGroup, description, username} = request.body
        const service = new GroupServices();

        const result = await service.saveAdmin(username, nameGroup, description);

        if (result instanceof Error)
            return response.status(302).json(result.message)

        return response.json(result)
    }
}