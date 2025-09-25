
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
import { Postcomponent } from './postcomponent/postcomponent';
import { Usernamepasswordreset } from './usernamepasswordreset/usernamepasswordreset';
import { Register } from './register/register';
import { Inprogresscomponent } from './inprogresscomponent/inprogresscomponent';
import { Create } from './create/create';
import { Login } from './login/login';
import { Signin } from './signin/signin';




export const routes: Routes = [
    {path: '', redirectTo:'home', pathMatch: 'full'},
    {path: 'home' , component:Homecomponent},
    //{path: 'login' , component:Logincomponent},
    {path: 'changepassword' , component:ChangePassword},
    {path: 'componenttwo' , component:Componenttwo},
    {path: 'footer' , component:Footercomponent},
    {path: 'post' , component:Postcomponent},
    {path: 'reset' , component:Usernamepasswordreset},
    {path: 'inprogress', component:Inprogresscomponent},
    {path: 'register', component:Signupcomponent},
    {path: 'create', component:Create},
    //{path: 'loginX', component:Logincomponent},
    {path: 'signin', component: Signin},
    {path: '**' , component:PageNotFound}
  

];
