import { Component, OnInit } from '@angular/core';
import { CanActivate,  Router } from "@angular/router";
import { PlatosComponent } from '../platos/platos.component'; 
import { Platos } from '../platosTodos';
import { Bebidas } from '../bebidasTodas';
import { Cervezas } from '../cervezasTodas';
import { Postres } from '../postresTodos';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ConexionService } from '../conexion.service';




@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public usuario: any;
  public mesaUsuario;

  postres:any[]=[];
  platos:any[]=[];
  bebidas:any[]=[];
  cervezas:any[]=[];

  eligioPlato:boolean=false;
  eligioBebidas:boolean=false;
  eligioPostre:boolean=false;
  eligioCervezas:boolean=false;


valorPlatos;
valorBebidas;
valorPostres;
valorCervezas;

pedido:any[]=[];
mostrarEnviar:boolean=false;

public desplegarPostres:boolean=false;
public desplegarPlatos:boolean=false;
  public desplegarBebidas:boolean=false;
  public desplegarCervezas:boolean=false;
  tituloMenu="";

  constructor(private router:Router, private conexion:ConexionService) {
    this.platos= Platos;
    this.bebidas= Bebidas;
    this.postres= Postres;
    this.cervezas=Cervezas;

    let JWTHelper = new JwtHelperService();
    this.usuario = JWTHelper.decodeToken(localStorage.getItem("token"));

    //Saco la mesa del usuario actual

    this.conexion.ListarEntidades("usuarios").subscribe(
      exito => {

    //    this.ocultarSpinner = true;

        for (let item of (exito as any).entidades) {

          if (item.correo == this.usuario.correo) {

            this.mesaUsuario = item.mesa;
            break;
          }
        }
      },
      error => {

     //   this.ocultarSpinner = true;
        alert("Error: " + JSON.stringify(error))
      }
    );


    //this.miArray=Platos;
   }

  ngOnInit() {
  }

  /*Despliega el menu de platos*/
  Platos()
  {
    this.tituloMenu="Platos";
   
    //Me fijo si esta seteado el campo elegido y le pongo la sombra negre}a antes de desplegarlo

    this.desplegarBebidas=false;
    this.desplegarPostres=false;
    this.desplegarPlatos=true;
    this.desplegarCervezas=false;
  
  }

   /*Despliega el menu de postres*/
  Postres()
  {
    this.tituloMenu="Postres";
    this.desplegarPlatos=false;
    this.desplegarBebidas=false;
    this.desplegarPostres=true;
    this.desplegarCervezas=false;

  }

   /*Despliega el menu de bebidas*/
  Bebidas()
  {
    this.tituloMenu="Bebidas";

    this.desplegarPlatos=false;
    this.desplegarPostres=false;
    this.desplegarBebidas=true;
    this.desplegarCervezas=false;

    
  }

   /*Despliega el menu de cervezas*/
  Cervezas()
  {
    this.tituloMenu="Cervezas artesanales";

   // this.miArray = Cervezas;
    this.desplegarCervezas=true;
    this.desplegarPlatos=false;
    this.desplegarPostres=false;
    this.desplegarBebidas=false;

  }


  Cerrar()
  {
    this.desplegarPlatos=false;
    this.desplegarBebidas=false;
    this.desplegarCervezas=false;
    this.desplegarPostres=false;
  }

  Cancelar(que)
  {
    if(que=="platos")
    {  
      this.desplegarPlatos=false;
      this.valorPlatos=0;
      this.eligioPlato=false;

      //Este for es para quitar la sombra que define al elegido
      for(let i=0;i<this.platos.length;i++)
      {
        
        document.getElementById(this.platos[i].id).classList.remove("mostrarElegidoB");
        
      }

      //Este for es para quitar los platos del pedido ya que se cancelaron
      let aux :any[]=[];

      for(let i=0;i<this.pedido.length;i++)
      {
        if(this.pedido[i].es!="plato")
        {
          aux.push(this.pedido[i]);
        }

      }
      this.pedido = aux;

    }
    if(que=="bebidas")
    { 
      this.desplegarBebidas=false;
     this.valorBebidas=0;
     this.eligioBebidas=false;

      for(let i=0;i<this.bebidas.length;i++)
      {
        
        document.getElementById(this.bebidas[i].id).classList.remove("mostrarElegidoB");
        
      }
       //Este for es para quitar los platos del pedido ya que se cancelaron
       let aux :any[]=[];

       for(let i=0;i<this.pedido.length;i++)
       {
         if(this.pedido[i].es!="bebida")
         {
           aux.push(this.pedido[i]);
         }
 
       }
       this.pedido = aux;

    }
    if(que=="postres")
    { 
      this.desplegarPostres=false;
     this.valorPostres=0;
     this.eligioPostre=false;

      for(let i=0;i<this.postres.length;i++)
      {
        
        document.getElementById(this.postres[i].id).classList.remove("mostrarElegidoB");
        
      }
       //Este for es para quitar los platos del pedido ya que se cancelaron
       let aux :any[]=[];

       for(let i=0;i<this.pedido.length;i++)
       {
         if(this.pedido[i].es!="postre")
         {
           aux.push(this.pedido[i]);
         }
 
       }
       this.pedido = aux;

    }
    if(que=="cervezas")
    { 
      this.desplegarCervezas=false;
     this.valorCervezas=0;
      this.eligioCervezas=false;
      for(let i=0;i<this.cervezas.length;i++)
      {
        
        document.getElementById(this.cervezas[i].id).classList.remove("mostrarElegidoB");
        
      }
       //Este for es para quitar los platos del pedido ya que se cancelaron
       let aux :any[]=[];

       for(let i=0;i<this.pedido.length;i++)
       {
         if(this.pedido[i].es!="cerveza")
         {
           aux.push(this.pedido[i]);
         }
 
       }
       this.pedido = aux;

    }

    if(this.pedido.length==0)
    {
      this.mostrarEnviar=false;
    }
    console.log(this.pedido);
  }
  EnviarPedido()
  {
    if(this.pedido.length<1)
    {
      alert("No hay pedido que enviar!!");
      return
    }
  
    console.log(this.mesaUsuario);

    
    if(!this.mesaUsuario)
    {
      alert("Usted no tiene una mesa todavia, Ocupe una mesa antes de pedir.");
      return
    }

    let randomString = this.RandomString(5, '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ');

    let estadoBartender =" no tiene";
    let estadoCocinero = " no tiene";
    let estadoCervecero=" no tiene";
    //Recorro los pedidios para determinar los clientes que tienen que prepararlo
    for(let i=0;i<this.pedido.length;i++)
    {
      if(this.pedido[i].es=="plato" || this.pedido[i].es=="postre")
      {
        estadoCocinero="tiene";

      }
      if(this.pedido[i].es=="bebida")
      {
        estadoBartender ="tiene";
      }
      if(this.pedido[i].es=="cerveza")
      {

        estadoCervecero="tiene";
      }
    

    }






    //Convierto el pedido en una cadena para subirla a la base de datos
    let cadena = JSON.stringify(this.pedido);

    let consulta = `INSERT INTO \`pedidos\`(\`codigo\`, \`cliente\`, \`mesa\`, \`pedido\`, \`estadoCocinero\`,  \`estadoBartender\`,\`estadoCervecero\`, \`estado\`) VALUES (
      '${randomString}',
      '${this.usuario.correo}',
     
      '${this.mesaUsuario}',
      '${cadena}',
      '${estadoCocinero}',
      '${estadoBartender}',
      '${estadoCervecero}',
      'espera')`;

//      this.ocultarSpinner = false;

      this.conexion.EjecutarConsulta(consulta).subscribe(
        exito => {

  //        this.ocultarSpinner = true;

          if ((exito as any).valido == "true") {

          //  this.ocultarSpinner = true;
            alert("Bien!"+ `Se ha registrado tu pedido.`);
            //Borro el pedido actual
            this.pedido=[];
            this.Cancelar("platos");
            this.Cancelar("bebidas");
            this.Cancelar("postres");
            this.Cancelar("cervezas");


          } else {
            //this.ocultarSpinner = true;
            alert("Error " + (exito as any).mensaje);
          }
        },
        error => {

      //    this.ocultarSpinner = true;
          alert("Error: " + JSON.stringify(error))
        }
      );


  }
  Aceptar(que)
  {
    if(que=="platos")
    {  
      if(this.eligioPlato==false)
      {
        alert("No eligio plato para salir pusle cancelar");
        return
      }
      this.desplegarPlatos=false;
    

    }
    if(que=="bebidas")
    { 

      if(this.eligioBebidas==false)
      {
        alert("No eligio bebidas para salir, pulse cancelar");
        return
      }
      this.desplegarBebidas=false;
     

    

    }
    if(que=="postres")
    { 
      if(this.eligioPostre==false)
      {
        alert("No eligio postres, para salir pulse cancelar");
        return
      }
      this.desplegarPostres=false;

    }
    if(que=="cervezas")
    { 
      if(this.eligioCervezas==false)
      {
        alert("No eligio cervezas, para salir pulse cancelar");
        return
      }
      this.desplegarCervezas=false;
    }
  }
  ElegirPlatos(precio, nombre, para, id, cantidad)
  {
    if(cantidad==0 || cantidad==undefined ||cantidad<0)
    {
      alert("No ingreso ninguna cantidad, o la cantidad ingresada no es válida");

      return;
    }

    this.eligioPlato=true;


    //Creo un objeto con el pedidio actual
    let pedido = {precio:precio, nombre:nombre, para:para, es:"plato", cantidad:cantidad};
    //lo cargo al array de pedidos
    this.pedido.push(pedido);

    let cadena = JSON.stringify(this.pedido);
    console.log("La cadena resultante del array de pedidos es:" + cadena);

    //Doy el efecto de elegido
    document.getElementById(id).classList.add("mostrarElegidoB");
    if(this.pedido.length>0)
    {
      this.mostrarEnviar=true;
    }
    console.log(this.pedido);

  }
  ElegirPostres(precio, nombre, para, id, cantidad)
  {
    if(cantidad==0 || cantidad==undefined ||cantidad<0)
    {
      alert("No ingreso ninguna cantidad, o la cantidad ingresada no es válida");

      return;
    }

    this.eligioPostre=true;


    //Creo un objeto con el pedidio actual
    let pedido = {precio:precio, nombre:nombre, para:para, es:"postre", cantidad:cantidad};
    //lo cargo al array de pedidos
    this.pedido.push(pedido);

    let cadena = JSON.stringify(this.pedido);
    console.log("La cadena resultante del array de pedidos es:" + cadena);

    //Doy el efecto de elegido
    document.getElementById(id).classList.add("mostrarElegidoB");
    if(this.pedido.length>0)
    {
      this.mostrarEnviar=true;
    }
    console.log(this.pedido);

  }

  ElegirBebidas(precio, nombre, para, id, cantidad)
  {
    if(cantidad==0 || cantidad==undefined ||cantidad<0)
    {
      alert("No ingreso ninguna cantidad, o la cantidad ingresada no es válida");

      return;
    }

  this.eligioBebidas=true;

    //Creo un objeto con el pedidio actual
    let pedido = {precio:precio, nombre:nombre, para:para, es:"bebida", cantidad:cantidad};
    //lo cargo al array de pedidos
    this.pedido.push(pedido);

    let cadena = JSON.stringify(this.pedido);
    console.log("La cadena resultante del array de pedidos es:" + cadena);

    //Doy el efecto de elegido
    document.getElementById(id).classList.add("mostrarElegidoB");
    if(this.pedido.length>0)
    {
      this.mostrarEnviar=true;
    }
    console.log(this.pedido);

  }

  ElegirCervezas(precio, nombre, para, id, cantidad)
  {
    if(cantidad==0 || cantidad==undefined ||cantidad<0)
    {
      alert("No ingreso ninguna cantidad, o la cantidad ingresada no es válida");

      return;
    }

 this.eligioCervezas=true;


    //Creo un objeto con el pedidio actual
    let pedido = {precio:precio, nombre:nombre, para:para, es:"cerveza", cantidad:cantidad};
    //lo cargo al array de pedidos
    this.pedido.push(pedido);

    let cadena = JSON.stringify(this.pedido);
    console.log("La cadena resultante del array de pedidos es:" + cadena);

    //Doy el efecto de elegido
    document.getElementById(id).classList.add("mostrarElegidoB");
    if(this.pedido.length>0)
    {
      this.mostrarEnviar=true;
    }
 console.log(this.pedido);
  }

  //Genera el codigo aleatorio
  RandomString(length, chars) {
    var result = '';
    for (let i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
  }


}
