import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { AgrapComponent } from './components/agrap/agrap.component';
import { LandingComponent } from './pages/landing/landing.component';
import { HomeComponent } from './pages/home/home.component';
import { FieldsttComponent } from './components/fieldstt/fieldstt.component';
import { CroprottComponent } from './components/croprott/croprott.component';
import { RecomendationComponent } from './pages/recomendation/recomendation.component';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    AgrapComponent,
    LandingComponent,
    HomeComponent,
    FieldsttComponent,
    CroprottComponent,
    RecomendationComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    GoogleMapsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
