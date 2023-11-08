import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recomendation',
  templateUrl: './recomendation.component.html',
  styleUrls: ['./recomendation.component.css']
})
export class RecomendationComponent {
  analizando: boolean = true
  vende: boolean = false
  ngOnInit(): void {
    setTimeout(() => {
      this.analizando = false;
      this.vende = true;
    }, 3000);
  }
}
