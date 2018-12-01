import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedidos-cocinero',
  templateUrl: './pedidos-cocinero.component.html',
  styleUrls: ['./pedidos-cocinero.component.css']
})
export class PedidosCocineroComponent implements OnInit {
pedidos:any[]=[];
unPedido:any[]=[];
mostrarPedido:boolean=false;
  constructor() { 

      let unPedido={
        pedido:	'[{"precio":"25,00","nombre":"Agua","para":"bartender","es":"bebida","cantidad":"1"},{"precio":"50,00","nombre":"Coca-cola","para":"bartender","es":"bebida","cantidad":"1"},{"precio":"125,00","nombre":" Alma Turdetana","para":"cervecero","es":"cerveza","cantidad":"1"},{"precio":"125,00","nombre":"Coctail frutas","para":"cocinero","es":"postre","cantidad":"1"},{"precio":"125,00","nombre":"asado","para":"cocinero","es":"postre","cantidad":"1"}]',
        estadoCocinero:"tiene",
        estadoBartender:"tiene",
        estadoCervecero:"tiene"

      }
      let otroPedido={
        pedido:	'[{"precio":"25,00","nombre":"Agua","para":"bartender","es":"bebida","cantidad":"1"},{"precio":"50,00","nombre":"Coca-cola","para":"bartender","es":"bebida","cantidad":"1"},{"precio":"125,00","nombre":" Alma Turdetana","para":"cervecero","es":"cerveza","cantidad":"1"}]',
        estadoCocinero:"no tiene",
        estadoBartender:"tiene",
        estadoCervecero:"tiene"

      }

      this.pedidos.push(unPedido);
      this.pedidos.push(otroPedido);
      this.pedidos.push(unPedido);
      this.pedidos.push(otroPedido);
      this.pedidos.push(unPedido);
      this.pedidos.push(otroPedido);

      //Aca verifico que el pedido sea para el cocinero
      let aux:any[] =[];
      for(let i=0;i<this.pedidos.length;i++)
      {
        if(this.pedidos[i].estadoCocinero == "tiene")
        {
          aux.push(this.pedidos[i]);
        }
      }
      //Tengo solo los pedidos que tienen que hacerse en la cocina
      this.pedidos = aux;


  }
  Cerrar()
  {
    this.mostrarPedido=false;
  }
  VerPedido(pedido)
  {
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

}
