import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../conexion.service';


@Component({
  selector: 'app-pedidos-cocinero',
  templateUrl: './pedidos-cocinero.component.html',
  styleUrls: ['./pedidos-cocinero.component.css']
})
export class PedidosCocineroComponent implements OnInit {
pedidos:any[]=[];
unPedido:any[]=[];
codigoPedidoActual;

mostrarPedido:boolean=false;
mostrarTemporizador:boolean=false;
bloquearBotones:boolean=false;
  constructor(private conexion:ConexionService ) { 

      //Traigo los pedidos:
      this.conexion.ListarEntidades("pedidos").subscribe(
        exito => {
  
         let todos = (exito as any).entidades;

         //Coloco solo los que tienen para cocinero y fueron aceptados por el mozo
          for(let i=0; i<todos.length;i++ )
          {
            console.log(todos[i]);
            if(todos[i].estadoCocinero=="tiene" && todos[i].estado=="aceptado")
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
      if(aux[i].es=="plato" || aux[i].es=="postre")
      {
        this.unPedido.push(aux[i]);
      }
    }

    // console.log(this.unPedido);
  }

  ngOnInit() {
  }

  mostrarTiempo()
  {
    this.bloquearBotones=true;
    this.mostrarTemporizador=true;
   this.mostrarPedido=false;



    
  }

  AceptarTiempo(valor)
  {
    if(valor<0 || valor>60)
    {
      alert("El tiempo ingresado es demasiado alto o no es valido");
      return;
    }
    this.conexion.EjecutarConsulta(`UPDATE \`pedidos\` SET \`tiempo\`=\'${valor}\'  WHERE \`codigo\`=\'${this.codigoPedidoActual}\'`).subscribe(
      exito => {
  
        if ((exito as any).valido == "true") {
  
         
            alert("¡El tiempo se ha registrado bien!");
          this.CerrarTiempo();
            
            
            }
           
            error => {
  
          //    this.ocultarSpinner = true;
              alert("Error" + error)
            this.CerrarTiempo();
            }
          }
          );
  


  }

  CerrarTiempo()
  {
    this.bloquearBotones=false;
    this.mostrarTemporizador=false;
    this.mostrarPedido=true;
  }

  TerminarPedido(codigo,bartender, cervecero)
  {
    console.log("Estado bartender: " + bartender);
    console.log("Estado cervecero: " + cervecero);

    if((bartender=="listo" || bartender=="notiene") && (cervecero=="listo" || cervecero =="notiene"))
    {
      let listo="listo";
      //Aca tendria que colocar el estado del pedido generar a listo
      this.conexion.EjecutarConsulta(`UPDATE \`pedidos\` SET \`estado\`=\'${listo}\', \`estadoCocinero\`='listo'  WHERE \`codigo\`=\'${codigo}\'`).subscribe(
        exito => {
    
          if ((exito as any).valido == "true") {
    
           
              alert("¡El pedido se registro como terminado!");
           
              
              
              }
             
              error => {
    
            //    this.ocultarSpinner = true;
                alert("Error" + error)
              this.CerrarTiempo();
              }
            }
            );
    
    }
    else
    {
      let listo="listo";
      //Aca tendria que poner solo mi estado a listo
      this.conexion.EjecutarConsulta(`UPDATE \`pedidos\` SET \`estadoCocinero\`=\'${listo}\'  WHERE \`codigo\`=\'${codigo}\'`).subscribe(
        exito => {
    
          if ((exito as any).valido == "true") {
    
           
              alert("¡El pedido se registro como terminado. bien!");
            this.CerrarTiempo();
              
              
              }
             
              error => {
    
            //    this.ocultarSpinner = true;
                alert("Error" + error)
              this.CerrarTiempo();
              }
            }
            );
    


    }


  }

}
