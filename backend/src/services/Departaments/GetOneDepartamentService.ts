import { getRepository } from "typeorm";
import { Departament } from "../../entities/Departament";

export class GetOneDepartamentService {
    async execute(id: string): Promise<Departament | Error> {
        const repo = getRepository(Departament);
        
        // SELECT * FROM departaments WHERE id = id LIMIT 1;
        const departament = await repo.findOneById(id);
        
        if(!departament) {
            return new Error("Departament Not Found");
        }
        return departament;
    }
}