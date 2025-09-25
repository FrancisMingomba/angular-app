import { AuthService } from 'app/services/auth-service';
import { Userservice } from 'app/services/userservice';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from '../interface/auth';
//import { Router } from 'express';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { PasswordValidators } from './password.validator';

@Component({
  selector: 'app-create',
  imports: [ReactiveFormsModule,CommonModule, RouterOutlet, RouterLink],
  templateUrl: './create.html',
  styleUrl: './create.css'
})
export class Create {

    form: FormGroup;
  
  
  constructor(fb: FormBuilder, private AuthService: AuthService, private router: Router) {
    this.form = fb.group({
      name: ['', Validators.required],
      email: ['',  [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    }, {
      validator: PasswordValidators.passwordsShouldMatch
    } );

  }

    get name() { return this.form.controls['name'];}
    get email() {return this.form.controls['email'];}
    get password() { return this.form.controls['password'];}
    get confirmPassword() { return this.form.controls['confirmPassword'];}
  

  

  onSignup(){
    this.AuthService.register(this.form.value).subscribe(res=>{
      alert('User Registered Successfully');
      this.router.navigate(['/signin']);
    },
    err=>{
      alert('Something went wrong');
    }
    );
    debugger

    
  }
























































































































































































  /*
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private Userservice: Userservice,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      const newUser: User = this.registerForm.value;
      this.Userservice.createUser(newUser).subscribe({
        next: (user) => {
          console.log('User created successfully:', user);
          this.router.navigate(['/login']); // Redirect to login page
        },
        error: (err) => {
          console.error('Error creating user:', err);
          // Handle error, e.g., display an error message to the user
        }
      });
    } else {
      // Form is invalid, display validation errors
      console.log('Form is invalid');
    }
  }
    */
}
