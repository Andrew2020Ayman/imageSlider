import { Component, OnInit,HostListener } from '@angular/core';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';

declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  owl:boolean = true;
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.owl = false;
    setTimeout(() => {
      this.owl = true;

      this.firstTime = true; 
      var FirstImg = document.getElementsByClassName('img-0');
     
      
      while(FirstImg.length > 0 && this.firstTime){
          
            $(`.img-0`).addClass('customAnimtation');
            setTimeout(() => {
              $(`.img-0`).removeClass('customAnimtation');
        
            }, 6000);
            this.firstTime = false;
      }

    }, 10);
  }

  activeSlides?: SlidesOutputData;
  firstTime=true;
 
  
  getPassedData(data: SlidesOutputData) {

    this.activeSlides = data;
   
   let activeSlide = this?.activeSlides?.startPosition;
  
  /*  $(`#img-${activeSlide}`).css("animation-name","myMove");
   $(`#img-${activeSlide}`).css("animation-duration","4s"); */

   
    $(`.img-${activeSlide}`).addClass('customAnimtation');

    setTimeout(() => {
      $(`.img-${activeSlide}`).removeClass('customAnimtation');

/*    $(`#img-${activeSlide}`).css("animation-name","");
      $(`#img-${activeSlide}`).css("animation-duration",""); */
    }, 6000);
   
  }

  
  slidesStore = [
    {
      id:'0',
      src:"../../assets/img1.jpg"
    },
    {
      id:'1',
      src:"../../assets/img2.jpg"
    },
    {
      id:'2',
      src:"../../assets/img3.jpg"
    },
    {
      id:'3',
      src:"../../assets/img4.jpg"
    }
    
    
  ]
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoplay:true,
    /* autoplayTimeout: 5000, */
    autoplaySpeed:2000,
    autoplayHoverPause: false,
    animateOut: 'fadeOut',
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    }
  }

  constructor() {
   
   }

  
  ngOnInit(): void {
    
    this.customOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: false,
      pullDrag: false,
      dots: false,
      autoplay:true,
      /* autoplayTimeout: 5000, */
      autoplaySpeed:2000,
      autoplayHoverPause: false,
      animateOut: 'fadeOut',
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 1
        },
        740: {
          items: 1
        },
        940: {
          items: 1
        }
      }
    }
    
  }

  ngAfterViewInit(): void{
    
    this.firstTime = true; 
    var FirstImg = document.getElementsByClassName('img-0');
    console.log(FirstImg);
    
    while(FirstImg.length > 0 && this.firstTime){
        
          $(`.img-0`).addClass('customAnimtation');
          setTimeout(() => {
            $(`.img-0`).removeClass('customAnimtation');
      
          }, 6000);
          this.firstTime = false;
    }
  }
}
