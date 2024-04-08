import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class FarmsService {

  constructor(private http:HttpClient) { }

  HttpUploadOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      'Content-Type': 'application/json'
    })
  }

  GetFarms(): Observable<any> {
    return this.http.get(`${environment.hostname}/farms`)
  }

  CreateFarms(e: any): Observable<any> {
    return this.http.post(
      `${environment.hostname}/farms`, e, this.HttpUploadOptions);
  }

}
