import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../conexion.service';

@Component({
  selector: 'app-pedidos-entregar',
  templateUrl: './pedidos-entregar.component.html',
  styleUrls: ['./pedidos-entregar.component.css']
})
export class PedidosEntregarComponent implements OnInit {

  pedidos:any[]=[];
  unPedido:any[]=[];
  mostrarPedido:boolean=false;

  constructor(private conexion:ConexionService) 
  {
    this.conexion.ListarEntidades("pedidos").subscribe(
      exito => {

       let pedidosTodos = (exito as any).entidades;
        for(let i=0; i<pedidosTodos.length;i++ )
        {
          console.log("algo"+pedidosTodos[i].estado);
          if(pedidosTodos[i].estado=="listo")
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
  Cerrar()
  {
    this.mostrarPedido = false;
  }
  AceptarPedido(codigo)
  {
    let estado="entregado";

    this.conexion.EjecutarConsulta(`UPDATE \`pedidos\` SET \`estado\`=\'${estado}\' WHERE \`codigo\`=\'${codigo}\'`).subscribe(
      exito => {


        if ((exito as any).valido == "true") {

         alert("Bien!" + `Haz colocado al pedido como entregado.`);

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

}
