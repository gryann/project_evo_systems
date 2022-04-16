import { Request, Response } from "express";
import { CreateFunctionaryService } from "../../services/Functionaries/CreateFunctionaryService";


export class CreateFunctionaryController {
    async handle(request: Request, response: Response) {
        const { name, image, RG, id_departament } = request.body;

        const service = new CreateFunctionaryService();

        const result = await service.execute({ name, image, RG, id_departament });

        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.status(201).json(result);
    }
}