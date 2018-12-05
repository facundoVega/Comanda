import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ConexionService } from '../conexion.service';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {
  resp1;
  resp2;
  resp3;
  resp4;
  resp5;
  usuario;
  constructor(private conexion:ConexionService) 
  {
    let JWTHelper = new JwtHelperService();
    this.usuario = JWTHelper.decodeToken(localStorage.getItem("token"));
  }



  ngOnInit() {
  }

  Enviar()
  {
    console.log(this.resp1);
    console.log(this.resp2);
    console.log(this.resp3);
    console.log(this.resp4);
    console.log(this.resp5);
    if(this.resp1 == undefined || this.resp2 == undefined || this.resp3 == undefined ||this.resp4 == undefined || this.resp5 == undefined)
    {
      alert("Debe responder a todas las preguntas");
      return
    }
    if(this.resp1<1 || this.resp1>10)
    {
      this.resp1=undefined;
      alert("Coloque un puntaje del 1 al 10 en la respuesta 1");
      return
    }
    if(this.resp2<1 || this.resp2>10)
    {
      this.resp2=undefined;
      alert("Coloque un puntaje del 1 al 10 en la respuesta 2");
      return
    }
    if(this.resp3<1 || this.resp3>10)
    {
      this.resp3=undefined;
      alert("Coloque un puntaje del 1 al 10 en la respuesta 3");
      return
    }
    if(this.resp4<1 || this.resp4>10)
    {
      this.resp4=undefined;
      alert("Coloque un puntaje del 1 al 10 en la respuesta 4");
      return
    }

    if(this.resp5.length>66)
    {
        "El texto que ingresa en la respuesta 5 no puede tener mas de 66 caracteres"
        return;
    }

    let consulta = `INSERT INTO \`encuestas\`(\`cliente\`, \`resp1\`, \`resp2\`, \`resp3\`, \`resp4\`,  \`resp5\`) VALUES (
      '${this.usuario.correo}',
      '${this.resp1}',
      '${this.resp2}',
      '${this.resp3}',
      '${this.resp4}',
      '${this.resp5}')`;


      this.conexion.EjecutarConsulta(consulta).subscribe(
        exito => {

  //        this.ocultarSpinner = true;

          if ((exito as any).valido == "true") {

          //  this.ocultarSpinner = true;
            alert("¡Gracias por realizar la encuesta!");

            //Borro el pedido actual
    
          localStorage.setItem("token", "");
          location.href ="/";

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
}
