import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { User } from '../model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _auth:AuthService) { }

   user =new User()
   isSubmit=true

  ngOnInit() {
  }


  submitData = () =>{
    this._auth.ValidateUSer(this.user).subscribe(
      data =>{
        
  console.log(data)
      sessionStorage.setItem("ram",JSON.stringify(data[0]))
      this._auth.navigate()
      },
      err =>{
        console.log(err);
        alert("Pls Enter Correct email or password")
      }
    );
  }


}
