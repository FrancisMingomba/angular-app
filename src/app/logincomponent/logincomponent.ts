import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { User } from 'app/interface/auth';
import { Userservice } from 'app/services/userservice';
//import { Userservice } from 'app/userservice';

@Component({
  selector: 'logincomponent',
  imports: [RouterLink, CommonModule, ReactiveFormsModule ],
  templateUrl: './logincomponent.html',
  styleUrl: './logincomponent.css'
})
export class Logincomponent {
   private userService = inject(Userservice);
  
  form = new FormGroup({
    name: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl("", [Validators.required, Validators.minLength(6)])
  });
  
  
  
  
 
  
}
