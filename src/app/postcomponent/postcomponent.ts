import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post-service';
import { error } from 'node:console';
import { AppError } from '../common/app-error';
import { NotFoundError, throwError } from 'rxjs';
import { BadInput } from '../common/bad-input';

@Component({
  selector: 'app-postcomponent',
  imports: [CommonModule],
  templateUrl: './postcomponent.html',
  styleUrl: './postcomponent.css'
})
export class Postcomponent implements OnInit {
  posts: any[] = [] ;
  HttpClient: any;


 constructor(private service: PostService) { }
  ngOnInit(): void {
   this.service.getAll()
    .subscribe(response => {
      this.posts = response as any[];
    });
  }

createPost(input: HTMLInputElement) {
    let post: { title: string; id?: number } = { title: input.value };
    this.posts.splice(0, 0, post);
    input.value = '';
  this.service.create(post) 
    .subscribe(response => {
      post.id = response.id;
    
    },
    ( error: AppError) => {
      this.posts.splice(0, 1);

      if (error instanceof BadInput ) {
       // this.form.setErrosrs();
      }
       else throw error;
         
      
      
    });
  }

  updatePost(post: { id: number; title: string }) {
   this.service.update(post)  
    .subscribe(response => {
    });
  }

  deletePost(post: { id: number }) {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);

     this.service.delete(post.id)
    .subscribe(null,
    (error: AppError) =>{
      this.posts.splice(index, 0, post)
      
      if (error instanceof NotFoundError) {
        alert('This post has already been deleted.');
      }
      else throw error;
    })
    ;
  }
}

  

