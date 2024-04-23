import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { HomeComponent } from './pages/home/home.component';
import { RecomendationComponent } from './pages/recomendation/recomendation.component';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'home', component: HomeComponent},
  { path: 'recom', component: RecomendationComponent},
];

const routerOptions: ExtraOptions = {
  anchorScrolling: "enabled",
  scrollPositionRestoration: 'enabled'
}

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
