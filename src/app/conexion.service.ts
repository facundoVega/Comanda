import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

const config ={"headers": new HttpHeaders({"token":localStorage.getItem("token")})}

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  constructor(private http: HttpClient) { }

  public Registrar(correo:string, nombre:string,clave:string ) { return this.http.post("../../assets/api/registro", {"clave":clave, "correo":correo, "nombre":nombre}); }
  public Loguear(correo:string, clave:string ) { return this.http.post("https:../../assets/api/login", {"clave":clave, "correo":correo}); }
  public CargarScore(correo:string, juego:string, puntaje:string){ return this.http.post("https:../../assets/api/score", {"correo":correo, "juego":juego, "puntaje":puntaje}, config);}
  public ObtenerScore(correo: string, juego: string) { return this.http.get(`../../assets/api/score?correo=${correo}&juego=${juego}`, config); }
}
