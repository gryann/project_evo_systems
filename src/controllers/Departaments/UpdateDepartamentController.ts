import { Response, Request } from "express";
import { UpdateDepartamentService } from "../../services/Departaments/UpdateDepartamentService";


export class UpdateDepartamentController {
    async handle(request: Request, response: Response) {
        const service = new UpdateDepartamentService();
        const { name, initials } = request.body;
        const { id } = request.params
        const result = await service.execute({ id, name, initials });

        return response.status(204).json(result);
    }
}