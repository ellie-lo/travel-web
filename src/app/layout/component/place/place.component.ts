import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { innerSubscribe } from 'rxjs/internal/innerSubscribe';
import { DataService } from 'src/app/data.service';
import { LoadingService } from 'src/app/loading.service';


@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss']
})
export class PlaceComponent implements OnInit {
  strokeWidth = 5;
  keyword: string = '';
  EnSort = '';
  EnChange = '';
  index: number = 1;
  prev: number = 9;
  MaxPage: number = 1;
  prevArray: Array<any> = [];
  data$!: any;
  filterdata = '';
  loading$ = this.loader.loading$;
  searchtitles: Array<any> = [
    { title: '景點', entitle: 'ScenicSpot', icon: 'terrain', datas: [] },
    { title: '活動', entitle: 'Activity', icon: 'local_activity', datas: [] },
    { title: '美食', entitle: 'Restaurant', icon: 'fastfood', datas: [] },
    { title: '住宿', entitle: 'Hotel', icon: 'hotel', datas: [] }
  ];


  constructor(private route: ActivatedRoute, private datasvc: DataService, private router: Router, public loader: LoadingService) { }

  ngOnInit() {
    /*從layout帶過來的route，/type/keyword */
    this.route.params.subscribe((data: any) => {
      console.log(data);//{type: 'Restaurant', text: '海'}
      this.keyword = data.text;
      this.EnSort = data.type;
      for (let i in this.searchtitles) {
        if (this.EnSort == this.searchtitles[i].title) {
          this.EnSort = this.searchtitles[i].entitle;
        }
      }

      /*取得景點、美食、住宿、活動的api資料 */
      this.datasvc.getSort(this.EnSort, 300).subscribe((value: any) => {
        for (let i in this.searchtitles) {
          if (this.EnSort == this.searchtitles[i].entitle) {
            this.searchtitles[i].datas = value;
          }
        }
      });

      /*使用pipe*/
      // this.data$=this.datasvc.getSort(this.EnSort, 200);


    });
  };


  change(value: string) {
    console.log(value);
    this.EnChange = value;
    this.router.navigate(['place', `${this.EnChange}`, this.keyword]);

  };




  getSelectData() {
    for (let x in this.searchtitles) {
      if (this.EnSort == this.searchtitles[x].entitle) {
        return this.searchtitles[x].datas.filter((item: any) => {
          return item.Name.indexOf(this.keyword) !== -1;
        });
      };
    };
  };



}
