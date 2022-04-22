import "reflect-metadata";
import express from "express";
import { resolve } from "path"
import cors from "cors";

import "./database";
import { routes } from "./routes";

const app = express();

app.use(cors())

app.use(express.json());
app.use('/photos', express.static(resolve(__dirname, '..', 'uploads' )));

app.use(routes);

const port = process.env.PORT;
app.listen(port, () => console.log(`Server is running at http://localhost:${port}`));
