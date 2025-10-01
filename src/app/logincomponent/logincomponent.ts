import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { User } from 'app/interface/auth';
import { Userservice } from 'app/services/userservice';
//import { Userservice } from 'app/userservice';
import { AuthService } from 'app/services/auth-service';

@Component({
  selector: 'logincomponent',
  imports: [RouterLink, CommonModule, ReactiveFormsModule ],
  templateUrl: './logincomponent.html',
  styleUrl: './logincomponent.css'
})
export class Logincomponent {
   private userService = inject(Userservice);

   invalidLogin = false;

   constructor(private router: Router, private authService: AuthService ) {}
  
  form = new FormGroup({
   
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(6)]),
   
  });
  get email() { return this.form.get('email'); }
  get password() { return this.form.get('password'); }
  
  onSubmit(){
    console.log(this.form.value);
    this.signin(this.form.value);
  }
  signin(credentials: any){
    this.authService.signin(credentials).subscribe((result: any)=>{
      if (result)
        this.router.navigate(['/']);
      else 
        this.invalidLogin = true;

    });
  }
  
  
  
  
 
  
}
