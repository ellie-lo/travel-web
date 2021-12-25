import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CitydataService {

  constructor(private http: HttpClient) { }

  getScenicSpotCity(city:string,count:number,skip:number=0) {
    let url = `/ScenicSpot/${city}/city?top=${count}&skip=${skip}`;
    return this.http.get<Array<string>>(url)
  };

  getRestaurantCity(city:string,count:number,skip:number=0) {
    let url = `/Restaurant/${city}/city?top=${count}&skip=${skip}`;
    return this.http.get<Array<string>>(url)
  };

  getHotelCity(city:string,count:number,skip:number=0) {
    let url = `/Hotel/${city}/city?top=${count}&skip=${skip}`;
    return this.http.get<Array<string>>(url)
  };

  getActivityCity(city:string,count:number,skip:number=0) {
    let url = `/Activity/${city}/city?top=${count}&skip=${skip}`;
    return this.http.get<Array<string>>(url)
  };

}
