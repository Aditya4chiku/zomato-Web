import { Component, OnInit } from '@angular/core';
import { ResturantService } from '../service/resturant.service';
import { Resturant } from '../model/resturant.model';

@Component({
  selector: 'app-resturant-list',
  templateUrl: './resturant-list.component.html',
  styleUrls: ['./resturant-list.component.css']
})
export class ResturantListComponent implements OnInit {

  constructor(private _resturantService:ResturantService) { }
resturantList:any

   
  ngOnInit() {
    this.getResturant()
  }

getResturant():void 
{
  this._resturantService.getResturantList().subscribe(list=>{
    this.resturantList=list.restaurants
    console.log(this.resturantList)
  })
}

}
