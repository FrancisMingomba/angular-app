import {  FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, inject } from '@angular/core';
import { PasswordValidators } from 'app/change-password/password.validators';
import { RegisterPostData } from 'app/interface/auth';
import { AuthService } from 'app/services/auth-service';


@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  private registerService = inject(AuthService);

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

  

}
