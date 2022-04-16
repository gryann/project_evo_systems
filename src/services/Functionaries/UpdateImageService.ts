import { getRepository } from "typeorm";
import { Functionary } from "../../entities/Functionary";

type ImageRequest = {
    id_functionary: string;
    filename: string;
}

export class UpdateImageService {
    async execute({ id_functionary, filename }: ImageRequest ): Promise<void | Error> {
        const repo = getRepository(Functionary);

        // UPDATE departaments SET name = "name", image = "image", RG = "RG", id_departament, "id_departament"  WHERE id = id;
        await repo.update({ id: id_functionary }, { image: filename });
    }
}