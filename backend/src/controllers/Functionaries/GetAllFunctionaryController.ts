import { Response, Request } from "express";
import { GetAllFunctionaryService } from "../../services/Functionaries/GetAllFunctionaryService";


export class GetAllFunctionaryController {
    async handle(request: Request, response: Response) {
        try {
            const service = new GetAllFunctionaryService();

            const result = await service.execute();

            return response.json(result);
        } catch (error) {
            return response.status(500);
        }
    }
}