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
        if (response) {
          localStorage.setItem('email',this.username);
          localStorage.setItem('password',this.password);
          localStorage.setItem('name',response.name);
          this.router.navigate(['/aliens']);
        } else {
          this.router.navigate(['/signin']);
        }
      },
      (error) => {
        this.router.navigate(['/signin']);
      }
    );
  }
}
