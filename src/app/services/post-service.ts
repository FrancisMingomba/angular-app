import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import './rxjs/add/operator/catchError';
import { catchError } from 'rxjs/operators';
import { NotFoundError } from 'rxjs';
import { AppError } from '../common/app-error';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostService {
   private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts() {
     return this.http.get(this.url);
  } 

  createPost(post: { title: string }) {
     return this.http.post<{ id: number }>(this.url, JSON.stringify(post));
  }

  updatePost(post: { id: number; title: string }) {
     return this.http.patch(this.url + '/' + post.id, JSON.stringify(post));
  } 

   deletePost(id: number) {
     return this.http.delete(this.url + '/' + id).pipe(
          catchError((error: Response) => {
            if (error.status === 404) 
               return throwError(() => new AppError(NotFoundError));
             return   throwError(() => new AppError(error));
          }));
     }
   }