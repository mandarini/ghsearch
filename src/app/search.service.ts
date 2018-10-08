import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
 
  private searchUrl = 'https://api.github.com/search/users';

  constructor(private http: HttpClient) { }

  users (name: string, page?: number, perpage?: number): Observable<Object> {
    console.log('searching now');
    return this.http.get<Object>(`${this.searchUrl}?q=${name}&page=${page}&per_page=${perpage}`)
      .pipe(
        tap(users => console.log(users)),
        catchError(this.handleError('search users', {}))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
}
}
