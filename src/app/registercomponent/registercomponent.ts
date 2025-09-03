import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-registercomponent',
  imports: [ReactiveFormsModule, CommonModule, RouterOutlet, RouterLink ],
  templateUrl: './registercomponent.html',
  styleUrl: './registercomponent.css'
})
export class Registercomponent {
   private url: string = 'https://angularbackend-production.up.railway.app/users';
  posts: any[] | undefined;


   constructor(private http: HttpClient) {
      http.get(this.url)
      .subscribe(response => {
       // this.createUser = response.json();
          //this.posts = Object.values(response);
        console.log(response)
      })
   }

  form = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
  
  });

   login() {
    this.form.setErrors({
       invalidLogin: true });
  }

  createUser(input: HTMLInputElement) {
    let post = { title: input.value};

    this.http.post(this.url, JSON.stringify(post))
      .subscribe(response => {
         this.posts = Object.values(response);
      });


  }

}
