import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { NotFoundError, pipe } from 'rxjs';
import { AppError } from '../common/app-error';
import { throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(@Inject(String) private url: string, private http: HttpClient) { }

  getAll() {
    
     return this.http.get(this.url);
     
  } 

  create(resource: any) {
     return this.http.post<{ id: number }>(this.url, JSON.stringify(resource));
  }

  update(resource: any) {
     return this.http.patch(this.url + '/' + resource.id, JSON.stringify(resource));
  } 

   delete(id: number) {
     return this.http.delete(this.url + '/' + id)
    
     }

     registerUser(resource:any) {
         return this.http.post(this.url, JSON.stringify(resource));
     }

    private handleError() {
      pipe(
          catchError((error: Response) => {
            if (error.status === 404) 
                return throwError(() => new AppError(NotFoundError));
             return   throwError(() => new AppError(error));
          }));
    }

   }

   