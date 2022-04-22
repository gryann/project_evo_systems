import { Response, Request } from "express";
import { GetAllDepartamentsService } from "../../services/Departaments/GetAllDepartamentService";


export class GetAllDepartamentController {
    async handle(request: Request, response: Response) {
        try {
            const service = new GetAllDepartamentsService();

            const result = await service.execute();

            return response.json(result);
        } catch (error) {
            return response.status(500);
        }
    }
}