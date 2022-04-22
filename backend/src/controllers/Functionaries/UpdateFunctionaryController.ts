import { Response, Request } from "express";
import { UpdateFunctionaryService } from "../../services/Functionaries/UpdateFunctionaryService";


export class UpdateFunctionaryController {
    async handle(request: Request, response: Response) {
        try {
            const service = new UpdateFunctionaryService();
            const { name, image, RG, id_departament } = request.body;
            const { id } = request.params
            
            const result = await service.execute({ id, name, image, RG, id_departament });
            console.log(result)
            if (result instanceof Error) {
                return response.status(404).json(result.message);
            }

            return response.status(204).json(result);
        } catch (error) {
            return response.status(500);
        }
    }
}