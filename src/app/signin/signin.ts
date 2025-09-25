import { Component } from '@angular/core';
import { Userservice } from 'app/services/userservice';
import { CommonModule,  } from '@angular/common';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PasswordValidators } from 'app/change-password/password.validators';
import { RouterOutlet, RouterLink } from '@angular/router';
import { passwordMismatchValidator } from 'app/shared/password-mismatch.directive';
//import { RegisterPostData } from 'app/interface/auth';
//import { Router } from 'express';
import { AuthService } from 'app/services/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  imports: [ReactiveFormsModule, CommonModule,RouterOutlet, RouterLink],
  templateUrl: './signin.html',
  styleUrl: './signin.css'
})
export class Signin {
  
    form: FormGroup;
   
         constructor(private formBuilder: FormBuilder, private router:Router, private service:AuthService) {
           this.form = this.formBuilder.group({
             email: ['',[ Validators.required, Validators.email]],
             password: ['', [Validators.required, Validators.minLength(6)]]
           });
       }
       
             get email() {
             return this.form.controls['email'];
           }
             get password() {
             return this.form.controls['password'];
           }
         
           
}
