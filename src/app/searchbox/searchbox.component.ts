import { Component, EventEmitter, Output } from '@angular/core';

import { SearchService } from "../search.service";

@Component({
  selector: "app-searchbox",
  templateUrl: "./searchbox.component.html",
  styleUrls: ["./searchbox.component.css"]
})
export class SearchboxComponent {
  users: Object;

  @Output() searched = new EventEmitter<string>();
 
  search(name: string) {
    this.searched.emit(name);
  }

  constructor(private searchService: SearchService) {}

  onKey(event: any, name: string) {
    if (event.keyCode === 13) {
      this.search(name);
    }
  }
}
