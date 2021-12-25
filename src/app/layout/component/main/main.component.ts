import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  EnSort = '';
  searchtitles: Array<any> = [
    { title: '熱門景點', entitle: 'ScenicSpot', datas: [] },
    { title: '觀光活動', entitle: 'Activity', datas: [] },
    { title: '美食品嚐', entitle: 'Restaurant', datas: [] },
    { title: '住宿推薦', entitle: 'Hotel', datas: [] }
  ];

  constructor(private datasvc: DataService) { }

  ngOnInit() {
    //----熱門景點----
    this.datasvc.getSort(this.searchtitles[0].entitle, 3,Math.floor(Math.random()*30)).subscribe((value: any) => {
      this.searchtitles[0].datas = value;
    });
    // ----觀光活動----
    this.datasvc.getSort(this.searchtitles[1].entitle, 3,Math.floor(Math.random()*30)).subscribe((value: any) => {
      this.searchtitles[1].datas = value;
    });
    // ----美食品嘗----
    this.datasvc.getSort(this.searchtitles[2].entitle, 3,Math.floor(Math.random()*30)).subscribe((value: any) => {
      this.searchtitles[2].datas = value;
    });
    // ----住宿推薦----
    this.datasvc.getSort(this.searchtitles[3].entitle, 3,Math.floor(Math.random()*30)).subscribe((value: any) => {
      this.searchtitles[3].datas = value;
    });

  }



}
