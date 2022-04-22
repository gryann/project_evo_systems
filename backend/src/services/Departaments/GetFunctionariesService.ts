import { getRepository } from "typeorm";
import { Functionary } from "../../entities/Functionary";

export class GetFunctionariesService {
    async execute(id: string): Promise<Array<Functionary> | Error> {
        const repo = getRepository(Functionary);
        
        // SELECT * FROM functionaries WHERE id_departament = id;
        const functionaries = await repo.findBy({ id_departament: id });
        
        return functionaries;
    }
}