import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { environment } from 'src/environment';


@Injectable({
  providedIn: 'root'
})

export class UsersService {
  
  constructor(private service:HttpClient) { }

  GetUsers(): Observable<any> {
    //return this.service.get(`${environment.hostname}/users`)
    return this.service.get(` http://localhost:3001/users`)
  }
}
