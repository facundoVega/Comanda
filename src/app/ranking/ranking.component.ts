import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../conexion.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {
  puntos : any[]=[];

  constructor(private conexion: ConexionService) { 
  
 
    this.conexion.ObtenerScores().subscribe(
      exito => {

    
        this.puntos = (exito as any).puntajes;
      
        
      },
      error => alert("Error: " + JSON.stringify(error))
    );

  }
  

  ngOnInit() {
  }
//https://horaciovega1991.000webhostapp.com/
}
