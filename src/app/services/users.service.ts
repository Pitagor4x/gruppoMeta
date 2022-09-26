import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs'
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl: string = 'http://lab.gruppometa.it/test-js/'

  constructor(
    private httpClient: HttpClient
  ) { }

  registerUser(formValue: any): Promise<any> {
    return lastValueFrom(this.httpClient.post<any>('URL' + 'registration/', formValue))
  }

  login(formValue: any): Promise<User | any> {
    return lastValueFrom(this.httpClient.post<User | any>('URL' + 'registration/', formValue))
  }
}