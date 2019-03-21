import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { WelcomeComponent } from "../welcome/welcome.component";
import {RegisterComponent} from "../authorization/register/register.component";
import {LoginComponent} from "../authorization/login/login.component";
import {TrainingComponent} from "../training/training.component";
import {AuthGuard} from "../authorization/auth.guard";

const  routes: Routes =[
  { path: '', component: WelcomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'training', component: TrainingComponent, canActivate: [AuthGuard] },

  ];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
