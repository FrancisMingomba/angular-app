
import { Component } from '@angular/core';

import { Routes } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Componenttwo } from './componenttwo/componenttwo';
import { Homecomponent } from './homecomponent/homecomponent';
import { Componentone } from './componentone/componentone';
import { PageNotFound } from './page-not-found/page-not-found';
import { Footercomponent } from './footercomponent/footercomponent';
//import { LoginComponent } from './login.login';

export const routes: Routes = [
    {path: '', redirectTo:'home', pathMatch: 'full'},
    {path: 'home' , component:Homecomponent},
    {path: 'componenttwo' , component:Componenttwo},
    {path: 'footer' , component:Footercomponent},
    {path: '**' , component:PageNotFound}

];
