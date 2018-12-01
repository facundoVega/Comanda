import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { InicialComponent } from '../inicial/inicial.component';
import { JuegosComponent } from '../juegos/juegos.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { ValidadoraService }   from "../validadora.service";
import { PptComponent} from '../ppt/ppt.component';
import { AdivinaComponent} from '../adivina/adivina.component';
import { AgilidadComponent} from '../agilidad/agilidad.component';
import { MemoriaComponent} from '../memoria/memoria.component';
import { MisPuntosComponent} from '../mis-puntos/mis-puntos.component';
import {RankingComponent } from '../ranking/ranking.component';
import {MenuComponent } from '../menu/menu.component';
import { PlatosComponent } from '../platos/platos.component';
import { OcuparMesaComponent } from '../ocupar-mesa/ocupar-mesa.component';
import { PagarComponent } from '../pagar/pagar.component';
import { EstadoClienteComponent } from '../estado-cliente/estado-cliente.component';
import  { PedidosEntregarComponent } from '../pedidos-entregar/pedidos-entregar.component';
import  { PedidosAceptarComponent } from '../pedidos-aceptar/pedidos-aceptar.component';
import { PedidosCocineroComponent } from '../pedidos-cocinero/pedidos-cocinero.component';

//Estas rutas son para la web
/*

const rutas: Routes = [
  { path: "", component: LoginComponent },

  { path: "Inicial", component: InicialComponent, canActivate: [ValidadoraService], children:[
    {path:"juegos", component:JuegosComponent, canActivate: [ValidadoraService]},
    {path:"ppt", component:PptComponent, canActivate: [ValidadoraService] },
    {path:"agilidad", component:AgilidadComponent, canActivate: [ValidadoraService] },
    {path:"memoria", component:MemoriaComponent ,canActivate: [ValidadoraService]  },
    {path:"menu", component:MenuComponent  ,canActivate: [ValidadoraService] },
    { path: "Puntos", component: RankingComponent, canActivate: [ValidadoraService]  },
    {path:"adivina", component:AdivinaComponent, canActivate: [ValidadoraService] },
    {path:"ocupar", component:OcuparMesaComponent,  canActivate: [ValidadoraService]},
       {path:"cuenta", component:PagarComponent,  canActivate: [ValidadoraService]},
        {path:"estadoPedido", component:EstadoClienteComponent ,  canActivate: [ValidadoraService]},
        {path:"aceptarPedidos", component:PedidosAceptarComponent ,  canActivate: [ValidadoraService]}
    ]},
    { path: "**", component: NotFoundComponent }
];

*/
//Estas rutas son para trabajar a nivel local


const rutas: Routes = [
  { path: "", component: InicialComponent },
 
  { path: "Inicial", component: InicialComponent, children:[
    {path:"juegos", component:JuegosComponent, },
    {path:"ppt", component:PptComponent},
    {path:"agilidad", component:AgilidadComponent},
    {path:"memoria", component:MemoriaComponent},
    { path: "MisPuntos", component: MisPuntosComponent },
    { path: "Ranking", component: RankingComponent },
    {path:"adivina", component:AdivinaComponent},
    {path:"menu", component:MenuComponent},
    {path:"platos", component:PlatosComponent},
    {path:"ocupar", component:OcuparMesaComponent},
    {path:"cuenta", component:PagarComponent},
    {path:"estadoPedido", component:EstadoClienteComponent},
    {path:"aceptarPedidos", component:PedidosAceptarComponent},
    {path:"entregarPedidos", component:PedidosEntregarComponent},
    {path:"pedidosCocinero", component:PedidosCocineroComponent}
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
