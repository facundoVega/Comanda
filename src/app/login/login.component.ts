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
activarSpinnerLogin:boolean=false;

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
 
  let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  if (!emailRegex.test(this.correoLogin)) {
  alert("Ingrese mail valido");
  this.correoLogin="";
  return;
  }

  this.activarSpinnerLogin=true;
 this.con.Loguear( this.correoLogin,this.passLogin ).subscribe(
  exito=>{ 

  

  if((exito as any).valido == "false") {

  
  alert("Ups..."+ (exito as any).mensaje);
  this.activarSpinnerLogin=false;
  } else {

    this.activarSpinnerLogin=false;
  
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
 error=>{alert("error" +  (error as any).mensaje)
  

  this.activarSpinnerLogin=false;
 }

 );
 
}
Registrar()
{
  if(!this.correoReg || !this.passReg) {
      
   alert("Ups..."+ "Todos los campos deben ser completados.");
    return;
  }
  let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  if (!emailRegex.test(this.correoReg)) {
  alert("Ingrese mail valido");
  this.correoReg="";
  return;
  }



  this.activarSpinnerLogin=true;
  this.con.Registrar( this.correoReg, this.nombreReg,this.passReg,).subscribe(
    exito=>{alert(JSON.stringify(exito));
   
      this.activarSpinnerLogin=false;
      if((exito as any).valido == "false") {

       alert("Ups..."+ (exito as any).mensaje);
       this.activarSpinnerLogin=false;
      } else {

       alert("Bien!"+ "Se ha creado tu usuario. En breve te dirigiremos a la página de logueo.");
        setTimeout(() =>{ this.ocultarLogin=true;this.ocultarRegistro=true;}, 1000);
        this.activarSpinnerLogin=false;
      }


    },
    error=>{alert("error" + (error as any).mensaje)
    this.activarSpinnerLogin=false;
  }
  );



}

  SubirActividad()
  {
    var fecha = new Date();


    let ahora =
    {
      fecha:fecha.getDate()+"/"+(fecha.getMonth()+1)+"/"+fecha.getFullYear(),
      hora:fecha.getHours()+": "+fecha.getMinutes()
    }
    let cadena = JSON.stringify(ahora);
    
    
    let token= this.jwtHelper.decodeToken(localStorage.getItem("token"));
    let actividad="login";

    let consulta = `INSERT INTO \`actividades\` (\`cliente\`, \`fecha\`, \`actividad\`) VALUES (
      '${token.correo}',
      '${cadena}',
     '${actividad}')`;

     this.con.EjecutarConsulta(consulta).subscribe(
      exito => {

//        this.ocultarSpinner = true;

        if ((exito as any).valido == "true") {

        //  this.ocultarSpinner = true;
     //     alert("¡Gracias por realizar la encuesta!");

          //Borro el pedido actual
  
       //Hago lo del login
       alert("Se subio la actividad");

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

  Setear(valor)
  {
    switch(valor)
    {
      case 'mozo':
        this.correoLogin="mozo@mozo.com";
        this.passLogin = "mozo";
        break;
      
      case 'cocinero':
        this.correoLogin="cocinero@cocinero.com";
        this.passLogin="cocinero";
        break;

      case 'bartender':
        this.correoLogin="bartender@bartender.com";
        this.passLogin="bartender";
        break;

      case 'cliente':
      this.correoLogin="cliente@cliente.com";
      this.passLogin="cliente";
      break;

      case 'admin':
      this.correoLogin = "admin@admin.com";
      this.passLogin ="admin";
      break;

      case 'cervecero':
      this.correoLogin = "cervecero@cervecero.com";
      this.passLogin ="cervecero";
      break;


    }

  }

}
