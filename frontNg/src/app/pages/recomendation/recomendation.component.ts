import { Component, OnInit } from '@angular/core';
import { RecService } from 'src/app/services/rec.service';

@Component({
  selector: 'app-recomendation',
  templateUrl: './recomendation.component.html',
  styleUrls: ['./recomendation.component.css']
})

export class RecomendationComponent {

  farm = {
    name: "",
    area: 0,
    ubication: "",
    class_: "",
    slope: "",
    rainfall: 0,
    rainfallb: 0,
    weeding: "",
    compactation: "",
    erosion: ""
  }

  constructor(private http: RecService) { }

  loading: boolean = true
  vende: boolean = false
  ngOnInit(): void {
    this.http.CreateRec(this.farm).subscribe(() => {
      window.location.reload();
    })
  }
}
