import { Component, OnInit, Input, Output } from '@angular/core';
import { ResturantService } from '../service/resturant.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-resturant-card',
  templateUrl: './resturant-card.component.html',
  styleUrls: ['./resturant-card.component.css']
})
export class ResturantCardComponent implements OnInit {
  @Input() resturant: any

  @Output () addFovourate=new EventEmitter
  constructor(private _restaurantService: ResturantService) { }




  addFavorite = () => {
    this._restaurantService.addFavourateItem(this.resturant).subscribe(
      data => {
        console.log(data)
      }
      ,
      err => {
        console.log(err);
      }

    )
  }

  ngOnInit() {
  }

}
