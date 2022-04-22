import { getRepository } from "typeorm";
import { Departament } from "../../entities/Departament";

type DepartamentRequest = {
    id: string;
    name: string;
    initials: string;
}

export class UpdateDepartamentService {
    async execute({ id, name, initials }: DepartamentRequest ): Promise<void> {
        const repo = getRepository(Departament);

        // UPDATE departaments SET name = "name", initials = "initials"  WHERE id = id;
        await repo.update({ id }, { name, initials });
    }
}