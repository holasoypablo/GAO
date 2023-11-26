import { Component, OnInit } from '@angular/core';
import { AlienService } from 'src/app/services/alien/alien.service';

@Component({
  selector: 'app-aliens-list',
  templateUrl: './aliens-list.component.html',
  styleUrls: ['./aliens-list.component.css']
})
export class AliensListComponent implements OnInit {
  aliens: any[] = []; // Inicializa la propiedad en el constructor.

  constructor(private aliensService: AlienService) { }

  ngOnInit() {
    this.getAliens();
  }

  getAliens() {
    this.aliensService.getAll().subscribe(
      (data: any) => {
        this.aliens = data; // Asigna la respuesta del servicio a la propiedad aliens.
        console.log(this.aliens);
      },
      (error) => {
        console.error('Error al obtener la lista de aliens:', error);
      }
    );
  }
}
