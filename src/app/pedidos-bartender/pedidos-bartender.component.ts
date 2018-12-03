import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../conexion.service';

@Component({
  selector: 'app-pedidos-bartender',
  templateUrl: './pedidos-bartender.component.html',
  styleUrls: ['./pedidos-bartender.component.css']
})
export class PedidosBartenderComponent implements OnInit {

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
          if(todos[i].estadoBartender=="tiene" && todos[i].estado=="aceptado")
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
  ngOnInit() {
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
      if(aux[i].es=="bebida" )
      {
        this.unPedido.push(aux[i]);
      }
    }

    // console.log(this.unPedido);
  }

  TerminarPedido(codigo, cocinero, cervecero)
  {
    console.log("algo"+cocinero);
    console.log("algo"+cervecero);

    if(((cocinero =="listo" || cocinero=="notiene") && (cervecero=="listo" || cervecero =="notiene")))
    {
      console.log("DOS ESTADOS");
      let listo="listo";
      //Aca tendria que colocar el estado del pedido generar a listo
      this.conexion.EjecutarConsulta(`UPDATE \`pedidos\` SET \`estado\`=\'${listo}\', \`estadoBartender\` ='listo'  WHERE \`codigo\`=\'${codigo}\'`).subscribe(
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
    
   console.log("Subo los dos estados");
    }
    else
    {
      console.log("UN ESTADO");
      let listo="listo";
      //Aca tendria que poner solo mi estado a listo
      this.conexion.EjecutarConsulta(`UPDATE \`pedidos\` SET \`estadoBartender\`=\'${listo}\'  WHERE \`codigo\`=\'${codigo}\'`).subscribe(
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
