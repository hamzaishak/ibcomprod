import { Component } from '@angular/core';

@Component({
  selector: 'app-header-style',
  templateUrl: './header-style.component.html',
  styleUrls: ['./header-style.component.scss']
})
export class HeaderStyleComponent {
}

document.addEventListener('scroll', ()=>{
  const header=document.querySelector('header');
  if(window.scrollY>0){
    header.classList.add('scrolled');
  } else{
    header.classList.remove('scrolled');
  }
})