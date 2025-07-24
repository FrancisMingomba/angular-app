import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-postcomponent',
  imports: [CommonModule],
  templateUrl: './postcomponent.html',
  styleUrl: './postcomponent.css'
})
export class Postcomponent  {
  posts: any[] = [] ;
  private url = 'https://jsonplaceholder.typicode.com/posts';

 constructor(private http: HttpClient) {
  this.http.get<{ id: number; title: string }[]>(this.url)
    .subscribe(response => {
      this.posts = response;
    });
  
  }

createPost(input: HTMLInputElement) {
    let post: { title: string; id?: number } = { title: input.value };
    input.value = '';
    this.http.post<{ id: number }>(this.url, JSON.stringify({ title: post.title }))
    .subscribe(response => {
      post.id = response.id;
      this.posts.splice(0, 0, post);
    });
  }

  updatePost(post: { id: number; title: string }) {
    this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }))
    .subscribe(response => {
    });
  }
  deletePost(post: { id: number }) {
    this.http.delete(this.url + '/' + post.id)
    .subscribe(response => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    });
  }
}

  

