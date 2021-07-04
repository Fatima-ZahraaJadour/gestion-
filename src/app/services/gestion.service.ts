import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GestionService {

  gestionUri = 'https://localhost:44348/api/gestion';

  constructor(private http: HttpClient) { }

  getNormalUsers(): Observable<any> {
    const token = localStorage.getItem('userToken');
    const header =  new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token
    });
    header.append('Authorization', 'Bearer ' + token);
    return this.http.get<any>(this.gestionUri, {headers: header});
  }
}
