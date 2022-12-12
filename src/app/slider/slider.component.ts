import { Component, OnInit } from '@angular/core';

declare var $:any;
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  
  gallery=[
    "../../assets/img1.jpg",
    "../../assets/img2.jpg",
    "../../assets/img3.jpg",
    "../../assets/img4.jpg",
    "../../assets/img1.jpg",
    "../../assets/img2.jpg",
    "../../assets/img3.jpg",
    "../../assets/img4.jpg",
    "../../assets/img1.jpg",
    "../../assets/img2.jpg",
    "../../assets/img3.jpg",
    "../../assets/img4.jpg",
  
  ]
  constructor() { 
  }

  ngOnInit(): void {

  }


}
