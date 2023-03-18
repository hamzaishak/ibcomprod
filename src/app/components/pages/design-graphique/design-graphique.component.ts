import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-design-graphique',
  templateUrl: './design-graphique.component.html',
  styleUrls: ['./design-graphique.component.scss']
})
export class DESIGNGRAPHIQUEComponent implements OnInit {

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
