import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interface/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 // private baseUrl = 'https://angularbackend-production.up.railway.app/users';
  private baseUrl = 'http://localhost:9090/users/register';
  constructor(private http: HttpClient) { }

  registerUser(postData: User) {
    return this.http.post('https://angularbackend-production.up.railway.app/users', postData);
  }

  getAll(){
    return this.http.get(this.baseUrl);
  }

  Proceedregister(inputdata: any){
    return this.http.post(this.baseUrl, inputdata);
  }
}
