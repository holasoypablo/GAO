import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn = false;
  private isBen10 = false;
  private nameUser = '';
  private apiUrl = 'http://localhost:8000/user';

  constructor(private http: HttpClient,
              private router: Router) {}

  login(username: string, password: string): Observable<any> {
    const credentials = { "email":username, "password":password };
    return this.http.post<any>(`${this.apiUrl}/login`, credentials).pipe(
      tap((response) => {
        this.isLoggedIn = response.userId != null;
        this.isBen10 = response.isAdmin;
        this.nameUser = response.name;
      }),
      catchError(() => of(false))
    );
  }

  async checkBen10(): Promise<boolean> {
    const credentials = {
      "email": localStorage.getItem('email'),
      "password": localStorage.getItem('password')
    };
    if(localStorage.getItem('email')==null)return false;
    try {
      const response = await this.http.post<any>(`${this.apiUrl}/login`, credentials).toPromise();
      this.isLoggedIn = response.userId != null;
      this.isBen10 = response.isAdmin;
      this.nameUser = response.name;
  
      return this.isBen10;
    } catch (error) {
      console.error('Error en la solicitud HTTP:', error);
      return false;
    }
  }
  
  
  logout(): void {
    this.isLoggedIn = false;
    localStorage.clear();
    this.router.navigate(['/login']);

  }
}
