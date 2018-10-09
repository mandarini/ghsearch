import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: "app-searchbox",
  templateUrl: "./searchbox.component.html",
  styleUrls: ["./searchbox.component.css"]
})
export class SearchboxComponent {

  @Output() searched = new EventEmitter<string>();
  @Input() didSearch: boolean; 

  search(name: string) {
    this.searched.emit(name);
  }

  constructor() {}
}
