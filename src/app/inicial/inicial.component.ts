import { Component, OnInit } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.css']
})
export class InicialComponent implements OnInit {
setearMargen=false;
  constructor(public breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    /*this.breakpointObserver
      .observe(['(max-width: 1125px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.setearMargen=true;
          alert("Margeeen ");
        } 
        else
        {
          this.setearMargen=false;
        }
      });*/
  }
  salir()
  {
    localStorage.setItem("token", "");
    location.href ="/";
  }

}
