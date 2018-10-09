import { Component, OnInit, Input } from "@angular/core";
import { Users } from "../users";
import { SearchService } from "../search.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-results",
  templateUrl: "./results.component.html",
  styleUrls: ["./results.component.css"]
})
export class ResultsComponent implements OnInit {
  @Input()
  results: Users;
  placeholder = "Search userss";
  users: Users;
  total_pages: number;
  current_page: number;
  query: string;
  error: boolean;

  constructor(
    private search: SearchService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.error = false;

    /***
     * The way I am implementing my search is this:
     * I want to see the query in the URL, along with any other
     * info, like the current page number,
     * in case these are passed as parameters.
     * That way, if my user refreshes the page, their state will not be
     * lost.
     *
     * To do that, I am using ActivatedRoute because I want to listen
     * to changes to the query parameters of my URL.
     *
     * The .queryParamMap is an Observable to which I subscribe and I can
     * have access to the query parameters.
     *
     * That way, whenever I want to search, I will just update my router
     * with my parameters, and then the search is going to be
     * triggered by my subscription to this Observable (which will detect
     * and load the changes).
     *
     */

    this.route.queryParamMap.subscribe(params => {
      if (params.has("q")) {
        this.query = params.get("q");
        this.current_page = params.has("page")
          ? parseInt(params.get("page"))
          : 1;
        this.doSearch(
          params.get("q"),
          params.has("page") ? params.get("page") : null
        );
      }
    });
  }

  ngOnInit() {}

  doSearch(name: string, page?: string, perpage?: string) {
    this.placeholder = name;
    this.search.users(name, page, perpage).subscribe(result => {
      console.log("thisis what i get", result);
      if (result) {
        this.users = result;

        /***
         * Here I am calculating the total number of pages.
         * I am doing this in order to use it for the pagination,
         * so as to display the correct number of pages at the bottom.
         *
         * I am dividing the total number of results with the results per page.
         * I want to round to the closest larger integer so I am using Math.ceil().
         * The reason for that is because if I round down, I will lose the last
         * few results.
         */
        this.total_pages = Math.ceil(
          result.total_count / (perpage ? parseInt(perpage) : 30)
        );
        this.error = false;
      } else {
        this.error = true;
      }
    });
  }

  /***
   * As described above, I just navigate my router to the place I want,
   * that is my current page (the root) with the parameters of my search!
   */

  onPage(page: number) {
    this.router.navigate(["/"], { queryParams: { q: this.query, page: page } });
  }

  /***
   * I do not need this information on my route, so I just call
   * the doSearch method directly!
   */

  onPerPage(perpage: number) {
    this.doSearch(this.query, "1", perpage.toString());
  }
}
