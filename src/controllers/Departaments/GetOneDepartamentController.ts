import { Response, Request } from "express";
import { GetOneDepartamentService } from "../../services/Departaments/GetOneDepartamentService";


export class GetOneDepartamentController {
    async handle(request: Request, response: Response) {
        const service = new GetOneDepartamentService();

        const { id } = request.params;
        const result = await service.execute(id); 

        if (result instanceof Error) {
            return response.status(404).json(result.message);
        }
        return response.json(result);
    }
}