import { getRepository } from "typeorm";
import { Departament } from "../../entities/Departament";

type DepartamentRequest = {
    name: string;
    initials: string;
}

export class CreateDepartamentService {
    async execute({ name, initials }: DepartamentRequest ): Promise<Departament | Error> {
        const repo = getRepository(Departament);
        
        // SELECT * FROM departaments WHERE name = "name" LIMIT 1;
        const departamentExists = await repo.findOne({ where: { name } });
        if(departamentExists) {
            return new Error("Departament already exists");
        }
        const departament = await repo.create({
            name,
            initials,
        });
        await repo.save(departament);
        return departament;
    }
}