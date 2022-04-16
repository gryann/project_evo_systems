import { getRepository } from "typeorm";
import { v4 as uuid } from "uuid";

import { Departament } from "../../entities/Departament";
import { Functionary } from "../../entities/Functionary";

type FunctionaryRequest = {
    name: string;
    image: string;
    RG: string;
    id_departament: string;
}

export class CreateFunctionaryService {
    async execute({ name, image, RG, id_departament }: FunctionaryRequest ): Promise<Functionary | Error> {
        const repo = getRepository(Functionary);
        const repoDepartament = getRepository(Departament);

        if (!await repoDepartament.findOneById(id_departament)) {
            return new Error("Departament does not exists!");
        }
        // SELECT * FROM functionary WHERE name = "name" LIMIT 1;
        const functionaryExists = await repo.findOne({ where: { name } });
        if(functionaryExists) {
            return new Error("Functionary already exists");
        }

        const functionary = repo.create({
            name,
            image,
            RG,
            id_departament,
        });
        await repo.save(functionary);
        return functionary;
    }
}