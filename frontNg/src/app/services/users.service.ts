import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

//http = service ????


@Injectable({
  providedIn: 'root'
})

export class UsersService {
  
  constructor(private http:HttpClient)
  //constructor(private http:HttpClient)
  { }

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
    //return this.http.get(`http://localhost:3001/users`)
  }

  CreateUsers(e: any): Observable<any> {
    return this.http.post
    //return this.http.post
    (
      `${environment.hostname}/users`, e, this.HttpUploadOptions);
      //`http://localhost:3001/users`, e, this.HttpUploadOptions);
    }
}