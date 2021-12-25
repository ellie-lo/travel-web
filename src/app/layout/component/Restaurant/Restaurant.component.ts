import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CitydataService } from 'src/app/citydata.service';
import { LoadingService } from 'src/app/loading.service';

@Component({
  selector: 'app-Restaurant',
  templateUrl: './Restaurant.component.html',
  styleUrls: ['./Restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {
  placeName: string = '';
  datavalue: Array<any> = [];
  cityName = '';
  EncityName='';
  index: number = 1;
  prev: number = 9;
  MaxPage: number = 0;
  prevArray: Array<number> = [];
  loading$ = this.loader.loading$;
  city: Array<any> = [
    { placeName: '臺北市', enplaceName: 'Taipei' },
    { placeName: '新北市', enplaceName: 'NewTaipei' },
    { placeName: '桃園市', enplaceName: 'Taoyuan' },
    { placeName: '臺中市', enplaceName: 'Taichung' },
    { placeName: '臺南市', enplaceName: 'Tainan' },
    { placeName: '高雄市', enplaceName: 'Kaohsiung' },
    { placeName: '基隆市', enplaceName: 'Keelung' },
    { placeName: '新竹市', enplaceName: 'Hsinchu' },
    { placeName: '新竹縣', enplaceName: 'HsinchuCounty' },
    { placeName: '苗栗縣', enplaceName: 'MiaoliCounty' },
    { placeName: '彰化縣', enplaceName: 'ChanghuaCounty' },
    { placeName: '南投縣', enplaceName: 'NantouCounty' },
    { placeName: '雲林縣', enplaceName: 'YunlinCounty' },
    { placeName: '嘉義縣', enplaceName: 'ChiayiCounty' },
    { placeName: '嘉義市', enplaceName: 'Chiayi' },
    { placeName: '屏東縣', enplaceName: 'PingtungCounty' },
    { placeName: '宜蘭縣', enplaceName: 'YilanCounty' },
    { placeName: '花蓮縣', enplaceName: 'HualienCounty' },
    { placeName: '臺東縣', enplaceName: 'TaitungCounty' },
    { placeName: '金門縣', enplaceName: 'KinmenCounty' },
    { placeName: '澎湖縣', enplaceName: 'PenghuCounty' },
    { placeName: '連江縣', enplaceName: 'LienchiangCounty' },
  ]

  constructor(private route:ActivatedRoute, private datacity: CitydataService,public loader: LoadingService) { }

  ngOnInit() {
    this.route.params.subscribe((data: any) => {
      this.city.filter((x) => {
        if (data.name === x.placeName) {
          this.cityName = data.name;
          this.EncityName = x.enplaceName;
        }
      });
      this.datacity.getRestaurantCity(this.EncityName, 0).subscribe((value: any) => {
        this.datavalue = value.slice(0,9);
        this.MaxPage = Math.ceil(value.length / this.prev);
        this.prevArray = this.getPrev(this.index, this.MaxPage);
      });
    });
  }

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
    this.datacity.getRestaurantCity(this.EncityName, 9, (this.index - 1) * 9).subscribe((value: any) => {
      console.log(value);
      this.datavalue = value;
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

  Restaurant() {
    return this.datavalue;
  }

}
