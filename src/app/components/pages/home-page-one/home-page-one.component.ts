import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page-one',
  templateUrl: './home-page-one.component.html',
  styleUrls: ['./home-page-one.component.scss']
})


export class HomePageOneComponent implements OnInit {
  [x: string]: any;

  constructor() { }

  ngOnInit(): void {
  }

 
  
}

// var myIndex = 0;
// carousel();

// function carousel(): void {
//   var i: number;
//   //var x = document.getElementsByClassName("mySlides");
//   let shand = document.getElementsByClassName('mySlides') as HTMLCollectionOf<HTMLElement>;
//   for (i = 0; i < shand.length; i++) {
//     shand[i].style.display = "none";  
//   }
//   myIndex++;
//   if (myIndex > shand.length) {myIndex = 1}    
//   shand[myIndex-1].style.display = "block";  
//   setTimeout(carousel, 9000);    
// }