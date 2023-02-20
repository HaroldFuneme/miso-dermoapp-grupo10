import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Auth } from 'aws-amplify';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router){}

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree> {
    try {
      // Comprobar si el usuario está autenticado
      const session = await Auth.currentSession();
      return true;
    } catch (err) {
      // Si el usuario no está autenticado, redirigir a la página de inicio de sesión
      return this.router.createUrlTree(['/signin']);
    }
  }

}
