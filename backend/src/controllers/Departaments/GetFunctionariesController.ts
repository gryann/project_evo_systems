import { Response, Request } from "express";
import { GetFunctionariesService } from "../../services/Departaments/GetFunctionariesService";


export class GetFunctionariesController {
    async handle(request: Request, response: Response) {
        try {
            const service = new GetFunctionariesService();

            const { id } = request.params;
            const result = await service.execute(id);

            return response.json(result);
        } catch (error) {
            return response.status(500);
        }
    }
}