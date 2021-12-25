import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  /*ScenicSpot api*/

  getSort(sort:any='',count: number,skip:number=0) {
    let url = `/${sort}?top=${count}&skip=${skip}`;
    return this.http.get<Array<string>>(url)
  }


  getCount(sort:any='') {
    let url = `/${sort}/count`;
    return this.http.get<Array<string>>(url)
  }


  getID(sort:any,ID: string) {
    let url = `/${sort}/${ID}`;
    return this.http.get<Array<string>>(url)
  }
  //鄰近
  getClose(sort:any,ID: string,count:number) {
    let url = `/${sort}/${ID}/close?top=${count}`;
    return this.http.get<Array<string>>(url)
  }


  /*Activity api*/

// getActivity(count: number) {
  //   let url = `/MOTC/v2/Tourism/Activity?$top=${count}&$format=JSON`;
  //   return this.http.get<Array<string>>(url)
  // }

  /*Restaurant api*/

// getRestaurant(count: number) {
  //   let url = `/MOTC/v2/Tourism/Restaurant?$top=${count}&$format=JSON`;
  //   return this.http.get<Array<any>>(url)
  // }

  /*Hotel api*/

  // getHotel(count: number) {
  //   let url = `/MOTC/v2/Tourism/Hotel?$top=${count}&$format=JSON`;
  //   return this.http.get<Array<any>>(url)
  // }




}


