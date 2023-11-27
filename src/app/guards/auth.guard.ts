// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(): boolean {
    let email = localStorage.getItem('email');
    let password = localStorage.getItem('password');
    if (email!=null && password!=null && this.authService.login(email,password)) {
      return true;
    } else {
      return false;
    }
  }
}
