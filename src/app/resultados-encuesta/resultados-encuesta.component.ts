import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ConexionService } from '../conexion.service';

@Component({
  selector: 'app-resultados-encuesta',
  templateUrl: './resultados-encuesta.component.html',
  styleUrls: ['./resultados-encuesta.component.css']
})
export class ResultadosEncuestaComponent implements OnInit {
  public pregunta1Labels: string[] = ['Puntuaron 1', 'Puntuaron 2','Puntuaron 3','Puntuaron 4', 'Puntuaron 5', 'Puntuaron 6', 'Puntuaron 7', 'Puntuaron 8', 'Puntuaron 9', 'Puntuaron 10'];
  public pregunta1Data: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  public pregunta2Labels: string[] = ['Puntuaron 1', 'Puntuaron 2','Puntuaron 3','Puntuaron 4', 'Puntuaron 5', 'Puntuaron 6', 'Puntuaron 7', 'Puntuaron 8', 'Puntuaron 9', 'Puntuaron 10'];
  public pregunta2Data: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  public pregunta3Labels: string[] = ['Puntuaron 1', 'Puntuaron 2','Puntuaron 3','Puntuaron 4', 'Puntuaron 5', 'Puntuaron 6', 'Puntuaron 7', 'Puntuaron 8', 'Puntuaron 9', 'Puntuaron 10'];
  public pregunta3Data: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  public pregunta4Labels: string[] = ['Puntuaron 1', 'Puntuaron 2','Puntuaron 3','Puntuaron 4', 'Puntuaron 5', 'Puntuaron 6', 'Puntuaron 7', 'Puntuaron 8', 'Puntuaron 9', 'Puntuaron 10'];
  public pregunta4Data: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
 // public doughnutChartType: string = 'doughnut';
 public doughnutChartType: string = 'bar';
 encuestas:any[]=[];

 mostrarChart1:boolean=true;
 mostrarChart2:boolean=false;
 mostrarChart3:boolean=false;
 mostrarChart4:boolean=false;


 //Contadores pregunta 1
 contPreg11=0;
 contPreg12=0;
 contPreg13=0;
 contPreg14=0;
 contPreg15=0;
 contPreg16=0;
 contPreg17=0;
 contPreg18=0;
 contPreg19=0;
 contPreg110=0;


 //Contadores pregunta 2
 contPreg21=0;
 contPreg22=0;
 contPreg23=0;
 contPreg24=0;
 contPreg25=0;
 contPreg26=0;
 contPreg27=0;
 contPreg28=0;
 contPreg29=0;
 contPreg210=0;


 //Contadores pregunta 3
 contPreg31=0;
 contPreg32=0;
 contPreg33=0;
 contPreg34=0;
 contPreg35=0;
 contPreg36=0;
 contPreg37=0;
 contPreg38=0;
 contPreg39=0;
 contPreg310=0;

