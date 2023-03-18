import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-développement-web',
  templateUrl: './développement-web.component.html',
  styleUrls: ['./développement-web.component.scss']
})
export class DéveloppementWebComponent implements OnInit {

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
