import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../conexion.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-mesas-admin',
  templateUrl: './mesas-admin.component.html',
  styleUrls: ['./mesas-admin.component.css']
})
export class MesasAdminComponent implements OnInit {
  
  mesas:any[]=[];
  public usuario: any;
  tieneMesa:boolean=false;
  mostrarBoton:boolean=false;
  mostrarSpinner:boolean=false;


  constructor(private conexion:ConexionService) 
  {
   



 this.mostrarSpinner=true;

    
   this.conexion.ListarEntidades("mesas").subscribe(
      exito => {

       let mesasTodas = (exito as any).entidades;
       this.mesas=mesasTodas;
        this.mostrarSpinner=false;
        for(let i=0; i<mesasTodas.length;i++ )
        {
          console.log(mesasTodas[i]);
          if(mesasTodas[i].estado=="cerrar")
          {
            this.mesas[i].mostrarBoton=true;
           

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

  Cerrar(codigo)
  {
    let libre="libre";
    let cliente="";
    this.conexion.EjecutarConsulta(`UPDATE \`mesas\` SET \`estado\`=\'${libre}\', \`cliente\`=\'${cliente}\' WHERE \`codigo\`=\'${codigo}\'`).subscribe(
      exito => {

        if ((exito as any).valido == "true") {

        alert("¡La mesa ha sido cerrada!");
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
