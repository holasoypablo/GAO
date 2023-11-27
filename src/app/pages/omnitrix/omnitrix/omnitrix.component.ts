import { Component } from '@angular/core';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { AliensService } from 'src/app/services/aliens.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-omnitrix',
  templateUrl: './omnitrix.component.html',
  styleUrls: ['./omnitrix.component.scss']
})
export class OmnitrixComponent {
  constructor(private aliensService: AliensService,
              private authService: AuthService) { }

  isBen10 = false;
  aliens: any = [];
  ngOnInit() {
      this.initInfo();
      this.getAliens();
      console.log(this.isBen10);
  }

  async initInfo(){
    this.isBen10 = await this.authService.checkBen10();
  }
  getAliens(){
    this.aliensService.getAll().subscribe(
      (data: any) => {
        this.aliens = data;
      },
      (error) => {
        console.error('Error al obtener la lista de aliens:', error);
      }
    );
  }
}
