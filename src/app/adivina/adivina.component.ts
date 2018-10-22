import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../conexion.service';
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: 'app-adivina',
  templateUrl: './adivina.component.html',
  styleUrls: ['./adivina.component.css']
})
export class AdivinaComponent implements OnInit {
  public token: any;

puntos:number;
mensaje:string;
valor:number;
valorSecreto:number;
mensajeCaja:string;
ayuda:boolean;
mostrarPuntajeFinal;
taparJuego;
mensajeFinal="";
ocultarBoton:boolean;

  constructor( private miCon:ConexionService) { 
    let JWTHelper = new JwtHelperService();
    this.token = JWTHelper.decodeToken(localStorage.getItem("token"));
    this.ayuda=false;
    this.taparJuego=true;
    //this.valor=undefined;
    this.ocultarBoton =true;
    this.puntos=50;
    this.mensajeCaja="Numero secreto";
    this.valorSecreto =   Math.floor(Math.random() * (20 - 1)) + 1;
    this.mostrarPuntajeFinal=true;

  }

  ngOnInit() {
  }
  JugarJuego()
  {
    this.taparJuego=false;
    this.ocultarBoton=false;
    this.puntos=50;
    this.mensajeCaja="Numero secreto";
    this.valorSecreto =   Math.floor(Math.random() * (20 - 1)) + 1;
    this.valor=undefined;
  }
  Jugar()
  {
    if(this.valor ==undefined)
    {
      this.mensaje ="No ingreso valor! Pierde una chance.";

     
      this.puntos = this.puntos -10;
      this.ayuda =true;
      setTimeout( ()=>{
       this.ayuda = false;
      }, 2000);
      if(this.puntos == 0)
      {
        this.mensajeFinal="Perdio no adivino el numero";
        this.miCon.CargarScore(this.token.correo, "puntaje_AeN", this.puntos.toString()).subscribe(
          exito => console.log("Exito" + JSON.stringify(exito)),
          error => console.log("Error" + JSON.stringify(error))
        );
        this.mostrarPuntajeFinal=false;
        setTimeout( ()=>{
          this.mostrarPuntajeFinal = true;
          this.taparJuego =true;
          this.ocultarBoton=true;
        
         }, 3000);
         return;
      }

      return;
    }
    if(this.valor == this.valorSecreto)
    {
        this.mensajeCaja =this.valorSecreto.toString();
      
        this.mensajeFinal = "Usted adivino su puntaje es:"+ this.puntos + " pts";
        this.miCon.CargarScore(this.token.correo, "puntaje_AeN", this.puntos.toString()).subscribe(
          exito => console.log("Exito" + JSON.stringify(exito)),
          error => console.log("Error" + JSON.stringify(error))
        );
        this.mostrarPuntajeFinal=false;
        setTimeout( ()=>{
          this.mostrarPuntajeFinal = true;
          this.taparJuego =true;
          this.ocultarBoton=true;
         }, 3000);
         return;

     
    }
    else
    {
      if(this.valor > this.valorSecreto)
      {
        this.valor =undefined;
        this.mensaje = "UPS!, el numero secreto es menor."
        this.puntos = this.puntos -10;
        this.ayuda =true;
        this.valor =undefined;
        setTimeout( ()=>{
         this.ayuda = false;
        }, 2000);
        if(this.puntos == 0)
        {
          this.mensajeFinal="Perdio no adivino el numero";
          this.miCon.CargarScore(this.token.correo, "puntaje_AeN", this.puntos.toString()).subscribe(
            exito => console.log("Exito" + JSON.stringify(exito)),
            error => console.log("Error" + JSON.stringify(error))
          );
          this.mostrarPuntajeFinal=false;
          setTimeout( ()=>{
            this.mostrarPuntajeFinal = true;
            this.taparJuego =true;
            this.ocultarBoton=true;
           }, 3000);
           return;
        }
        return;

      }
      if(this.valor < this.valorSecreto)
      {
        this.mensaje = "UPS!, el numero secreto es mayor."
        this.puntos = this.puntos -10;
        this.ayuda =true;
        this.valor =undefined;
        setTimeout( ()=>{
         this.ayuda = false;
        }, 2000);
        if(this.puntos == 0)
        {
          this.mensajeFinal="Perdio no adivino el numero";

          this.mensajeCaja =this.valorSecreto.toString();
          this.miCon.CargarScore(this.token.correo, "puntaje_AeN", this.puntos.toString()).subscribe(
            exito => console.log("Exito" + JSON.stringify(exito)),
            error => console.log("Error" + JSON.stringify(error))
          );
          this.mostrarPuntajeFinal=false;
          setTimeout( ()=>{
            this.mostrarPuntajeFinal = true;
            this.taparJuego =true;
            this.ocultarBoton=true;
           }, 2000);
           return;
        }
        return;
      }
    }

  }

}
