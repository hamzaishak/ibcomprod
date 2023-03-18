import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-événementiel',
  templateUrl: './événementiel.component.html',
  styleUrls: ['./événementiel.component.scss']
})
export class ÉVÉNEMENTIELComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

$(document).ready(function() {
  $('.has-animation').each(function(index) {
    $(this).delay($(this).data('delay')).queue(function(){
      $(this).addClass('animate-in');
    });
  });
});
