import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../conexion.service';


@Component({
  selector: 'app-pedidos-aceptar',
  templateUrl: './pedidos-aceptar.component.html',
  styleUrls: ['./pedidos-aceptar.component.css']
})
export class PedidosAceptarComponent implements OnInit {

  pedidos:any[]=[];
  unPedido:any[]=[];
  mostrarPedido:boolean=false;

  constructor(private conexion:ConexionService) { 

    this.conexion.ListarEntidades("pedidos").subscribe(
      exito => {

       let pedidosTodos = (exito as any).entidades;
        for(let i=0; i<pedidosTodos.length;i++ )
        {
          console.log(pedidosTodos[i]);
          if(pedidosTodos[i].estado=="espera")
          {
            this.pedidos.push(pedidosTodos[i]);

          }

        }


      },
      error =>alert("Error" + JSON.stringify(error)) 


    );


  }

  ngOnInit() {
  }

  VerPedido(pedido)
  {
    console.log(pedido);
    //Lo convierto en un array 
    this.mostrarPedido=true;
   this.unPedido = JSON.parse(pedido);
    console.log(this.unPedido);

  }
  AceptarPedido(codigo)
  {
    let estado="aceptado";

    this.conexion.EjecutarConsulta(`UPDATE \`pedidos\` SET \`estado\`=\'${estado}\' WHERE \`codigo\`=\'${codigo}\'`).subscribe(
      exito => {


        if ((exito as any).valido == "true") {

         alert("Bien!" + `Haz Confirmado el pedido.`);

        } else {

          alert("Error" + (exito as any).mensaje);
        }
      },
      error => {

    //    this.ocultarSpinner = true;
        alert("Error" + error)
      }
    );
  }

  Cerrar()
  {
    this.mostrarPedido = false;
  }

}
