import { getRepository } from "typeorm";
import { Departament } from "../../entities/Departament";
import { Functionary } from "../../entities/Functionary";

type FunctionaryRequest = {
    id: string;
    name: string;
    image: string;
    RG: string;
    id_departament: string;
}

export class UpdateFunctionaryService {
    async execute({ id, name, image, RG, id_departament }: FunctionaryRequest ): Promise<void | Error> {
        const repo = getRepository(Functionary);
        const repoDepartament = getRepository(Departament);

        if (!await repoDepartament.findOneById(id_departament)) {
            return new Error("Departament does not exists!");
        }

        // UPDATE departaments SET name = "name", image = "image", RG = "RG", id_departament, "id_departament"  WHERE id = id;
        await repo.update({ id }, { name, image, RG, id_departament });
    }
}