import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs'
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl: string = '/test-js/'

  constructor(
    private httpClient: HttpClient
  ) { }

  registerUser(formValue: any): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    return lastValueFrom(this.httpClient.post<any>(this.baseUrl + 'registration/', formValue, httpOptions))
  }

  checkUsername(username: any): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    let body = { 'username': username }
    return lastValueFrom(this.httpClient.post<any>(this.baseUrl + 'check-username/', body, httpOptions))
  }
}
