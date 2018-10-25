import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../conexion.service';
import { Location } from '@angular/common';

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

  constructor(private con:ConexionService) { 

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
    location.href = "./Inicial/juegos";
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

       alert("Bien!"+ "Se ha creado tu usuario. En breves te dirigiremos a la página de logueo.");
        setTimeout(() => location.href = "/", 1000);
      }


    },
    error=>alert("error" + (error as any).mensaje)
  );



}
}
