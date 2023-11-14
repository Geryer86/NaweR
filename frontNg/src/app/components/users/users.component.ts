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

  constructor(private service: UsersService) { }

  ngOnInit(): void {
    this.service.GetUsers().subscribe(data => {
      for (let i = 0; i < data.length; i++) {
        this.usersList.push(data[i])
      }
      console.log(this.usersList)
    })
  }

}
