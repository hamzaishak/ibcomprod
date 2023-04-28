import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-production-audiovisuelle',
  templateUrl: './production-audiovisuelle.component.html',
  styleUrls: ['./production-audiovisuelle.component.scss']
})
export class ProductionAudiovisuelleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

// $(document).ready(function() {
//   $('.has-animation').each(function(index) {
//     $(this).delay($(this).data('delay')).queue(function(){
//       $(this).addClass('animate-in');
//     });
//   });
// });

// /* Demo purposes only */
// $(".hover").mouseleave(
//   function () {
//     $(this).removeClass("hover");
//   }
// );
