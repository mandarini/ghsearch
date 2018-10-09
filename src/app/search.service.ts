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

  users(name: string, page?: string, perpage?: string): Observable<Users> {
    // name = name.trim();
    console.log("searching now");
    let httpParams = new HttpParams().set("q", name);
    httpParams = page ? httpParams.append("page", page) : httpParams;
    httpParams = perpage
      ? httpParams.append("per_page", perpage)
      : httpParams;
    return this.http.get<Users>(this.searchUrl, { params: httpParams }).pipe(
      tap(users => console.log(users)),
      catchError(this.handleError<Users>('searchUsers'))
      );
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error('that is my error',error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
