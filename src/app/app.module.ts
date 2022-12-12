import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarouselModule } from 'ngx-owl-carousel-o';
import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { SplashComponent } from './splash/splash.component';

import { SliderComponent } from './slider/slider.component';

import { TooltipModule} from 'ngx-bootstrap/tooltip';

import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { PuzzleComponent } from './puzzle/puzzle.component';

import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SplashComponent,
    SliderComponent,
    PuzzleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    CarouselModule,
    BrowserAnimationsModule,
    TooltipModule.forRoot(),
    MdbCheckboxModule,
    MdbCarouselModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
