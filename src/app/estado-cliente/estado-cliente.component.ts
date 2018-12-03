import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ConexionService } from '../conexion.service';



@Component({
  selector: 'app-estado-cliente',
  templateUrl: './estado-cliente.component.html',
  styleUrls: ['./estado-cliente.component.css']
})
export class EstadoClienteComponent implements OnInit {

  pedidos:any[]=[];
  cantidadPedidos;
mensaje:string="";
elPedido:any;
codigoActual;
usuario:any;
mostrarPedido:boolean=false;
  constructor(private conexion:ConexionService) 
  {
    let JWTHelper = new JwtHelperService();
    this.usuario = JWTHelper.decodeToken(localStorage.getItem("token"));


    this.conexion.ObtenerPedido(this.usuario.correo).subscribe(
      exito => {
     this.pedidos =  (exito as any).entidades;
     this.cantidadPedidos = this.pedidos.length;

     
     for(let i=0;i<this.pedidos.length;i++)
     {
       console.log(this.pedidos);
       if(this.pedidos[i].estado=="espera")
       {
         this.pedidos[i].mensaje="Este pedido ha sido registrado, falta que el mozo lo acepte para que llegue al sector correspondiente.";
       }
       if(this.pedidos[i].estado=="aceptado")
       {
         this.pedidos[i].mensaje="Este pedido se esta preparando";
         if(this.pedidos[i].tiempo!="0")
         {
            this.pedidos[i].mensaje =this.pedidos[i].mensaje +" el tiempo aproximado en que se terminara es de: "+this.pedidos[i].tiempo + " minutos.";
         }
         else
         {
          this.pedidos[i].mensaje =this.pedidos[i].mensaje +".";
         }
       }

       if(this.pedidos[i].estado=="entregado")
       {
         this.pedidos[i].mensaje="Este pedido ya esta listo, si no lo recibió en 10 min consultele al mozo.";
       }
       if(this.pedidos[i].estado=="listo")
       {
         this.pedidos[i].mensaje="Este pedido ya esta listo, en breve el  mozo se lo traera a la mesa.";
       }

     
       
     } 


       

      },
      error =>alert("Error" + JSON.stringify(error)) 


    );
  
      //Funcio
  }

  ngOnInit() {

   
    
  }

  VerPedido(pedido, codigo)
  {
    this.mostrarPedido=true;
    this.elPedido = JSON.parse(pedido);
    this.codigoActual=codigo;

  }
  Cerrar()
  {
    
    this.mostrarPedido=false;
  }
}
