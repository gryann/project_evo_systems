import { getRepository } from "typeorm";
import { Functionary } from "../../entities/Functionary";

type FunctionaryRequest = {
    id: string;
}

export class DeleteFunctionaryService {
    async execute({ id }: FunctionaryRequest ): Promise<void> {
        const repo = getRepository(Functionary);

        // DELETE FROM departaments WHERE id = id;
        await repo.delete({ id });
    }
}