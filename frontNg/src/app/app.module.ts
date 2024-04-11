import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { LandingComponent } from './pages/landing/landing.component';
import { HomeComponent } from './pages/home/home.component';
import { RecomendationComponent } from './pages/recomendation/recomendation.component';
import { HeaderComponent } from './components/header/header.component';
import { CreateFarmComponent } from './components/create-farm/create-farm.component';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    LandingComponent,
    HomeComponent,
    RecomendationComponent,
    HeaderComponent,
    CreateFarmComponent
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
