import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../conexion.service';
import { JwtHelperService } from '@auth0/angular-jwt';



@Component({
  selector: 'app-ocupar-mesa',
  templateUrl: './ocupar-mesa.component.html',
  styleUrls: ['./ocupar-mesa.component.css']
})
export class OcuparMesaComponent implements OnInit {

  mesas:any[]=[];
  public usuario: any;


  constructor( private conexion:ConexionService) { 

    let JWTHelper = new JwtHelperService();
    this.usuario = JWTHelper.decodeToken(localStorage.getItem("token"));

 
   this.conexion.ListarEntidades("mesas").subscribe(
      exito => {

       let mesasTodas = (exito as any).entidades;
        for(let i=0; i<mesasTodas.length;i++ )
        {
          console.log(mesasTodas[i]);
          if(mesasTodas[i].estado=="libre")
          {
            this.mesas.push(mesasTodas[i]);

          }

        }


      },
      error =>alert("Error" + JSON.stringify(error)) 


    );


  }

  ngOnInit() {
  }

  Ocupar(clave)
  {
    this.conexion.EjecutarConsulta(`UPDATE \`mesas\` SET \`cliente\`=\'${this.usuario.correo}\', \`estado\`='ocupada' WHERE \`codigo\`=\'${clave}\'`).subscribe(
      exito => {

        if ((exito as any).valido == "true") {

          this.conexion.EjecutarConsulta(`UPDATE \`usuarios\` SET \`mesa\`=\'${clave}\' WHERE \`correo\`=\'${this.usuario.correo}\'`).subscribe(
            exito => {


              if ((exito as any).valido == "true") {

               alert("Bien!" + `Haz ocupado la mesa ${clave}.`);
               location.href = "./Inicial/menu";


              } else {

                alert("Error" + (exito as any).mensaje);
              }
            },
            error => {

          //    this.ocultarSpinner = true;
              alert("Error" + error)
            }
          );
        } else {

         // this.ocultarSpinner = true;
          alert("Error" + (exito as any).mensaje);
        }

      },

      error => {

//        this.ocultarSpinner = true;
        alert("Error" + error)
      }
    );
  }

}
