import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../conexion.service';
import { Location } from '@angular/common';
import { JwtHelperService } from "@auth0/angular-jwt";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
ocultarLogin:boolean;
ocultarRegistro:boolean;
correoLogin;
passLogin;
correoReg;
passReg;
nombreReg;
jwtHelper:any;

  constructor(private con:ConexionService) { 
     this.jwtHelper = new JwtHelperService();

    this.ocultarLogin = true;
    this.ocultarRegistro = true;
  }

  ngOnInit() {
  }
CerrarLogin()
{
  this.ocultarLogin = true;
}
mostrarLogin()
{
  this.ocultarLogin = false;
}
mostrarRegistro()
{
  this.ocultarRegistro = false;
}
CerrarRegistro()
{
  this.ocultarRegistro = true;
}
Loguear()
{
  if(!this.correoLogin || !this.passLogin) {

    alert("Ups..."+ "Todos los campos deben ser completados.");
    return;
  }
 this.con.Loguear( this.correoLogin,this.passLogin ).subscribe(
  exito=>{ 

  

  if((exito as any).valido == "false") {

  
  alert("Ups..."+ (exito as any).mensaje);
  } else {

    localStorage.setItem("token", (exito as any).token);

    //Deberia fijarme el tipo de usuario para saber donde lo redirecciono:
    let token= this.jwtHelper.decodeToken(localStorage.getItem("token"));
    console.log("mesaToken"+token.mesa);
      if(token.tipo=="cliente")
      {
        if(!token.mesa)
        {
          location.href = "./Inicial/ocupar";
        }
        else
        {
          location.href = "./Inicial/menu";
        }
      
       


      }
      if(token.tipo=="mozo")
      {
        location.href = "./Inicial/aceptarPedidos";


      }
      if(token.tipo=="cocinero")
      {
        location.href = "./Inicial/pedidosCocinero";


      }
      if(token.tipo=="administrador")
      {
        location.href = "./Inicial/mesasAdmin";


      }
      if(token.tipo=="bartender")
      {
        location.href = "./Inicial/pedidosBartender";


      }
      if(token.tipo=="cervecero")
      {
        location.href = "./Inicial/pedidosCervecero";


      }

  }
  
  },
 error=>alert("error" +  (error as any).mensaje)
  



 );
}
Registrar()
{
  if(!this.correoReg || !this.passReg) {
      
   alert("Ups..."+ "Todos los campos deben ser completados.");
    return;
  }
  this.con.Registrar( this.correoReg, this.nombreReg,this.passReg,).subscribe(
    exito=>{alert(JSON.stringify(exito));
   

      if((exito as any).valido == "false") {

       alert("Ups..."+ (exito as any).mensaje);
      } else {

       alert("Bien!"+ "Se ha creado tu usuario. En breve te dirigiremos a la página de logueo.");
        setTimeout(() => this.ocultarLogin=false, 1000);
      }


    },
    error=>alert("error" + (error as any).mensaje)
  );



}
}
