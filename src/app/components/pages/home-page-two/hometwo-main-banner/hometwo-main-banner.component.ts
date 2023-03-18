import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hometwo-main-banner',
  templateUrl: './hometwo-main-banner.component.html',
  styleUrls: ['./hometwo-main-banner.component.scss']
})
export class HometwoMainBannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
    isVideo : any = {};
    OnChange(){
        this.isVideo = !this.isVideo;
    }

    isVideo1 : any = {};
    OnChange1(){
        this.isVideo1 = !this.isVideo1;
    }

    isVideo2 : any = {};
    OnChange2(){
        this.isVideo2 = !this.isVideo2;
    }

    isVideoWeb : any = {};
    OnChangeWeb(){
        this.isVideoWeb = !this.isVideoWeb;
    }


}
