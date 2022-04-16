import { Response, Request } from "express";
import { UpdateFunctionaryService } from "../../services/Functionaries/UpdateFunctionaryService";


export class UpdateFunctionaryController {
    async handle(request: Request, response: Response) {
        const service = new UpdateFunctionaryService();
        const { name, image, RG, id_departament } = request.body;
        const { id } = request.params
        const result = await service.execute({ id, name, image, RG, id_departament });

        return response.status(204).json(result);
    }
}