import {  FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, inject } from '@angular/core';
import { PasswordValidators } from 'app/change-password/password.validators';
import { RegisterPostData } from 'app/interface/auth';
import { AuthService } from 'app/services/auth-service';
import { HttpClient } from '@angular/common/http';
import { error } from 'console';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Userservice } from 'app/services/userservice';
import { response } from 'express';
//import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  private userService = inject(Userservice);

form = new FormGroup({
  name: new FormControl("", [Validators.required]),
  email: new FormControl("", [Validators.required, Validators.email]),
  password: new FormControl("", [Validators.required, Validators.minLength(6)]),
  confirmPassword: new FormControl("", [Validators.required, Validators.minLength(6)])
});
name: FormControl<any> | undefined;



 register(){
  const formValue = this.form.value;
  debugger;

  const postData = {...this.form.value};
  delete postData.confirmPassword;
  this.userService.registerUser(postData as RegisterPostData).subscribe({
    next: (response) => {
      console.log(response);
    },
    error: (error) => {
      console.log(error);
    },
  });
 }

  //private registerService = inject(AuthService);
 // http = inject(HttpClient);

//userObj: any ={
  ////"name": "",
//  "email": "",
//  "password": "",
//  "confirmPassword": ""
//};
/*
onRegister() {
  debugger;
  this.http.post("https://angularbackend-production.up.railway.app/users/register", this.userObj).subscribe((res:any) => {
    debugger;
      if (res.result) {
        alert("User Registered Success")
      }else {
        alert(res.message)
      }
  },error =>{
      alert("Network ErrorR")
  })

}






/*
[x: string]: any;
  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)] ),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),

  },  {
    validators: PasswordValidators.passwordsShouldMatch
  }); 

  onRegister() {
    const postData = {...this.registerForm.value};
    delete postData.confirmPassword;
    this['registerUser'](postData as RegisterPostData).subscribe({
        next: (response: any) => {
          console.log(response)
        },
        error: (err: any) => {
          console.log(err);
        },
      });
  }

  get name() {
    return this.registerForm.controls['name'];
  }
    get email() {
    return this.registerForm.controls['email'];
  }
    get password() {
    return this.registerForm.controls['password'];
  }
    get confirmPassword() {
    return this.registerForm.controls['confirmPassword'];
  }

  
*/
}
