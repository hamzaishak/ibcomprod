import { Component } from '@angular/core';

@Component({
  selector: 'app-header-style',
  templateUrl: './header-style.component.html',
  styleUrls: ['./header-style.component.scss']
})
export class HeaderStyleComponent {
  btn:boolean=false;
}

// document.addEventListener('scroll', ()=>{
//   const header=document.querySelector('header');
//   if(window.scrollY>0){
//     header.classList.add('scrolled');
//   } else{
//     header.classList.remove('scrolled');
//   }
// })

var navbar= document.querySelector('nav');
window.addEventListener('scroll', ()=>{
  if(window.screenY >50){
    navbar.classList.add('changedBg');
  } else {
    navbar.classList.remove('changedBg');
  }
});
 
