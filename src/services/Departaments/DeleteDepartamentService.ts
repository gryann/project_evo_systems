import { getRepository } from "typeorm";
import { Departament } from "../../entities/Departament";

type DepartamentRequest = {
    id: string;
}

export class DeleteDepartamentService {
    async execute({ id }: DepartamentRequest ): Promise<void> {
        const repo = getRepository(Departament);

        // DELETE FROM departaments WHERE id = id;
        await repo.delete({ id });
    }
}