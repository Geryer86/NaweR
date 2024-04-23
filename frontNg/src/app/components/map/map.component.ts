import { Component } from '@angular/core';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})


export class MapComponent {

  mainData = {
    name: '',
    ubication: '',
    area: ''
  }
  options = {
    mapTypeId: "satellite",
    streetViewControl: false,
    fullscreenControl: false,
  }
  centerPos = {
    lat: 20,
    lng: -30
  }
  bsAs = {
    lat: -34.6118,
    lng: -58.4173,
  }
  vic = {
    lat: -32.62014554060702,
    lng: -60.149028935272156
  }
  nordIt = {
    lat: 45,
    lng: 10
  }
  position = this.nordIt
  zoom = 4
}