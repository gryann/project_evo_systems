import { Response, Request } from "express";
import { UpdateImageService } from "../../services/Functionaries/UpdateImageService";


export class UpdateImageController {
    async handle(request: Request, response: Response) {
        try {
            const service = new UpdateImageService();
            const { filename } = request.file;
            const { id } = request.params
            const result = await service.execute({ id_functionary: id, filename });

            return response.status(204).json(result);
        } catch (error) {
            return response.status(500);
        }
    }
}