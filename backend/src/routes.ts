import { Router, Request, Response, request } from "express";
import multer from "multer";

import { CreateDepartametController } from "./controllers/Departaments/CreateDepartamentController";
import { CreateFunctionaryController } from "./controllers/Functionaries/CreateFunctionaryController";
import { DeleteDepartamentController } from "./controllers/Departaments/DeleteDepartamentController";
import { DeleteFunctionaryController } from "./controllers/Functionaries/DeleteFunctionaryController";
import { GetAllDepartamentController } from "./controllers/Departaments/GetAllDepartamentController";
import { GetAllFunctionaryController } from "./controllers/Functionaries/GetAllFunctionaryController";
import { UpdateDepartamentController } from "./controllers/Departaments/UpdateDepartamentController";
import { UpdateFunctionaryController } from "./controllers/Functionaries/UpdateFunctionaryController";
import { UpdateImageController } from "./controllers/Functionaries/UpdateImageController";
import { GetOneDepartamentController } from "./controllers/Departaments/GetOneDepartamentController";
import { GetOneFunctionaryController } from "./controllers/Functionaries/GetOneFunctionaryController";
import { multerConfig } from "./config/multer";
import { GetFunctionariesController } from "./controllers/Departaments/GetFunctionariesController";


const routes = Router();

// POST = CREATE
// GET = SELECT
// PATCH = UPDATE
// DELETE = DELETE
routes.post("/departaments", new CreateDepartametController().handle);
routes.get("/departaments", new GetAllDepartamentController().handle);
routes.get("/departaments/:id", new GetOneDepartamentController().handle);
routes.patch("/departaments/:id", new UpdateDepartamentController().handle);
routes.delete("/departaments/:id", new DeleteDepartamentController().handle);
routes.get("/departaments/:id/functionaries", new GetFunctionariesController().handle);

routes.post("/functionaries", new CreateFunctionaryController().handle);
routes.get("/functionaries", new GetAllFunctionaryController().handle);
routes.get("/functionaries/:id", new GetOneFunctionaryController().handle);
routes.patch("/functionaries/:id", new UpdateFunctionaryController().handle);
routes.delete("/functionaries/:id", new DeleteFunctionaryController().handle);
routes.post('/functionaries/:id/images', multer(multerConfig).single('file'), new UpdateImageController().handle);


export { routes }