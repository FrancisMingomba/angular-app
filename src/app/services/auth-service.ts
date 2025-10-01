import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interface/auth';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'https://angularbackend-production.up.railway.app/users/register';
  //private baseUrl = 'http://localhost:9090/users/register';
  private loginUrl = 'http://localhost:9090/auth/login';
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
  register(user: any) { 
    return this.http.post(`{this.baseUrl/register}`, user);
  }

  signin(credentials: any) {
  return this.http.post(`{this.loginUrl}`, credentials);

  }
  newSignin() {
    return this.http.post(`{this.loginUrl/signin}`, null).pipe(
      map((res: any) => {
        const result = res && res.token;
        if (result && result.token) {
          localStorage.setItem('token', result);
          return true;
      }
        return false;
      }));
  }
}
