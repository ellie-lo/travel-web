import { element } from 'protractor';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatDrawer, MatDrawerMode } from '@angular/material/sidenav';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})


export class LayoutComponent implements OnInit {
  // @ViewChild('dropdown',{static:true})dropdown!:ElementRef<HTMLDivElement>
  CityName = '目的地'
  isActive = false;
  isactive = false;
  activebtn = false;
  sideopen: boolean = true;
  mode: MatDrawerMode = 'side';
  places: Array<string> = [
    '臺北市',
    '新北市',
    '桃園市',
    '臺中市',
    '臺南市',
    '高雄市',
    '基隆市',
    '新竹市',
    '新竹縣',
    '苗栗縣',
    '彰化縣',
    '南投縣',
    '雲林縣',
    '嘉義縣',
    '嘉義市',
    '屏東縣',
    '宜蘭縣',
    '花蓮縣',
    '臺東縣',
    '金門縣',
    '澎湖縣',
    '連江縣',
  ];

  classItems: Array<any> = [
    { 'zh': '熱門景點', 'en': 'ScenicSpot' },
    { 'zh': '美食品嚐', 'en': 'Restaurant' },
    { 'zh': '住宿推薦', 'en': 'Hotel' },
    { 'zh': '觀光活動', 'en': 'Activity' }
  ]

  dataset: any = { 'city': '', 'select': '' };
  dataTextset: any = { 'type': 'ScenicSpot', 'select': '' };

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.target.innerWidth < 1200) {
      this.sideopen = false;
    } else {
      this.sideopen = true;
      this.mode = 'side';
    }
  }

  toggleClick(sideNav: MatDrawer) {
    sideNav.toggle()
    this.mode = 'over';
  }
  constructor(private router: Router) { }

  ngOnInit() {

    let form: any = document.getElementById('form');
    form.addEventListener('focusin', (event: any) => {
      event.target.style.fontWeight = '500';
    })
    form.addEventListener('focusout', (event: any) => {
      event.target.style.fontWeight = '';
    });
  }

  refresh() {
    this.router.navigate(['/main'])
      .then(() => {
        window.location.reload();
      });
  }
  openDrop(e: Event) {
    this.isActive = !this.isActive;
    e.stopPropagation();
  }

  closeDrop(e: Event) {
    this.isActive = false;
  }

  searchText(value: string) {
    this.dataTextset.select = value;
    console.log(this.dataTextset.select);
    if (this.dataTextset.select == '') {
      alert('請輸入關鍵字');
    }
    this.router.navigate(['place', `${this.dataTextset.type}`, this.dataTextset.select]);
  }

  activepalce(place: string) {
    this.CityName = place;
    this.dataset.city = this.CityName
    this.isActive = false;
  }
  getitem(value: any) {
    this.dataset.select = value;
  }


  getcontent(dataset: any) {
    if (dataset.city == '') {
      alert('請選擇一個縣市地點')
    } else if (dataset.select == '') {
      alert('請選擇一種主題')
    }
    //['path',/:name]
    this.router.navigate([`${dataset.select}`, dataset.city]);

  }

}
