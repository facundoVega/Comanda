import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adivina',
  templateUrl: './adivina.component.html',
  styleUrls: ['./adivina.component.css']
})
export class AdivinaComponent implements OnInit {
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

  constructor() { 
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
