import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';


@Injectable({
  providedIn: 'root'
})

export class UsersService {
  
  constructor(private http:HttpClient) { }

  HttpUploadOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      'Content-Type': 'application/json'
    })
  }

  GetUsers(): Observable<any> {
    return this.http.get(`${environment.hostname}/users`)
  }

  CreateUsers(e: any): Observable<any> {
    return this.http.post(
      `${environment.hostname}/users`, e, this.HttpUploadOptions);
  }

}