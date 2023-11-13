import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recomendation',
  templateUrl: './recomendation.component.html',
  styleUrls: ['./recomendation.component.css']
})
export class RecomendationComponent {
  loading: boolean = true
  vende: boolean = false
  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
      this.vende = true;
    }, 3000);
  }
}
