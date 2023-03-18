import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-relations-presse-et-publiques',
  templateUrl: './relations-presse-et-publiques.component.html',
  styleUrls: ['./relations-presse-et-publiques.component.scss']
})
export class RELATIONSPRESSEETPUBLIQUESComponent implements OnInit {

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


const images = document.querySelectorAll("img");
const options = {
  threshold: 0.1
};

/* Demo purposes only */
$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);
