import { Response, Request } from "express";
import { DeleteFunctionaryService } from "../../services/Functionaries/DeleteFunctionaryService";


export class DeleteFunctionaryController {
    async handle(request: Request, response: Response) {
        try {
            const service = new DeleteFunctionaryService();
            const { id } = request.params
            const result = await service.execute({ id });

            return response.status(204).json(result);
        } catch (error) {
            return response.status(500);
        }
    }
}