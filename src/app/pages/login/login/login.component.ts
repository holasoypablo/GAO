import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        if (response.userId!=null) {
          this.router.navigate(['/dashboard']);
          console.log("Inicio bueno")
        } else {
          console.log(response);
          console.error('Inicio de sesión fallido.');
        }
      },
      (error) => {
        console.error('Error al intentar iniciar sesión:', error);
      }
    );
  }
}
