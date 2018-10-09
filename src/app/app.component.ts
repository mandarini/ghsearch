import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  didSearch = false;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.queryParamMap.subscribe(params => {
      params.has("q") ? this.didSearch = true : this.didSearch = false;
    });
  }

  ngOnInit() {}

  onSearch(name: string) {
    this.didSearch = true;
    this.router.navigate(["/"], { queryParams: { q: name } });
  }

  clear() {
    this.didSearch = false;
    this.router.navigate(["/"]);
  }
}
