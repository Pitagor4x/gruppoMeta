import { Pipe, PipeTransform } from '@angular/core';
import { ApiService } from '../services/api.service';

@Pipe({
  name: 'films'
})
export class FilmsPipe implements PipeTransform {

  constructor(
    private apiService: ApiService
  ) {

  }
  async transform(url: string) {
    return await this.apiService.getFilms(url)
      .then((results) => {
        return results.title
      })
  };

}


