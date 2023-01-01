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

/* import {DragDropModule} from '@angular/cdk/drag-drop'; */
import { ReOrderAyatComponent } from './re-order-ayat/re-order-ayat.component';
import {DragDropModule} from '@angular/cdk/drag-drop';

import { NgxWheelModule } from 'ngx-wheel';
import { DataService } from './data.service';
import { WheelComponent } from './wheel/wheel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SplashComponent,
    SliderComponent,
    PuzzleComponent,
    ReOrderAyatComponent,
    WheelComponent
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
    DragDropModule,
    NgxWheelModule
    
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
