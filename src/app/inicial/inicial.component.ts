import { Component, OnInit } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { JwtHelperService } from "@auth0/angular-jwt";





@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.css']
})
export class InicialComponent implements OnInit {


setearMargen=false;
nombre="facu";
tipo="cliente";

menu1;
menu2="nada";
menu3;
menu4;
ruta1;
ruta2;
ruta3;
ruta4;

ocultarRuta1:boolean=false;
ocultarRuta2:boolean=false;
ocultarRuta3:boolean=false;
ocultarRuta4:boolean=false;


  constructor(public breakpointObserver: BreakpointObserver) {
    let jwtHelper = new JwtHelperService();
    try {

     let token= jwtHelper.decodeToken(localStorage.getItem("token"));
     
     this.tipo=token.tipo;
    this.nombre=token.nombre;

    if(this.tipo=="cliente")
    {
      this.ruta1="./menu";
      this.menu1="Pedir";


      this.menu2="Ocupar mesa"
      this.ruta2 ="ocupar";

      this.menu3="Pagar";
      this.ruta3="cuenta";


      this.menu4="Estado pedido";
      this.ruta4="estadoPedido";
    }

    if(this.tipo=="mozo")
    {
      this.menu1 ="Pedidos p/Aceptar"
      this.menu2 ="Pedidos p/Entregar"

      this.ruta1="aceptarPedidos";
      this.ruta2="entregarPedidos";
      this.ocultarRuta3=true;
      this.ocultarRuta4=true;
    }
    if(this.tipo=="cocinero" ||this.tipo=="bartender" || this.tipo=="cervecero") 
    {
      this.ocultarRuta1=true;
      this.ocultarRuta2=true;
      this.ocultarRuta3=true;
      this.ocultarRuta4=true;



    }

    if(this.tipo=="administrador")
    {
    
      this.ruta1="mesasAdmin";
      this.menu1="mesas";

      this.ruta2="alta";
      this.menu2="alta usuarios";
    
    

      this.ocultarRuta3=true;
      this.ocultarRuta4=true;
    }

    } catch (error) {
   console.log("error");
    }

   }

  ngOnInit() {
    /*this.breakpointObserver
      .observe(['(max-width: 1125px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.setearMargen=true;
          alert("Margeeen ");
        } 
        else
        {
          this.setearMargen=false;
        }
      });*/
  }
  salir()
  {
    localStorage.setItem("token", "");
    location.href ="/";
  }

}
