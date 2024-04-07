import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Users } from 'src/app/interfaces/users.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  
  usersList = new Array<Users>();

  user = { 
    name: '',
    username: '',
    email: ''
  };

  constructor(private http: UsersService) { }

  ngOnInit(): void {
    this.http.GetUsers().subscribe(data => {
      for (let i = 0; i < data.length; i++) {
        this.usersList.push(data[i])
      }
    })
  }

  onSubmit(): void {
    this.http.CreateUsers(this.user).subscribe()
    window.location.reload()
  }

}
