import { Component } from '@angular/core';

@Component({
  selector: 'app-omnitrix',
  templateUrl: './omnitrix.component.html',
  styleUrls: ['./omnitrix.component.css']
})
export class OmnitrixComponent {
  showModal = false;
  selectedAlien = 'Humungousaur';

  aliens = [
    'Heatblast',
    'XLR8',
    'Four Arms',
    'Diamondhead',
    // Agrega más aliens aquí
  ];

  changeAlien(newAlien: string) {
    this.selectedAlien = newAlien;
    this.showModal = false;
  }
}
