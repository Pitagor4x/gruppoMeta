import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl: string = 'https://swapi.dev/api/planets' /* ?search=tatooine */

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllPlanets(): Promise<any> {
    return lastValueFrom(this.httpClient.get(this.baseUrl))
  }

  getPlanetsByName(name: string = 'tatooine'): Promise<any> {

    return lastValueFrom(this.httpClient.get<any>(this.baseUrl + '?search=' + name))
  }

  getPages(pageUrl: string): Promise<any> {
    return lastValueFrom(this.httpClient.get<any>(pageUrl))
  }
}
