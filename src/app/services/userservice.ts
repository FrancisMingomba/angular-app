import { HttpClient } from '@angular/common/http';
//import { Post } from './post/post';
import { Injectable } from '@angular/core';
import { RegisterPostData } from 'app/interface/auth';
//import { RegisterPostData } from './interface/auth';

@Injectable({
  providedIn: 'root'
})
export class Userservice {
  private baseUrl = 'https://angularbackend-production.up.railway.app/users';

  constructor(private http: HttpClient) { }

 registerUser(postData: RegisterPostData) {
    return this.http.post(`${this.baseUrl}/register`, postData);

 }
}
