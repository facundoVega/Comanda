import { Component, OnInit } from '@angular/core';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.css']
})
export class InicialComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  salir()
  {
    localStorage.setItem("token", "");
    location.href ="/";
  }

}
