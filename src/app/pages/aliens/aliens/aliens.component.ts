import { Component } from '@angular/core';
import { AliensService } from 'src/app/services/aliens.service';

@Component({
  selector: 'app-aliens',
  templateUrl: './aliens.component.html',
  styleUrls: ['./aliens.component.scss']
})
export class AliensComponent {
  aliens: any[] = []; 
  filteredAliens: any[] = [];
  searchValue = '';
  sortAlphabetically = false;
  sortByUsage = false;
  sortByComments = false;

  constructor(private aliensService: AliensService) { }

  ngOnInit() {
    this.getAliens();
  }

  getAliens() {
    this.aliensService.getAll().subscribe(
      (data: any) => {
        this.aliens = data;
        this.filteredAliens = this.aliens;
      },
      (error) => {
        console.error('Error al obtener la lista de aliens:', error);
      }
    );
  }

  filterByName() {
    this.filteredAliens = this.aliens.filter(
      (alien) =>
        alien.name.toLowerCase().includes(this.searchValue.toLowerCase())
    );
    if (this.sortAlphabetically) {
      this.filteredAliens = this.filteredAliens.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    }
    if (this.sortByUsage) {
      this.filteredAliens = this.filteredAliens.sort((a, b) =>
          b.use - a.use
      );
    }
    if (this.sortByUsage) {
      this.filteredAliens = this.filteredAliens.sort((a, b) =>
        b.comments - a.comments
      );
    }
  }
}
