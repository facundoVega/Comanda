import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ConexionService } from '../conexion.service';

@Component({
  selector: 'app-alta-usuarios',
  templateUrl: './alta-usuarios.component.html',
  styleUrls: ['./alta-usuarios.component.css']
})
export class AltaUsuariosComponent implements OnInit {

  nombre;
  correo;
  tipo;
  clave;

  constructor(private conexion:ConexionService) { }

  ngOnInit() {
  }

  Cargar()
  {
    if(this.clave==undefined || this.correo==undefined || this.nombre==undefined || this.tipo == undefined)
    {
      alert("Debe completar todos los campos");
      return
    }

    let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (!emailRegex.test(this.correo)) {
    alert("Ingrese mail valido");
    this.correo="";
    return;
    }
    this.conexion.Registrar2( this.correo, this.nombre,this.clave,this.tipo).subscribe(
      exito=>{alert(JSON.stringify(exito));
     
  
        if((exito as any).valido == "false") {
  
         alert("Ups..."+ (exito as any).mensaje);
        } else {
  
         alert("Bien!"+ "Se ha creado el usuario.");
         this.correo="";
         this.nombre="";
         this.clave="";
         this.tipo="";
      
        }
  
  
      },
      error=>alert("error" + (error as any).mensaje)
    );
  

  }

}
