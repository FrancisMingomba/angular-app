import { Component, inject } from '@angular/core';
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
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signin',
  imports: [ReactiveFormsModule, CommonModule,RouterOutlet, RouterLink, ],
  templateUrl: './signin.html',
  styleUrl: './signin.css'
})
export class Signin {

  http = inject(HttpClient);
  private loginUrl = 'http://localhost:9090/auth/login';
  
    form: FormGroup;
 
    invalidLogin: boolean = false;
  
         constructor(private formBuilder: FormBuilder, private router:Router, private authService:AuthService) {
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


            signin(){
              debugger;
              const formValue = this.form.value;
              this.http.post( "https://angularbackend-production.up.railway.app/auth/login", formValue).subscribe({  
                next: (response:any) => {
                  console.log(response);
                  localStorage.setItem('token', response.token);
                  this.router.navigate(['/']);
                },
                error: (error) => {
                  debugger;
                  console.error('There was an error!', error);
                  this.invalidLogin = true;
                }
            })
  
          }   

          newSignin(){
            this.authService.newSignin().subscribe(result=>{
              if(result)
              this.router.navigate(['/footer']);
              else
              this.invalidLogin = true;
            });
          }
          
          onLogin() {
            debugger
            console.log(this.form.value);
          }
           
}
