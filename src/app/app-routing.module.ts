import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { BuscadorComponent } from "./paises/buscador/buscador.component";
import { FavoritosComponent } from "./paises/favoritos/favoritos.component";
import { LoginComponent } from "./paises/login/login.component";




const routes: Routes = [
    {
        path: "",
        component: LoginComponent,
        pathMatch: "full"
    },
    {
        path: "pais",
        component: BuscadorComponent
    },

    {
        path: "favoritos",
        component: FavoritosComponent
    },
    {
        path: "**",
        redirectTo: ""
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot( routes )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{}