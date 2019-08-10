import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = "http://localhost:3000/api"
  constructor(private http: HttpClient,private router:Router) { }
  

  navigate = () =>{
    if(this.getUser())
    {
      console.log("hii")
      this.router.navigate(['resturant'])
    }else{
      this.router.navigate(['login']);
    }
  }
  

  getUser = () =>{
    let user = JSON.parse(sessionStorage.getItem("ram"));
    if(user)
    {
     return user;
    }else{
      return null;
    }
  }






  ValidateUSer = (user) => {

    return this.http.post(this.url + '/user/validate', user);
  }

}

