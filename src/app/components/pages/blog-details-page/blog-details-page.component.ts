import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-details-page',
  templateUrl: './blog-details-page.component.html',
  styleUrls: ['./blog-details-page.component.scss'],
  
})
export class BlogDetailsPageComponent implements OnInit {
  @Input() titre: string;
  constructor() { }

  ngOnInit(): void {
  }
  
  
  

}


