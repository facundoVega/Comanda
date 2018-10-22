import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agilidad',
  templateUrl: './agilidad.component.html',
  styleUrls: ['./agilidad.component.css']
})
export class AgilidadComponent implements OnInit {

  puntos:number;
  miValor:number;
  valor1:number;
  valor2:number;
  jugados:number;
  operador:string;
  mensaje:string;
  mostrarAlert:boolean;
desactivarJuego:boolean;
  constructor() {
    this.valor1=   Math.floor(Math.random() * (200 - 1)) + 1;
    this.valor2=Math.floor(Math.random() * (200 - 1)) + 1;
    this.operador = "+";
    this.jugados=1;
    this.puntos=0;
    this.mostrarAlert=true;
    this.desactivarJuego =true;
   }

  ngOnInit() {
  }
  JugarJuego()
  {
    this.desactivarJuego =false;
    this.jugados=1;
  }
  Jugar()
  {
    if(this.jugados  ==1)
    {
      this.operador ="+";
      let total=this.valor1 + this.valor2;
     
      if(this.miValor == total)
      {
        this.mensaje="Excelente, sumo 10 pts";
        
        this.mostrarAlert=false;
        this.miValor =undefined;
        setTimeout( ()=>{
         this.mostrarAlert=true;
         }, 2000);
        this.puntos =this.puntos+10;
      }
      else
      {
        this.mensaje="Incorrecto, el resultado era:"+total;

        this.mostrarAlert=false;
        this.miValor =undefined;
        setTimeout( ()=>{
         this.mostrarAlert=true;
         }, 2000);
      }
      this.jugados = this.jugados+1;
      this.valor1 =Math.floor(Math.random() * (100 - 1)) + 1;
      this.valor2 =Math.floor(Math.random() * (100 - 1)) + 1;
      this.operador ="-";
      return;
    }
    if(this.jugados ==2)
    {
      let total=this.valor1 - this.valor2;
      if(this.miValor == total)
      {

        this.mensaje="Excelente, sumo 10 pts" ;
        
        this.mostrarAlert=false;
        this.miValor =undefined;
        setTimeout( ()=>{
         this.mostrarAlert=true;
         }, 2000);

        this.puntos =this.puntos+10;
      }
      else
      {
        this.mensaje="Incorrecto, el resultado era:"+total;
        this.mostrarAlert=false;
        this.miValor =undefined;
        setTimeout( ()=>{
         this.mostrarAlert=true;
         }, 2000);
      }
      this.jugados = this.jugados+1;
      this.valor1 =Math.floor(Math.random() * (200 - 1)) + 1;
      this.valor2 =Math.floor(Math.random() * (9 - 1)) + 1;
      this.operador ="x";
      return;
    }
    if(this.jugados==3)
    {
      let total=this.valor1 * this.valor2;
      if(this.miValor == total)
      {
        this.mensaje="Excelente, sumo 10 pts";
        this.mostrarAlert=false;
        this.miValor =undefined;
        setTimeout( ()=>{
         this.mostrarAlert=true;
         }, 2000);
        this.puntos =this.puntos+50;
      }
      else
      {
        this.mensaje="Incorrecto, el resultado era:"+total +" Juego terminado";
        this.mostrarAlert=false;
        this.miValor =undefined;
        setTimeout( ()=>{
         this.mostrarAlert=true;
         this.desactivarJuego=true;
         }, 2000);
      }
      this.jugados =1;
      this.operador ="+";
      this.valor1 =Math.floor(Math.random() * (100 - 1)) + 1;
      this.valor2 =Math.floor(Math.random() * (100 - 1)) + 1;
      

    }
   
  }
}
