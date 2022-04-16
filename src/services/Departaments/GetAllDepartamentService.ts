import { getRepository } from "typeorm";
import { Departament } from "../../entities/Departament";

export class GetAllDepartamentsService {
    async execute(): Promise<Array<Departament>> {
        const repo = getRepository(Departament);
        
        // SELECT * FROM departaments;
        const departaments = await repo.find();
        return departaments;
    }
}