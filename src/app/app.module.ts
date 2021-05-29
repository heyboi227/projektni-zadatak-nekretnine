import { LOCALE_ID, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RealEstateViewComponent } from './real-estate-view/real-estate-view.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AddadvertComponent } from './addadvert/addadvert.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchEstatesComponent } from './search-estates/search-estates.component';
import { RealEstateComponent } from './real-estate/real-estate.component';
import { UserService } from './user.service';
import { RealEstateService } from './real-estate.service';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    RealEstateViewComponent,
    SignupComponent,
    LoginComponent,
    AddadvertComponent,
    ProfileComponent,
    SearchEstatesComponent,
    RealEstateComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [UserService, RealEstateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
