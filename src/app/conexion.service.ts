import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  constructor(private http: HttpClient) { }

  public Registrar(correo:string, nombre:string,clave:string ) { return this.http.post("../../assets/api/registro", {"clave":clave, "correo":correo, "nombre":nombre}); }
  public Loguear(correo:string, clave:string ) { return this.http.post("https:../../assets/api/login", {"clave":clave, "correo":correo}); }
  

}
