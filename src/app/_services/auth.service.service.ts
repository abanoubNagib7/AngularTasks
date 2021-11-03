import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../_models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  url = environment.baseUrl;

  constructor(private http: HttpClient) {}

  register(user: User): Observable<any> {
    return this.http.post(`${this.url}user/register`, user);
  }

  login(user: User): Observable<any> {
    return this.http.post(`${this.url}user/login`, user);
  }

  isAuthunticated(): boolean {
    if (sessionStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }
}
