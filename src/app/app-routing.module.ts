import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { HomeComponent } from './home/home.component';
import { ResturantListComponent } from './resturant-list/resturant-list.component';
import { FavourateComponent } from './favourate/favourate.component';
import { RegisterComponent } from './register/register.component';



const routes: Routes = [
  {
    path:' ',redirectTo:'login',pathMatch:'full'
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'register',component:RegisterComponent
  },
  
  {
    path:'favourate' ,component:FavourateComponent
  
  },
  {
    path:'user',component:UserDashboardComponent
  },
  {
    path:'resturant',component:ResturantListComponent
  },
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule 
{ }
