import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homeone-main-banner',
  templateUrl: './homeone-main-banner.component.html',
  styleUrls: ['./homeone-main-banner.component.scss']
})
export class HomeoneMainBannerComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }
  isVideo : any = {};
  OnChange(){
    this.isVideo = !this.isVideo;
  }
  
  isVideo1 : any = {};
  OnChange1(){
    this.isVideo1 = !this.isVideo1;
  }

  isVideo2 : any = {};
  OnChange2(){
    this.isVideo2 = !this.isVideo2;
  }

  isVideoWeb : any = {};
  OnChangeWeb(){
    this.isVideoWeb = !this.isVideoWeb;
  }
  
}

// document.addEventListener('click', click);

// function click(e) {
//   let el
  
//   el = e.target
  
//   if (el !== e.currentTarget) {
//     if(el.nodeName === 'BUTTON') {
      
//        if(el.classList.contains('is-active')) {
//          el.classList.remove('is-active')
//        } else {
//          el.classList.add('is-active')
//        }
//     }
//   }
//   event.stopPropagation()
// }

/*
!!!!!
This code is created to display element's behavior. I'm not a JS expert so don't use it
!!!!!
*/

  
  
