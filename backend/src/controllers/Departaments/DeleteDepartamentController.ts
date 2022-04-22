import { Response, Request } from "express";
import { DeleteDepartamentService } from "../../services/Departaments/DeleteDepartamentService";


export class DeleteDepartamentController {
    async handle(request: Request, response: Response) {
        try {
            const service = new DeleteDepartamentService();
            const { id } = request.params
            const result = await service.execute({ id });

            return response.status(204).json(result);
        } catch (error) {
            return response.status(500);
        }
    }
}