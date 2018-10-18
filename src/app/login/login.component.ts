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
correoLogin:string="";
passLogin:string="";
correoReg:string="";
passReg:string="";
nombreReg:string="";

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
 this.con.Loguear(this.passLogin, this.correoLogin).subscribe(
  exito=>{ 

    localStorage.setItem("token", (exito as any).token);
  
  location.href = "./Inicial/juegos";
  },
 error=>alert("error" + JSON.stringify(error))
  



 );
}
Registrar()
{
  this.con.Registrar( this.correoReg, this.nombreReg,this.passReg,).subscribe(
    exito=>{alert(JSON.stringify(exito));
      location.href="/";

    },
    error=>alert("error" + JSON.stringify(error))
  );



}
}
