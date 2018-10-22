import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memoria',
  templateUrl: './memoria.component.html',
  styleUrls: ['./memoria.component.css']
})
export class MemoriaComponent implements OnInit {

  mostrarPuntajeFinal:boolean;
  countdown:any;
 x:any;
animacion:any[]=[];
primerId;
ocultarBoton:boolean;
ocultarTiempo:boolean;
imgMostrar:any[]=[];
valorViejo;
contadorJugadas:number=0;
fotos:any[]=[];
coincide:boolean=false;
claveActual;
tiempo="";
puntos:number;
taparJuego:boolean;
  constructor(){
    this.puntos=0;
    this.taparJuego=true;
    this.ocultarBoton = true;
    this.ocultarTiempo=false;
    this.mostrarPuntajeFinal =true;
      for(let i=0;i<16;i++)
      { 
        this.imgMostrar.push({img:"../../assets/imgs/cerebro2.png", ok:true});
        this.animacion.push(false);

      }
 


      this.fotos.push({img:"../../assets/imgs/bart1.png", clave:1, id:1});
      this.fotos.push({img:"../../assets/imgs/bart2.jpg", clave:2, id:2});
      this.fotos.push({img:"../../assets/imgs/familia2.jpg", clave:3, id:3});
      this.fotos.push({img:"../../assets/imgs/familia.jpg", clave:4, id:4});
      this.fotos.push({img:"../../assets/imgs/homero.png", clave:5, id:5});
      this.fotos.push({img:"../../assets/imgs/genio.jpg", clave:6, id:6});
      this.fotos.push({img:"../../assets/imgs/maggie.jpg", clave:7, id:7});
      this.fotos.push({img:"../../assets/imgs/burns.jpg", clave:8, id:8});
      this.fotos.push({img:"../../assets/imgs/bart1.png", clave:1, id:9});
      this.fotos.push({img:"../../assets/imgs/bart2.jpg", clave:2, id:10});
      this.fotos.push({img:"../../assets/imgs/familia2.jpg", clave:3, id:11});
      this.fotos.push({img:"../../assets/imgs/familia.jpg", clave:4, id:12});
      this.fotos.push({img:"../../assets/imgs/homero.png", clave:5, id:13});
      this.fotos.push({img:"../../assets/imgs/genio.jpg", clave:6, id:14});
      this.fotos.push({img:"../../assets/imgs/maggie.jpg", clave:7, id:15});
      this.fotos.push({img:"../../assets/imgs/burns.jpg", clave:8, id:16 });
  
  
      this. fotos = this.fotos.sort(function() {return Math.random() - 0.5});
     
   
  }

Jugar()
{
  this. fotos = this.fotos.sort(function() {return Math.random() - 0.5});
     
  
  let tope = new Date().getTime();
  tope=tope +180*1000;
  this.taparJuego=false;
  var countDownDate = new Date(tope).getTime();
  this.ocultarBoton=false;
  this.ocultarTiempo=true;
  this.x = setInterval(()=> {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds

  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  this.tiempo =minutes+":"+seconds;
  

if (distance < 0) {
  clearInterval(this.x);
 this.tiempo ="Juego finalizado";
 this.ocultarTiempo=false;
 this.ocultarBoton=true;
 this.taparJuego=true;
 this.puntos=0;
 for(let i=0;i<16;i++)
  { 
    this.imgMostrar[i]={img:"../../assets/imgs/cerebro2.png", ok:true};
    

  }
  this.mostrarPuntajeFinal =false;
  setTimeout( ()=>{
   this.mostrarPuntajeFinal = true;
       }
  , 3000);
}
});
}

 ngOnInit() {
  }

  IniciarJuego()
  {
    clearInterval(this.x);
    this.tiempo ="Juego finalizado";
    this.ocultarTiempo=false;
    this.ocultarBoton=true;
   
  
   
    for(let i=0;i<16;i++)
     { 
       this.imgMostrar[i]={img:"../../assets/imgs/cerebro2.png", ok:true};
       this.animacion[i]=false;
   
     }
     this.mostrarPuntajeFinal =false;
     setTimeout( ()=>{
      this.mostrarPuntajeFinal = true;
      this.puntos=0;
      this.taparJuego=true;
          }
     , 3000); 
   
  }

  cambiarImagen(valor)
  {
    
    if(this.taparJuego==true)
    {
      return;
    }
    valor = parseInt(valor);
    valor = valor-1;
    let imgMostrar="imgMostrar"+valor;
  
    if(this.imgMostrar[valor].ok ==false)
    {
      return;
    }
   
   
  
      this.imgMostrar[valor].img =this.fotos[valor].img;

  
   
     
    
   this.contadorJugadas = this.contadorJugadas +1;
    if(this.contadorJugadas==1)
    {

      this.valorViejo=valor;
      this.primerId = this.fotos[valor].id;
  this.claveActual=this.fotos[valor].clave;
    }
  
    if(this.contadorJugadas ==2)
    {
      if(this.primerId == this.fotos[valor].id)
      {
        this.contadorJugadas=1;
        return;
      }
    
        if(this.claveActual == this.fotos[valor].clave)
        {
          
          this.claveActual="";
          this.coincide=true;
          this.imgMostrar[this.valorViejo].ok=false;
          this.imgMostrar[valor].ok=false;
          this.animacion[valor]=true;
          this.animacion[this.valorViejo]=true;
          this.puntos = this.puntos+10;
          if(this.puntos==80)
          {
            this.IniciarJuego();
          }
        }
        else
        {
         
          this.claveActual="";
        }
      this.contadorJugadas=0;
        this.taparJuego=true;
      setTimeout( ()=>{
        for(let i=0;i<16;i++)
        { 
          
          if(this.imgMostrar[i].ok==false)
          {
            this.imgMostrar[i].img="../../assets/imgs/ok.png";
          }
          else
          {
            this.imgMostrar[i].img="../../assets/imgs/cerebro2.png";
          }
              
          this.taparJuego=false;
           
          
          
        
        
        }
      }, 1000);
      
    }
  }
}
