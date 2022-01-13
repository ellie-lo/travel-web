import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { DataService } from 'src/app/data.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})

export class ArticlesComponent implements OnInit {
  articleID: string = '';
  getarticlecontent: any;
  closecontent: any;
  name:any='';

  /*Google Map*/
  center!: google.maps.LatLngLiteral;
  position!: any;
  type!:any;
  mapOptions: google.maps.MapOptions = {
    zoom: 18
  }
  constructor(private route: ActivatedRoute,private router: Router, private location: Location, private datasvc: DataService, private sanitizer: DomSanitizer) { }

  ngOnInit() {


    this.route.params.subscribe((value: any) => {
      // console.log(value.ID);
      this.articleID = value.ID;
      this.type=value.type;

      this.datasvc.getID(this.type,this.articleID).subscribe((data: any) => {
        // console.log(data);
        this.center = { lat: data.Position.PositionLat, lng: data.Position.PositionLon }
        this.position = { lat: data?.Position.PositionLat, lng: data.Position.PositionLon }
        this.getarticlecontent = data;
      });

      this.datasvc.getClose(this.type,this.articleID, 3).subscribe((items: any) => {
        this.closecontent = items;
      })
    });
  }

  /*判斷有沒有圖片*/
  getpicture(url: string) {
    if (!url) {
      return './assets/img/noimage.jpg';
    }
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  /*返回上一層*/
  goBack(): void {
    this.location.back();
  };
  /*列印此頁*/
  printpage() {
    window.print();
  };

  /*複製網址連結*/
  goShare(){
    // console.log(window.location.href); //當前網址頁
    navigator.clipboard.writeText(window.location.href).then(function() {
      alert("複製網址 copied successfully!")
    }, function(err) {
      alert('複製失敗 Failed to copy');
    });
  }

  getclose() {
    return this.closecontent;
  }

}

