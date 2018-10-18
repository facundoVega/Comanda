import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { InicialComponent } from '../inicial/inicial.component';
import { JuegosComponent } from '../juegos/juegos.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { ValidadoraService }   from "../validadora.service";
import { PptComponent} from '../ppt/ppt.component';

/*const rutas: Routes = [
  { path: "", component: LoginComponent },

  { path: "Inicial", component: InicialComponent, canActivate: [ValidadoraService], children:[
    {path:"juegos", component:JuegosComponent, canActivate: [ValidadoraService]}
    ]},
    { path: "**", component: NotFoundComponent }
];*/

const rutas: Routes = [
  { path: "", component: InicialComponent },

  { path: "Inicial", component: InicialComponent, children:[
    {path:"juegos", component:JuegosComponent, },
    {path:"ppt", component:PptComponent},
  ]},
    { path: "**", component: NotFoundComponent }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(rutas)
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class RuteoModule { }
