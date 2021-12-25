import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';
@Component({
  selector: 'app-searchmore',
  templateUrl: './searchmore.component.html',
  styleUrls: ['./searchmore.component.scss']
})
export class SearchmoreComponent implements OnInit {
  searchtitle: string = '';
  EnSort = '';
  index: number = 1;
  prev: number = 9;
  MaxPage: number = 1;
  prevArray: Array<number> = [];
  datavalue: Array<string> = [];
  searchtitles: Array<any> = [
    { title: '熱門景點', entitle: 'ScenicSpot', datas: [] },
    { title: '觀光活動', entitle: 'Activity', datas: [] },
    { title: '美食品嚐', entitle: 'Restaurant', datas: [] },
    { title: '住宿推薦', entitle: 'Hotel', datas: [] }
  ];
  constructor(private route: ActivatedRoute, private datasvc: DataService) { }

  ngOnInit() {

    this.route.params.subscribe((data: any) => {
      // console.log(data);
      this.searchtitle = data.name;
      for (let i in this.searchtitles) {
        if (this.searchtitle == this.searchtitles[i].title) {
          this.EnSort=this.searchtitles[i].entitle;
        }
      }
    });

    /*取得景點、美食、住宿、活動的api資料*/
    this.datasvc.getSort(this.EnSort, 9).subscribe((value: any) => {
      for (let i in this.searchtitles) {
        if (this.EnSort == this.searchtitles[i].entitle) {
          this.searchtitles[i].datas=value;
        }
      }
    });
    /*取得景點、美食、住宿、活動的總篇數*/
    this.datasvc.getCount(this.EnSort).subscribe((value: any) => {
      this.MaxPage = Math.ceil(value / this.prev)
      this.prevArray = this.getPrev(this.index, this.MaxPage);
    })
  };


  /*分頁按鈕*/
  getPrev(index: any, LastPage: any) {
    let ArrayPrev = [];
    for (let i = index - 2; i < index + 3; i++) {
      if (i > 0 && i <= LastPage) {
        ArrayPrev.push(i)
      }
    };
    if (ArrayPrev.indexOf(1) == -1) { ArrayPrev.push(1); };
    if (ArrayPrev.indexOf(LastPage) == -1) { ArrayPrev.push(LastPage); };
    ArrayPrev.sort(function (a, b) {
      return a - b;
    });
    return ArrayPrev;
  }

  /*當前頁面*/
  checkPrev(page: number) {
    this.index = page;
    this.prevArray = this.getPrev(this.index, this.MaxPage);
    this.datasvc.getSort(this.EnSort,9, (this.index - 1) * 9).subscribe((value: any) => {
      for (let i in this.searchtitles) {
        if (this.EnSort == this.searchtitles[i].entitle) {
          this.searchtitles[i].datas=value;
        }
      }
    });
  }
  /*上一頁*/
  checkFrontPage() {
    this.checkPrev(this.index - 1);
  }
  /*下一頁*/
  checkBackPage() {
    this.checkPrev(this.index + 1);
  }

  /*取得Sectioncard*/
  getDataCard(){
    for(let x in this.searchtitles){
     if(this.searchtitle==this.searchtitles[x].title)
       return this.searchtitles[x].datas;
    }
   };
};
