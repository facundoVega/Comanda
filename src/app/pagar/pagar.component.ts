import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../conexion.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-pagar',
  templateUrl: './pagar.component.html',
  styleUrls: ['./pagar.component.css']
})
export class PagarComponent implements OnInit {

  pedido:any[]=[];
  finalTotal=0;
  public usuario: any;


  constructor( private conexion:ConexionService) 
  {


   let JWTHelper = new JwtHelperService();
    this.usuario = JWTHelper.decodeToken(localStorage.getItem("token"));

    
    this.conexion.ObtenerPedido(this.usuario.correo).subscribe(
      exito => {

        let pedidoTodo =  (exito as any).entidades;

        console.log(pedidoTodo);

        for(let i=0;i<pedidoTodo.length;i++)
        {
          let arrayConvertido:any;
          arrayConvertido= JSON.parse(pedidoTodo[i].pedido);
          if(i == 0)
          {
            this.pedido = arrayConvertido;
            console.log(this.pedido[i].nombre);
            
        
            continue;
          }
          //Recorro el array convertido y lo coloco en el array de pedidos
          for(let j=0; j<arrayConvertido.length;j++)
          {
            this.pedido.push(arrayConvertido[j]);
    
    
          }


        }
        //Sumo el total del pedido
        for(let i=0; i<this.pedido.length;i++)
        {
          console.log(this.pedido[i]);
          let total = parseInt(this.pedido[i].precio) * parseInt(this.pedido[i].cantidad);
          this.pedido[i].total= total;
         this.finalTotal = this.finalTotal + this.pedido[i].total;
        }
 /*      let mesasTodas = (exito as any).entidades;
        for(let i=0; i<mesasTodas.length;i++ )
        {
          console.log(mesasTodas[i]);
          if(mesasTodas[i].estado=="libre")
          {
            this.mesas.push(mesasTodas[i]);

          }

        }*/


      },
      error =>alert("Error" + JSON.stringify(error)) 


    );
  
      //Funciona el sistema de cuenta
  
    console.log("Elementos cantidad "+  this.pedido.length);



  }

  ngOnInit() {
  }

}
