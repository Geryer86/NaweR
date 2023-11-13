import { Component } from '@angular/core';

@Component({
  selector: 'app-croprott',
  templateUrl: './croprott.component.html',
  styleUrls: ['./croprott.component.css']
})
export class CroprottComponent {
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
}
