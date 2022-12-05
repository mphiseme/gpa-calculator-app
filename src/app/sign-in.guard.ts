import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})

export class SignInGuard implements CanActivate {
  constructor(private router:Router,
    private cookieService: CookieService){

    }

      canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot){
      const sessionUser = this.cookieService.get('session_user');

      if(sessionUser){
        return true
      }else{
        this.router.navigate(['/session/sign-in']);
        return false;

      }
    }
}
