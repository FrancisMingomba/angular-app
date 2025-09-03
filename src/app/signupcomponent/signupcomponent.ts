import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormControlOptions, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PasswordValidators } from 'app/change-password/password.validators';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'signupcomponent',
  imports: [ReactiveFormsModule, RouterOutlet],
  templateUrl: './signupcomponent.html',
  styleUrl: './signupcomponent.css'
})
export class Signupcomponent {
   
 form: FormGroup;

   constructor(fb: FormBuilder) {
     this.form = fb.group({
       emali: ['',
           Validators.required,
           Validators.email
         ],
       password: ['',  Validators.required],
       confirmPassword: ['',  Validators.required]
     }, {
       validator: PasswordValidators.passwordsShouldMatch} as FormControlOptions);
 
   }
 
   get oldPassword() { return this.form.get('oldPassword'); }
   get newPassword() { return this.form.get('newPassword'); }
   get confirmPassword() { return this.form.get('confirmPassword'); }   


}

