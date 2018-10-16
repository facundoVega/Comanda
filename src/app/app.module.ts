import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RuteoModule } from './ruteo/ruteo.module';
import { AppRoutingModuleComponent } from './app-routing-module/app-routing-module.component';
import { InicialComponent } from './inicial/inicial.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MyOwnCustomMaterialModule } from './material';

import { JuegosComponent } from './juegos/juegos.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AppRoutingModuleComponent,
    InicialComponent,

    JuegosComponent
  ],
  imports: [
    BrowserModule,
    RuteoModule,
    BrowserAnimationsModule,
    MyOwnCustomMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
