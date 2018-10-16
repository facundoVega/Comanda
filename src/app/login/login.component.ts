import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
ocultarLogin:boolean;
ocultarRegistro:boolean;

  constructor() { 

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
irAPrincipal()
{
  location.href="./Inicial";
}
}
