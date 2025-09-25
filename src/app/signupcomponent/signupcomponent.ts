import { Userservice } from 'app/services/userservice';
import { CommonModule, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators, ValidatorFn, FormControlOptions } from '@angular/forms';
import { PasswordValidators } from 'app/change-password/password.validators';
import { RouterOutlet, RouterLink } from '@angular/router';
import { passwordMismatchValidator } from 'app/shared/password-mismatch.directive';
//import { RegisterPostData } from 'app/interface/auth';
//import { Router } from 'express';
import { AuthService } from 'app/services/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'signupcomponent',
  imports: [ReactiveFormsModule, CommonModule,RouterOutlet, RouterLink],
  templateUrl: './signupcomponent.html',
  styleUrl: './signupcomponent.css'
})
export class Signupcomponent {

  


 form: FormGroup;
 /* 
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['',  Validators.required]
    }, {
      validator: PasswordValidators.passwordsShouldMatch} as FormControlOptions);

  }

  get name() { return this.form.get('name'); }
  get email() { return this.form.get('email'); }
  get password() { return this.form.get('password'); }
   get confirmPassword() { return this.form.get('confirmPassword'); }
  

*/
 //form: FormGroup;
 // Userservice: any;

      constructor(private formBuilder: FormBuilder, private router:Router, private service:AuthService) {
        this.form = this.formBuilder.group({
          name: ['', Validators.required],
          email: ['',[ Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]],
          confirmPassword: ['',[Validators.required, Validators.minLength(6)]]
         
        }, {
          Validators: passwordMismatchValidator
      });
    }
    
        get name() {
          return this.form.controls['name'];
        }

          get email() {
          return this.form.controls['email'];
        }
          get password() {
          return this.form.controls['password'];
        }
          get confirmPassword() {
          return this.form.controls['confirmPassword'];
        }

/*

  onRegister() {
  const postData = {...this.form.value}
  delete postData.confirmPassword;
   this.Userservice.registerUser(postData as RegisterPostData).subscribe({
      next: (response: any) => {
        console.log(response);
      },
    error: (err: any) => {
      console.log(err);
     },
  });
   
  }
  
  /*

  onSubmit(){
    if(this.form.valid) {
      const newUser = this.form.value;
      this.Userservice.createUser(newUser).subscribe(
        (response: any) => {
          console.log("Successful", response);
        },
        (error: any) => {
          console.log("Error");
        }
      );
    }

  }
  */

  proceedregister() {
    if(this.form.valid) {
      this.service.Proceedregister(this.form.value).subscribe(res => {
        this.router.navigate(['login'])
      })

    } else {
      console.log("Error")

    }
  }





















  
}

  















































