import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService:AuthService) { }

  user =new User();
  ngOnInit() {
  }

  RegisterUser=(user:any)=>
  { 
    this.authService.RegisterUser(this.user).subscribe(data=>{
console.log(data)
    },err=>{
      console.log(err)
    })
       
  }

}
