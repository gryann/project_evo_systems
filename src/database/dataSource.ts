import { DataSource } from "typeorm";
import dotenv from 'dotenv';

import { CreateDepartaments } from './migrations/1649968331761-CreateDepartaments';
import { CreateFunctionaries } from './migrations/1649968374345-CreateFunctionaries';

dotenv.config();

const createDepartment = new CreateDepartaments(); 
const createFuncionary = new CreateFunctionaries(); 

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.TYPEORM_HOST,
    port: Number(process.env.TYPEORM_PORT),
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
});

AppDataSource.initialize()
    .then(async () => {
        console.log("Data Source has been initialized!")
        createDepartment.up(AppDataSource.createQueryRunner()).then(() => {
        });
        await createFuncionary.up(AppDataSource.createQueryRunner());
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })