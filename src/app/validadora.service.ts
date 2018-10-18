import { Injectable } from '@angular/core';
import { CanActivate,  Router } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";
import { NotFoundComponent } from './not-found/not-found.component';

@Injectable({
  providedIn: 'root'
})
export class ValidadoraService  implements CanActivate {

  constructor(private router:Router) { }

  canActivate() {

    let retorno;
    let jwtHelper = new JwtHelperService();

    try {

      jwtHelper.decodeToken(localStorage.getItem("token"));
      retorno = true;
    } catch (error) {
      retorno = false;
    }
    if(!retorno)
        this.router.navigate([NotFoundComponent]);
    return retorno;
  }
}
