import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { SearchService } from "./search.service";
import { Observable } from "rxjs";
import { Users } from "./users";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent  {
  title = "ghsearch";
  users: Users;

  constructor(
    private search: SearchService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.queryParamMap.subscribe(params => {
      console.log(params);
      if (params.has("q")) {
        this.doSearch(params.get("q"));
      }
    });
  }

  ngOnInit() {}

  doSearch(name: string, page?: number, perpage?: number) {
    this.search.users(name, page, perpage).subscribe(result => {
      this.users = result;
    });
  }

  onSearch(name: string) {
    this.router.navigate(["/"], { queryParams: { q: name } });
  }

}
