import { Component } from '@angular/core';

@Component({
  selector: 'app-header-style',
  templateUrl: './header-style.component.html',
  styleUrls: ['./header-style.component.scss']
})
export class HeaderStyleComponent {

}

const nav=document.querySelector('.header');
window.addEventListener('scroll',()=>{
  if (window.screenY > 100){
    nav.classList.add('scroll');
  }
});