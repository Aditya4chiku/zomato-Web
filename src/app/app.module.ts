import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';


import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AuthService } from './service/auth.service';
import { HomeComponent } from './home/home.component';
import { ResturantCardComponent } from './resturant-card/resturant-card.component';
import { ResturantListComponent } from './resturant-list/resturant-list.component';
import { FooterComponent } from './footer/footer.component';
import { FavourateComponent } from './favourate/favourate.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    UserDashboardComponent,
    HomeComponent,
    ResturantCardComponent,
    ResturantListComponent,
    FooterComponent,
    FavourateComponent,
    RegisterComponent,

   
 
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]

})
export class AppModule { }
