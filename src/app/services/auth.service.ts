import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { User } from '../models/User';
import { Utilisateur } from '../models/Utilisateur';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const header =  new HttpHeaders({
    'Content-Type': 'application/json',
  }).set(
    'Authorization',
     localStorage.getItem('userToken')
  );
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUri = 'https://localhost:44348/api/connection';
  signupUri = 'https://localhost:44348/api/register';

  constructor(private http: HttpClient) { }

  saveUser(user: User): Observable<any> {
    return this.http.post<any>(this.authUri, user, httpOptions)  ;
  }

  signUpUser(user: Utilisateur): Observable<any> {
    return this.http.post<any>(this.signupUri, user, httpOptions);
  }

  getUserInfo(): Observable<any> {
    const token = localStorage.getItem('userToken');
    const header =  new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token
    });
    console.log(header);
    header.append('Authorization', 'Bearer ' + token);
    console.log(header);
    return this.http.get<any>(this.authUri, {headers: header});
  }
}
