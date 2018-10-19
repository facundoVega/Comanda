import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memoria',
  templateUrl: './memoria.component.html',
  styleUrls: ['./memoria.component.css']
})
export class MemoriaComponent implements OnInit {
/*imgMostrar1:string;
imgMostrar2:string;
imgMostrar3:string;
imgMostrar4:string;
imgMostrar5:string;
imgMostrar6:string;
imgMostrar7:string;
imgMostrar8:string;
imgMostrar9:string;
imgMostrar10:string;
imgMostrar11:string;
imgMostrar12:string;
imgMostrar13:string;
imgMostrar14:string;
imgMostrar15:string;
imgMostrar16:string;*/
imgMostrar:string[]=[];


fotos:string[]=[];

  constructor() {
    for(let i=0;i<16;i++)
    { 
      this.imgMostrar.push("../../assets/imgs/cerebro2.png");

    }
 


    this.fotos.push("../../assets/imgs/bart1.png");
    this.fotos.push("../../assets/imgs/bart2.jpg");
    this.fotos.push("../../assets/imgs/familia2.jpg");
    this.fotos.push("../../assets/imgs/familia.jpg");
    this.fotos.push("../../assets/imgs/homero.png");
    this.fotos.push("../../assets/imgs/genio.jpg");
    this.fotos.push("../../assets/imgs/maggie.jpg");
    this.fotos.push("../../assets/imgs/burns.jpg");

    this. fotos = this.fotos.sort(function() {return Math.random() - 0.5});
   }

  ngOnInit() {
  }

  cambiarImagen(valor)
  {
    let imgMostrar="imgMostrar"+valor;
  
    valor = parseInt(valor);
    valor = valor-1;
    if(valor>7)
    {
      let valor2= valor-8;
      this.imgMostrar[valor] =this.fotos[valor2];
      return
    }
   
   
    this.imgMostrar[valor] =this.fotos[valor];
  }
}
