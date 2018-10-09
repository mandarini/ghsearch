import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { SearchService } from "../search.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  users: Object;
  users$: Observable<Object>;

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
    this.router.navigate(["/search"], { queryParams: { q: name } });
  }
}
