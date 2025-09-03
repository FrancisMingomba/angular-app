import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterPostData } from '../interface/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'https://angularbackend-production.up.railway.app/users'
  constructor(private http: HttpClient) { }

  registerUser(postData: RegisterPostData) {
    return this.http.post('https://angularbackend-production.up.railway.app/users', postData);
  }
}
