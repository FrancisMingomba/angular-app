import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { response } from 'express';

@Component({
  selector: 'app-post',
  imports: [],
  templateUrl: './post.html',
  styleUrl: './post.css'
})
export class Post {
 posts: any[] = [];
  post: any;
  private url = 'https://angularbackend-production.up.railway.app/users';
  

  constructor(http: HttpClient) {
    http.get(this.url)
    .subscribe(response => {
      this.posts = Object.values(response);
      
    });
  }

  createUser(input: HTMLInputElement) {
    let post = { }
    
  }
}
