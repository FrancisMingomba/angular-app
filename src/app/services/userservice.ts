import { HttpClient } from '@angular/common/http';
//import { Post } from './post/post';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
//import { RegisterPostData } from 'app/interface/auth';
import { response } from 'express';
//import { RegisterPostData } from './interface/auth';
import { Observable } from 'rxjs';
import { User } from '../interface/auth';

@Injectable({
  providedIn: 'root'
})
export class Userservice {
private baseUrl = 'https://angularbackend-production.up.railway.app';
  // private baseUrl = 'http://localhost:9090';


  constructor(private http: HttpClient) { }

 registerUser(postData: User) {
    return this.http.post(`${this.baseUrl}/users/register`, postData);

 }

  createPost(form: FormGroup) {
  let post = {data: form.value}
  
  this.http.post(this.baseUrl, JSON.stringify(post))
  .subscribe(response => {
    console.log(response);
  })

 }
 
  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.baseUrl, user);
  }
}
