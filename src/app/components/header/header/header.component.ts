import { Component } from '@angular/core';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { AliensService } from 'src/app/services/aliens.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private authService: AuthService,
    private authGuard: AuthGuard) { }
  ben10 = false;
  login = false;
  name = '';

  ngOnInit() {
    this.initInfo();
  }

  async initInfo(){
    this.login = this.authGuard.canActivate();
    if(this.login){
      this.name = ""+localStorage.getItem('name');
    }
    this.ben10 = await this.authService.checkBen10();
  }
  logout(){
    this.authService.logout();
    this.login = false;
    this.name = '';
  }
  
}
