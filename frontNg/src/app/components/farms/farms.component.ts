import { Component, OnInit } from '@angular/core';
import { FarmsService } from 'src/app/services/farms.service';
import { Farms } from 'src/app/interfaces/farms.interface';

@Component({
  selector: 'app-farms',
  templateUrl: './farms.component.html',
  styleUrls: ['./farms.component.css']
})

export class FarmsComponent implements OnInit {

  farmsList = new Array<Farms>();

  constructor(private service: FarmsService) { }

  ngOnInit(): void {
    this.service.GetFarms().subscribe(data => {
      for (let i = 0; i < data.length; i++) {
        this.farmsList.push(data[i])
      }
      console.log(this.farmsList)
    })
  }

}
