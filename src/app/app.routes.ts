
import { Component } from '@angular/core';

import { Routes } from '@angular/router';
import { Componenttwo } from './componenttwo/componenttwo';
import { Homecomponent } from './homecomponent/homecomponent';
import { PageNotFound } from './page-not-found/page-not-found';
import { Footercomponent } from './footercomponent/footercomponent';
import { Logincomponent } from './logincomponent/logincomponent';
import { Signupcomponent } from './signupcomponent/signupcomponent';
import { Registercomponent } from './registercomponent/registercomponent';
import { ChangePassword } from './change-password/change-password';


export const routes: Routes = [
    {path: '', redirectTo:'home', pathMatch: 'full'},
    {path: 'home' , component:Homecomponent},
    {path: 'register' , component:Registercomponent},
    {path: 'login' , component:Logincomponent},
     {path: 'changepassword' , component:ChangePassword},
    {path: 'signup' , component:Signupcomponent},
    {path: 'componenttwo' , component:Componenttwo},
    {path: 'footer' , component:Footercomponent},
    {path: '**' , component:PageNotFound}
  

];
