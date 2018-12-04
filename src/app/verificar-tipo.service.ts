import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";
import { LoginComponent } from './login/login.component';

@Injectable({
  providedIn: 'root'
})
export class VerificarTipoService implements CanActivate {

  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot) {

    let retorno: boolean = false;
    let JWTHelper = new JwtHelperService();
    let token: any;
    let roles = route.data["roles"];

    token = JWTHelper.decodeToken(localStorage.getItem("token"));

    for (let item of roles) {
      console.log("algo"+item);
      console.log("algo"+token.tipo);
      if (item == token.tipo) {

        retorno = true;
        console.log(retorno);
        break;
      }
    }

    if (!retorno)
    {
      console.log("retorno dentro del no retorno");
    localStorage.setItem("token", "");
    location.href ="/";

    return retorno;
  }
  return retorno;
  }
}
