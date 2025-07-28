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
   this.service.getPosts()
    .subscribe(response => {
      this.posts = response as any[];
    },error => {
      alert('An unexpected error occurred Francis.');
      console.error('Error fetching posts:', error);
    });
  }

createPost(input: HTMLInputElement) {
    let post: { title: string; id?: number } = { title: input.value };
    //let post = { title: input.value };
    input.value = '';
  this.service.createPost(post) 
    .subscribe(response => {
      post.id = response.id;
      this.posts.splice(0, 0, post);
    },( error: AppError) => {
      if (error instanceof BadInput ) {
       // this.form.setErrosrs();
      }
       else {
          alert('An unexpected error occurred Francis.');
          console.error('Error fetching posts:', error);
      }
      
    });
  }

  updatePost(post: { id: number; title: string }) {
   this.service.updatePost(post)  
    .subscribe(response => {
    }, (error: Response )=> {
      if (error.status === 400)
      alert('An unexpected error occurred Francis.');
      console.error('Error updating post:', error);
    });
  }

  deletePost(post: { id: number }) {
     this.service.deletePost(345)
    .subscribe(response => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    },
    (error: AppError) =>{
      if (error instanceof NotFoundError) {
        alert('This post has already been deleted.');
      }
      else
      alert('An unexpected error occurred Francis.');
      console.error('Error deleting post:', error);
    })
    ;
  }
}

  

