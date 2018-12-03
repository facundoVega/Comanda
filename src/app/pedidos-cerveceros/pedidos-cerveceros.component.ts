import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../conexion.service';

@Component({
  selector: 'app-pedidos-cerveceros',
  templateUrl: './pedidos-cerveceros.component.html',
  styleUrls: ['./pedidos-cerveceros.component.css']
})
export class PedidosCervecerosComponent implements OnInit {

  pedidos:any[] =[];
  unPedido:any[];
  mostrarPedido:boolean=false;
  bloquearBotones:boolean=false;
  codigoPedidoActual;

  constructor(private conexion:ConexionService) 
  {
    this.conexion.ListarEntidades("pedidos").subscribe(
      exito => {

       let todos = (exito as any).entidades;

       //Coloco solo los que tienen para cocinero y fueron aceptados por el mozo
        for(let i=0; i<todos.length;i++ )
        {
          console.log(todos[i]);
          if(todos[i].estadoCervecero=="tiene" && todos[i].estado=="aceptado")
          {
            this.pedidos.push(todos[i]);

          }

        }


      },
      error =>alert("Error" + JSON.stringify(error)) 


    );




  }
  Cerrar()
  {
    this.mostrarPedido=false;
  }

  VerPedido(pedido, codigo)
  {

    if(this.bloquearBotones)
    {
      return;
    }

    this.codigoPedidoActual = codigo;
    this.mostrarPedido=true;
    //this.unPedido = JSON.parse(pedido);
    let aux:any[]=  JSON.parse(pedido);
    console.log(pedido);
    //Recorro auxiliar para mostrar solo lo que es para cocinero
    this.unPedido=[];

    for(let i=0;i<aux.length;i++)
    {
      //  console.log(aux[i]);
      if(aux[i].es=="cerveza" )
      {
        this.unPedido.push(aux[i]);
      }
    }

    // console.log(this.unPedido);
  }
  ngOnInit() {
  }

  TerminarPedido(codigo, cocinero, bartender)
  {
    console.log("ESTADO COCINERO: " +cocinero);
    console.log("ESTADO Bartender: " + bartender);

    if((cocinero=="listo" || cocinero=="notiene") && (bartender=="listo" || bartender =="notiene"))
    {
      console.log("dos estados");
      let listo="listo";
      //Aca tendria que colocar el estado del pedido generar a listo
      this.conexion.EjecutarConsulta(`UPDATE \`pedidos\` SET \`estado\`=\'${listo}\', \`estadoCervecero\`='listo'  WHERE \`codigo\`=\'${codigo}\'`).subscribe(
        exito => {
    
          if ((exito as any).valido == "true") {
    
           
              alert("¡El pedido se registro como terminado!");
              
              
              }
             
              error => {
    
            //    this.ocultarSpinner = true;
                alert("Error" + error)
              }
            }
            );
    
    }
    else
    {
      console.log("Un estado");

      let listo="listo";
      //Aca tendria que poner solo mi estado a listo
      this.conexion.EjecutarConsulta(`UPDATE \`pedidos\` SET \`estadoCervecero\`=\'${listo}\'  WHERE \`codigo\`=\'${codigo}\'`).subscribe(
        exito => {
    
          if ((exito as any).valido == "true") {
    
           
              alert("¡El pedido se registro como terminado. bien!");
              
              
              }
             
              error => {
    
            //    this.ocultarSpinner = true;
                alert("Error" + error)
            
              }
            }
            );
    


    }


  }
}
