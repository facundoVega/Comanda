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
puntos : any[]=[];
misPuntos:any;
user;
  constructor(private conexion: ConexionService) {
   
  /*  let JWTHelper = new JwtHelperService();
    this.token = JWTHelper.decodeToken(localStorage.getItem("token"));
    this.user =this.token.correo;
    this.conexion.ObtenerScores().subscribe(
      exito => {

        // this.puntajes = (exito as any).puntajes;
        // this.dataSource = this.puntajes;
        this.puntos = (exito as any).puntajes;
        for(let i=0;i<this.puntos.length;i++)
        {
          if(this.puntos[i].nombre ==this.token.nombre)
          {
            this.misPuntos=this.puntos[i];
          }
        }
      },
      error => alert("Error: " + JSON.stringify(error))
    );*/
  }
  
  

  ngOnInit() {
  }

}
