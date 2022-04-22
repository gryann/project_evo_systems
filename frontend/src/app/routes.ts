import { Routes as IRoutes } from "@angular/router"
import { GetFunctionariesComponent } from "./functionaries/get-functionaries/get-functionaries.component"

import { HomeComponent } from "./home/home.component"

export const Routes: IRoutes = [
    { path: 'functionaries/:id', component: GetFunctionariesComponent },
    { path: '**', component: HomeComponent }
]