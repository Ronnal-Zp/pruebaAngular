import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";


import { BuscadorComponent } from './buscador/buscador.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BuscadorComponent,
    FavoritosComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    BuscadorComponent,
    FavoritosComponent,
    LoginComponent
  ]
})
export class PaisesModule { }
