import { Component, Input, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-sectioncard',
  templateUrl: './sectioncard.component.html',
  styleUrls: ['./sectioncard.component.scss']
})
export class SectioncardComponent implements OnInit {
  @Input() data: Array<any> = [];
  @Input() type!:any;
  path:string='';
  constructor(private router: Router) { }

  ngOnInit() {
  }

  test(url:string){
    if(!url)return `url('./assets/img/people.png')`;
    return `url(${url})`;
  }

  getPostPage(item:any){
    this.router.navigate(['articles',this.type, item.ID]);
  }
}
