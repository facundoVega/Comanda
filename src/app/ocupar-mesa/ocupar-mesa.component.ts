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
tieneMesa:boolean=false;
mostrarSpinner:boolean=false;


  constructor( private conexion:ConexionService) { 
    this.mostrarSpinner=true;

    
    let JWTHelper = new JwtHelperService();
    this.usuario = JWTHelper.decodeToken(localStorage.getItem("token"));

 

    
   this.conexion.ListarEntidades("mesas").subscribe(
      exito => {

          this.mostrarSpinner=false;
       let mesasTodas = (exito as any).entidades;
        for(let i=0; i<mesasTodas.length;i++ )
        {
          console.log(mesasTodas[i]);
          if(mesasTodas[i].estado=="libre")
          {
            this.mesas.push(mesasTodas[i]);

          }
          //Me fijo si el usuario actual tiene una mesa ocupada
          if(mesasTodas[i].estado=="ocupada" && mesasTodas[i].cliente==this.usuario.correo )
          {
            this.tieneMesa=true;
          }
        }


      },
      error =>{
      
      alert("Error" + JSON.stringify(error)) 
      this.mostrarSpinner=false;

      }
    );


  }

  ngOnInit() {
  }

  Ocupar(clave)
  {
    if(this.tieneMesa)
    {
      alert("Usted ya tiene una mesa");
      return;
    }
    

    this.conexion.EjecutarConsulta(`UPDATE \`mesas\` SET \`cliente\`=\'${this.usuario.correo}\', \`estado\`='ocupada' WHERE \`codigo\`=\'${clave}\'`).subscribe(
      exito => {

        if ((exito as any).valido == "true") {

          this.conexion.EjecutarConsulta(`UPDATE \`usuarios\` SET \`mesa\`=\'${clave}\' WHERE \`correo\`=\'${this.usuario.correo}\'`).subscribe(
            exito => {


              if ((exito as any).valido == "true") {


               alert("Bien!" + `Haz ocupado la mesa ${clave}.`);
               location.href = "./Inicial/menu";
                this.tieneMesa=true;

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
