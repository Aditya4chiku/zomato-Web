import { Component, OnInit, Input } from '@angular/core';
import { ResturantService } from '../service/resturant.service';

@Component({
  selector: 'app-favourate',
  templateUrl: './favourate.component.html',
  styleUrls: ['./favourate.component.css']
})
export class FavourateComponent implements OnInit {


  constructor(private _restaurantService:ResturantService) { }
restaurnat:any
restaurants:any;



  ngOnInit() {
   this.GetFavourate()
   
   // this._restaurantService.getTempory().subscribe(data=>{
     // this.restaurnat=data

    //})
  }

  deleteItem(id:any)
  {
       this._restaurantService.deleteRestaurant(id).subscribe(res=>{
       console.log(res)
       })
  }

  GetFavourate()
  {
    this._restaurantService.getFavourate().subscribe(data=>{
    this.restaurnat=data
    console.log(this.restaurnat)
    })
  }


}
