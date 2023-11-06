import { Component } from '@angular/core';

// const polySample = [
//   { "lat": -34.5, "lng": -58.4 },
//   { lat: -34.5, lng: -59.4 },
//   { lat: -35.5, lng: -59.4 },
//   { lat: -35.5, lng: -58.4 }
// ]

// const polyPoints = new google.maps.LatLng({lat: 0, lng: 0}).toJSON();

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})


export class MapComponent {
  
  title = 'Google Maps';
  
  options = {
    mapTypeId: "satellite",
    streetViewControl: false,
    fullscreenControl: false,
  }
  bsAs = {
    lat: -34.6118,
    lng: -58.4173,
  }
  vic = {
    lat: -32.62014554060702,
    lng: -60.149028935272156
  }
  position = this.bsAs
  zoom = 8
}

// polygonPoints = polySample;

// centerVic() {
//   this.position = this.vic
//   this.zoom = 10
// }