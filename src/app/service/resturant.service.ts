import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TouchSequence } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class ResturantService {
  favoriteData:object;
  addFavouriteUrl="http://localhost:3000/api/user/resturant"
  addGettURl="http://localhost:3000/api/user/resturant"
  getRestaurantUrl="https://developers.zomato.com/api/v2.1/search?lat=11.0168&lon=76.9558";
header=new HttpHeaders
  ({
         'user-key':"440dad94b6878f4c5c1071621eccca89",
  })

  constructor(private http:HttpClient) { }
  
  temporary_array:any;
  getResturantList=()=>{
    return this.http.get<any>(this.getRestaurantUrl, {headers:this.header})
  }

  deleteRestaurant(id)
  {
    return this.http.get(`${this.addFavouriteUrl}/${id}`)
  }





    

  addFavourateItem=(restaurant:any)=>{
    this.favoriteData={};

    this.favoriteData['name']=restaurant.name;
    this.favoriteData['thumb']=restaurant.thumb;
    this.favoriteData['location']=restaurant.location;
    return this.http.post<any> (this.addFavouriteUrl ,this.favoriteData)
  }



  getFavourate():Observable<any>
  {
    return this.http.get(this.addGettURl,{headers:this.header})

  }






}
