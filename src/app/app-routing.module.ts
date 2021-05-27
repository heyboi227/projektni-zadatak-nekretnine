import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddadvertComponent } from './addadvert/addadvert.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RealEstateViewComponent } from './real-estate-view/real-estate-view.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'view', component: RealEstateViewComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'addadvert', component: AddadvertComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [CommonModule, RouterModule]
})
export class AppRoutingModule { }
