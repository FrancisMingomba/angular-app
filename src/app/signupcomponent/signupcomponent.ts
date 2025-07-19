import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'signupcomponent',
  imports: [ReactiveFormsModule],
  templateUrl: './signupcomponent.html',
  styleUrl: './signupcomponent.css'
})
export class Signupcomponent {
   
    form = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
  
    });

    get username() {
      return this.form.get('username');
    }

}

