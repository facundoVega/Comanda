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
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AppRoutingModuleComponent,
    InicialComponent,

    JuegosComponent,

    NotFoundComponent,

    PptComponent
  ],
  imports: [
    BrowserModule,
    RuteoModule,
    BrowserAnimationsModule,
    MyOwnCustomMaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [

    ConexionService,
    JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
