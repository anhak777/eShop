import { Component, OnInit } from '@angular/core';

// import { Splide } from '@splidejs/splide';
// import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }
  

  // slides = [
  //   {img: "../../assets/img/Client-01.png"},   
  //   {img: "../../assets/img/Client-02.png"},   
  //   {img: "../../assets/img/Client-03.png"}   
  // ];
  // slideConfig = {"slidesToShow": 3, "slidesToScroll": 5};
  
  // addSlide() {
  //   this.slides.push({img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcEcr9uuCWFdee2VJ3IriGq8rNfgdh8JI1-A&usqp=CAU"})
  // }
  
  // removeSlide() {
  //   this.slides.length = this.slides.length - 1;
  // }

  ngOnInit(): void {
    // new Splide( '.splide' ).mount( { AutoScroll } );
  }

}
