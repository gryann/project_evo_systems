import { Request, Response } from "express";
import { CreateFunctionaryService } from "../../services/Functionaries/CreateFunctionaryService";


export class CreateFunctionaryController {
    async handle(request: Request, response: Response) {
        const knownErrors = ["Departament does not exists!", "Functionary already exists"];  

        const { name, RG, id_departament } = request.body;

        const service = new CreateFunctionaryService();

        const result = await service.execute({ name, RG, id_departament });

        if (result instanceof Error) {            
            const { message } = result;
            if(knownErrors.includes(message)) {
                return response.status(400).json(result.message);
            } else {
                return response.status(500).json()
            }
        }
        return response.status(201).json(result);
}
}