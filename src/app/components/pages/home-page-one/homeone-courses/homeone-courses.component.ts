import { Component, OnInit } from '@angular/core';
import { EACCES } from 'constants';
import { resolve } from 'dns';
import { promise } from 'protractor';
import {animate} from '@angular/animations';

@Component({
  selector: 'app-homeone-courses',
  templateUrl: './homeone-courses.component.html',
  styleUrls: ['./homeone-courses.component.scss']
})
export class HomeoneCoursesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

// const services= document.querySelectorAll('.single-courses-box');

// function handelVideos(){
//   const animPromise= new Promise((resolve) =>
//     animIn())
// }
// function animIn() {
//     anime({
//       targets: 'div',
//       translateX: function(){
//         return anim.random(-250,250);
//       },

//       translateY: function(){
//         return anim.random(-250,250);
//       },

//       translateZ: function(){
//         return anim.random(-250,250);
//       },
//       easing: easing: "easeOutCirc"
//       duration: 750

//     })
// }
  
  
    
