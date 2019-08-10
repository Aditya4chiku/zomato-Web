import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { HomeComponent } from './home/home.component';
import { ResturantListComponent } from './resturant-list/resturant-list.component';



const routes: Routes = [
  {
    path:' ',redirectTo:'login',pathMatch:'full'
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'user',component:UserDashboardComponent
  },
  {
    path:'resturant',component:ResturantListComponent
  },
  
  {
    path:'home' ,component:HomeComponent
  
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule 
{ }
