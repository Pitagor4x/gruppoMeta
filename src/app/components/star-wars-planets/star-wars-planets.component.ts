import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-star-wars-planets',
  templateUrl: './star-wars-planets.component.html',
  styleUrls: ['./star-wars-planets.component.css']
})
export class StarWarsPlanetsComponent implements OnInit {

  myPlanets: [] | any
  planetFilms: [] | any
  pagePrev: any
  pageNext: any
  searchName: string = ""

  constructor(
    private apiService: ApiService
  ) { }

  async ngOnInit(): Promise<void> {
    this.myPlanets = await this.apiService.getAllPlanets()
    this.pagePrev = this.myPlanets?.previous
    this.pageNext = this.myPlanets?.next
    this.myPlanets = this.myPlanets?.results
    /* this.planetFilms = await this.apiService.getFilms((film: any) => {
      film.forEach(element => {

      });
    }) */


  }

  async getSearchForm(searchForm: any) {
    this.searchName = searchForm.value.search
    this.myPlanets = await this.apiService.getPlanetsByName(this.searchName)
    this.pagePrev = this.myPlanets.previous
    this.pageNext = this.myPlanets.next
    this.myPlanets = this.myPlanets.results
  }

  async prevPage() {
    this.myPlanets = await this.apiService.getPages(this.pagePrev)
    this.pagePrev = this.myPlanets.previous
    this.pageNext = this.myPlanets.next
    this.myPlanets = this.myPlanets.results
  }

  async nextPage() {
    this.myPlanets = await this.apiService.getPages(this.pageNext)
    this.pagePrev = this.myPlanets.previous
    this.pageNext = this.myPlanets.next
    this.myPlanets = this.myPlanets.results
  }
}
