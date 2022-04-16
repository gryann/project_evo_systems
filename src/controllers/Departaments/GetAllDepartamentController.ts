import { Response, Request } from "express";
import { GetAllDepartamentsService } from "../../services/Departaments/GetAllDepartamentService";


export class GetAllDepartamentController {
    async handle(request: Request, response: Response) {
        const service = new GetAllDepartamentsService();

        const result = await service.execute();

        return response.json(result);
    }
}