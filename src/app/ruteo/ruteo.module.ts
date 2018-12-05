import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerificarTipoService } from "../verificar-tipo.service";
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
import { PedidosBartenderComponent } from '../pedidos-bartender/pedidos-bartender.component';
import { PedidosCervecerosComponent } from '../pedidos-cerveceros/pedidos-cerveceros.component';
import { MesasAdminComponent } from '../mesas-admin/mesas-admin.component';
import { EncuestaComponent } from '../encuesta/encuesta.component';
import { AltaUsuariosComponent } from '../alta-usuarios/alta-usuarios.component';

//Estas rutas son para la web


const rutas: Routes = [
  { path: "", component: LoginComponent },

  { path: "Inicial", component: InicialComponent, canActivate: [ValidadoraService], children:[
    {path:"juegos", component:JuegosComponent, canActivate: [ValidadoraService]},
    {path:"ppt", component:PptComponent, canActivate: [ValidadoraService] },
    {path:"agilidad", component:AgilidadComponent, canActivate: [ValidadoraService] },
    {path:"memoria", component:MemoriaComponent ,canActivate: [ValidadoraService]  },
    {path:"menu", component:MenuComponent  ,canActivate: [ValidadoraService, VerificarTipoService], data: { roles: ["cliente"] } },
    { path: "Puntos", component: RankingComponent, canActivate: [ValidadoraService]  },
    {path:"adivina", component:AdivinaComponent, canActivate: [ValidadoraService] },
    {path:"ocupar", component:OcuparMesaComponent,  canActivate: [ValidadoraService, VerificarTipoService], data: { roles: ["cliente"] } },
       {path:"cuenta", component:PagarComponent,  canActivate: [ValidadoraService, VerificarTipoService], data: { roles: ["cliente"] } },
        {path:"estadoPedido", component:EstadoClienteComponent ,  canActivate: [ValidadoraService, VerificarTipoService], data: { roles: ["cliente"] } },
        {path:"aceptarPedidos", component:PedidosAceptarComponent ,  canActivate: [ValidadoraService, VerificarTipoService], data: { roles: ["mozo"] } },
        {path:"pedidosCocinero", component:PedidosCocineroComponent,  canActivate: [ValidadoraService, VerificarTipoService], data: { roles: ["cocinero"] } },
        {path:"pedidosBartender", component:PedidosBartenderComponent,  canActivate: [ValidadoraService, VerificarTipoService], data: { roles: ["bartender"] } },
        {path:"pedidosCervecero", component:PedidosCervecerosComponent,  canActivate: [ValidadoraService, VerificarTipoService], data: { roles: ["cervecero"] } },
        {path:"entregarPedidos", component:PedidosEntregarComponent,canActivate: [ValidadoraService, VerificarTipoService], data: { roles: ["mozo"] }  },
        {path:"mesasAdmin", component:MesasAdminComponent , canActivate: [ValidadoraService, VerificarTipoService], data: { roles: ["administrador"] } },
        {path:"encuesta", component:EncuestaComponent , canActivate: [ValidadoraService, VerificarTipoService], data: { roles: ["cliente"] } },
       {path:"alta", component:AltaUsuariosComponent , canActivate: [ValidadoraService, VerificarTipoService], data: { roles: ["administrador"] } }
      ]},
    { path: "**", component: NotFoundComponent }
];




/*

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
    {path:"ocupar", component:OcuparMesaComponent,canActivate: [VerificarTipoService], data: { roles: ["cliente"] }},
    {path:"cuenta", component:PagarComponent},
    {path:"estadoPedido", component:EstadoClienteComponent},
    {path:"aceptarPedidos", component:PedidosAceptarComponent},
    {path:"entregarPedidos", component:PedidosEntregarComponent},
    {path:"pedidosCocinero", component:PedidosCocineroComponent},
    {path:"pedidosBartender", component:PedidosBartenderComponent},
    {path:"pedidosCervecero", component:PedidosCervecerosComponent},
    {path:"mesasAdmin", component:MesasAdminComponent},
    {path:"encuesta", component:EncuestaComponent },
    {path:"alta", component:AltaUsuariosComponent }


  ]},
    { path: "**", component: NotFoundComponent }
];
*/

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
