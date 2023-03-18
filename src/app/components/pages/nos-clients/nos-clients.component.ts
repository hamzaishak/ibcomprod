import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-nos-clients',
  templateUrl: './nos-clients.component.html',
  styleUrls: ['./nos-clients.component.scss']
})
export class NOSCLIENTSComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

// $(document).ready(function() {
//   $('.has-animation').each(function() {
//     $(this).delay($(this).data('delay')).queue(function(){
//       $(this).addClass('animate-in');
//     });
//   });
// });
