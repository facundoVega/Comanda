import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ppt',
  templateUrl: './ppt.component.html',
  styleUrls: ['./ppt.component.css']
})
export class PptComponent implements OnInit {
  fotos:any[]=[];
  fotoMostrar;
  activaTijera=false;
  activaPiedra=false;
  activaPapel=false;
  mensaje="";
  mostrarAlert=false;

  constructor() { 
    this.fotoMostrar="../../assets/imgs/pregunta.png";
    this.fotos.push("../../assets/imgs/papel.png");
    this.fotos.push("../../assets/imgs/piedra.png");
    this.fotos.push("../../assets/imgs/tijera.jpg");
  }

  ngOnInit() {
  }
jugo(valor)
{
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
this.mostrarAlert=true;
 setTimeout( ()=>{this.mostrarAlert=false;
    this.activaTijera=false;
    this.activaPapel=false;
    this.activaPiedra=false;
    this.fotoMostrar="../../assets/imgs/pregunta.png";
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
  }
  if(valor=="papel" && miValor==0 )
  {
    this.mensaje="usted empato";
  }
  if(valor=="papel" && miValor==1 )
  {
    this.mensaje="usted gano";
  }
  if(valor=="papel" && miValor==2 )
  {
    this.mensaje="usted perdio";
  }
  if(valor=="tijera" && miValor==0 )
  {
    this.mensaje="usted gano";
  }
  if(valor=="tijera" && miValor==1 )
  {
    this.mensaje="usted perdio";
  }
  if(valor=="papel" && miValor==2 )
  {
    this.mensaje="usted empato";
  }
}
  
}
}
