import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RuteoModule } from './ruteo/ruteo.module';
import { AppRoutingModuleComponent } from './app-routing-module/app-routing-module.component';
import { InicialComponent } from './inicial/inicial.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MyOwnCustomMaterialModule } from './material';
import { HttpClientModule }  from '@angular/common/http';
import { JwtHelperService }         from "@auth0/angular-jwt";
import {   ConexionService } from './conexion.service';
import { FormsModule } from '@angular/forms';
import { JuegosComponent } from './juegos/juegos.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PptComponent } from './ppt/ppt.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MemoriaComponent } from './memoria/memoria.component';
import { AdivinaComponent } from './adivina/adivina.component';
import { AgilidadComponent } from './agilidad/agilidad.component';
import { MisPuntosComponent } from './mis-puntos/mis-puntos.component';
import { RankingComponent } from './ranking/ranking.component';
import { MenuComponent } from './menu/menu.component';
import { PlatosComponent } from './platos/platos.component';
import { OcuparMesaComponent } from './ocupar-mesa/ocupar-mesa.component';
import { PagarComponent } from './pagar/pagar.component';
import { EstadoClienteComponent } from './estado-cliente/estado-cliente.component';
import { PedidosAceptarComponent } from './pedidos-aceptar/pedidos-aceptar.component';
import { PedidosEntregarComponent } from './pedidos-entregar/pedidos-entregar.component';
import { PedidosCocineroComponent } from './pedidos-cocinero/pedidos-cocinero.component';
import { PedidosBartenderComponent } from './pedidos-bartender/pedidos-bartender.component';
import { PedidosCervecerosComponent } from './pedidos-cerveceros/pedidos-cerveceros.component';
import { MesasAdminComponent } from './mesas-admin/mesas-admin.component';
import { EncuestaComponent } from './encuesta/encuesta.component';
import { AltaUsuariosComponent } from './alta-usuarios/alta-usuarios.component';
import { ResultadosEncuestaComponent } from './resultados-encuesta/resultados-encuesta.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AppRoutingModuleComponent,
    InicialComponent,

    JuegosComponent,

    NotFoundComponent,

    PptComponent,

    MemoriaComponent,

    AdivinaComponent,

    AgilidadComponent,

    MisPuntosComponent,

    RankingComponent,

    MenuComponent,

    PlatosComponent,

    OcuparMesaComponent,

    PagarComponent,

    EstadoClienteComponent,

    PedidosAceptarComponent,

    PedidosEntregarComponent,

    PedidosCocineroComponent,

    PedidosBartenderComponent,

    PedidosCervecerosComponent,

    MesasAdminComponent,

    EncuestaComponent,

    AltaUsuariosComponent,

    ResultadosEncuestaComponent
  ],
  imports: [
    BrowserModule,
    RuteoModule,
    BrowserAnimationsModule,
    MyOwnCustomMaterialModule,
    HttpClientModule,
    FormsModule,
    LayoutModule
    
  ],
  providers: [

    ConexionService,
    JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
