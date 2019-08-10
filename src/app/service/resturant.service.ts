import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResturantService {

  getRestaurantUrl="https://developers.zomato.com/api/v2.1/search?lat=11.0168&lon=76.9558";
header=new HttpHeaders
  ({
         'user-key':"440dad94b6878f4c5c1071621eccca89",
  })

  constructor(private http:HttpClient) { }
  

  getResturantList():Observable<any>{
    return this.http.get<any>(this.getRestaurantUrl, {headers:this.header})
  }
}
