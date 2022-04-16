import { Response, Request } from "express";
import { GetOneFunctionaryService } from "../../services/Functionaries/GetOneFunctionaryService";


export class GetOneFunctionaryController {
    async handle(request: Request, response: Response) {
        const service = new GetOneFunctionaryService();

        const { id } = request.params;
        const result = await service.execute(id); 

        if (result instanceof Error) {
            return response.status(404).json(result.message);
        }
        return response.json(result);
    }
}