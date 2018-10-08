import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ghsearch';
  users: Object;

  constructor(private search: SearchService) { }

  ngOnInit() {
    // this.getUsers();
  }

  getUsers(): void {
    this.search.users('katerina', 3, 43)
    .subscribe(result => {
      this.users = result;
    });
  }
}
