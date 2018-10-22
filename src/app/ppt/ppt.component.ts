import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../conexion.service';
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: 'app-ppt',
  templateUrl: './ppt.component.html',
  styleUrls: ['./ppt.component.css']
})
export class PptComponent implements OnInit {
  public token: any;
  fotos:any[]=[];
  fotoMostrar;
  activaTijera=false;
  activaPiedra=false;
  activaPapel=false;
  mensaje="";
  mostrarAlert=false;
  puntos:number;
  jugadas:number;
  ocultarBoton:boolean;
  taparJuego;
  constructor( private miCon:ConexionService ) { 
    let JWTHelper = new JwtHelperService();
    this.token = JWTHelper.decodeToken(localStorage.getItem("token"));
    this.taparJuego=true;
    this.ocultarBoton =true;
    this.jugadas=0;
    this.puntos=0;
    this.fotoMostrar="../../assets/imgs/pregunta.png";
    this.fotos.push("../../assets/imgs/papel.png");
    this.fotos.push("../../assets/imgs/piedra.png");
    this.fotos.push("../../assets/imgs/tijera.jpg");
    this.mostrarAlert=true;
  }

  ngOnInit() {
  }
  JugarJuego()
  {
    this.taparJuego=false;
    this.puntos=0;
    this.jugadas=0;
    this.activaTijera=false;
    this.activaPapel=false;
    this.activaPiedra=false;
  }
jugo(valor)
{
 
  this.jugadas=this.jugadas +1;
 
  let miValor:number =   Math.floor(Math.random() * (3 - 0)) + 0;
  this.fotoMostrar= this.fotos[miValor];

  if(valor=="tijera")
  {
    this.activaTijera=true;
    this.activaPapel=false;
    this.activaPiedra=false;
  }
  if(valor=="papel")
  {
    this.activaTijera=false;
    this.activaPapel=true;
    this.activaPiedra=false;
  }
  if(valor=="piedra")
  {
    this.activaTijera=false;
    this.activaPapel=false;
    this.activaPiedra=true
  }
  
  this.VerificarJugada(valor, miValor);
  setTimeout( ()=>{this.mostrarAlert=false;

  }, 500);



 setTimeout( ()=>{
 
   this.mostrarAlert=true;
    this.activaTijera=false;
    this.activaPapel=false;
    this.activaPiedra=false;
    this.fotoMostrar="../../assets/imgs/pregunta.png";
    if(this.jugadas==5)
    {
      this.taparJuego=true;
    }
  }, 2000);

  
}
VerificarJugada(valor, miValor)
{
  if(valor=="piedra" && miValor==0 )
  {
    this.mensaje="usted perdio";
  }
  if(valor=="piedra" && miValor==1 )
  {
    this.mensaje="usted empato";
  }
  if(valor=="piedra" && miValor==2 )
  {
    this.mensaje="usted gano";
    this.puntos = this.puntos +10;
  }
  if(valor=="papel" && miValor==0 )
  {
    this.mensaje="usted empato";
  }
  if(valor=="papel" && miValor==1 )
  {
    this.mensaje="usted gano";
    this.puntos = this.puntos +10;
  }
  if(valor=="papel" && miValor==2 )
  {
    this.mensaje="usted perdio";
  }
  if(valor=="tijera" && miValor==0 )
  {
    this.mensaje="usted gano";
    this.puntos = this.puntos +10;
  }
  if(valor=="tijera" && miValor==1 )
  {
    this.mensaje="usted perdio";
  }
  if(valor=="tijera" && miValor==2 )
  {
    this.mensaje="usted empato";
  }

  if(this.jugadas==5)
  {
    this.mensaje = this.mensaje +".  Juego Terminado";
    this.miCon.CargarScore(this.token.correo, "puntaje_PPT", this.puntos.toString()).subscribe(
      exito => console.log("Exito" + JSON.stringify(exito)),
      error => console.log("Error" + JSON.stringify(error))
    );
   
  }
}
  
}

