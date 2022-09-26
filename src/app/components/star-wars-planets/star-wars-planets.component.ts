import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-wars-planets',
  templateUrl: './star-wars-planets.component.html',
  styleUrls: ['./star-wars-planets.component.css']
})
export class StarWarsPlanetsComponent implements OnInit {

  baseUrl: string = 'https://swapi.dev/api/planets/'

  constructor() { }

  ngOnInit(): void {
  }

}
