import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AliensService } from 'src/app/services/aliens.service';

@Component({
  selector: 'app-aliens-detail',
  templateUrl: './aliens-detail.component.html',
  styleUrls: ['./aliens-detail.component.scss']
})
export class AliensDetailComponent {

  constructor(private route: ActivatedRoute,
              private aliensService: AliensService) { }
  
  alien : any;
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id !== null) {
      this.getAlien(id);
    } else {
      console.error('ID del alien es nulo.');
    }
  }

  getAlien(id: string){
    this.aliensService.getAlien(id).subscribe(
      (data: any) => {
        this.alien = data;
      },
      (error) => {
        console.error('Error al obtener la lista de aliens:', error);
      }
    );
  }
}
