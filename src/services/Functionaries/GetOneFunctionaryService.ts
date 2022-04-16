import { getRepository } from "typeorm";
import { Functionary } from "../../entities/Functionary";

export class GetOneFunctionaryService {
    async execute(id: string): Promise<Functionary | Error> {
        const repo = getRepository(Functionary);
        
        // SELECT * FROM functionary WHERE id = id LIMIT 1;
        const functionary = await repo.findOneById(id);
        
        if(!functionary) {
            return new Error("Functionary Not Found");
        }
        return functionary;
    }
}