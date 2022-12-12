import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PuzzleComponent } from './puzzle/puzzle.component';
import { SliderComponent } from './slider/slider.component';
import { SplashComponent } from './splash/splash.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'splash', component: SplashComponent },
  { path: 'swiper', component: SliderComponent },
  { path: 'puzzle', component: PuzzleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
