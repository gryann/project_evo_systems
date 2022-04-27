import { Request, Response } from "express";
import { CreateDepartamentService } from "../../services/Departaments/CreateDepartamentService";


export class CreateDepartamentController {
    async handle(request: Request, response: Response) {
        try {
            const { name, initials } = request.body;

            const service = new CreateDepartamentService();
    
            const result = await service.execute({ name, initials });
    
            if (result instanceof Error) {
                return response.status(400).json(result.message);
            }
    
            return response.status(201).json(result);
        } catch (error) {
            return response.status(500);
        }
    }
}