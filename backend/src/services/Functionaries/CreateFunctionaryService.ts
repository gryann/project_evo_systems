import { getRepository } from "typeorm";
import { v4 as uuid } from "uuid";

import { Departament } from "../../entities/Departament";
import { Functionary } from "../../entities/Functionary";

type FunctionaryRequest = {
    name: string;
    RG: string;
    id_departament: string;
}

export class CreateFunctionaryService {
        
    async execute({ name, RG, id_departament }: FunctionaryRequest): Promise<Functionary | Error> {
        try {
            const repo = getRepository(Functionary);
            const repoDepartament = getRepository(Departament);

            if (!await repoDepartament.findOneById(id_departament)) {
                return new Error("Departament does not exists!");
            }
            // SELECT * FROM functionary WHERE name = "name" LIMIT 1;
            const functionaryExists = await repo.findOne({ where: { name } });
            if (functionaryExists) {
                return new Error("Functionary already exists");
            }
            const functionary = repo.create({
                name,
                RG,
                id_departament,
                image: 'without-image'
            });
                await repo.save(functionary);

                return functionary;
        } catch (error) {
            return error;
        }

    }
}