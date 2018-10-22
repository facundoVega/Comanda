import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../conexion.service';
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: 'app-mis-puntos',
  templateUrl: './mis-puntos.component.html',
  styleUrls: ['./mis-puntos.component.css']
})
export class MisPuntosComponent implements OnInit {
  public token: any;
  memoria;
  adivina;
  agilidad;
  piedra;
  user;
  constructor(private conexion: ConexionService) {
   

   /* let JWTHelper = new JwtHelperService();
    this.token = JWTHelper.decodeToken(localStorage.getItem("token"));
    this.token.correo;
    this.conexion.ObtenerScore(this.token.correo, "puntajeJM").subscribe(
      exito => {

        // this.puntajes = (exito as any).puntajes;
        // this.dataSource = this.puntajes;
        this.memoria = (exito as any).puntaje;
      },
      error => alert("Error: " + JSON.stringify(error))
    );
    this.conexion.ObtenerScore(this.token.correo, "puntaje_AeN").subscribe(
      exito => {

        // this.puntajes = (exito as any).puntajes;
        // this.dataSource = this.puntajes;
        this.adivina = (exito as any).puntaje;
      },
      error => alert("Error: " + JSON.stringify(error))
    );
    this.conexion.ObtenerScore(this.token.correo, "puntaje_AA").subscribe(
      exito => {

        // this.puntajes = (exito as any).puntajes;
        // this.dataSource = this.puntajes;
        this.agilidad = (exito as any).puntaje;
      },
      error => alert("Error: " + JSON.stringify(error))
    );
    this.conexion.ObtenerScore(this.token.correo, "puntaje_PPT").subscribe(
      exito => {

        // this.puntajes = (exito as any).puntajes;
        // this.dataSource = this.puntajes;
        this.piedra= (exito as any).puntaje;
      },
      error => alert("Error: " + JSON.stringify(error))
    );*/
  }

  ngOnInit() {
  }

}
