import { getRepository } from "typeorm";
import { Functionary } from "../../entities/Functionary";

export class GetAllFunctionaryService {
    async execute(): Promise<Array<Functionary>> {
        const repo = getRepository(Functionary);
        
        // SELECT * FROM functionaries;
        const functionmaries = await repo.find({
            relations: ["departament"],
        });
        
        return functionmaries;
    }
}