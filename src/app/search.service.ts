import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

import { Observable, of } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { Users } from "./users";

@Injectable({
  providedIn: "root"
})
export class SearchService {
  private searchUrl = "https://api.github.com/search/users";

  constructor(private http: HttpClient) {}

  users(name: string, page?: number, perpage?: number): Observable<Users> {
    // name = name.trim();
    console.log("searching now");
    let httpParams = new HttpParams().set("q", name);
    httpParams = page ? httpParams.append("page", page.toString()) : httpParams;
    httpParams = perpage
      ? httpParams.append("per_page", perpage.toString())
      : httpParams;
    return this.http.get<Users>(this.searchUrl, { params: httpParams }).pipe(
      tap(users => console.log(users)),
      catchError(this.handleError<Users>('searchHeroes'))
      );
  }

  private handleError<T>(operation = "operation", result?: T) {
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
