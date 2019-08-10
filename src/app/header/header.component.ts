import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _auth :AuthService) { }
  title:string
  isLogeedIn=false;
  ngOnInit() {
    this.title="LOGIN"
  }

    logout=async()=>{

     await sessionStorage.clear();
     this._auth.navigate();
  }

}
