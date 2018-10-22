import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../conexion.service';
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: 'app-agilidad',
  templateUrl: './agilidad.component.html',
  styleUrls: ['./agilidad.component.css']
})
export class AgilidadComponent implements OnInit {
  public token: any;
  x:any;
  puntos:number;
  miValor:number;
  valor1:number;
  valor2:number;
  jugados:number;
  operador:string;
  mensaje:string;
  mostrarAlert:boolean;
desactivarJuego:boolean;
tiempo="";
  constructor( private miCon:ConexionService) {
    let JWTHelper = new JwtHelperService();
    this.token = JWTHelper.decodeToken(localStorage.getItem("token"));
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
  
       
    this.puntos=0;
    this.desactivarJuego =false;
    this.jugados=1;
    let tope = new Date().getTime();
    tope=tope +25*1000;
    var countDownDate = new Date(tope).getTime();
    this.x = setInterval(()=> {

      // Get todays date and time
      var now = new Date().getTime();
    
      // Find the distance between now and the count down date
      var distance = countDownDate - now;
    
      // Time calculations for days, hours, minutes and seconds
    
     
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      this.tiempo ="00:"+seconds;
      if (distance <1) {
        this.tiempo= "0";
        clearInterval(this.x);
       
      
        this.mensaje="Se acabo el tiempo  Juego terminado";

        this.mostrarAlert=false;
        this.miCon.CargarScore(this.token.correo, "puntaje_AA", this.puntos.toString()).subscribe(
          exito => console.log("Exito" + JSON.stringify(exito)),
          error => console.log("Error" + JSON.stringify(error))
        );
        this.miValor =undefined;
        setTimeout( ()=>{
         this.mostrarAlert=true;
         this.desactivarJuego=true;
         }, 2000);
     
      }
    
    });
  }
  Jugar()
  {
    if(this.jugados  ==1)
    {
      this.operador ="+";
      let total=this.valor1 + this.valor2;
     
      if(this.miValor == total)
      {
        this.mensaje="Excelente";
        
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

        this.mensaje="Excelente" ;
        
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
        this.mensaje="Excelente";
        this.mostrarAlert=false;
        this.miValor =undefined;
        setTimeout( ()=>{
         this.mostrarAlert=true;
         }, 2000);
        this.puntos =this.puntos+50;
        clearInterval(this.x);
        this.tiempo="00";
      }
      else
      {
        this.mensaje="Incorrecto, el resultado era:"+total +" Juego terminado";
        this.mostrarAlert=false;
        this.miCon.CargarScore(this.token.correo, "puntaje_AA", this.puntos.toString()).subscribe(
          exito => console.log("Exito" + JSON.stringify(exito)),
          error => console.log("Error" + JSON.stringify(error))
        );
        this.miValor =undefined;
        setTimeout( ()=>{
         this.mostrarAlert=true;
         this.desactivarJuego=true;
         this.puntos=0;
         clearInterval(this.x);
         this.tiempo="00";
         }, 2000);
      }
      this.jugados =1;
      this.operador ="+";
      this.valor1 =Math.floor(Math.random() * (100 - 1)) + 1;
      this.valor2 =Math.floor(Math.random() * (100 - 1)) + 1;
      

    }
   
  }
}
