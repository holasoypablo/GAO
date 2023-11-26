import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alien-detail',
  templateUrl: './alien-detail.component.html',
  styleUrls: ['./alien-detail.component.css']
})
export class AlienDetailComponent implements OnInit{
  ngOnInit(): void {
    console.log("hola desde details")
  }

}