 //Contadores pregunta 4
 contPreg41=0;
 contPreg42=0;
 contPreg43=0;
 contPreg44=0;
 contPreg45=0;
 contPreg46=0;
 contPreg47=0;
 contPreg48=0;
 contPreg49=0;
 contPreg410=0;

opiniones:any[]=[];
  constructor( private conexion:ConexionService) 
  {
    
    Chart.defaults.global.legend.display = false;


    //Traigo todas las encuestas
    this.conexion.ListarEntidades("encuestas").subscribe(
      exito => {

     this.encuestas = (exito as any).entidades;
        for(let i=0; i<this.encuestas.length;i++ )
        {
          //Sumo para la resp1
          let valor = parseInt(this.encuestas[i].resp1);

          switch(valor) {

            case 1:
              this.contPreg11++;
              break;
            case 2:
              this.contPreg12++;
              break;
            case 3:
              this.contPreg13++;
              break;
            case 4:
              this.contPreg14++;
              break;
            case 5:
              this.contPreg15++;
              break;
            case 6:
              this.contPreg16++;
              break;
            case 7:
              this.contPreg17++;
              break;
            case 8:
              this.contPreg18++;
              break;
            case 9:
              this.contPreg19++;
              break;
            case 10:
              this.contPreg110++;
              break;
            
          }
          //Sumo para la resp2
          let valor2 = parseInt(this.encuestas[i].resp2);

          switch(valor2) {

            case 1:
              this.contPreg21++;
              break;
            case 2:
              this.contPreg22++;
              break;
            case 3:
              this.contPreg23++;
              break;
            case 4:
              this.contPreg24++;
              break;
            case 5:
              this.contPreg25++;
              break;
            case 6:
              this.contPreg26++;
              break;
            case 7:
              this.contPreg27++;
              break;
            case 8:
              this.contPreg28++;
              break;
            case 9:
              this.contPreg29++;
              break;
            case 10:
              this.contPreg210++;
              break;
            
          }
          //Sumo para la resp3
          let valor3 = parseInt(this.encuestas[i].resp3);

          switch(valor3) {

            case 1:
              this.contPreg31++;
              break;
            case 2:
              this.contPreg32++;
              break;
            case 3:
              this.contPreg33++;
              break;
            case 4:
              this.contPreg34++;
              break;
            case 5:
              this.contPreg35++;
              break;
            case 6:
              this.contPreg36++;
              break;
            case 7:
              this.contPreg37++;
              break;
            case 8:
              this.contPreg38++;
              break;
            case 9:
              this.contPreg39++;
              break;
            case 10:
              this.contPreg310++;
              break;
            
          }
            //Sumo para la resp4
          let valor4 = parseInt(this.encuestas[i].resp4);

          switch(valor4) {

            case 1:
              this.contPreg41++;
              break;
            case 2:
              this.contPreg42++;
              break;
            case 3:
              this.contPreg43++;
              break;
            case 4:
              this.contPreg44++;
              break;
            case 5:
              this.contPreg45++;
              break;
            case 6:
              this.contPreg46++;
              break;
            case 7:
              this.contPreg47++;
              break;
            case 8:
              this.contPreg48++;
              break;
            case 9:
              this.contPreg49++;
              break;
            case 10:
              this.contPreg410++;
              break;
            
          }
     
        }

        this.pregunta1Data =[
          this.contPreg11,
          this.contPreg12,
          this.contPreg13,
          this.contPreg14,
          this.contPreg15,
          this.contPreg16,
          this.contPreg17,
          this.contPreg18,
          this.contPreg19,
          this.contPreg110,
        ];
        this.pregunta2Data =[
          this.contPreg21,
          this.contPreg22,
          this.contPreg23,
          this.contPreg24,
          this.contPreg25,
          this.contPreg26,
          this.contPreg27,
          this.contPreg28,
          this.contPreg29,
          this.contPreg210,
        ];

        this.pregunta3Data =[
          this.contPreg31,
          this.contPreg32,
          this.contPreg33,
          this.contPreg34,
          this.contPreg35,
          this.contPreg36,
          this.contPreg37,
          this.contPreg38,
          this.contPreg39,
          this.contPreg310,
        ];

        this.pregunta4Data =[
          this.contPreg41,
          this.contPreg42,
          this.contPreg43,
          this.contPreg44,
          this.contPreg45,
          this.contPreg46,
          this.contPreg47,
          this.contPreg48,
          this.contPreg49,
          this.contPreg410,
        ];


      },
      error =>alert("Error" + JSON.stringify(error)) 


    );


    //Traigo todos los resultados de las encuestas:



  }

  ngOnInit() {
  }
  public chartClicked(e: any): void {
    console.log(e);
  }

  Mostrar(valor)
  {
    console.log(valor);

    switch(valor) {
      case '1':
      
        this.mostrarChart2=false;
        this.mostrarChart3=false;
        this.mostrarChart4=false;
        this.mostrarChart1=true;
        break
      case '2':
      this.mostrarChart1=false;
     
      this.mostrarChart3=false;
      this.mostrarChart4=false;
      this.mostrarChart2=true;
      break
      case '3':
      this.mostrarChart1=false;
      this.mostrarChart2=false;
     
      this.mostrarChart4=false;
      this.mostrarChart3=true;
      break
      case '4':
      this.mostrarChart1=false;
      this.mostrarChart2=false;
      this.mostrarChart3=false;
      this.mostrarChart4=true;
      break
   
 
    }
  }
}
