import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-marketing-digital',
  templateUrl: './marketing-digital.component.html',
  styleUrls: ['./marketing-digital.component.scss']
})
export class MarketingDigitalComponent implements OnInit {

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

