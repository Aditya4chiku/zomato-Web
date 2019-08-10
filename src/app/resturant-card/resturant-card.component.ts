import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-resturant-card',
  templateUrl: './resturant-card.component.html',
  styleUrls: ['./resturant-card.component.css']
})
export class ResturantCardComponent implements OnInit {
@Input() resturant:any
  constructor() { }

  ngOnInit() {
  }

}
