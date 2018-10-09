import { Component, OnInit, Input } from '@angular/core';
import { Users } from '../users';
import { SearchService } from '../search.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  @Input() results: Users;
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
    this.route.queryParamMap.subscribe(params => {
      console.log(params);
      if (params.has("q")) {
        this.query=params.get("q");
        this.current_page = params.has("page") ? parseInt(params.get("page")) : 1;
        this.doSearch(params.get("q"), params.has("page") ? params.get("page") : null);
      }
    });
  }

  ngOnInit() {
  }

  doSearch(name: string, page?: string, perpage?: string) {
    this.placeholder  = name;
    this.search.users(name, page, perpage).subscribe(result => {
      console.log('thisis what i get', result);
      if (result) {
        this.users = result; 
        this.total_pages =  Math.floor(result.total_count/(perpage ? parseInt(perpage) : 30));  
        this.error = false;
      } else {
        this.error = true;
      }
    });
  }
  onPage(page: number) {
    this.router.navigate(["/"],  { queryParams: { q: this.query , page: page} })
  }

  onPerPage(perpage: number) {
    this.doSearch(this.query, '1', perpage.toString());
  }
}
