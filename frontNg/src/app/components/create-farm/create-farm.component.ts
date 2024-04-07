import { Component } from '@angular/core';
import { FarmsService } from 'src/app/services/farms.service';

@Component({
  selector: 'app-create-farm',
  templateUrl: './create-farm.component.html',
  styleUrls: ['./create-farm.component.css']
})
export class CreateFarmComponent {

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

  constructor(private http: FarmsService) { }
  
  crops = [
    'Cultivo',
    'Soja 1°',
    'Soja 2°',
    'Trigo largo',
    'Trigo corto',
    'Girasol',
    'Maíz 1°',
    'Maíz 2°',
    'Gramíneas',
    'Leguminosas',
    'Barbecho',
    'Ganadería'
  ]

  classes = [
    "I (Agrícola)",
    "II (Agrícola)",
    "III (Agrícola)",
    "IV (Agrícola-Ganadero)",
    "V (Ganadero)",
    "VI (Ganadero)",
    "VII (Ganadero Pasto natural)",
    "VIII (Ganadero Pasto natural)"
  ]

  // classes = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"]

  slope = [
    "0 - 2",
    "2 - 4",
    "4 - 7",
    "+ 7"
  ]

  weeding = [
    "0 - 25",
    "25 - 50",
    "50 - 75",
    "+ 75"
  ]

  lvls = [
    "Baja",
    "Media",
    "Alta"
  ]

  onSubmit(): void {
    this.http.CreateFarms(this.farm).subscribe(() => {
      window.location.reload();
    })
  } 
}
