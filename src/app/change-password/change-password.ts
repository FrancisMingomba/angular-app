import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { PasswordValidators } from './password.validators';

@Component({
  selector: 'change-password',
  imports: [ReactiveFormsModule, CommonModule, ],
  templateUrl: './change-password.html',
  styleUrl: './change-password.css'
})
export class ChangePassword {
  form: FormGroup;
  
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      oldPassword: ['',  Validators.required, PasswordValidators.validOldPassword],
      newPassword: ['',  Validators.required],
      confirmPassword: ['',  Validators.required]
    }, {validator: PasswordValidators.passwordsShouldMatch});

  }

  get oldPassword() { return this.form.get('oldPassword'); }
  get newPassword() { return this.form.get('newPassword'); }
  get confirmPassword() { return this.form.get('confirmPassword'); }
  

}
